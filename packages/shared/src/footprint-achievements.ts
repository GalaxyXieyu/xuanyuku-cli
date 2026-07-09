import { z } from 'zod';

export const footprintAchievementFamilySchema = z.enum(['archive', 'record', 'relation', 'share']);

export const footprintAchievementKeySchema = z.enum([
  'archive_first_pet',
  'archive_triple_collection',
  'archive_profile_writer',
  'archive_portrait_wall',
  'archive_series_curator',
  'archive_certificate_debut',
  'record_first_log',
  'record_steady_7d',
  'record_steady_30d',
  'record_health_guard',
  'record_pair_timeline',
  'record_egg_ledger',
  'relation_first_pair',
  'relation_lineage_root',
  'relation_double_parent',
  'relation_grandline_map',
  'relation_family_network',
  'relation_pair_strategist',
  'share_first_public',
  'share_featured_window',
  'share_viewer_breakthrough',
  'share_popular_pick',
  'share_social_spread',
  'share_trust_showcase',
]);

export const footprintAchievementProgressUnitSchema = z.enum([
  'pets',
  'profiles',
  'photos',
  'series',
  'certificates',
  'records',
  'days',
  'health_logs',
  'breeding_logs',
  'egg_logs',
  'pairs',
  'lineage_links',
  'family_nodes',
  'featured',
  'visitors',
  'clicks',
  'shares',
]);

export const footprintAchievementCatalogItemSchema = z.object({
  key: footprintAchievementKeySchema,
  family: footprintAchievementFamilySchema,
  title: z.string().trim().min(1).max(40),
  subtitle: z.string().trim().min(1).max(80),
  requirementSummary: z.string().trim().min(1).max(120),
  promptScene: z.string().trim().min(1).max(120),
  promptKeywords: z.array(z.string().trim().min(1).max(40)).min(3).max(8),
  shareHeadline: z.string().trim().min(1).max(80),
});

const footprintAchievementNullableImageUrlSchema = z.string().trim().min(1).max(1000).nullable();
const footprintAchievementNullableStorageKeySchema = z.string().trim().min(1).max(500).nullable();

export const FOOTPRINT_ACHIEVEMENT_FAMILY_LABELS = {
  archive: '档案',
  record: '记录',
  relation: '关系',
  share: '分享',
} as const;

export const FOOTPRINT_ACHIEVEMENT_CATALOG = [
  {
    key: 'archive_first_pet',
    family: 'archive',
    title: '初来乍到',
    subtitle: '把第一只宠物正式收进档案。',
    requirementSummary: '收录 1 只宠物',
    promptScene: '新手档案馆的第一枚纪念章',
    promptKeywords: ['暖金徽章', '幼龟档案册', '卷轴', '新手启程'],
    shareHeadline: '第一只宠物已经有自己的档案了',
  },
  {
    key: 'archive_triple_collection',
    family: 'archive',
    title: '小小名录',
    subtitle: '档案开始成队列，不再是孤零零的一页。',
    requirementSummary: '收录 3 只宠物',
    promptScene: '三枚编号牌围绕中央档案章',
    promptKeywords: ['铜牌', '编号吊牌', '三连章', '收藏柜'],
    shareHeadline: '我的档案柜已经排成第一列',
  },
  {
    key: 'archive_profile_writer',
    family: 'archive',
    title: '档案整理师',
    subtitle: '不仅收进去，还认真写清楚。',
    requirementSummary: '3 只宠物补全档案描述',
    promptScene: '羽毛笔与档案卡的写实成就章',
    promptKeywords: ['羽毛笔', '羊皮纸', '细节记录', '高级插画'],
    shareHeadline: '档案不只是名字，细节也开始被认真记录',
  },
  {
    key: 'archive_portrait_wall',
    family: 'archive',
    title: '影像收集家',
    subtitle: '一面照片墙，让档案开始有了脸。',
    requirementSummary: '6 只宠物拥有照片',
    promptScene: '金边相框墙的影像勋章',
    promptKeywords: ['相框', '照片墙', '珍藏室', '柔光'],
    shareHeadline: '我的档案墙已经开始亮起来了',
  },
  {
    key: 'archive_series_curator',
    family: 'archive',
    title: '系列策展人',
    subtitle: '把散落的个体整理成有主题的系列。',
    requirementSummary: '创建 2 个系列',
    promptScene: '展陈标签与系列陈列台的勋章',
    promptKeywords: ['策展台', '标签牌', '陈列盒', '高级 Q 版'],
    shareHeadline: '我的选育方向开始有自己的系列感了',
  },
  {
    key: 'archive_certificate_debut',
    family: 'archive',
    title: '血统初证',
    subtitle: '第一张证书亮起时，档案就更像一份作品。',
    requirementSummary: '签发 1 张证书',
    promptScene: '烫金证书与印章组合勋章',
    promptKeywords: ['证书', '金印', '丝带', '庄重'],
    shareHeadline: '第一张证书已经生成，档案更完整了',
  },
  {
    key: 'record_first_log',
    family: 'record',
    title: '第一笔足迹',
    subtitle: '从这一条开始，时间线不再空白。',
    requirementSummary: '留下 1 条记录',
    promptScene: '第一笔墨迹落在时间轴上的勋章',
    promptKeywords: ['时间轴', '墨迹', '起笔', '记录感'],
    shareHeadline: '第一条记录已经写下，时间线正式开始',
  },
  {
    key: 'record_steady_7d',
    family: 'record',
    title: '七日守望',
    subtitle: '连续陪伴的节奏第一次稳定下来。',
    requirementSummary: '累计 7 个活跃记录日',
    promptScene: '七枚日历页环绕的陪伴勋章',
    promptKeywords: ['日历', '七天', '守护', '晨光'],
    shareHeadline: '已经坚持记录满 7 天',
  },
  {
    key: 'record_steady_30d',
    family: 'record',
    title: '月度连载',
    subtitle: '当记录跨过一个月，习惯就真的成形了。',
    requirementSummary: '累计 30 个活跃记录日',
    promptScene: '月历与成长轨迹叠加的成就章',
    promptKeywords: ['月历', '成长轨迹', '持续记录', '金属徽章'],
    shareHeadline: '我把陪伴认真坚持到了 30 天',
  },
  {
    key: 'record_health_guard',
    family: 'record',
    title: '巡检护理官',
    subtitle: '细致观察，是稳定繁育的底色。',
    requirementSummary: '留下 10 条健康观察',
    promptScene: '听诊器与观察灯组成的勋章',
    promptKeywords: ['护理', '观察', '巡检', '清洁高级'],
    shareHeadline: '健康观察已经形成稳定节奏',
  },
  {
    key: 'record_pair_timeline',
    family: 'record',
    title: '配对编年史',
    subtitle: '配对和繁育开始在时间线上连成故事。',
    requirementSummary: '累计 6 条配对 / 繁育记录',
    promptScene: '双龟剪影与时间刻度的成就章',
    promptKeywords: ['配对', '双生', '时间刻度', '故事感'],
    shareHeadline: '配对与繁育已经被我认真记录下来',
  },
  {
    key: 'record_egg_ledger',
    family: 'record',
    title: '产蛋记录官',
    subtitle: '每一窝都开始有了自己的编号和记忆。',
    requirementSummary: '累计 5 条产蛋记录',
    promptScene: '蛋窝账本与编号卡牌的勋章',
    promptKeywords: ['蛋窝', '账本', '编号牌', '秩序感'],
    shareHeadline: '产蛋记录已经开始形成稳定账本',
  },
  {
    key: 'relation_first_pair',
    family: 'relation',
    title: '初次结缘',
    subtitle: '第一条配对关系接上，谱系开始流动。',
    requirementSummary: '建立 1 组配对关系',
    promptScene: '双环缠绕的初次结缘徽章',
    promptKeywords: ['双环', '连结', '柔金', '缘分'],
    shareHeadline: '第一组配对关系已经接上',
  },
  {
    key: 'relation_lineage_root',
    family: 'relation',
    title: '血脉上线',
    subtitle: '父母信息开始出现，谱系终于有了源头。',
    requirementSummary: '累计补上 3 条血缘连接',
    promptScene: '树根与血脉线条构成的勋章',
    promptKeywords: ['血脉', '树根', '连接线', '祖谱'],
    shareHeadline: '谱系不再断裂，血脉线已经接起来了',
  },
  {
    key: 'relation_double_parent',
    family: 'relation',
    title: '双亲补全',
    subtitle: '成批个体补齐双亲信息，家族轮廓更清晰。',
    requirementSummary: '3 只宠物补齐双亲',
    promptScene: '双亲护翼环抱中央个体的勋章',
    promptKeywords: ['双亲', '守护翼', '中心主角', '家族感'],
    shareHeadline: '已经有多只个体补齐了双亲关系',
  },
  {
    key: 'relation_grandline_map',
    family: 'relation',
    title: '三代成谱',
    subtitle: '祖辈线索亮起，谱系真正开始有纵深。',
    requirementSummary: '2 只宠物接上祖辈线索',
    promptScene: '三层家族树结构的精致勋章',
    promptKeywords: ['三代谱系', '家族树', '层级', '典藏'],
    shareHeadline: '我的谱系图已经开始延展到三代',
  },
  {
    key: 'relation_family_network',
    family: 'relation',
    title: '家族织网',
    subtitle: '多条关系交织后，整个家族网络开始成型。',
    requirementSummary: '累计形成 12 条关系连接',
    promptScene: '发光网络状家族图腾勋章',
    promptKeywords: ['网络', '织网', '光点', '结构美感'],
    shareHeadline: '家族网络正在被我一点点织出来',
  },
  {
    key: 'relation_pair_strategist',
    family: 'relation',
    title: '配对策士',
    subtitle: '配对组合开始有系统性，不再只是随手一记。',
    requirementSummary: '建立 4 组配对关系',
    promptScene: '棋盘与配对徽记结合的勋章',
    promptKeywords: ['策略', '棋盘', '配对组合', '理性美学'],
    shareHeadline: '我的配对策略已经逐渐形成体系',
  },
  {
    key: 'share_first_public',
    family: 'share',
    title: '首次公开',
    subtitle: '档案第一次走出后台，被别人看见。',
    requirementSummary: '生成 1 个公开分享',
    promptScene: '开启帷幕的公开展示勋章',
    promptKeywords: ['帷幕', '舞台', '公开亮相', '聚光灯'],
    shareHeadline: '我的档案已经可以被公开看见了',
  },
  {
    key: 'share_featured_window',
    family: 'share',
    title: '橱窗策展',
    subtitle: '你开始挑选真正想展示的主角。',
    requirementSummary: '设置 3 个精选展示位',
    promptScene: '精品橱窗与展示灯牌勋章',
    promptKeywords: ['橱窗', '聚光灯', '精品展示', '陈列美学'],
    shareHeadline: '我的公开页已经开始有策展感了',
  },
  {
    key: 'share_viewer_breakthrough',
    family: 'share',
    title: '访客破圈',
    subtitle: '第一次明显感受到外部访客正在到来。',
    requirementSummary: '公开页访客 UV 达到 20',
    promptScene: '访客光点向中心汇聚的勋章',
    promptKeywords: ['访客', '破圈', '光点聚集', '传播'],
    shareHeadline: '已经有越来越多人看到了我的公开档案',
  },
  {
    key: 'share_popular_pick',
    family: 'share',
    title: '人气焦点',
    subtitle: '某只个体被反复点击，开始成为公开页主角。',
    requirementSummary: '单只宠物公开点击达到 10',
    promptScene: '中心主角被聚光灯锁定的勋章',
    promptKeywords: ['主角', '点击热度', '聚焦', '明星位'],
    shareHeadline: '公开页已经出现了人气主角',
  },
  {
    key: 'share_social_spread',
    family: 'share',
    title: '扩散传播者',
    subtitle: '你的档案开始真正跑出熟人圈。',
    requirementSummary: '公开页访客 UV 达到 60',
    promptScene: '涟漪扩散与分享箭头的勋章',
    promptKeywords: ['扩散', '涟漪', '传播', '社交感'],
    shareHeadline: '我的公开页已经不只是自己在看',
  },
  {
    key: 'share_trust_showcase',
    family: 'share',
    title: '信任陈列馆',
    subtitle: '证书与公开展示同时成熟，信任感开始稳定建立。',
    requirementSummary: '3 张证书且公开页访客 UV 达到 20',
    promptScene: '证书陈列馆与访客勋光的组合章',
    promptKeywords: ['信任', '陈列馆', '证书墙', '高级展示'],
    shareHeadline: '证书与公开展示开始一起建立信任感',
  },
] as const satisfies readonly z.infer<typeof footprintAchievementCatalogItemSchema>[];

export const footprintAchievementItemSchema = footprintAchievementCatalogItemSchema.extend({
  imageUrl: footprintAchievementNullableImageUrlSchema,
  progressCurrent: z.number().int().nonnegative(),
  progressTarget: z.number().int().positive(),
  progressUnit: footprintAchievementProgressUnitSchema,
  progressLabel: z.string().trim().min(1).max(80),
  progressPercent: z.number().min(0).max(100),
  unlocked: z.boolean(),
  unlockedAt: z.string().datetime().nullable(),
  detailText: z.string().trim().min(1).max(160),
  nextHint: z.string().trim().min(1).max(120),
});

export const footprintAchievementFamilyProgressSchema = z.object({
  family: footprintAchievementFamilySchema,
  label: z.string().trim().min(1).max(20),
  totalCount: z.number().int().positive(),
  unlockedCount: z.number().int().nonnegative(),
  progressPercent: z.number().min(0).max(100),
  leadAchievementKey: footprintAchievementKeySchema.nullable(),
});

export const footprintAchievementSummarySchema = z.object({
  totalCount: z.number().int().positive(),
  unlockedCount: z.number().int().nonnegative(),
  progressPercent: z.number().min(0).max(100),
  percentileOvercome: z.number().int().min(0).max(99),
  activeTenantBaseCount: z.number().int().positive(),
  activeWindowDays: z.number().int().positive(),
  nextAchievementKey: footprintAchievementKeySchema.nullable(),
  latestUnlockedKey: footprintAchievementKeySchema.nullable(),
  latestUnlockedAt: z.string().datetime().nullable(),
  celebrationCandidateKey: footprintAchievementKeySchema.nullable(),
  celebrationCandidateAt: z.string().datetime().nullable(),
});

export const footprintAchievementShareBannerSchema = z.object({
  achievementKey: footprintAchievementKeySchema,
  achievementTitle: z.string().trim().min(1).max(40),
  achievementSubtitle: z.string().trim().min(1).max(80),
  shareHeadline: z.string().trim().min(1).max(80),
  imageUrl: footprintAchievementNullableImageUrlSchema,
  percentileOvercome: z.number().int().min(0).max(99),
  unlockedCount: z.number().int().nonnegative(),
  totalCount: z.number().int().positive(),
});

export const footprintAchievementPresentationResolvedSchema = z.object({
  title: z.string().trim().min(1).max(40),
  subtitle: z.string().trim().min(1).max(80),
  shareHeadline: z.string().trim().min(1).max(80),
  imageUrl: footprintAchievementNullableImageUrlSchema,
});

export const footprintAchievementPresentationOverrideSchema = z.object({
  title: z.string().trim().max(40).nullable(),
  subtitle: z.string().trim().max(80).nullable(),
  shareHeadline: z.string().trim().max(80).nullable(),
});

export const footprintAchievementPresentationStoredOverrideSchema =
  footprintAchievementPresentationOverrideSchema.extend({
    shareImageStorageKey: footprintAchievementNullableStorageKeySchema,
  });

export const adminFootprintAchievementPresentationItemSchema = z.object({
  achievementKey: footprintAchievementKeySchema,
  family: footprintAchievementFamilySchema,
  requirementSummary: z.string().trim().min(1).max(120),
  promptScene: z.string().trim().min(1).max(120),
  defaultPresentation: footprintAchievementPresentationResolvedSchema,
  presentation: footprintAchievementPresentationResolvedSchema,
  overrides: footprintAchievementPresentationStoredOverrideSchema,
});

export const listAdminFootprintAchievementPresentationsResponseSchema = z.object({
  items: z.array(adminFootprintAchievementPresentationItemSchema).length(FOOTPRINT_ACHIEVEMENT_CATALOG.length),
});

export const updateAdminFootprintAchievementPresentationRequestSchema = z.object({
  presentation: footprintAchievementPresentationOverrideSchema,
});

export const updateAdminFootprintAchievementPresentationResponseSchema = z.object({
  item: adminFootprintAchievementPresentationItemSchema,
  auditLogId: z.string().min(1),
});

export const resetAdminFootprintAchievementPresentationResponseSchema = z.object({
  item: adminFootprintAchievementPresentationItemSchema,
  auditLogId: z.string().min(1),
});

export const footprintAchievementPresentationAssetSchema = z.object({
  key: z.string().trim().min(1).max(500),
  url: z.string().trim().min(1).max(1000),
  contentType: z.string().trim().min(1).max(255).nullable(),
  sizeBytes: z.string().trim().min(1).max(40),
});

export const uploadAdminFootprintAchievementPresentationImageResponseSchema = z.object({
  asset: footprintAchievementPresentationAssetSchema,
  item: adminFootprintAchievementPresentationItemSchema,
  auditLogId: z.string().min(1),
});

export const footprintAchievementsOverviewResponseSchema = z.object({
  summary: footprintAchievementSummarySchema,
  families: z.array(footprintAchievementFamilyProgressSchema).length(4),
  achievements: z.array(footprintAchievementItemSchema).length(FOOTPRINT_ACHIEVEMENT_CATALOG.length),
  shareBanner: footprintAchievementShareBannerSchema.nullable().optional(),
});

export const acknowledgeFootprintAchievementCelebrationRequestSchema = z.object({
  achievementKey: footprintAchievementKeySchema,
});

export const acknowledgeFootprintAchievementCelebrationResponseSchema = z.object({
  ok: z.literal(true),
});

export type FootprintAchievementFamily = z.infer<typeof footprintAchievementFamilySchema>;
export type FootprintAchievementKey = z.infer<typeof footprintAchievementKeySchema>;
export type FootprintAchievementProgressUnit = z.infer<typeof footprintAchievementProgressUnitSchema>;
export type FootprintAchievementCatalogItem = z.infer<typeof footprintAchievementCatalogItemSchema>;
export type FootprintAchievementItem = z.infer<typeof footprintAchievementItemSchema>;
export type FootprintAchievementFamilyProgress = z.infer<typeof footprintAchievementFamilyProgressSchema>;
export type FootprintAchievementSummary = z.infer<typeof footprintAchievementSummarySchema>;
export type FootprintAchievementShareBanner = z.infer<typeof footprintAchievementShareBannerSchema>;
export type FootprintAchievementsOverviewResponse = z.infer<typeof footprintAchievementsOverviewResponseSchema>;
export type AcknowledgeFootprintAchievementCelebrationRequest = z.infer<
  typeof acknowledgeFootprintAchievementCelebrationRequestSchema
>;
export type AcknowledgeFootprintAchievementCelebrationResponse = z.infer<
  typeof acknowledgeFootprintAchievementCelebrationResponseSchema
>;
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
