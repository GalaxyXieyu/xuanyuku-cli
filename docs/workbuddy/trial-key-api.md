# WorkBuddy 限免渠道:Trial API Key 签发接口规范(T480)

> 状态:待后端实现。本文档是给后端仓库的实现规范,CLI 侧无需改动(现有 `x-api-key` 认证与 `/me/api-keys` 体系直接复用)。

## 背景

小程序「AI 宠物助理(限时免费)」入口需要让已登录用户**一键领取**一个长效 API Key,粘贴给 WorkBuddy/OpenClaw 中的技能使用。不能复用 CLI 的 `apikey create`(用户没装 CLI,鸡生蛋),也不建议小程序直接调 `POST /me/api-keys`(缺少来源标记、活动有效期、权限收敛、幂等语义)。

## 接口定义

### 1. 领取 / 重新领取

```
POST /trial/workbuddy/api-key
Authorization: Bearer <小程序用户 accessToken>
```

请求体:无(所有策略由服务端活动配置决定,客户端不可传有效期/权限)。

行为(幂等语义 = 重新领取):

1. 校验活动开关(见「活动配置」)。活动关闭 → `403 TRIAL_CLOSED`。
2. 若该用户已有 `source=workbuddy-trial` 的**有效** Key → 先吊销旧 Key,再签发新 Key(用户丢了 Key 可以自助重领,且旧 Key 立即失效,不会越领越多)。
3. 签发 Key:
   - `name`: `AI宠物助理-限免`(固定,便于用户在 key 列表里辨认)
   - `source`: `workbuddy-trial`(新增字段或复用 metadata,用于埋点与批量运营)
   - `expiresAt`: `min(now + TRIAL_DAYS, 活动截止日)`
   - `scopes`: 见「权限收敛」(apikeys 表已有 `scopes` 字段,当前为 null=全量,本渠道必须收敛)
4. 返回明文 Key(仅此一次)。

响应:

```json
{
  "apiKey": "xyk_xxxxxxxx...",
  "keyPrefix": "xyk_xxxx",
  "expiresAt": "2026-08-08T00:00:00Z",
  "reclaimed": true
}
```

### 2. 领取状态查询(落地页渲染用)

```
GET /trial/workbuddy/api-key/status
```

```json
{
  "trialOpen": true,
  "claimed": true,
  "keyPrefix": "xyk_xxxx",
  "expiresAt": "...",
  "lastUsedAt": "...",
  "callCount30d": 42
}
```

`lastUsedAt` / `callCount30d` 用于落地页显示「你的助理最近活跃时间」,也是激活漏斗的核心指标来源。

## 权限收敛(scopes)

trial Key 存在用户电脑上、由 agent 自主调用,必须排除高危与无关面:

**允许(读 + 日常经营写):**
- 产品:list/get/create/update、event、image、mating/egg 记录、mating-history、family-tree
- 销售:sale-batch、sale-allocation
- 统计:stats overview / clicks(**排除 stats admin\***)
- 分享:share publish / qr / url-link
- 证书:cert 全部(核心付费点,体验必须完整)
- AI 录入:ai intake parse / submit

**禁止:**
- 一切删除类:product delete、event delete、image delete、series delete
- API Key 管理:`/me/api-keys`(禁止用 trial Key 再造 Key 提权/续命)
- admin 面:admin-analytics、article guiquan/announcement 管理、market 全组(现状即 superadmin only)
- 租户切换、账号管理

**待开放(产品决策项):** `market` 行情命令组目前整组为 superadmin 专用(`/admin/market-intelligence/*` + 客户端 `ensureSuperAdmin`),商家无法使用。「行情周报」是这个渠道的宣传卖点之一,若要兑现,后端需要新增商户级只读行情接口(如 `/market-intelligence/overview` 的商户版),届时再纳入 trial scope 并更新技能包。Phase 1 技能包已指示 agent 不要调用 market 命令。

后端按路由维度落 scope 校验;被拒时返回 `403 SCOPE_DENIED` + 人话 message(agent 会把它念给用户,写清楚「限免版不支持此操作」)。

## 限流与埋点

- 每 Key 限流:建议 60 req/min、5000 req/day(日报场景一次任务约 5~20 个请求,余量充足)。
- 埋点:按 `source=workbuddy-trial` 维度出:领取数、激活数(首次调用)、7 日活跃、命令分布。这是判断该渠道是否值得做 Phase 2 托管版的唯一依据。

## 活动配置(服务端可调,不发版)

| 配置项 | 建议初值 |
|---|---|
| `TRIAL_OPEN` | true |
| `TRIAL_DAYS` | 30 |
| `TRIAL_END_AT` | 活动截止日 |
| `RATE_LIMIT` | 60/min, 5000/day |

活动结束的收口动作:关开关(新领取关闭)→ 到期 Key 自然失效 → 需要时按 `source` 批量吊销。转付费用户走续期/换正式 Key。

## 小程序端交互(前端参照)

1. 落地页(入口:首页 banner +「我的-工具」)→ 「限时免费领取」按钮
2. 调 `POST /trial/workbuddy/api-key` → 弹层展示 Key + 一键复制 + 「已领取过将使旧 Key 失效」提示
3. 同屏给出:技能包下载短链/二维码 + 两步教程(装 WorkBuddy → 导入技能后说"帮我接入蛋龟选育库,Key 是 xxx")
4. 已领取状态下按钮变为「查看状态 / 重新领取」
