# xuanyuku-cli

选育溯源平台 CLI 工具，用于运营管理操作。

## 结构

```
packages/
  cli/        # CLI 命令行工具 (@xuanyuku/cli)
  shared/     # 共享类型和 Zod schemas (@xuanyuku/shared)
```

## 快速开始

```bash
pnpm install
pnpm build
```

## 使用

```bash
npx xuanyuku --help
```

## AI 助理技能分发

`skills/` 目录随 CLI 一起打进 tgz 分发包（`node scripts/pack-cli.mjs`），用户装完 CLI 后一条命令即可装好技能：

```bash
npm i -g https://xuanyuku.cn/cli/xuanyuku-cli-latest.tgz
xuanyuku skill install          # 安装全部内置技能到 ~/.claude/skills/
xuanyuku skill list             # 查看包内技能
xuanyuku skill install xuanyuku-pet-assistant --target <目录>   # 指定技能/目录
```

### 用户接入话术（拿到 API Key 后发给任意 AI Agent）

用户在小程序/后台拿到 API Key 后，把下面这段话原样发给任何能执行命令的 AI Agent（Claude Code、WorkBuddy 等均可），Agent 即可自动完成 CLI 安装、技能安装和登录：

```text
请帮我接入蛋龟选育库，按顺序执行：
1. 安装命令行工具：npm i -g https://xuanyuku.cn/cli/xuanyuku-cli-latest.tgz
   （如果上面地址不通，改用：npm i -g https://raw.githubusercontent.com/GalaxyXieyu/xuanyuku-cli/main/releases/xuanyuku-cli-latest.tgz）
2. 安装店铺助理技能：xuanyuku skill install
3. 用我的 Key 登录：xuanyuku login --api-key <我的Key>
4. 登录成功后运行 xuanyuku whoami 确认身份，然后告诉我接入完成，不要在回复里复述我的 Key。

我的 Key 是：<粘贴你的 API Key>
```

说明：

- 第 2 步会把 `xuanyuku-pet-assistant` 技能装到 `~/.claude/skills/`，重启 Agent 会话后即可用大白话让助理干活（建档、查销量、生成分享二维码等）。
- Key 以 `egtk_` 开头；泄露后可在后台 `xuanyuku apikey revoke` 撤销重发。

## 认证与凭证模型

后端已上线认证安全加固（登录限流、账户锁定、Refresh Token 轮换、API Key、密码复杂度策略）。
CLI 按优先级支持三种凭证，**自动化场景强烈建议用 API Key**：

| 优先级 | 凭证 | 说明 |
|-------|------|------|
| 1 | **API Key**（推荐默认） | 走 `x-api-key` header，无锁定/轮换负担；401 时**不会**自动重登，直接报「key 无效/已撤销」 |
| 2 | accessToken + refreshToken | 交互式登录；401 时先走 `/auth/refresh` 轮换续期，成功后自动重试 |
| 3 | 密码重登（兜底） | 仅 TTY 交互下允许，**只尝试一次**，失败即停；非 TTY/CI 直接报错引导改用 API Key |

### API Key 快速上手（推荐用于 CI / 自动化）

```bash
# 1. 先用账号密码登录一次（创建 key 需要 Bearer 身份）
xuanyuku login --login <账号>

# 2. 创建 API Key（明文仅显示一次，请立即保存）
xuanyuku apikey create --name "ops-cli"                 # 永不过期
xuanyuku apikey create --name "ci" --expires-days 90     # 90 天后过期
xuanyuku apikey create --name "ci" --save-profile ops    # 创建并直接存入 profile

# 3. 用 API Key 保存为长期凭证
xuanyuku login --api-key egtk_xxx --profile ops

# 4. 之后所有命令走 x-api-key
xuanyuku --profile ops whoami

# 管理
xuanyuku apikey list
xuanyuku apikey revoke <id>
```

### 交互式登录与登出

```bash
xuanyuku login --login <账号>     # 密码登录，自动保存 refresh token
xuanyuku logout                    # 撤销 refresh token 并清除本地凭证
```

### 错误处理约定

- **HTTP 429（限流）**：明确提示「请 N 秒后重试」，**不自动重试**，避免加重限流。
- **AUTH_ACCOUNT_LOCKED（账户锁定）**：透出后端剩余锁定时间，请勿重复尝试（连续 5 次错误锁号 15 分钟）。
- `XUANYUKU_CLI_PASSWORD` 自动重登**已弃用**：仅 TTY 下可用且会打弃用警告，下个版本将移除，请迁移到 API Key。

### 环境变量

| 变量 | 说明 |
|------|------|
| `XUANYUKU_CLI_API_BASE_URL` | API base 地址 |
| `XUANYUKU_CLI_PASSWORD` | （弃用）密码重登，仅 TTY 生效；请改用 API Key |

## 从原仓库迁移说明

本仓库从 `Eggturtle-breeding-library/.claude/skills/eggturtle-cli` 迁移而来。
包名从 `@eggturtle/*` 更名为 `@xuanyuku/*`。