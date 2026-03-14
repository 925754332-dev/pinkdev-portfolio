import './About.css';
import { Award, GraduationCap } from 'lucide-react';

const About = () => {
  // All complex state and effects for scroll locking have been removed for a pure CSS solution.
  
  const facts = [
    { label: '地点', value: '杭州' },
    { label: '职位', value: '前端开发工程师' },
    { label: '经验', value: '3年+' },
    { label: '爱好', value: 'UI设计、3D、游戏开发' }
  ];

  const experiences = [
    {
      role: '前端开发工程师 @ 华为',
      date: '2021.01 - 至今',
      desc: '目前在华为担任前端开发工程师，负责产品线公共平台的相关前端开发任务。经手 20+ 项目，处理问题单 350+，100% 还原设计稿。精通 React 和 Angular 框架，具备快速上手和高效开发的能力。',
      color: '#FF85A1',
      hasLine: true,
    },
    {
      role: '市场部实习生 @ 一起求职',
      date: '2019.01 - 2019.05',
      desc: '负责公众号运营和物料设计，参与内容编排和涨粉计划。为 10 多家合作学校内工作室设计 logo 墙，展现了设计能力和执行力。',
      color: '#82A0D8',
      hasLine: false,
    }
  ];

  const educations = [
    {
      degree: '硕士 | 设计与数字媒体 MSc',
      school: '爱丁堡大学 (University of Edinburgh)',
      date: '2019 - 2020',
      color: '#B092D5',
      icon: <Award size={24} color="#B092D5" />
    },
    {
      degree: '本科 | 物联网工程',
      school: '大连海事大学',
      date: '2015 - 2019',
      color: '#82A0D8',
      icon: <GraduationCap size={24} color="#82A0D8" />
    }
  ];

  return (
    // The .container class handles the max-width and centering.
    <div className="about-page container"> 
      <div className="about-content">
        <div className="about-image-column">
            <img src="/images/kelly-zhong-portrait.jpg" alt="Kelly Zhong" className="about-image" />
        </div>
        <div className="about-text-column">
            <h1 className="greeting">你好，我是 Kelly Zhong！👋</h1>
            <p className="bio">
              我是一位热爱前端开发的工程师，拥有爱丁堡大学设计与数字媒体硕士学位。目前在华为担任前端开发工程师，精通 React 和 Angular 框架。擅长将设计思维融入代码开发，具备 UX 设计经验，熟练掌握 3D 可视化技术和动效开发。
            </p>

            <div className="facts-grid">
              {facts.map((fact, index) => (
                <div key={index} className="fact-item">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="experience-section">
              <h2 className="exp-main-title">Experience</h2>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-node">
                      <div className="timeline-dot" style={{ backgroundColor: exp.color }}></div>
                      {exp.hasLine && <div className="timeline-line" style={{ backgroundColor: `${exp.color}30` }}></div>}
                    </div>
                    <div className="timeline-content">
                      <h3 className="timeline-role">{exp.role}</h3>
                      <p className="timeline-date" style={{ color: exp.color }}>{exp.date}</p>
                      <p className="timeline-desc">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="education-section">
              <h2 className="edu-main-title">Education</h2>
              {educations.map((edu, index) => (
                <div key={index} className="education-card" style={{ borderColor: `${edu.color}20` }}>
                  <div className="edu-icon-box" style={{ backgroundColor: `${edu.color}15` }}>
                    {edu.icon}
                  </div>
                  <div className="edu-info">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-school">{edu.school}</p>
                    <p className="edu-date" style={{ color: edu.color }}>{edu.date}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
