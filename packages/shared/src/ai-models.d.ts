/**
 * AI Models Catalog — 静态模型目录
 *
 * 使用指南：
 * 1. 新增 entry：在 AI_MODELS 加 entry，enabled: false 先发一版，SiliconFlow Dashboard 确认 providerModel 存在，
 *    网关 proxy_read_timeout 确认 ≥ timeoutMs，再 enabled 切 true 发第二版。
 * 2. 删除 entry：enabled 切 false 发一版，监控 AiConversation.model 引用归零，再删 entry 发第二版。
 */
/**
 * AiModelDescriptor — 单条模型在 catalog 里的语义描述
 *
 * 字段语义：
 * - key             业务侧稳定 ID（如 'qwen-fast'），客户端 / DB / 日志只见此值
 * - providerModel   传给 provider OpenAI-compatible API 的 model 字段（如 'Qwen/Qwen2.5-7B-Instruct'）
 * - provider        可选：模型所属的 LLM provider（'siliconflow' | 'dashscope'；缺省='siliconflow' 向后兼容）
 *                   决定底层如何解析 baseUrl/apiKey；siliconflow 读 AI_ASSISTANT_SILICONFLOW_*，
 *                   dashscope 读 DASHSCOPE_*（OpenAI-compatible mode）
 * - pointsPerMessage 单次问答消耗积分（整数，与 P1 PointsAccount.balance Int 对齐）
 * - timeoutMs       provider 单次请求超时（毫秒）；qwen-think 类思考模型 ≥ 120_000，常规对话 ≤ 50_000
 * - label           人类可读名（中文短词，给可能的 UI 展示用；P2.1 不用 UI，留作 P3+ 客户端徽标）
 * - description     一句话描述模型适用场景，便于 callsite 选型
 * - enabled         运行时开关；disabled=true 时 getAiModel() 返 null，service 拦截 400
 *                   用途：金丝雀关 / 上游下线 / 临时降级时不发版改 catalog（实际仍需发版，但语义清晰）
 * - tag             可选标签：'fast' | 'think' | 'preview' 等；P3+ 客户端可据此显示徽标颜色
 */
export type AiModelDescriptor = {
    readonly key: string;
    readonly providerModel: string;
    readonly provider?: 'siliconflow' | 'dashscope';
    readonly pointsPerMessage: number;
    readonly timeoutMs: number;
    /**
     * maxTokens — provider 单次响应的 max_tokens 上限（OpenAI-compatible API）
     *
     * 与 reasoning 模型紧密相关：
     * - 普通对话模型（qwen-fast）：所有 token 都进 delta.content，800 足够
     * - reasoning 模型（qwen-think）：max_tokens 同时覆盖「思考过程 reasoning_content + 最终答案 content」，
     *   800 会被推理全部吃掉导致 content 为空 → 必须 ≥ 2000；推荐 4000
     *
     * 上调 maxTokens 不影响计费（按 pointsPerMessage 一次扣，与实际 token 数无关）；
     * 但会延长 provider 单次响应时长 → timeoutMs 必须同步给够。
     */
    readonly maxTokens: number;
    readonly label: string;
    readonly description: string;
    readonly enabled: boolean;
    readonly tag?: 'fast' | 'think' | 'preview';
};
/**
 * AI_MODELS — 静态 catalog（const + as const，便于类型推导出 union key）
 *
 * 规则：
 * 1. 新增 entry 直接加这里，shared 重 build 即可，无需 migration。
 * 2. 删除 entry **必须**走 deprecate 流程：先 enabled=false 发一版让客户端停止发送，再下一版彻底删除 key。
 *    （直接删 key 会导致历史 AiConversation.model 引用悬空 — DB 层面无 FK，但 admin 日志会显示 unknown key）
 * 3. providerModel 命中 SiliconFlow 实际可用的模型 ID — 上线前必须在 SiliconFlow Dashboard 确认存在。
 * 4. timeoutMs 上限受 Nginx proxy_read_timeout 影响；qwen-think 的 120_000 ms 需要确认网关层 ≥ 120s
 *    （concerns.md / nginx config 中若 < 120s，要先调大网关再上 qwen-think）。
 *
 * future-proof 占位 entry 示例（不上线，但写在 catalog 里作为「下次扩张时照此格式」的范本）：
 *   'deepseek-v2'：enabled=false，给 P4+ 想换模型时一个可用的 disabled key 走拦截路径测试
 *   'kimi-32k'：未来留位（暂不进 catalog，避免「假装支持」错觉）
 */
export declare const AI_MODELS: {
    readonly 'qwen-fast': {
        readonly key: "qwen-fast";
        readonly providerModel: "Qwen/Qwen2.5-7B-Instruct";
        readonly pointsPerMessage: 5;
        readonly timeoutMs: 50000;
        readonly maxTokens: 800;
        readonly label: "极速";
        readonly description: "日常对话 / 小宠物 chat，响应快，性价比高（5 积分/次）";
        readonly enabled: true;
        readonly tag: "fast";
    };
    readonly 'qwen-think': {
        readonly key: "qwen-think";
        readonly providerModel: "Qwen/Qwen3.5-9B";
        readonly pointsPerMessage: 20;
        readonly timeoutMs: 180000;
        readonly maxTokens: 16000;
        readonly label: "深思";
        readonly description: "诊断 / 复杂推理 / 长程上下文，响应慢但更准确（20 积分/次，实测延迟 30-180s，token 占用大）";
        readonly enabled: true;
        readonly tag: "think";
    };
    readonly 'qwen-plus': {
        readonly key: "qwen-plus";
        readonly providerModel: "qwen-plus";
        readonly provider: "dashscope";
        readonly pointsPerMessage: 5;
        readonly timeoutMs: 180000;
        readonly maxTokens: 4096;
        readonly label: "通用";
        readonly description: "阿里云百炼 qwen-plus，通用对话，响应快、质量高（5 积分/次）";
        readonly enabled: true;
        readonly tag: "fast";
    };
    readonly 'deepseek-v2': {
        readonly key: "deepseek-v2";
        readonly providerModel: "deepseek-ai/DeepSeek-V2-Chat";
        readonly pointsPerMessage: 15;
        readonly timeoutMs: 60000;
        readonly maxTokens: 800;
        readonly label: "深度求索";
        readonly description: "占位条目，当前未开放；保留作为「catalog 扩张」与「disabled 拦截测试」的样本";
        readonly enabled: false;
        readonly tag: "preview";
    };
    readonly 'diagnosis-graphrag': {
        readonly key: "diagnosis-graphrag";
        readonly providerModel: "Qwen/Qwen3.5-9B";
        readonly pointsPerMessage: 20;
        readonly timeoutMs: 180000;
        readonly maxTokens: 16000;
        readonly label: "问诊助手";
        readonly description: "龟病 GraphRAG 文献检索 + 深度推理（20 积分/次）";
        readonly enabled: false;
        readonly tag: "think";
    };
};
/**
 * AiModelKey — catalog 里所有合法 key 的 union 类型
 *
 * 注意：service 层做的是「运行时 string 白名单校验」，不是「编译期类型校验」，
 * 因为 shared schema 用 z.string().optional() 允许任意字符串传过来（→ 给客户端版本宽容）。
 * AiModelKey 类型仅在 backend 调用方写代码时提供 IntelliSense，
 * 比如 P3 写 `streamChat({ modelKey: 'qwen-fast' satisfies AiModelKey })` 时有补全。
 */
export type AiModelKey = keyof typeof AI_MODELS;
/**
 * DEFAULT_AI_MODEL_KEY — 客户端不传 modelKey 时使用的默认值
 *
 * 当前为 'qwen-plus'（阿里云百炼）：5 积分 / 50s timeout，非推理模型秒级响应，避免 qwen-think 的 50s 客户端超时问题。
 * 从 'qwen-fast' 切换为 'qwen-plus'（T404）：使用 DashScope compatible-mode API，相同成本与延迟，质量更优。
 * 切换默认值 = breaking change：会改变底层 provider（SiliconFlow → DashScope），但成本与超时不变。
 */
export declare const DEFAULT_AI_MODEL_KEY: AiModelKey;
/**
 * getAiModel — 按 key 查 catalog
 *
 * 返回：
 *  - 命中且 enabled=true：返 descriptor
 *  - 命中但 enabled=false：返 null（同未命中一样的语义 → 客户端不需要区分两者）
 *  - 未命中：返 null
 *
 * 不抛异常 — 抛异常的判断留给 service 层（service 决定是 BadRequest 还是 fallback）。
 *
 * 入参 key 类型刻意写成 `string | undefined` 而非 `AiModelKey`，
 * 原因：caller 是 service，service 从 HTTP body 拿到的是 string，shared schema 已用 z.string().optional()。
 * 加宽类型避免 caller 处处 type assert。
 */
export declare function getAiModel(key: string | null | undefined): AiModelDescriptor | null;
