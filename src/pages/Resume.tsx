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
                <div className="contact-item-v">👤 Kelly Zhong | 女 | 29岁</div>
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
              <span className="skill-tag-v">AI coding</span>
              <span className="skill-tag-v">Motion</span>
              <span className="skill-tag-v">Android</span>
              <span className="skill-tag-v">鸿蒙 (HarmonyOS)</span>
              <span className="skill-tag-v">ECharts / Unity / Canvas</span>
              <span className="skill-tag-v lang-tag-v">英语 (雅思 7.0)</span>
            </div>
          </div>
        </header>

        {/* Main Content Sections */}
        <main className="resume-content-v">


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
                  <strong>主要课程：</strong>动态网页设计、交互设计、平面设计、游戏设计
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
                  <div style={{marginTop: '8px'}}>
                    <strong>主要课程：</strong>C语言、JAVA语言、C++语言及Qt程序设计、数据库原理、计算机网络基础
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className="resume-section-v">
            <h2 className="content-block-title-v">个人优势</h2>
            <ul className="bullet-list-v">
              <li><strong>5年+前端开发经验</strong>，主导20+项目的前端开发，专注于产品线公共平台构建</li>
              <li><strong>精通React、Angular、Vue 3三大框架</strong>，能够根据项目需求灵活选择技术栈</li>
              <li><strong>跨领域技术能力</strong>：掌握Android原生开发和鸿蒙（HarmonyOS）ArkUI开发</li>
              <li><strong>快速学习能力</strong>：能够迅速适应新技术和项目需求，高效完成开发任务</li>
              <li><strong>设计思维</strong>：具备UX设计经验，熟练使用Photoshop、AI等设计工具，将设计理念融入前端开发</li>
              <li><strong>视觉技术</strong>：掌握WebGL 3D可视化和SVG/Canvas动效开发，为项目提供丰富的视觉体验</li>
              <li><strong>工程化能力</strong>：具备前端工程化实践和性能优化经验，显著提升开发效率和项目质量</li>
              <li><strong>AI辅助编程</strong>：熟练使用 Claude Code、OpenCode、Gemini 等 AI 工具进行代码生成、重构和问题排查</li>
              <li><strong>AI工程化</strong>：在智能体项目中积累了丰富的 AI 工程化经验，包括 Prompt Engineering、结构化输出设计</li>
              <li><strong>国际化视野</strong>：爱丁堡大学硕士，雅思7.0，曾为海外一线进行英文授课，能够流畅阅读英语技术文档和进行双语沟通</li>
            </ul>
          </section>

          <section className="resume-section-v">
            <h2 className="content-block-title-v">工作经历</h2>
            <div className="experience-item-v">
              <div className="exp-header-v">
                <h3>前端开发工程师 @ 华为（终端BG）</h3>
                <span className="date-v">2025.03 - 至今</span>
              </div>
              <ul className="bullet-list-v">
                <li>专注于智能体相关产品的前端开发，负责终端 BG 产品线的 UI 设计与实现，推动多模态交互体验创新</li>
                <li>主导小艺智能体开放平台 AgentGUI 二期架构设计，构建支持插件/工作流/事件调用的闭环链路，实现多模态 UI 框架</li>
                <li>与产品、后端团队紧密协作，从技术视角提出交互设计优化建议，提升用户体验和产品竞争力</li>
                <li>深入研究 AI 工程化实践和前沿前端技术，推动技术创新和团队能力建设，为智能体产品提供技术支撑</li>
              </ul>
            </div>
            <div className="experience-item-v">
              <div className="exp-header-v">
                <h3>前端开发工程师 @ 华为（数据存储产品线）</h3>
                <span className="date-v">2021.01 - 2025.03</span>
              </div>
              <ul className="bullet-list-v">
                <li>负责数据存储产品线公共平台的前端开发，根据业务需求灵活切换不同项目，累计经手20+项目</li>
                <li>精通 React、Angular、Vue 等主流前端框架，能够根据项目特点选择最优技术方案</li>
                <li>作为前端接口人，高效定位和解决技术问题，累计处理问题单350+，保障项目稳定运行</li>
                <li>负责功能模块的软件设计、开发、单元测试和后端联调，确保100%还原设计稿，同时从用户角度优化交互体验</li>
                <li>专注代码质量，定期进行代码检视和重构，产出架构文档10+份，提升项目可维护性</li>
                <li>持续研究前沿前端技术，总结工作经验并编写技术文档，在团队内分享前端最佳实践</li>
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
                    <h3>小艺智能体开放平台</h3>
                    <div className="proj-badges-container-v">
                      <span className="proj-badge-v role-badge-v">卡片平台 SE</span>
                      <span className="proj-badge-v tech-badge-v">鸿蒙开发 + Vue</span>
                    </div>
                  </div>
                  <p className="proj-desc-v">主导小艺智能体开放平台卡片系统的需求方案设计、开发与联调，支撑华为音乐、喜马拉雅等内外生态接入，提升卡片系统的性能与用户体验。</p>
                  <ul className="bullet-list-v compact">
                    <li>🌍 重大生态场景支撑：独立主导华为音乐 onApp 卡片场景架构设计，将复杂需求精准拆解为 13 个子模块，高质量交付确保了 HDC 大会华为音乐智能体场景的成功演示；主导喜马拉雅智能体卡片专项，明确底层 DSL 定义并输出详尽设计文档，攻克全量音频播放等复杂交互痛点。</li>
                    <li>🔗 核心链路构建（AgentGUI）：完成 AgentGUI 二期架构设计，打通用户界面支持关联云插件、工作流及事件调用的闭环链路，彻底解决端云出入参处理及上云接口的遗留架构问题。</li>
                    <li>✨ 体验与生命周期优化：深度主导“自定义卡片预置模板”及“UIExtension 卡片”优化，从技术视角反哺产品设计，产出定制化重载重绘解决方案，有效解决卡片尺寸受限与退出重载等体验顽疾。</li>
                    <li>🛠️ 底层技术难点攻坚：针对“文本和卡片混排能力增强”需求，深入前端底层架构梳理多层渲染链路，成功解除 AbilityCard 与 MarkdownContent 的核心循环依赖，实现了 Markdown 文本混排与 AbilityCard 底层能力的架构统一。</li>

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
                    <div className="proj-badges-container-v">
                      <span className="proj-badge-v role-badge-v">核心开发</span>
                      <span className="proj-badge-v tech-badge-v">鸿蒙开发</span>
                    </div>
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
                    <h3>AmiTrip - AI 旅行规划 <span className="personal-project-tag-v">个人项目</span></h3>
                    <div className="proj-badges-container-v">
                      <span className="proj-badge-v role-badge-v">独立开发</span>
                      <span className="proj-badge-v tech-badge-v">Three.js + Gemini</span>
                    </div>
                  </div>
                  <p className="proj-desc-v">业余时间开发的个人项目，一个能够根据模糊指令自主生成、动态调整并实时协作的旅行规划 Agent。核心技术栈：React, Gemini, TypeScript, Three.js, Firebase, Wikipedia API。</p>
                  <ul className="bullet-list-v compact">
                    <li>🧠 <strong>结构化决策引擎</strong>：利用 Gemini Structured Output 设计强类型协议，实现 AI 逻辑与前端业务模型深度解耦，通过 JSON Schema 确保交通、酒店等决策数据 100% 结构化输出。</li>
                    <li>🔄 <strong>动态重规划逻辑</strong>：实现环境感知型重规划机制，当航班或时间约束变更时，Agent 基于当前 State 自动触发逻辑闭环，完成全链路行程节点的自适应对齐与数据重算。</li>
                    <li>🛠️ <strong>多维工具集成</strong>：通过 Prompt Engineering 驱动 Agent 模拟 Function Calling，动态生成地图导航协议与 API 调用指令，实现从“信息生成”到“业务动作引导”的工程闭环。</li>
                    <li>💾 <strong>复杂状态机管理</strong>：基于 Firebase 与 React Hooks 维护长时记忆与上下文栈，支持 User-in-the-loop 交互模式，确保自然语言微调时前端状态与 AI 逻辑的高度一致性。</li>
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
                    <div className="proj-badges-container-v">
                      <span className="proj-badge-v role-badge-v">前端开发负责人</span>
                      <span className="proj-badge-v tech-badge-v">React + Live UI</span>
                    </div>
                  </div>
                  <p className="proj-desc-v">一站式 IT 应用解决方案集成平台，是产品线重点项目，已有超过120+主流应用上架。采用 React 框架，使用 Live UI 组件，适配PC端和移动端。</p>
                  <ul className="bullet-list-v compact">
                    <li>🏗️ <strong>架构设计与需求分析</strong>：作为前端负责人，主导大颗粒需求的软件设计与方案选型，负责内容风控回扫、用户留资弹窗等核心复杂业务开发。</li>
                    <li>🚀 <strong>前端先行与高效开发</strong>：独立对接 5 名后端开发，通过搭建 Mock 环境实现前后端并行开发，打破进度依赖，确保大颗粒需求快速落地。</li>
                    <li>🏆 <strong>高质量准时交付</strong>：版本按时交付且无红线问题，通过精细化自测与流程控制，将交付缺陷率压低至 0.54%。</li>
                  </ul>
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
                    <div className="proj-badges-container-v">
                      <span className="proj-badge-v role-badge-v">核心开发</span>
                      <span className="proj-badge-v tech-badge-v">React + TypeScript</span>
                    </div>
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
                  <img src="/images/dme-official.jpg" alt="DME 数据管理引擎" />
                </div>
                <div className="proj-content-v">
                  <div className="proj-header-v">
                    <h3>DME 数据管理引擎</h3>
                    <div className="proj-badges-container-v">
                      <span className="proj-badge-v role-badge-v">核心开发</span>
                      <span className="proj-badge-v tech-badge-v">Angular</span>
                    </div>
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
                    <div className="proj-badges-container-v">
                      <span className="proj-badge-v role-badge-v">核心开发</span>
                      <span className="proj-badge-v tech-badge-v">React + ECharts</span>
                    </div>
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
