import { useEffect } from 'react';
import './Resume.css';

const Resume = () => {
  useEffect(() => {
    console.log('Resume Page Loaded Successfully! ✨');
  }, []);

  return (
    <div className="resume-page">
      <div className="resume-paper-v">
        {/* Top Header Section */}
        <header className="resume-header-v">
          <div className="header-top-row-v">
            {/* Left: Avatar */}
            <div className="header-left-v">
              <div className="resume-avatar-v">
                <img src="/images/钟迎港33038119970222014X---d317a64f-5a57-4112-8336-3ca66b96ab20.jpg" alt="Kelly Zhong" />
              </div>
            </div>

            {/* Right: Name & Contacts */}
            <div className="header-text-info-v">
              <h1>钟迎港</h1>
              <p className="tagline-v">高级前端开发工程师 | 5 年 | 华为</p>
              <div className="contact-grid-v">
                <div className="contact-item-v">👤 Kelly Zhong | 女 | 26岁</div>
                <div className="contact-item-v">📧 925754332@qq.com</div>
                <div className="contact-item-v">📱 15542482022</div>
                <div className="contact-item-v">💼 5年+工作经验</div>
                <div className="contact-item-v">🎯 前端开发工程师</div>
                <div className="contact-item-v">🌍 杭州</div>
              </div>
            </div>
          </div>

          {/* Skills & Languages - Under Avatar, Above Pink Line */}
          <div className="header-bottom-row-v">
            <div className="skills-inline-v">
              <span className="skill-tag-v solid">React</span>
              <span className="skill-tag-v solid">Angular</span>
              <span className="skill-tag-v solid">Vue 3</span>
              <span className="skill-tag-v">TypeScript（精通）</span>
              <span className="skill-tag-v">JavaScript</span>
              <span className="skill-tag-v">OpenClaw 多 Agent</span>
              <span className="skill-tag-v">SDD 模式</span>
              <span className="skill-tag-v">OpenSpec+Trae</span>
              <span className="skill-tag-v">Android</span>
              <span className="skill-tag-v">鸿蒙 (HarmonyOS)</span>
              <span className="skill-tag-v">ECharts / D3.js / Canvas</span>
              <span className="skill-tag-v lang-tag-v">英语 (雅思 7.0)</span>
            </div>
          </div>
        </header>

        {/* Main Content Sections */}
        <main className="resume-content-v">
          <section className="resume-section-v">
            <h2 className="content-block-title-v">职业总结</h2>
            <ul className="bullet-list-v">
              <li><strong>5 年前端深耕（杭州）</strong>，精通 <strong>React / Angular / Vue3</strong> 三大主流框架</li>
              <li>在 <strong>AI 工程化</strong>与<strong>多模态 UI 抽象</strong>领域有深度实践，主导华为小艺 <strong>AgentGUI 二期框架</strong>建设</li>
              <li>首创 <strong>SDD（Spec-Driven Development）工作流</strong>，擅长性能调优与组件库架构</li>
              <li>代码缺陷率低至 <strong>0.54%</strong>，产出架构文档 10+ 份，具备极强的技术影响力</li>
              <li>爱丁堡大学硕士（雅思 7.0），中英双语沟通流畅，<strong>5+ 场组内技术分享</strong></li>
            </ul>
          </section>

          <section className="resume-section-v">
            <h2 className="content-block-title-v">教育背景</h2>
            <div className="edu-container-v">
              <div className="edu-item-v">
                <div className="edu-header-v">
                  <div className="edu-main-v">
                    <span className="edu-school-v">爱丁堡大学 (University of Edinburgh)</span>
                    <span className="edu-degree-v">硕士 | 设计与数字媒体</span>
                  </div>
                  <span className="date-v">2019.09 - 2020.11</span>
                </div>
                <div className="edu-details-v">
                  GPA: 83/100 | 排名: 12/61
                </div>
              </div>
              <div className="edu-item-v">
                <div className="edu-header-v">
                  <div className="edu-main-v">
                    <span className="edu-school-v">大连海事大学 (Dalian Maritime University)</span>
                    <span className="edu-degree-v">本科 | 物联网工程</span>
                  </div>
                  <span className="date-v">2015.09 - 2019.07</span>
                </div>
                <div className="edu-details-v">
                  GPA: 83/100 | 排名: 15/61
                </div>
              </div>
            </div>
          </section>



          <section className="resume-section-v">
            <h2 className="content-block-title-v">个人优势</h2>
            <ul className="bullet-list-v">
              <li>5年+前端开发经验，主导20+项目的前端开发，专注于产品线公共平台构建</li>
              <li>精通React、Angular、Vue 3三大框架，能够根据项目需求灵活选择技术栈</li>
              <li>跨领域技术能力：掌握Android原生开发和鸿蒙（HarmonyOS）ArkUI开发</li>
              <li>快速学习能力：能够迅速适应新技术和项目需求，高效完成开发任务</li>
              <li>设计思维：具备UX设计经验，熟练使用Photoshop、AI等设计工具，将设计理念融入前端开发</li>
              <li>视觉技术：掌握WebGL 3D可视化和SVG/Canvas动效开发，为项目提供丰富的视觉体验</li>
              <li>工程化能力：具备前端工程化实践和性能优化经验，显著提升开发效率和项目质量</li>
              <li>国际化视野：爱丁堡大学硕士，雅思7.0，能够流畅阅读英语技术文档和进行双语沟通</li>
            </ul>
          </section>

          <section className="resume-section-v">
            <h2 className="content-block-title-v">工作经历</h2>
            <div className="experience-item-v">
              <div className="exp-header-v">
                <h3>前端开发工程师 @ 华为</h3>
                <span className="date-v">2021.01 - 至今</span>
              </div>
              <ul className="bullet-list-v">
                <li><strong>技术领导力</strong>：主导小艺 AgentGUI 二期架构，支持插件/工作流/事件调用；担任技术评审核心成员</li>
                <li><strong>团队赋能</strong>：主导 Live UI 组件库建设，输出 6+ 核心动效组件，提升团队开发效率 <strong>30%</strong></li>
                <li><strong>效能革新</strong>：引入 AI 工具链（OpenSpec+Trae 等），落地 SDD 研发模式，提升交付效率 <strong>35%</strong></li>
                <li>负责产品线公共平台的相关前端开发任务，会根据业务需求，分时间负责不同的项目</li>
                <li>作为接口人，定位和解决问题，曾处理问题单350+</li>
                <li>100%的还原设计稿，实现前端页面，并从开发和客户的角度提出交互设计建议</li>
                <li>维护项目代码质量，检视开发的代码，必要时对代码进行重构，产出架构文档 10+ 份</li>
              </ul>
            </div>
          </section>

          <section className="resume-section-v">
            <h2 className="content-block-title-v">项目经历</h2>
            
            <div className="project-item-v">
              <div className="project-with-img-v">
                <div className="proj-img-v">
                  <img src="/images/xiaoyi-platform-official.png" alt="小艺开放平台" />
                </div>
                <div className="proj-content-v">
                  <div className="proj-header-v">
                    <h3>小艺开放平台</h3>
                    <span className="proj-badge-v">卡片系统 SE / 核心开发</span>
                  </div>
                  <p className="proj-desc-v">主导小艺开放平台多模态 UI 框架设计与演进，制定平台级架构规范，支撑华为音乐、喜马拉雅等内外生态接入。</p>
                  <ul className="bullet-list-v compact">
                    <li>🚀 核心架构 0-1 突破：为解决平台架构升级及“文本与卡片混排”需求，主导 GUI 二期多模态 UI 框架设计。从零构建云端插件关联与工作流闭环逻辑，攻克 AbilityCard 与 MarkdownContent 循环依赖难题，成功实现底层能力归一化，为平台生态接入奠定基础。</li>
                    <li>🌍 重量级生态场景落地：主导华为音乐（13项核心特性）与喜马拉雅智能体卡片设计，定义 DSL 规范并攻克流式输出、变量公式解析、多端适配等技术瓶颈，有力支撑 HDC 大会场景演示。</li>
                    <li>⚡ 性能调优与体验重构：深挖 UIExtension 卡片渲染痛点，通过重构生命周期与重载方案解决加载黑屏、尺寸受限及退出重进重新加载等问题，大幅提升渲染效率与交互流畅度。</li>
                    <li>📚 标准化业务资产沉淀：牵头梳理多模态 UI 抽象特征及可变属性基线，整合输出 platform 级 SE 设计方案基线与沟通矩阵。将零散的卡片业务逻辑进行云端标准化沉淀，有效提升团队后续开发协同效率。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-item-v">
              <div className="project-with-img-v">
                <div className="proj-img-v">
                  <img src="/images/xiaoyi-app-official.jpg" alt="小艺 APP" />
                </div>
                <div className="proj-content-v">
                  <div className="proj-header-v">
                    <h3>小艺 APP</h3>
                    <span className="proj-badge-v">鸿蒙开发</span>
                  </div>
                  <p className="proj-desc-v">面向小艺端侧主对话、编创及内部协同（东海）场景，提供极速响应的前端业务交付与复杂交互链路支持。</p>
                  <ul className="bullet-list-v compact">
                    <li>🎨 多图创作引擎突破：为解决 OBP 核心需求中的单图发送限制，全栈负责并构建支持最高 9 图并发创作与流式发送的端侧链路；重构待发送区及多图拖拽排序逻辑，打破端侧技术瓶颈，带来极致的创作交互体验。</li>
                    <li>👥 端侧社交协同攻坚：面向东海项目社交协同场景，从零构建前端工程环境并主导关系链与群组核心交互模块；攻克群组 @智能体 唤醒链路及多成员头像动态拼接算法，大幅压降现网环境问题，最终达成高质量清零验收。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-item-v">
              <div className="project-with-img-v">
                <div className="proj-img-v">
                  <img src="/images/amitrip-preview.png" alt="AmiTrip" />
                </div>
                <div className="proj-content-v">
                  <div className="proj-header-v">
                    <h3>AmiTrip - AI 原生智能旅行规划代理 (Agent)</h3>
                    <span className="proj-badge-v">React + Gemini 1.5 Flash</span>
                  </div>
                  <p className="proj-desc-v">开发了一个能够根据模糊指令自主生成、动态调整并实时协作的旅行规划 Agent。核心技术栈：React, Gemini 1.5 Flash, TypeScript, Three.js, Firebase, Wikipedia API。</p>
                  <ul className="bullet-list-v compact">
                    <li>🧠 <strong>结构化决策引擎</strong>：利用 Gemini Structured Output (JSON Schema) 实现了 AI 逻辑与前端业务模型的解耦，要求 AI 自主决策交通工具、酒店档次及地理坐标，输出率达到 100% 的机器可读数据</li>
                    <li>🔄 <strong>动态重规划逻辑</strong>：实现了 "环境感知"的重规划机制。当外部约束（如航班时间）改变时，Agent 能够基于当前状态（State）和新限制条件，自主触发逻辑闭环，重新计算并对齐所有后续行程细节</li>
                    <li>🛠️ <strong>多维工具集成</strong>：通过 Prompt Engineering 引导 Agent 模拟工具调用，动态生成 Google Maps 导航协议、Wikipedia 词条检索及酒店预订查询，实现了从"信息生成"到"动作引导"的闭环</li>
                    <li>💾 <strong>复杂状态机管理</strong>：通过 Firebase 和 React Hooks 维护 Agent 的长时记忆与当前上下文，支持用户通过自然语言对生成结果进行交互式微调（User-in-the-loop）</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-item-v">
              <div className="project-with-img-v">
                <div className="proj-img-v">
                  <img src="/images/generated-1772463847239.png" alt="华为蓝鲸应用商城" />
                </div>
                <div className="proj-content-v">
                  <div className="proj-header-v">
                    <h3>华为蓝鲸应用商城</h3>
                    <span className="proj-badge-v">React + Live UI</span>
                  </div>
                  <p className="proj-desc-v">一站式 IT 应用解决方案集成平台，是产品线重点项目，已有超过120+主流应用上架。采用 React 框架，使用 Live UI 组件，适配PC端和移动端。</p>
                  <p className="proj-desc-v">作为前端开发负责人，负责大颗粒需求的软件设计、需求分析，承担日常的进度对齐工作，同时开发大颗粒需求内容。经手 20+ 项目，主要涉及 React、Angular 两大技术框架。处理问题单 350+，100% 还原设计稿，从开发和客户角度提出交互设计建议。</p>
                </div>
              </div>
            </div>

            <div className="project-item-v">
              <div className="project-with-img-v">
                <div className="proj-img-v">
                  <img src="/images/generated-1772462706845.png" alt="Live UI 组件库" />
                </div>
                <div className="proj-content-v">
                  <div className="proj-header-v">
                    <h3>Live UI (React) 组件库</h3>
                    <span className="proj-badge-v">React Components</span>
                  </div>
                  <p className="proj-desc-v">该 React 组件库为公司内部项目，项目供产品线所有 React 前端项目使用，采用最新的 Live Design 3.0 规范。</p>
                  <ul className="bullet-list-v compact">
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

            <div className="project-item-v">
              <div className="project-with-img-v">
                <div className="proj-img-v">
                  <img src="/images/generated-1772462667875.png" alt="DME 数据管理引擎" />
                </div>
                <div className="proj-content-v">
                  <div className="proj-header-v">
                    <h3>DME 数据管理引擎</h3>
                    <span className="proj-badge-v">Angular</span>
                  </div>
                  <p className="proj-desc-v">该项目为华为 IT 基础设施智能运维与数据智能管理平台，使用 Angular 框架。</p>
                  <ul className="bullet-list-v compact">
                    <li>独立负责超融合、块文件发放等重点模块的开发，完成3个大版本迭代的开发</li>
                    <li>并担任虚拟化模块的接口人，负责定位和解决问题</li>
                    <li>在不熟悉项目的情况下也能快速定位，迅速承担责任，修改问题单50+</li>
                    <li>获得版本之星称号</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-item-v">
              <div className="project-with-img-v">
                <div className="proj-img-v">
                  <img src="/images/generated-1772462714234.png" alt="manageOne 可视化大屏" />
                </div>
                <div className="proj-content-v">
                  <div className="proj-header-v">
                    <h3>manageOne 可视化大屏项目</h3>
                    <span className="proj-badge-v">React + ECharts</span>
                  </div>
                  <p className="proj-desc-v">该项目为产品线内普遍使用的可视化大屏项目，被 dme 等项目使用，实现简单编辑就生成酷炫大屏的功能。采用 React 框架和 Echarts。</p>
                  <ul className="bullet-list-v compact">
                    <li>开发2.0版本，采用新的视觉规范，对线型图、饼图、面积图等10+基本图形进行了功能升级，增加了样式颜色自定义功能</li>
                    <li>无修改引入问题，重构图形编辑页面和项目代码结构，缩减代码10%</li>
                    <li>自己独立研发了地图组件，实现倾斜+透视效果</li>
                    <li>使用自研的经纬度转坐标算法，满足通过省份来定位，还能够改变颜色，阴影样式等</li>
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
