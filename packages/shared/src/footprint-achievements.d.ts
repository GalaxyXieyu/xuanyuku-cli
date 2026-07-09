import { z } from 'zod';
export declare const footprintAchievementFamilySchema: z.ZodEnum<["archive", "record", "relation", "share"]>;
export declare const footprintAchievementKeySchema: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
export declare const footprintAchievementProgressUnitSchema: z.ZodEnum<["pets", "profiles", "photos", "series", "certificates", "records", "days", "health_logs", "breeding_logs", "egg_logs", "pairs", "lineage_links", "family_nodes", "featured", "visitors", "clicks", "shares"]>;
export declare const footprintAchievementCatalogItemSchema: z.ZodObject<{
    key: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
    family: z.ZodEnum<["archive", "record", "relation", "share"]>;
    title: z.ZodString;
    subtitle: z.ZodString;
    requirementSummary: z.ZodString;
    promptScene: z.ZodString;
    promptKeywords: z.ZodArray<z.ZodString, "many">;
    shareHeadline: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    key: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
    subtitle: string;
    family: "record" | "archive" | "relation" | "share";
    requirementSummary: string;
    promptScene: string;
    promptKeywords: string[];
    shareHeadline: string;
}, {
    title: string;
    key: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
    subtitle: string;
    family: "record" | "archive" | "relation" | "share";
    requirementSummary: string;
    promptScene: string;
    promptKeywords: string[];
    shareHeadline: string;
}>;
export declare const FOOTPRINT_ACHIEVEMENT_FAMILY_LABELS: {
    readonly archive: "档案";
    readonly record: "记录";
    readonly relation: "关系";
    readonly share: "分享";
};
export declare const FOOTPRINT_ACHIEVEMENT_CATALOG: readonly [{
    readonly key: "archive_first_pet";
    readonly family: "archive";
    readonly title: "初来乍到";
    readonly subtitle: "把第一只宠物正式收进档案。";
    readonly requirementSummary: "收录 1 只宠物";
    readonly promptScene: "新手档案馆的第一枚纪念章";
    readonly promptKeywords: ["暖金徽章", "幼龟档案册", "卷轴", "新手启程"];
    readonly shareHeadline: "第一只宠物已经有自己的档案了";
}, {
    readonly key: "archive_triple_collection";
    readonly family: "archive";
    readonly title: "小小名录";
    readonly subtitle: "档案开始成队列，不再是孤零零的一页。";
    readonly requirementSummary: "收录 3 只宠物";
    readonly promptScene: "三枚编号牌围绕中央档案章";
    readonly promptKeywords: ["铜牌", "编号吊牌", "三连章", "收藏柜"];
    readonly shareHeadline: "我的档案柜已经排成第一列";
}, {
    readonly key: "archive_profile_writer";
    readonly family: "archive";
    readonly title: "档案整理师";
    readonly subtitle: "不仅收进去，还认真写清楚。";
    readonly requirementSummary: "3 只宠物补全档案描述";
    readonly promptScene: "羽毛笔与档案卡的写实成就章";
    readonly promptKeywords: ["羽毛笔", "羊皮纸", "细节记录", "高级插画"];
    readonly shareHeadline: "档案不只是名字，细节也开始被认真记录";
}, {
    readonly key: "archive_portrait_wall";
    readonly family: "archive";
    readonly title: "影像收集家";
    readonly subtitle: "一面照片墙，让档案开始有了脸。";
    readonly requirementSummary: "6 只宠物拥有照片";
    readonly promptScene: "金边相框墙的影像勋章";
    readonly promptKeywords: ["相框", "照片墙", "珍藏室", "柔光"];
    readonly shareHeadline: "我的档案墙已经开始亮起来了";
}, {
    readonly key: "archive_series_curator";
    readonly family: "archive";
    readonly title: "系列策展人";
    readonly subtitle: "把散落的个体整理成有主题的系列。";
    readonly requirementSummary: "创建 2 个系列";
    readonly promptScene: "展陈标签与系列陈列台的勋章";
    readonly promptKeywords: ["策展台", "标签牌", "陈列盒", "高级 Q 版"];
    readonly shareHeadline: "我的选育方向开始有自己的系列感了";
}, {
    readonly key: "archive_certificate_debut";
    readonly family: "archive";
    readonly title: "血统初证";
    readonly subtitle: "第一张证书亮起时，档案就更像一份作品。";
    readonly requirementSummary: "签发 1 张证书";
    readonly promptScene: "烫金证书与印章组合勋章";
    readonly promptKeywords: ["证书", "金印", "丝带", "庄重"];
    readonly shareHeadline: "第一张证书已经生成，档案更完整了";
}, {
    readonly key: "record_first_log";
    readonly family: "record";
    readonly title: "第一笔足迹";
    readonly subtitle: "从这一条开始，时间线不再空白。";
    readonly requirementSummary: "留下 1 条记录";
    readonly promptScene: "第一笔墨迹落在时间轴上的勋章";
    readonly promptKeywords: ["时间轴", "墨迹", "起笔", "记录感"];
    readonly shareHeadline: "第一条记录已经写下，时间线正式开始";
}, {
    readonly key: "record_steady_7d";
    readonly family: "record";
    readonly title: "七日守望";
    readonly subtitle: "连续陪伴的节奏第一次稳定下来。";
    readonly requirementSummary: "累计 7 个活跃记录日";
    readonly promptScene: "七枚日历页环绕的陪伴勋章";
    readonly promptKeywords: ["日历", "七天", "守护", "晨光"];
    readonly shareHeadline: "已经坚持记录满 7 天";
}, {
    readonly key: "record_steady_30d";
    readonly family: "record";
    readonly title: "月度连载";
    readonly subtitle: "当记录跨过一个月，习惯就真的成形了。";
    readonly requirementSummary: "累计 30 个活跃记录日";
    readonly promptScene: "月历与成长轨迹叠加的成就章";
    readonly promptKeywords: ["月历", "成长轨迹", "持续记录", "金属徽章"];
    readonly shareHeadline: "我把陪伴认真坚持到了 30 天";
}, {
    readonly key: "record_health_guard";
    readonly family: "record";
    readonly title: "巡检护理官";
    readonly subtitle: "细致观察，是稳定繁育的底色。";
    readonly requirementSummary: "留下 10 条健康观察";
    readonly promptScene: "听诊器与观察灯组成的勋章";
    readonly promptKeywords: ["护理", "观察", "巡检", "清洁高级"];
    readonly shareHeadline: "健康观察已经形成稳定节奏";
}, {
    readonly key: "record_pair_timeline";
    readonly family: "record";
    readonly title: "配对编年史";
    readonly subtitle: "配对和繁育开始在时间线上连成故事。";
    readonly requirementSummary: "累计 6 条配对 / 繁育记录";
    readonly promptScene: "双龟剪影与时间刻度的成就章";
    readonly promptKeywords: ["配对", "双生", "时间刻度", "故事感"];
    readonly shareHeadline: "配对与繁育已经被我认真记录下来";
}, {
    readonly key: "record_egg_ledger";
    readonly family: "record";
    readonly title: "产蛋记录官";
    readonly subtitle: "每一窝都开始有了自己的编号和记忆。";
    readonly requirementSummary: "累计 5 条产蛋记录";
    readonly promptScene: "蛋窝账本与编号卡牌的勋章";
    readonly promptKeywords: ["蛋窝", "账本", "编号牌", "秩序感"];
    readonly shareHeadline: "产蛋记录已经开始形成稳定账本";
}, {
    readonly key: "relation_first_pair";
    readonly family: "relation";
    readonly title: "初次结缘";
    readonly subtitle: "第一条配对关系接上，谱系开始流动。";
    readonly requirementSummary: "建立 1 组配对关系";
    readonly promptScene: "双环缠绕的初次结缘徽章";
    readonly promptKeywords: ["双环", "连结", "柔金", "缘分"];
    readonly shareHeadline: "第一组配对关系已经接上";
}, {
    readonly key: "relation_lineage_root";
    readonly family: "relation";
    readonly title: "血脉上线";
    readonly subtitle: "父母信息开始出现，谱系终于有了源头。";
    readonly requirementSummary: "累计补上 3 条血缘连接";
    readonly promptScene: "树根与血脉线条构成的勋章";
    readonly promptKeywords: ["血脉", "树根", "连接线", "祖谱"];
    readonly shareHeadline: "谱系不再断裂，血脉线已经接起来了";
}, {
    readonly key: "relation_double_parent";
    readonly family: "relation";
    readonly title: "双亲补全";
    readonly subtitle: "成批个体补齐双亲信息，家族轮廓更清晰。";
    readonly requirementSummary: "3 只宠物补齐双亲";
    readonly promptScene: "双亲护翼环抱中央个体的勋章";
    readonly promptKeywords: ["双亲", "守护翼", "中心主角", "家族感"];
    readonly shareHeadline: "已经有多只个体补齐了双亲关系";
}, {
    readonly key: "relation_grandline_map";
    readonly family: "relation";
    readonly title: "三代成谱";
    readonly subtitle: "祖辈线索亮起，谱系真正开始有纵深。";
    readonly requirementSummary: "2 只宠物接上祖辈线索";
    readonly promptScene: "三层家族树结构的精致勋章";
    readonly promptKeywords: ["三代谱系", "家族树", "层级", "典藏"];
    readonly shareHeadline: "我的谱系图已经开始延展到三代";
}, {
    readonly key: "relation_family_network";
    readonly family: "relation";
    readonly title: "家族织网";
    readonly subtitle: "多条关系交织后，整个家族网络开始成型。";
    readonly requirementSummary: "累计形成 12 条关系连接";
    readonly promptScene: "发光网络状家族图腾勋章";
    readonly promptKeywords: ["网络", "织网", "光点", "结构美感"];
    readonly shareHeadline: "家族网络正在被我一点点织出来";
}, {
    readonly key: "relation_pair_strategist";
    readonly family: "relation";
    readonly title: "配对策士";
    readonly subtitle: "配对组合开始有系统性，不再只是随手一记。";
    readonly requirementSummary: "建立 4 组配对关系";
    readonly promptScene: "棋盘与配对徽记结合的勋章";
    readonly promptKeywords: ["策略", "棋盘", "配对组合", "理性美学"];
    readonly shareHeadline: "我的配对策略已经逐渐形成体系";
}, {
    readonly key: "share_first_public";
    readonly family: "share";
    readonly title: "首次公开";
    readonly subtitle: "档案第一次走出后台，被别人看见。";
    readonly requirementSummary: "生成 1 个公开分享";
    readonly promptScene: "开启帷幕的公开展示勋章";
    readonly promptKeywords: ["帷幕", "舞台", "公开亮相", "聚光灯"];
    readonly shareHeadline: "我的档案已经可以被公开看见了";
}, {
    readonly key: "share_featured_window";
    readonly family: "share";
    readonly title: "橱窗策展";
    readonly subtitle: "你开始挑选真正想展示的主角。";
    readonly requirementSummary: "设置 3 个精选展示位";
    readonly promptScene: "精品橱窗与展示灯牌勋章";
    readonly promptKeywords: ["橱窗", "聚光灯", "精品展示", "陈列美学"];
    readonly shareHeadline: "我的公开页已经开始有策展感了";
}, {
    readonly key: "share_viewer_breakthrough";
    readonly family: "share";
    readonly title: "访客破圈";
    readonly subtitle: "第一次明显感受到外部访客正在到来。";
    readonly requirementSummary: "公开页访客 UV 达到 20";
    readonly promptScene: "访客光点向中心汇聚的勋章";
    readonly promptKeywords: ["访客", "破圈", "光点聚集", "传播"];
    readonly shareHeadline: "已经有越来越多人看到了我的公开档案";
}, {
    readonly key: "share_popular_pick";
    readonly family: "share";
    readonly title: "人气焦点";
    readonly subtitle: "某只个体被反复点击，开始成为公开页主角。";
    readonly requirementSummary: "单只宠物公开点击达到 10";
    readonly promptScene: "中心主角被聚光灯锁定的勋章";
    readonly promptKeywords: ["主角", "点击热度", "聚焦", "明星位"];
    readonly shareHeadline: "公开页已经出现了人气主角";
}, {
    readonly key: "share_social_spread";
    readonly family: "share";
    readonly title: "扩散传播者";
    readonly subtitle: "你的档案开始真正跑出熟人圈。";
    readonly requirementSummary: "公开页访客 UV 达到 60";
    readonly promptScene: "涟漪扩散与分享箭头的勋章";
    readonly promptKeywords: ["扩散", "涟漪", "传播", "社交感"];
    readonly shareHeadline: "我的公开页已经不只是自己在看";
}, {
    readonly key: "share_trust_showcase";
    readonly family: "share";
    readonly title: "信任陈列馆";
    readonly subtitle: "证书与公开展示同时成熟，信任感开始稳定建立。";
    readonly requirementSummary: "3 张证书且公开页访客 UV 达到 20";
    readonly promptScene: "证书陈列馆与访客勋光的组合章";
    readonly promptKeywords: ["信任", "陈列馆", "证书墙", "高级展示"];
    readonly shareHeadline: "证书与公开展示开始一起建立信任感";
}];
export declare const footprintAchievementItemSchema: z.ZodObject<{
    key: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
    family: z.ZodEnum<["archive", "record", "relation", "share"]>;
    title: z.ZodString;
    subtitle: z.ZodString;
    requirementSummary: z.ZodString;
    promptScene: z.ZodString;
    promptKeywords: z.ZodArray<z.ZodString, "many">;
    shareHeadline: z.ZodString;
} & {
    imageUrl: z.ZodNullable<z.ZodString>;
    progressCurrent: z.ZodNumber;
    progressTarget: z.ZodNumber;
    progressUnit: z.ZodEnum<["pets", "profiles", "photos", "series", "certificates", "records", "days", "health_logs", "breeding_logs", "egg_logs", "pairs", "lineage_links", "family_nodes", "featured", "visitors", "clicks", "shares"]>;
    progressLabel: z.ZodString;
    progressPercent: z.ZodNumber;
    unlocked: z.ZodBoolean;
    unlockedAt: z.ZodNullable<z.ZodString>;
    detailText: z.ZodString;
    nextHint: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    key: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
    subtitle: string;
    family: "record" | "archive" | "relation" | "share";
    requirementSummary: string;
    promptScene: string;
    promptKeywords: string[];
    shareHeadline: string;
    imageUrl: string | null;
    progressCurrent: number;
    progressTarget: number;
    progressUnit: "records" | "pets" | "profiles" | "photos" | "series" | "certificates" | "days" | "health_logs" | "breeding_logs" | "egg_logs" | "pairs" | "lineage_links" | "family_nodes" | "featured" | "visitors" | "clicks" | "shares";
    progressLabel: string;
    progressPercent: number;
    unlocked: boolean;
    unlockedAt: string | null;
    detailText: string;
    nextHint: string;
}, {
    title: string;
    key: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
    subtitle: string;
    family: "record" | "archive" | "relation" | "share";
    requirementSummary: string;
    promptScene: string;
    promptKeywords: string[];
    shareHeadline: string;
    imageUrl: string | null;
    progressCurrent: number;
    progressTarget: number;
    progressUnit: "records" | "pets" | "profiles" | "photos" | "series" | "certificates" | "days" | "health_logs" | "breeding_logs" | "egg_logs" | "pairs" | "lineage_links" | "family_nodes" | "featured" | "visitors" | "clicks" | "shares";
    progressLabel: string;
    progressPercent: number;
    unlocked: boolean;
    unlockedAt: string | null;
    detailText: string;
    nextHint: string;
}>;
export declare const footprintAchievementFamilyProgressSchema: z.ZodObject<{
    family: z.ZodEnum<["archive", "record", "relation", "share"]>;
    label: z.ZodString;
    totalCount: z.ZodNumber;
    unlockedCount: z.ZodNumber;
    progressPercent: z.ZodNumber;
    leadAchievementKey: z.ZodNullable<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    totalCount: number;
    family: "record" | "archive" | "relation" | "share";
    progressPercent: number;
    unlockedCount: number;
    leadAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
}, {
    label: string;
    totalCount: number;
    family: "record" | "archive" | "relation" | "share";
    progressPercent: number;
    unlockedCount: number;
    leadAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
}>;
export declare const footprintAchievementSummarySchema: z.ZodObject<{
    totalCount: z.ZodNumber;
    unlockedCount: z.ZodNumber;
    progressPercent: z.ZodNumber;
    percentileOvercome: z.ZodNumber;
    activeTenantBaseCount: z.ZodNumber;
    activeWindowDays: z.ZodNumber;
    nextAchievementKey: z.ZodNullable<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
    latestUnlockedKey: z.ZodNullable<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
    latestUnlockedAt: z.ZodNullable<z.ZodString>;
    celebrationCandidateKey: z.ZodNullable<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
    celebrationCandidateAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    totalCount: number;
    progressPercent: number;
    unlockedCount: number;
    percentileOvercome: number;
    activeTenantBaseCount: number;
    activeWindowDays: number;
    nextAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    latestUnlockedKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    latestUnlockedAt: string | null;
    celebrationCandidateKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    celebrationCandidateAt: string | null;
}, {
    totalCount: number;
    progressPercent: number;
    unlockedCount: number;
    percentileOvercome: number;
    activeTenantBaseCount: number;
    activeWindowDays: number;
    nextAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    latestUnlockedKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    latestUnlockedAt: string | null;
    celebrationCandidateKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    celebrationCandidateAt: string | null;
}>;
export declare const footprintAchievementShareBannerSchema: z.ZodObject<{
    achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
    achievementTitle: z.ZodString;
    achievementSubtitle: z.ZodString;
    shareHeadline: z.ZodString;
    imageUrl: z.ZodNullable<z.ZodString>;
    percentileOvercome: z.ZodNumber;
    unlockedCount: z.ZodNumber;
    totalCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    totalCount: number;
    shareHeadline: string;
    imageUrl: string | null;
    unlockedCount: number;
    percentileOvercome: number;
    achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
    achievementTitle: string;
    achievementSubtitle: string;
}, {
    totalCount: number;
    shareHeadline: string;
    imageUrl: string | null;
    unlockedCount: number;
    percentileOvercome: number;
    achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
    achievementTitle: string;
    achievementSubtitle: string;
}>;
export declare const footprintAchievementPresentationResolvedSchema: z.ZodObject<{
    title: z.ZodString;
    subtitle: z.ZodString;
    shareHeadline: z.ZodString;
    imageUrl: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    subtitle: string;
    shareHeadline: string;
    imageUrl: string | null;
}, {
    title: string;
    subtitle: string;
    shareHeadline: string;
    imageUrl: string | null;
}>;
export declare const footprintAchievementPresentationOverrideSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodString>;
    subtitle: z.ZodNullable<z.ZodString>;
    shareHeadline: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string | null;
    subtitle: string | null;
    shareHeadline: string | null;
}, {
    title: string | null;
    subtitle: string | null;
    shareHeadline: string | null;
}>;
export declare const footprintAchievementPresentationStoredOverrideSchema: z.ZodObject<{
    title: z.ZodNullable<z.ZodString>;
    subtitle: z.ZodNullable<z.ZodString>;
    shareHeadline: z.ZodNullable<z.ZodString>;
} & {
    shareImageStorageKey: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string | null;
    subtitle: string | null;
    shareHeadline: string | null;
    shareImageStorageKey: string | null;
}, {
    title: string | null;
    subtitle: string | null;
    shareHeadline: string | null;
    shareImageStorageKey: string | null;
}>;
export declare const adminFootprintAchievementPresentationItemSchema: z.ZodObject<{
    achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
    family: z.ZodEnum<["archive", "record", "relation", "share"]>;
    requirementSummary: z.ZodString;
    promptScene: z.ZodString;
    defaultPresentation: z.ZodObject<{
        title: z.ZodString;
        subtitle: z.ZodString;
        shareHeadline: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        subtitle: string;
        shareHeadline: string;
        imageUrl: string | null;
    }, {
        title: string;
        subtitle: string;
        shareHeadline: string;
        imageUrl: string | null;
    }>;
    presentation: z.ZodObject<{
        title: z.ZodString;
        subtitle: z.ZodString;
        shareHeadline: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        subtitle: string;
        shareHeadline: string;
        imageUrl: string | null;
    }, {
        title: string;
        subtitle: string;
        shareHeadline: string;
        imageUrl: string | null;
    }>;
    overrides: z.ZodObject<{
        title: z.ZodNullable<z.ZodString>;
        subtitle: z.ZodNullable<z.ZodString>;
        shareHeadline: z.ZodNullable<z.ZodString>;
    } & {
        shareImageStorageKey: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string | null;
        subtitle: string | null;
        shareHeadline: string | null;
        shareImageStorageKey: string | null;
    }, {
        title: string | null;
        subtitle: string | null;
        shareHeadline: string | null;
        shareImageStorageKey: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    family: "record" | "archive" | "relation" | "share";
    requirementSummary: string;
    promptScene: string;
    achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
    defaultPresentation: {
        title: string;
        subtitle: string;
        shareHeadline: string;
        imageUrl: string | null;
    };
    presentation: {
        title: string;
        subtitle: string;
        shareHeadline: string;
        imageUrl: string | null;
    };
    overrides: {
        title: string | null;
        subtitle: string | null;
        shareHeadline: string | null;
        shareImageStorageKey: string | null;
    };
}, {
    family: "record" | "archive" | "relation" | "share";
    requirementSummary: string;
    promptScene: string;
    achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
    defaultPresentation: {
        title: string;
        subtitle: string;
        shareHeadline: string;
        imageUrl: string | null;
    };
    presentation: {
        title: string;
        subtitle: string;
        shareHeadline: string;
        imageUrl: string | null;
    };
    overrides: {
        title: string | null;
        subtitle: string | null;
        shareHeadline: string | null;
        shareImageStorageKey: string | null;
    };
}>;
export declare const listAdminFootprintAchievementPresentationsResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
        family: z.ZodEnum<["archive", "record", "relation", "share"]>;
        requirementSummary: z.ZodString;
        promptScene: z.ZodString;
        defaultPresentation: z.ZodObject<{
            title: z.ZodString;
            subtitle: z.ZodString;
            shareHeadline: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }>;
        presentation: z.ZodObject<{
            title: z.ZodString;
            subtitle: z.ZodString;
            shareHeadline: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }>;
        overrides: z.ZodObject<{
            title: z.ZodNullable<z.ZodString>;
            subtitle: z.ZodNullable<z.ZodString>;
            shareHeadline: z.ZodNullable<z.ZodString>;
        } & {
            shareImageStorageKey: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        }, {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }, {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }[];
}, {
    items: {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }[];
}>;
export declare const updateAdminFootprintAchievementPresentationRequestSchema: z.ZodObject<{
    presentation: z.ZodObject<{
        title: z.ZodNullable<z.ZodString>;
        subtitle: z.ZodNullable<z.ZodString>;
        shareHeadline: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string | null;
        subtitle: string | null;
        shareHeadline: string | null;
    }, {
        title: string | null;
        subtitle: string | null;
        shareHeadline: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    presentation: {
        title: string | null;
        subtitle: string | null;
        shareHeadline: string | null;
    };
}, {
    presentation: {
        title: string | null;
        subtitle: string | null;
        shareHeadline: string | null;
    };
}>;
export declare const updateAdminFootprintAchievementPresentationResponseSchema: z.ZodObject<{
    item: z.ZodObject<{
        achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
        family: z.ZodEnum<["archive", "record", "relation", "share"]>;
        requirementSummary: z.ZodString;
        promptScene: z.ZodString;
        defaultPresentation: z.ZodObject<{
            title: z.ZodString;
            subtitle: z.ZodString;
            shareHeadline: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }>;
        presentation: z.ZodObject<{
            title: z.ZodString;
            subtitle: z.ZodString;
            shareHeadline: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }>;
        overrides: z.ZodObject<{
            title: z.ZodNullable<z.ZodString>;
            subtitle: z.ZodNullable<z.ZodString>;
            shareHeadline: z.ZodNullable<z.ZodString>;
        } & {
            shareImageStorageKey: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        }, {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }, {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auditLogId: string;
    item: {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    };
}, {
    auditLogId: string;
    item: {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    };
}>;
export declare const resetAdminFootprintAchievementPresentationResponseSchema: z.ZodObject<{
    item: z.ZodObject<{
        achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
        family: z.ZodEnum<["archive", "record", "relation", "share"]>;
        requirementSummary: z.ZodString;
        promptScene: z.ZodString;
        defaultPresentation: z.ZodObject<{
            title: z.ZodString;
            subtitle: z.ZodString;
            shareHeadline: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }>;
        presentation: z.ZodObject<{
            title: z.ZodString;
            subtitle: z.ZodString;
            shareHeadline: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }>;
        overrides: z.ZodObject<{
            title: z.ZodNullable<z.ZodString>;
            subtitle: z.ZodNullable<z.ZodString>;
            shareHeadline: z.ZodNullable<z.ZodString>;
        } & {
            shareImageStorageKey: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        }, {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }, {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auditLogId: string;
    item: {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    };
}, {
    auditLogId: string;
    item: {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    };
}>;
export declare const footprintAchievementPresentationAssetSchema: z.ZodObject<{
    key: z.ZodString;
    url: z.ZodString;
    contentType: z.ZodNullable<z.ZodString>;
    sizeBytes: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    key: string;
    contentType: string | null;
    sizeBytes: string;
}, {
    url: string;
    key: string;
    contentType: string | null;
    sizeBytes: string;
}>;
export declare const uploadAdminFootprintAchievementPresentationImageResponseSchema: z.ZodObject<{
    asset: z.ZodObject<{
        key: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    }, {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    }>;
    item: z.ZodObject<{
        achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
        family: z.ZodEnum<["archive", "record", "relation", "share"]>;
        requirementSummary: z.ZodString;
        promptScene: z.ZodString;
        defaultPresentation: z.ZodObject<{
            title: z.ZodString;
            subtitle: z.ZodString;
            shareHeadline: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }>;
        presentation: z.ZodObject<{
            title: z.ZodString;
            subtitle: z.ZodString;
            shareHeadline: z.ZodString;
            imageUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }, {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        }>;
        overrides: z.ZodObject<{
            title: z.ZodNullable<z.ZodString>;
            subtitle: z.ZodNullable<z.ZodString>;
            shareHeadline: z.ZodNullable<z.ZodString>;
        } & {
            shareImageStorageKey: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        }, {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }, {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    asset: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    };
    auditLogId: string;
    item: {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    };
}, {
    asset: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    };
    auditLogId: string;
    item: {
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        defaultPresentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        presentation: {
            title: string;
            subtitle: string;
            shareHeadline: string;
            imageUrl: string | null;
        };
        overrides: {
            title: string | null;
            subtitle: string | null;
            shareHeadline: string | null;
            shareImageStorageKey: string | null;
        };
    };
}>;
export declare const footprintAchievementsOverviewResponseSchema: z.ZodObject<{
    summary: z.ZodObject<{
        totalCount: z.ZodNumber;
        unlockedCount: z.ZodNumber;
        progressPercent: z.ZodNumber;
        percentileOvercome: z.ZodNumber;
        activeTenantBaseCount: z.ZodNumber;
        activeWindowDays: z.ZodNumber;
        nextAchievementKey: z.ZodNullable<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
        latestUnlockedKey: z.ZodNullable<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
        latestUnlockedAt: z.ZodNullable<z.ZodString>;
        celebrationCandidateKey: z.ZodNullable<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
        celebrationCandidateAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        totalCount: number;
        progressPercent: number;
        unlockedCount: number;
        percentileOvercome: number;
        activeTenantBaseCount: number;
        activeWindowDays: number;
        nextAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        latestUnlockedKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        latestUnlockedAt: string | null;
        celebrationCandidateKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        celebrationCandidateAt: string | null;
    }, {
        totalCount: number;
        progressPercent: number;
        unlockedCount: number;
        percentileOvercome: number;
        activeTenantBaseCount: number;
        activeWindowDays: number;
        nextAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        latestUnlockedKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        latestUnlockedAt: string | null;
        celebrationCandidateKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        celebrationCandidateAt: string | null;
    }>;
    families: z.ZodArray<z.ZodObject<{
        family: z.ZodEnum<["archive", "record", "relation", "share"]>;
        label: z.ZodString;
        totalCount: z.ZodNumber;
        unlockedCount: z.ZodNumber;
        progressPercent: z.ZodNumber;
        leadAchievementKey: z.ZodNullable<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        totalCount: number;
        family: "record" | "archive" | "relation" | "share";
        progressPercent: number;
        unlockedCount: number;
        leadAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    }, {
        label: string;
        totalCount: number;
        family: "record" | "archive" | "relation" | "share";
        progressPercent: number;
        unlockedCount: number;
        leadAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    }>, "many">;
    achievements: z.ZodArray<z.ZodObject<{
        key: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
        family: z.ZodEnum<["archive", "record", "relation", "share"]>;
        title: z.ZodString;
        subtitle: z.ZodString;
        requirementSummary: z.ZodString;
        promptScene: z.ZodString;
        promptKeywords: z.ZodArray<z.ZodString, "many">;
        shareHeadline: z.ZodString;
    } & {
        imageUrl: z.ZodNullable<z.ZodString>;
        progressCurrent: z.ZodNumber;
        progressTarget: z.ZodNumber;
        progressUnit: z.ZodEnum<["pets", "profiles", "photos", "series", "certificates", "records", "days", "health_logs", "breeding_logs", "egg_logs", "pairs", "lineage_links", "family_nodes", "featured", "visitors", "clicks", "shares"]>;
        progressLabel: z.ZodString;
        progressPercent: z.ZodNumber;
        unlocked: z.ZodBoolean;
        unlockedAt: z.ZodNullable<z.ZodString>;
        detailText: z.ZodString;
        nextHint: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        key: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        subtitle: string;
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        promptKeywords: string[];
        shareHeadline: string;
        imageUrl: string | null;
        progressCurrent: number;
        progressTarget: number;
        progressUnit: "records" | "pets" | "profiles" | "photos" | "series" | "certificates" | "days" | "health_logs" | "breeding_logs" | "egg_logs" | "pairs" | "lineage_links" | "family_nodes" | "featured" | "visitors" | "clicks" | "shares";
        progressLabel: string;
        progressPercent: number;
        unlocked: boolean;
        unlockedAt: string | null;
        detailText: string;
        nextHint: string;
    }, {
        title: string;
        key: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        subtitle: string;
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        promptKeywords: string[];
        shareHeadline: string;
        imageUrl: string | null;
        progressCurrent: number;
        progressTarget: number;
        progressUnit: "records" | "pets" | "profiles" | "photos" | "series" | "certificates" | "days" | "health_logs" | "breeding_logs" | "egg_logs" | "pairs" | "lineage_links" | "family_nodes" | "featured" | "visitors" | "clicks" | "shares";
        progressLabel: string;
        progressPercent: number;
        unlocked: boolean;
        unlockedAt: string | null;
        detailText: string;
        nextHint: string;
    }>, "many">;
    shareBanner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
        achievementTitle: z.ZodString;
        achievementSubtitle: z.ZodString;
        shareHeadline: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        percentileOvercome: z.ZodNumber;
        unlockedCount: z.ZodNumber;
        totalCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    }, {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    summary: {
        totalCount: number;
        progressPercent: number;
        unlockedCount: number;
        percentileOvercome: number;
        activeTenantBaseCount: number;
        activeWindowDays: number;
        nextAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        latestUnlockedKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        latestUnlockedAt: string | null;
        celebrationCandidateKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        celebrationCandidateAt: string | null;
    };
    families: {
        label: string;
        totalCount: number;
        family: "record" | "archive" | "relation" | "share";
        progressPercent: number;
        unlockedCount: number;
        leadAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    }[];
    achievements: {
        title: string;
        key: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        subtitle: string;
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        promptKeywords: string[];
        shareHeadline: string;
        imageUrl: string | null;
        progressCurrent: number;
        progressTarget: number;
        progressUnit: "records" | "pets" | "profiles" | "photos" | "series" | "certificates" | "days" | "health_logs" | "breeding_logs" | "egg_logs" | "pairs" | "lineage_links" | "family_nodes" | "featured" | "visitors" | "clicks" | "shares";
        progressLabel: string;
        progressPercent: number;
        unlocked: boolean;
        unlockedAt: string | null;
        detailText: string;
        nextHint: string;
    }[];
    shareBanner?: {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    } | null | undefined;
}, {
    summary: {
        totalCount: number;
        progressPercent: number;
        unlockedCount: number;
        percentileOvercome: number;
        activeTenantBaseCount: number;
        activeWindowDays: number;
        nextAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        latestUnlockedKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        latestUnlockedAt: string | null;
        celebrationCandidateKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
        celebrationCandidateAt: string | null;
    };
    families: {
        label: string;
        totalCount: number;
        family: "record" | "archive" | "relation" | "share";
        progressPercent: number;
        unlockedCount: number;
        leadAchievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | null;
    }[];
    achievements: {
        title: string;
        key: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        subtitle: string;
        family: "record" | "archive" | "relation" | "share";
        requirementSummary: string;
        promptScene: string;
        promptKeywords: string[];
        shareHeadline: string;
        imageUrl: string | null;
        progressCurrent: number;
        progressTarget: number;
        progressUnit: "records" | "pets" | "profiles" | "photos" | "series" | "certificates" | "days" | "health_logs" | "breeding_logs" | "egg_logs" | "pairs" | "lineage_links" | "family_nodes" | "featured" | "visitors" | "clicks" | "shares";
        progressLabel: string;
        progressPercent: number;
        unlocked: boolean;
        unlockedAt: string | null;
        detailText: string;
        nextHint: string;
    }[];
    shareBanner?: {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    } | null | undefined;
}>;
export declare const acknowledgeFootprintAchievementCelebrationRequestSchema: z.ZodObject<{
    achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
}, "strip", z.ZodTypeAny, {
    achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
}, {
    achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
}>;
export declare const acknowledgeFootprintAchievementCelebrationResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    ok: true;
}, {
    ok: true;
}>;
export type FootprintAchievementFamily = z.infer<typeof footprintAchievementFamilySchema>;
export type FootprintAchievementKey = z.infer<typeof footprintAchievementKeySchema>;
export type FootprintAchievementProgressUnit = z.infer<typeof footprintAchievementProgressUnitSchema>;
export type FootprintAchievementCatalogItem = z.infer<typeof footprintAchievementCatalogItemSchema>;
export type FootprintAchievementItem = z.infer<typeof footprintAchievementItemSchema>;
export type FootprintAchievementFamilyProgress = z.infer<typeof footprintAchievementFamilyProgressSchema>;
export type FootprintAchievementSummary = z.infer<typeof footprintAchievementSummarySchema>;
export type FootprintAchievementShareBanner = z.infer<typeof footprintAchievementShareBannerSchema>;
export type FootprintAchievementsOverviewResponse = z.infer<typeof footprintAchievementsOverviewResponseSchema>;
export type AcknowledgeFootprintAchievementCelebrationRequest = z.infer<typeof acknowledgeFootprintAchievementCelebrationRequestSchema>;
export type AcknowledgeFootprintAchievementCelebrationResponse = z.infer<typeof acknowledgeFootprintAchievementCelebrationResponseSchema>;
export type FootprintAchievementPresentationResolved = z.infer<typeof footprintAchievementPresentationResolvedSchema>;
export type FootprintAchievementPresentationOverride = z.infer<typeof footprintAchievementPresentationOverrideSchema>;
export type FootprintAchievementPresentationStoredOverride = z.infer<typeof footprintAchievementPresentationStoredOverrideSchema>;
export type AdminFootprintAchievementPresentationItem = z.infer<typeof adminFootprintAchievementPresentationItemSchema>;
export type ListAdminFootprintAchievementPresentationsResponse = z.infer<typeof listAdminFootprintAchievementPresentationsResponseSchema>;
export type UpdateAdminFootprintAchievementPresentationRequest = z.infer<typeof updateAdminFootprintAchievementPresentationRequestSchema>;
export type UpdateAdminFootprintAchievementPresentationResponse = z.infer<typeof updateAdminFootprintAchievementPresentationResponseSchema>;
export type ResetAdminFootprintAchievementPresentationResponse = z.infer<typeof resetAdminFootprintAchievementPresentationResponseSchema>;
export type FootprintAchievementPresentationAsset = z.infer<typeof footprintAchievementPresentationAssetSchema>;
export type UploadAdminFootprintAchievementPresentationImageResponse = z.infer<typeof uploadAdminFootprintAchievementPresentationImageResponseSchema>;
