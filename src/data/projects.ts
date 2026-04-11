export interface Project {
  id: number;
  title: string;
  category: string;
  badge: string;
  desc: string;
  longDesc: string;
  tags: string[];
  image: string;
  badgeColor: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Pink-Keyboard-Final',
    category: 'Coding',
    badge: 'TypeScript',
    desc: '一个令人满意的粉色数字键盘应用程序，使用 TypeScript 构建。',
    longDesc: 'A satisfying pink numeric keypad application built with TypeScript. Leveraged Gemini AI Studio for rapid UI/UX prototyping. A fun project combining visual aesthetics with smooth interactions.',
    tags: ['#TypeScript', '#React', '#UI/UX'],
    image: '/images/generated-1772464124258.png',
    badgeColor: '#FF85A1'
  },
  {
    id: 2,
    title: '华为蓝鲸应用商城',
    category: 'Coding',
    badge: 'React + Live UI',
    desc: '一站式 IT 应用解决方案集成平台，产品线重点项目，已有超过 120+ 主流应用上架。',
    longDesc: '作为前端开发负责人，负责大颗粒需求的软件设计、需求分析，承担日常的进度对齐工作，同时开发大颗粒需求内容。经手 20+ 项目，主要涉及 React、Angular 两大技术框架。处理问题单 350+，100% 还原设计稿，从开发和客户角度提出交互设计建议。',
    tags: ['#React', '#Angular', '#Live-UI', '#Ant-Mobile'],
    image: '/images/generated-1772463847239.png',
    badgeColor: '#82A0D8'
  },
  {
    id: 3,
    title: 'Live UI (React) 组件库',
    category: 'Coding',
    badge: 'React Components',
    desc: '公司内源项目，供产品线所有 React 前端项目使用，采用最新的 Live Design 3.0 规范。',
    longDesc: '独立完成两个组件 slide、layout，补齐表格的拓展功能：表格拖拽、表格下展、总结栏、虚拟滚动等。完成组件动效实现（select、modal、drawer、tag group、checkbox）。编写 4 个组件的单元测试，覆盖率均达到 70% 以上。作为组件的接口人，精准定位解决全组件问题 30+。',
    tags: ['#React', '#Components', '#Unit-Testing', '#Design-System'],
    image: '/images/generated-1772462706845.png',
    badgeColor: '#FF85A1'
  },
  {
    id: 4,
    title: 'manageOne 可视化大屏',
    category: 'Coding',
    badge: 'React + ECharts',
    desc: '产品线内普遍使用的可视化大屏项目，实现简单编辑就生成酷炫大屏的功能。',
    longDesc: '开发 2.0 版本，采用新的视觉规范，对线型图、饼图、面积图等 10+ 基本图形进行了功能升级，增加了样式颜色自定义功能。重构图形编辑页面和项目代码结构，缩减代码 10%。独立研发地图组件，实现倾斜+透视效果，使用自研的经纬度转坐标算法。',
    tags: ['#React', '#ECharts', '#Visualization', '#Map-Component'],
    image: '/images/generated-1772462714234.png',
    badgeColor: '#86C59E'
  },
  {
    id: 5,
    title: 'DME 数据管理引擎',
    category: 'Coding',
    badge: 'Angular',
    desc: '华为 IT 基础设施智能运维与数据智能管理平台，使用 Angular 框架。',
    longDesc: '独立负责超融合、块文件发放等重点模块的开发，完成 3 个大版本迭代的开发。并担任虚拟化模块的接口人，负责定位和解决问题，在不熟悉项目的情况下也能快速定位，迅速担责，修改问题单 50+，获得版本之星称号。',
    tags: ['#Angular', '#TypeScript', '#Enterprise-App'],
    image: '/images/generated-1772462667875.png',
    badgeColor: '#B092D5'
  },
  {
    id: 6,
    title: '小艺开放平台 UI 框架（AgentGUI 二期）',
    category: 'Coding',
    badge: 'React · AI工程化',
    desc: '主导小艺 AgentGUI 二期架构，支持插件/工作流/事件调用，解决循环依赖瓶颈，开发效率提升 40%。',
    longDesc: '原有框架无法处理复杂工作流中的循环依赖。首创字符串拼接异步调用方式，从底层逻辑规避循环依赖；设计前端防抖与手动中断逻辑，接口响应效能提升 25%；深入 AbilityCard 与 MarkdownContent 源码，完成多模态 UI 抽象封装。成功支持 9 图发送、拖拽等复杂交互，项目零 Bug 按时交付。',
    tags: ['#React', '#AgentGUI', '#AI工程化', '#多模态UI'],
    image: '/images/generated-1772463847239.png',
    badgeColor: '#FF85A1'
  },
  {
    id: 7,
    title: '东海项目（智能聊天/群组生态）',
    category: 'Coding',
    badge: 'React · 高复杂度交互',
    desc: '高压下完成智能体 @ 唤起、多维度头像拼接、分享链路等高复杂度交互功能，节前演示圆满成功。',
    longDesc: '需在极短时间内上线智能体 @ 唤起、多维度头像拼接、分享链路等高复杂度交互功能。快速完成群组 @ 智能体逻辑、高复用群聊分享组件、多规格头像拼接算法。完成手机镜像环境深度定制，主导群组模块核心接口（500 行+）从零开发。节前演示圆满成功，获客户验收邮件。',
    tags: ['#React', '#智能体', '#群组生态', '#高压交付'],
    image: '/images/generated-1772462706845.png',
    badgeColor: '#82A0D8'
  },
  {
    id: 8,
    title: 'AI 辅助编程实践（OpenClaw / SDD 模式）',
    category: 'Coding',
    badge: 'AI · 效能革新',
    desc: '落地 SDD（规范驱动开发）流程，验证"UI 生成→代码还原"闭环，带动团队效率提升 35%。',
    longDesc: '传统编码模式重复率高，团队急需探索 AI 驱动的新一代研发模式。配置 OpenClaw 深度集成飞书/QQ，实现日报自动化与多类型文档（docx）阅读；应用 OpenSpec+Trae 跑通 SDD 全链路，配套 Gemini CLI 进行完整功能开发。带动团队开发重复率降低 45%，整体效率提升 35%，成为部门 AI 编程技术标杆。',
    tags: ['#OpenClaw', '#SDD', '#AI编程', '#效能革新'],
    image: '/images/generated-1772462714234.png',
    badgeColor: '#86C59E'
  }
];
