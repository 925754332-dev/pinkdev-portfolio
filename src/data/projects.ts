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
  }
];
