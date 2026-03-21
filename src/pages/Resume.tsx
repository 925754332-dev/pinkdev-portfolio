import { useEffect } from 'react';
import './Resume.css';

const Resume = () => {
  useEffect(() => {
    console.log('Resume Page Loaded Successfully! ✨');
  }, []);

  return (
    <div className="resume-page">
      <div className="resume-content">
        {/* Hero */}
        <header className="resume-hero">
          <h1>Kelly Zhong</h1>
          <p className="hero-subtitle">前端开发工程师 · 华为</p>
          <div className="hero-contact">
            <span>925754332@qq.com</span>
            <span className="dot">·</span>
            <span>15542482022</span>
            <span className="dot">·</span>
            <span>杭州</span>
          </div>
        </header>

        {/* Skills */}
        <section className="resume-section">
          <h2>技能</h2>
          <div className="tags">
            <span className="tag active">React</span>
            <span className="tag active">Angular</span>
            <span className="tag">TypeScript</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Android</span>
            <span className="tag">Java</span>
            <span className="tag">Webpack / Babel / Vite</span>
            <span className="tag">PS / AI</span>
            <span className="tag">Unity3d</span>
          </div>
        </section>

        {/* Strengths */}
        <section className="resume-section">
          <h2>个人优势</h2>
          <ul className="highlights">
            <li>5年+ 前端开发经验，参与 20+ 个项目</li>
            <li>精通 React、Angular，掌握 Android / Java 跨端能力</li>
            <li>有 UX 设计经验，能从产品视角提出交互建议</li>
            <li>掌握 3D 可视化（Unity3d / WebGL）和动效开发</li>
            <li>雅思 7.0，有留学经历，能流畅阅读英文文档</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2>工作经历</h2>
          <div className="exp">
            <div className="exp-header">
              <strong>华为 · 前端开发工程师</strong>
              <span className="exp-date">2021.01 — 至今</span>
            </div>
            <p>负责产品线公共平台前端开发，作为接口人处理问题单 350+，100% 还原设计稿。负责软件设计、需求分析、进度对齐、单元测试和后端联调。</p>
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2>项目经历</h2>

          <div className="project">
            <div className="proj-header">
              <strong>华为蓝鲸应用商城</strong>
              <span className="proj-tag">React + Live UI</span>
            </div>
            <p>一站式 IT 应用集成平台，120+ 主流应用上架。作为前端负责人，承担大颗粒需求的设计和开发，处理 350+ 问题单。</p>
          </div>

          <div className="project">
            <div className="proj-header">
              <strong>Live UI (React) 组件库</strong>
              <span className="proj-tag">React Components</span>
            </div>
            <p>公司内部 React 组件库，采用 Live Design 3.0 规范。独立完成 slide、layout 组件，补齐表格扩展功能（拖拽、虚拟滚动等），完成竞品分析和软件设计文档。</p>
          </div>

          <div className="project">
            <div className="proj-header">
              <strong>manageOne 可视化大屏</strong>
              <span className="proj-tag">React + ECharts</span>
            </div>
            <p>可视化大屏项目，2.0 版本升级 30+ 基本图形，自研地图组件实现倾斜透视效果，自研经纬度转坐标算法。</p>
          </div>

          <div className="project">
            <div className="proj-header">
              <strong>DME 数据管理引擎</strong>
              <span className="proj-tag">Angular</span>
            </div>
            <p>华为 IT 基础设施智能运维平台。独立负责超融合、块文件等重点模块，完成 3 个大版本迭代，获「版本之星」称号。</p>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2>教育背景</h2>
          <div className="edu">
            <div className="edu-item">
              <strong>硕士 · 设计与数字媒体</strong>
              <span>爱丁堡大学 (2019-2020) · GPA 83/100</span>
            </div>
            <div className="edu-item">
              <strong>本科 · 物联网工程</strong>
              <span>大连海事大学 (2015-2019) · GPA 83/100</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
