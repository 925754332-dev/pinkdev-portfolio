import './About.css';
import { Mail, Github, Linkedin, Award, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-image-column">
          <img src="/images/kelly-zhong-academic.jpg" alt="Kelly Zhong" className="about-image" />
        </div>
        
        <div className="about-text-column">
          <h1 className="greeting">Hello World! 👋</h1>
          <p className="bio">
            Hi! I'm Kelly Zhong. An AI-focused Frontend Engineer specializing in Agentic UI and interactive digital media. Currently at Huawei, I excel at building seamless interfaces for complex AI workflows, backed by a Master's degree from the University of Edinburgh.
          </p>
          
          <div className="facts-grid">
            <div className="fact-pill coffee">☕ Specialty Coffee</div>
            <div className="fact-pill games">🎮 Cozy Games</div>
            <div className="fact-pill keyboards">🌱 Mechanical Keyboards</div>
          </div>
          
          <div className="experience-section">
            <h2 className="exp-main-title">Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-node">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-role">AI-focused Frontend Engineer @ Huawei</h3>
                  <span className="timeline-date">2021 - Present</span>
                  <p className="timeline-desc">Specializing in Agentic UI and interactive digital media. Building seamless interfaces for complex AI workflows.</p>
                </div>
              </div>
              {/* 如果你还有其他经历，可以在这里添加 */}
            </div>
          </div>
          
          <div className="education-section">
            <h2 className="edu-main-title">Education</h2>
            <div className="education-card master">
              <div className="edu-icon-box master">
                <Award size={24} />
              </div>
              <div className="edu-info">
                <h3 className="edu-degree">Master of Design & Digital Media</h3>
                <span className="edu-school">University of Edinburgh</span>
                <span className="edu-date master">2019.09 - 2020.11</span>
              </div>
            </div>

            <div className="education-card bachelor" style={{ marginTop: '24px' }}>
              <div className="edu-icon-box bachelor">
                <GraduationCap size={24} />
              </div>
              <div className="edu-info">
                <h3 className="edu-degree">Bachelor of Internet of Things Engineering</h3>
                <span className="edu-school">Dalian Maritime University</span>
                <span className="edu-date bachelor">2015.09 - 2019.07</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
