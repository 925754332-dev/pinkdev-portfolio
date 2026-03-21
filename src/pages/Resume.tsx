import { useEffect } from 'react';
import './Resume.css';

const Resume = () => {
  useEffect(() => {
    console.log('Resume Page Loaded Successfully! ✨');
  }, []);

  return (
    <div className="resume-page">
      <div className="resume-paper">
        {/* Sidebar */}
        <aside className="resume-sidebar">
          <div className="resume-avatar">
            <img src="/images/钟迎港33038119970222014X---d317a64f-5a57-4112-8336-3ca66b96ab20.jpg" alt="Kelly Zhong" />
          </div>

          <section>
            <h2 className="resume-section-title">基本信息</h2>
            <div className="contact-item">👤 Kelly Zhong | 女 | 26岁</div>
            <div className="contact-item">📧 925754332@qq.com</div>
            <div className="contact-item">📱 15542482022</div>
            <div className="contact-item">💼 5年+工作经验</div>
            <div className="contact-item">🎯 求职：前端开发工程师</div>
            <div className="contact-item">🌍 期望城市：杭州</div>
          </section>

          <section>
            <h2 className="resume-section-title">专业技能</h2>
            <div className="skills-list">
              <span className="skill-tag solid">React</span>
              <span className="skill-tag solid">Angular</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Android</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">PS / AI</span>
              <span className="skill-tag">Unity3d</span>
              <span className="skill-tag">Webpack/Babel/Vite</span>
            </div>
          </section>

          <section>
            <h2 className="resume-section-title">语言能力</h2>
            <div className="lang-item">• 中文 (母语)</div>
            <div className="lang-item">• 英语 (雅思 7.0)</div>
          </section>

          <section>
            <h2 className="resume-section-title">教育背景</h2>
            <div className="edu-text">
              <strong>硕士 | 设计与数字媒体</strong><br />
              爱丁堡大学 (2019-2020)<br />
              GPA: 83/100, 排名: 12/61
            </div>
            <div className="edu-text">
              <strong>本科 | 物联网工程</strong><br />
              大连海事大学 (2015-2019)<br />
              GPA: 83/100, 排名: 15/61
            </div>
          </section>
        </aside>

        {/* Main Content */}
        <main className="resume-main">
          <header className="resume-header">
            <h1>Kelly Zhong</h1>
            <p className="tagline">前端开发工程师 | 华为</p>
          </header>

          <section>
            <h2 className="content-block-title">个人优势</h2>
            <ul className="bullet-list">
              <li>拥有5年+的前端开发经验，专注于产品线公共平台的前端开发，并参与开发过20+个前端项目</li>
              <li>精通前端框架React、Angular，能够灵活运用这些框架进行高效开发</li>
              <li>除了前端开发技能，还掌握非前端语言Android和Java，展现出跨领域的技术实力</li>
              <li>具备快速上手和高效开发的能力，能够迅速适应新的技术和项目需求</li>
              <li>具备UX设计经验，熟练掌握Photoshop、AI、Flash等设计软件，能够将设计思维融入到网页开发中，提升用户体验</li>
              <li>掌握3D可视化技术，包括Unity3d和WebGL，能够为项目添加更丰富的视觉效果</li>
              <li>擅长动效开发，熟悉svg和canvas动画，能够为网页添加生动的动态效果</li>
              <li>掌握工程化相关内容 (webpack/babel/vite)，具备良好的工程化实践和优化能力，能够提高开发效率和项目质量</li>
              <li>英语阅读能力良好，有留学经历，雅思成绩7.0，能够流畅阅读英语技术文档和资料</li>
            </ul>
          </section>

          <section>
            <h2 className="content-block-title">工作经历</h2>
            <div className="experience-item">
              <div className="exp-header">
                <h3>前端开发工程师 @ 华为</h3>
                <span className="date">2021.01 - 至今</span>
              </div>
              <ul className="bullet-list">
                <li>负责产品线公共平台的相关前端开发任务，会根据业务需求，分时间负责不同的项目</li>
                <li>作为接口人，定位和解决问题，曾处理问题单350+</li>
                <li>负责功能模块的软件设计、开发、单元测试的编写和与后端联调工作</li>
                <li>100%的还原设计稿，实现前端页面，并从开发和客户的角度提出交互设计建议</li>
                <li>维护项目代码质量，检视开发的代码，必要时对代码进行重构</li>
                <li>研究前沿前端技术，总结工作经验，编写技术文档，分享前端经验</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="content-block-title">项目经历</h2>
            
            <div className="project-item">
              <div className="project-with-img">
                <div className="proj-img">
                  <img src="/images/generated-1772463847239.png" alt="华为蓝鲸应用商城" />
                </div>
                <div>
                  <div className="proj-header">
                    <h3>华为蓝鲸应用商城</h3>
                    <span className="proj-badge">React + Live UI</span>
                  </div>
                  <p className="proj-desc">一站式 IT 应用解决方案集成平台，是产品线重点项目，已有超过120+主流应用上架。采用 React 框架，使用 Live UI 组件和 ant-mobile 组件，适配PC端和移动端。</p>
                  <p className="proj-desc">作为前端开发负责人，负责大颗粒需求的软件设计、需求分析，承担日常的进度对齐工作，同时开发大颗粒需求内容。经手 20+ 项目，主要涉及 React、Angular 两大技术框架。处理问题单 350+，100% 还原设计稿，从开发和客户角度提出交互设计建议。</p>
                </div>
              </div>
            </div>

            <div className="project-item">
              <div className="project-with-img">
                <div className="proj-img">
                  <img src="/images/generated-1772462706845.png" alt="Live UI 组件库" />
                </div>
                <div>
                  <div className="proj-header">
                    <h3>Live UI (React) 组件库</h3>
                    <span className="proj-badge">React Components</span>
                  </div>
                  <p className="proj-desc">该 React 组件库为公司内部项目，项目供产品线所有 React 前端项目使用，采用最新的 Live Design 3.0 规范。</p>
                  <ul className="bullet-list compact">
                    <li>独立完成两个组件 slide、layout</li>
                    <li>独立补齐了表格的拓展功能：表格拖拽、表格下展、总结栏、虚拟滚动等</li>
                    <li>完成组件动效实现（select、modal、drawer、tag group、checkbox）</li>
                    <li>完成竞品分析，充分理解4+1设计原则，绘制逻辑视图、流程图，输出软件设计文档</li>
                    <li>编写4个组件的单元测试，覆盖率均达到70%以上</li>
                    <li>作为组件的接口人，精准定位解决全组件问题30+</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-item">
              <div className="project-with-img">
                <div className="proj-img">
                  <img src="/images/generated-1772462714234.png" alt="manageOne 可视化大屏" />
                </div>
                <div>
                  <div className="proj-header">
                    <h3>manageOne 可视化大屏项目</h3>
                    <span className="proj-badge">React + ECharts</span>
                  </div>
                  <p className="proj-desc">该项目为产品线内普遍使用的可视化大屏项目，被 dme 等项目使用，实现简单编辑就生成酷炫大屏的功能。采用 React 框架和 Echarts。</p>
                  <ul className="bullet-list compact">
                    <li>开发2.0版本，采用新的视觉规范，对线型图、饼图、面积图等10+基本图形进行了功能升级，增加了样式颜色自定义功能</li>
                    <li>无修改引入问题，重构图形编辑页面和项目代码结构，缩减代码10%</li>
                    <li>自己独立研发了地图组件，实现倾斜+透视效果</li>
                    <li>使用自研的经纬度转坐标算法，满足通过省份来定位，还能够改变颜色，阴影样式等</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-item">
              <div className="project-with-img">
                <div className="proj-img">
                  <img src="/images/generated-1772462667875.png" alt="DME 数据管理引擎" />
                </div>
                <div>
                  <div className="proj-header">
                    <h3>DME 数据管理引擎</h3>
                    <span className="proj-badge">Angular</span>
                  </div>
                  <p className="proj-desc">该项目为华为 IT 基础设施智能运维与数据智能管理平台，使用 Angular 框架。</p>
                  <ul className="bullet-list compact">
                    <li>独立负责超融合、块文件发放等重点模块的开发，完成3个大版本迭代的开发</li>
                    <li>并担任虚拟化模块的接口人，负责定位和解决问题</li>
                    <li>在不熟悉项目的情况下也能快速定位，迅速承担责任，修改问题单50+</li>
                    <li>获得版本之星称号</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
