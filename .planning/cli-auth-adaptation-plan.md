# xuanyuku-cli 认证适配计划（对接后端 P0-P3 安全加固）

> 背景：主仓 2026-07-09 上线认证安全加固（commit 5b811eca…5636ee74）：
> 登录限流(10/min/IP)、账户锁定(5 次错密码锁 15 分钟)、Refresh Token 轮换、
> API Key/PAT(`egtk_` 前缀、`x-api-key` header)、密码复杂度策略、审计全覆盖。
> 本 CLI 从 `Eggturtle-breeding-library/.claude/skills/eggturtle-cli` 迁移而来，
> 主仓内嵌版已在 T472 完成 API Key 接线，可直接移植。

## 当前状态与核心风险

| 现状 | 新体系下的问题 |
|------|---------------|
| 仅密码登录，profile 存 accessToken | 无法利用 API Key / refresh token |
| 401 时用 `XUANYUKU_CLI_PASSWORD` 或交互密码**自动重登**（`client/context.ts reloginAndRetry`） | ⚠️ **P0 风险**：env 密码配错时自动重登连续撞错密码，5 次触发账户锁定（AUTH_ACCOUNT_LOCKED，锁 15 分钟）；高频调用还会吃 429 |
| `packages/shared` 是 @eggturtle/shared 的旧拷贝 | 缺 refreshToken 字段、refresh/logout/createApiKey schema、AuthAccountLocked 错误码、新审计 action |
| 无 429/锁定错误的友好处理 | 报错不可读，脚本盲目重试会加重限流 |

## 目标凭证模型（优先级从高到低）

```
1. API Key（自动化/长期凭证，推荐默认）→ x-api-key header，无锁定/轮换负担
2. accessToken + refreshToken（交互式登录）→ 401 时先走 /auth/refresh 轮换续期
3. 密码重登（兜底，仅交互式）→ 只允许交互输入，失败一次即停，绝不循环重试
```

---

## C0 shared 包同步（前置，所有阶段依赖）

从主仓 `packages/shared/src/` 同步以下文件到 `packages/shared/src/`（包名保持 @xuanyuku/shared）：

- `auth.ts`：refreshToken 可选字段、`refreshTokenRequestSchema/refreshTokenResponseSchema/logoutRequestSchema`、`createApiKeyRequestSchema`、`authPasswordLoginSchema/authPasswordPolicySchema` 拆分
- `error-codes.ts`：`AuthAccountLocked: 'AUTH_ACCOUNT_LOCKED'`
- `audit.ts`：新增 auth/api_key action（CLI 若展示审计日志需要）
- `index.ts`：对应导出

验证：`pnpm -r build` 零错误。

## C1 API Key 支持（P0，直接移植主仓 T472 改动）

主仓参考 commit：`d38eeb70` + `d35e7cdd`（eggturtle-cli 部分，文件一一对应）。

| 文件 | 改动 |
|------|------|
| `client/http.ts` | `RequestOptions` 加 `apiKey?: string`；headers 加 `x-api-key` |
| `client/profile-store.ts` | `Profile` 加 `apiKey?/apiKeyId?` |
| `commands/auth.ts` | `login --api-key <key>` 保存到 profile（不换 token） |
| `client/context.ts` | 请求构建时 `profile.apiKey` 优先于 accessToken；**apiKey 模式下 401 不走 reloginAndRetry，直接报「API Key 无效或已撤销」** |

新增 `commands/apikey.ts`（主仓没有，需新写，包一层 `/me/api-keys`）：

```
xuanyuku apikey create --name <name> [--expires-days N]   # 打印明文 key（仅一次）+ 提示保存
xuanyuku apikey list                                       # id/name/前缀/lastUsedAt/expiresAt
xuanyuku apikey revoke <id>
```

> 创建 apikey 需要 Bearer token（先密码登录一次），创建后建议把 key 写入 profile 作为长期凭证。

验证：
```bash
xuanyuku login --login <账号>                # 密码登录
xuanyuku apikey create --name "ops-cli"      # 拿到 egtk_...
xuanyuku login --api-key egtk_... --profile ops
xuanyuku --profile ops whoami                # 走 x-api-key，返回用户信息
xuanyuku apikey revoke <id> && xuanyuku --profile ops whoami   # 期望：明确报 key 已撤销，不进重登
```

## C2 Refresh Token 续期（P1，交互式登录体验）

| 文件 | 改动 |
|------|------|
| `client/profile-store.ts` | `Profile` 加 `refreshToken?: string` |
| `client/auth.ts` | `passwordLogin` 返回值透传 `refreshToken`；新增 `refreshAccessToken(apiBase, refreshToken)` 调 `POST /auth/refresh` |
| `commands/auth.ts` | login 成功后把 refreshToken 一并存 profile；新增 `xuanyuku logout [--profile]`：调 `POST /auth/logout` 带 refreshToken 撤销，再删本地 profile token |
| `client/context.ts` | `reloginAndRetry` 改造为三级：①有 apiKey → 不重试直接报错；②有 refreshToken → 调 /auth/refresh，**成功后必须立刻持久化新 accessToken+新 refreshToken（轮换！旧的已被后端撤销）**，重试原请求；③都没有 → 现有密码路径（见 C3 护栏） |

> 轮换持久化是关键坑：refresh 成功但写 profile 失败/进程中断，会导致本地 refreshToken 已失效，下次只能退回密码登录。写文件要在重试请求**之前**完成。

验证：登录后手动改坏 profile 里的 accessToken → 执行任意命令 → 应静默 refresh 成功并完成命令；连续两次（验证轮换后新 token 可用）；`xuanyuku logout` 后 refresh token 应失效。

## C3 错误体验与防锁定护栏（P1，和 C2 同批实施）

| 场景 | 处理 |
|------|------|
| HTTP 429 | 明确报「触发限流，请 N 秒后重试」（读 Retry-After 或固定提示 60s）；**不自动重试** |
| `AUTH_ACCOUNT_LOCKED` | 直接透出后端 message（含剩余分钟数），提示不要重复尝试 |
| 密码重登路径 | ①只在 TTY 交互下允许（非 TTY/CI 环境直接报错让用户配 API Key）；②**只尝试一次**，失败即停并提示剩余风险（「连续 5 次错误将锁定账户」）；③`XUANYUKU_CLI_PASSWORD` 标记弃用警告，引导迁移 API Key |
| `client/errors.ts` | `describeError` 补 AUTH_ACCOUNT_LOCKED / 429 的中文文案 |

## C4 收尾（P2，可选）

- README 更新：凭证模型说明、API Key 快速上手、CI 环境用法（`--api-key` / `XUANYUKU_API_KEY` env 支持可顺带加）
- 弃用计划：下个版本移除 `XUANYUKU_CLI_PASSWORD` 自动重登

## 实施顺序与工作量

```
C0 shared 同步（半小时，机械拷贝+build）
 └→ C1 API Key（1-2 小时，大部分从主仓 d38eeb70/d35e7cdd 移植 + 新写 apikey 命令）
     └→ C2 refresh 续期 + C3 护栏（2-3 小时，context.ts 重登逻辑重构是核心）
         └→ C4 文档（半小时）
```

一次 PR/一个任务批次可全部完成（T478）。

## 风险

| 风险 | 缓解 |
|------|------|
| shared 拷贝与主仓漂移 | 本次全量同步三个文件；长期考虑脚本化 diff 提醒（超出本计划） |
| refresh 轮换竞态（并发跑多个 CLI 进程共用 profile） | 后端旧 token 撤销即失效；文档注明并发场景请用 API Key |
| 旧 profile 无 refreshToken 字段 | 字段可选，行为退回密码路径，重新 login 一次即升级 |
