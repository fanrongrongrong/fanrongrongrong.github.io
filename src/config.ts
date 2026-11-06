export const siteConfig = {
  name: "烦容容",
  title: "17 岁 · 高中生 · 独立开发者",
  description: "烦容容：17 岁高中生独立开发者，一人开发的产品卖出约 425 单，同时研究 AI 角色、长期记忆和人格复刻。",
  github: "https://github.com/fanrongrongrong",
  highlights: [
    { value: "≈425", label: "词过累计订单，截至 2026 年 10 月底" },
    { value: "v38", label: "同一款产品的持续线上迭代" },
    { value: "88,282", label: "人格复刻项目处理的真实聊天消息" },
    { value: "21,356", label: "拆解出的“上文 → 回复”语料" },
    { value: "31", label: "蒸馏一个角色时梳理的来源" },
    { value: "2,588", label: "小红书单条图文最高浏览" },
  ],
  manifesto:
    "别人还在写 Demo 的时候，我已经在处理真实用户的订单、存档事故和留存数据。我不把 AI 当玩具，我用它把一个高中生的产能放大成一支小团队：想法、架构、代码、部署、增长，全部自己扛。",
  skills: [
    {
      name: "从 0 到收入",
      detail: "一个人完成产品定义、开发、上线、定价和增长，让用户真的掏钱。",
    },
    {
      name: "AI 原生开发",
      detail: "用 Claude Code 把一个人的迭代速度拉满，同时用回归测试守住线上质量。",
    },
    {
      name: "AI 记忆与角色",
      detail: "双阶段检索、分层记忆、记忆回滚和防漂移规则，让 AI 记得住、不跑偏。",
    },
    {
      name: "硬核问题攻坚",
      detail: "现成工具失效时，下沉到系统 API 层自己解决，不等别人修。",
    },
  ],
  projects: [
    {
      name: "词过",
      tagline: "一个人做出来的付费产品",
      claim: "从第一行代码到约 425 单，产品、开发、增长全是我。",
      challenge: "背单词赛道巨头林立，独立开发者要同时解决学习效果、付费转化和数据安全。",
      bullets: [
        "搭建考频排序、间隔复习、主动测试和错题回流组成的完整学习闭环",
        "AI 助记先生成、再由推理模型复查，把错误内容挡在用户前面；AI 服务走 Edge Function，密钥不进前端",
        "处理真实事故：空白存档覆盖云端进度的问题已在外壳层拦截，并补上回归测试",
        "用云存档数据做留存分析，反过来调整新手引导和功能结构",
      ],
      metrics: ["≈425 单", "一人开发", "v38 持续迭代"],
      tags: ["React", "Edge Function", "DeepSeek", "IndexedDB"],
      links: [{ label: "在线体验", url: "https://app-d8lnj4gf9edd.appmiaoda.com" }],
    },
    {
      name: "多角色 AI 手机",
      tagline: "一个会记事、有作息、会主动找你的角色系统",
      claim: "把 AI 聊天做成一个“活着”的世界，而不是一个输入框。",
      challenge: "普通 AI 聊天没有连续生活：记不住事，也不会主动，聊久了还容易变味。",
      bullets: [
        "实现 bge-m3 向量召回加 bge-reranker 重排，并按记忆强度加权",
        "记忆带来源水位，用户撤销消息时，相关记忆和画像能同步回滚",
        "用作息状态机驱动睡眠、勿扰和醒后补回消息，由模型决定是否主动联系",
        "按任务编排 Claude、DeepSeek、gpt-image-2 和百炼语音，兼顾体验和成本",
      ],
      metrics: ["约 4300 行单页 PWA", "双阶段记忆检索", "多模型编排"],
      tags: ["PWA", "RAG", "Agent", "Cloudflare Worker"],
      note: "非公开项目，可当面演示",
    },
    {
      name: "人格复刻系统",
      tagline: "把“像不像”从感觉变成可以检验的问题",
      claim: "用 88,282 条真实消息，拆解一个人的说话方式。",
      challenge: "纯人设 Prompt 只能模仿表面语气，记不住真实经历，也说不清到底像不像。",
      bullets: [
        "构建文体、语域、记忆、信念四层模型，分别解决不同问题",
        "把 19,220 组回复的统计特征写成硬约束，不靠印象调语气",
        "用 BM25 检索 7,866 个会话窗口，查不到就拒绝编造",
        "按时间留出最后 10% 作测试集，设计盲测流程，用评测替代自我感觉",
      ],
      metrics: ["88,282 条消息", "21,356 组语料", "留出集 + 盲测"],
      tags: ["Python", "BM25", "统计语言特征", "评测设计"],
      note: "数据和代码不公开",
    },
    {
      name: "wechat-mac-auto-export",
      tagline: "主流工具失效时，我换了一条路",
      claim: "不猜内存特征，直接在系统函数层拿到密钥。",
      challenge: "常见工具靠扫描内存特征取密钥，微信小版本一更新就可能失效。",
      bullets: [
        "用 Frida Hook 系统的 CCKeyDerivationPBKDF，在密钥派生时直接拿到结果",
        "打通解密、导出 JSONL 和 launchd 定时任务，做到无人值守",
        "加入登录界面安全阀，并把原理和踩坑过程写成公开教程",
      ],
      metrics: ["系统 API 层方案", "无人值守", "公开仓库"],
      tags: ["Python", "Frida", "SQLCipher", "launchd"],
      links: [{ label: "GitHub", url: "https://github.com/fanrongrongrong/wechat-mac-auto-export" }],
    },
    {
      name: "高保真角色蒸馏",
      tagline: "用证据写角色，而不是凭感觉",
      claim: "从原作字幕里统计出 wiki 都没写的说话习惯。",
      challenge: "大模型扮演角色容易事实出错，越聊越温柔，也越聊越不像。",
      bullets: [
        "蒸馏 31 个来源和原作字幕，提炼出 7 个核心行为模式",
        "建立“纠错记录 > 字幕统计 > 其他资料”的证据优先级",
        "设计反讨好、防长对话漂移和防口癖复读规则",
        "用懂原作的人的问卷校准，形成持续变像的闭环",
      ],
      metrics: ["31 个来源", "7 个行为模式", "持续校准闭环"],
      tags: ["语料统计", "角色设计", "Prompt 工程"],
      note: "非公开项目",
    },
    {
      name: "oc-guard",
      tagline: "给原创者的盲水印防盗工具",
      claim: "图片被压缩、缩放、截图后，水印依然能追溯来源。",
      challenge: "原创图被转发和压缩后，普通水印要么碍眼，要么很快失效。",
      bullets: [
        "实现盲水印和以图搜图巡查，覆盖从加印到发现盗图的流程",
        "可为每次外发生成独立编号，泄露后能查到是哪一份",
        "README 记录的实测：能承受 JPEG q50、缩放、调亮度、裁边和截图后缩小",
      ],
      metrics: ["盲水印", "来源追溯", "网页版 + Python 版"],
      tags: ["图像处理", "Python", "Web"],
      links: [
        { label: "在线使用", url: "https://fanrongrongrong.github.io/oc-guard/" },
        { label: "GitHub", url: "https://github.com/fanrongrongrong/oc-guard" },
      ],
    },
  ] as Project[],
};

type Project = {
  name: string;
  tagline: string;
  claim: string;
  challenge: string;
  bullets: string[];
  metrics: string[];
  tags: string[];
  links?: { label: string; url: string }[];
  note?: string;
};
