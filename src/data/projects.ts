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
  link?: string;
}

export const projects: Project[] = [
  {
    id: 8,
    title: 'AmiTrip - AI 旅行规划',
    category: 'Vibe Coding',
    badge: 'React + Gemini',
    desc: '基于 Gemini 构建的智能旅行 Agent，支持模糊指令生成与实时动态重规划。',
    longDesc: '开发了一个能够根据模糊指令自主生成、动态调整并实时协作的旅行规划 Agent。核心技术栈：React, Gemini, TypeScript, Three.js, Firebase, Wikipedia API。利用 Gemini Structured Output 实现了 AI 逻辑与业务模型解耦，输出 100% 机器可读数据；实现"环境感知"重规划机制，动态对齐行程细节；通过 Prompt Engineering 引导模拟工具调用，打通信息生成到动作引导闭环；利用 Firebase 维护长时记忆，支持 User-in-the-loop 交互微调。',
    tags: ['#React', '#Gemini', '#AI-Agent', '#Three.js'],
    image: '/images/amitrip-preview.png',
    badgeColor: '#FFB347',
    link: 'https://ai.studio/apps/2e633e26-ccb9-4a67-919e-7ece99b323ee'
  },
  {
    id: 1,
    title: 'Pink Keyboard 解压键盘',
    category: 'Vibe Coding',
    badge: 'TypeScript',
    desc: '一个解压键盘，用Google ai studio生成，配上优雅的音乐和爆出来的字符，非常解压。',
    longDesc: '一个解压键盘，用Google ai studio生成，配上优雅的音乐，和爆出来的字符，非常解压。',
    tags: ['#TypeScript', '#React', '#UI/UX'],
    image: '/images/pink-keyboard.png',
    badgeColor: '#FF85A1',
    link: 'https://pink-keyboard.vercel.app/'
  },
  {
    id: 6,
    title: '小艺开放平台',
    category: '古法编程',
    badge: '卡片系统 SE / 核心开发',
    desc: '主导多模态 UI 框架架构设计，支撑华为音乐、喜马拉雅等生态接入，攻克 AbilityCard 循环依赖难题。',
    longDesc: '主导小艺开放平台多模态 UI 框架设计与演进。从零构建 GUI 二期云端插件关联与工作流闭环逻辑；技术性攻克 AbilityCard 与 MarkdownContent 循环依赖难题，实现底层能力归一化。独立承担华为音乐 onApp 卡片场景架构设计，拆解为 13 个子模块并定义 DSL，成功支撑 HDC 大会演示。深挖 UIExtension 卡片渲染痛点，通过重构生命周期与重载方案解决加载黑屏、尺寸受限等问题。',
    tags: ['#React', '#AgentGUI', '#AI工程化', '#多模态UI'],
    image: '/images/xiaoyi-platform-official.png',
    badgeColor: '#FF85A1'
  },
  {
    id: 7,
    title: '小艺 APP',
    category: 'Vibe Coding',
    badge: '鸿蒙开发',
    desc: '全栈负责多图创作引擎突破与东海社交协同项目，构建支持 9 图并发创作能力，达成高质量清零验收。',
    longDesc: '面向小艺端侧主对话、编创及东海场景。全栈构建支持最高 9 图并发创作与流式发送的端侧链路，重构待发送区及拖拽排序逻辑。主导东海项目关系链与群组核心交互模块，攻克群组 @智能体 唤醒链路及多成员头像动态拼接算法，大幅压降现网环境问题，最终达成高质量清零验收。',
    tags: ['#React', '#智能体', '#群组生态', '#高压交付'],
    image: '/images/xiaoyi-app-official.jpg',
    badgeColor: '#82A0D8'
  },
  {
    id: 2,
    title: '华为蓝鲸应用商城',
    category: '古法编程',
    badge: 'React + Live UI',
    desc: '一站式 IT 应用解决方案集成平台，产品线重点项目，已有超过 120+ 主流应用上架。',
    longDesc: '作为前端开发负责人，负责大颗粒需求的软件设计、需求分析，承担日常的进度对齐工作，同时开发大颗粒需求内容风控回扫、用户留资弹窗等，曾一人对接5个后端开发，在本地进行 mock ，实现前端先行，顺利完成联调。保证按时版本交付，无红线问题，缺陷率仅为0.54。',
    tags: ['#React', '#Angular', '#Live-UI', '#Ant-Mobile'],
    image: '/images/generated-1772463847239.png',
    badgeColor: '#82A0D8'
  },
  {
    id: 3,
    title: 'Live UI (React) 组件库',
    category: '古法编程',
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
    category: '古法编程',
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
    category: '古法编程',
    badge: 'Angular',
    desc: '华为 IT 基础设施智能运维与数据智能管理平台，使用 Angular 框架。',
    longDesc: '独立负责超融合、块文件发放等重点模块的开发，完成 3 个大版本迭代的开发。并担任虚拟化模块的接口人，负责定位和解决问题，在不熟悉项目的情况下也能快速定位，迅速担责，修改问题单 50+，获得版本之星称号。',
    tags: ['#Angular', '#TypeScript', '#Enterprise-App'],
    image: '/images/dme-official.jpg',
    badgeColor: '#B092D5'
  }
];
