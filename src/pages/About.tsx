import './About.css';
import { Award, GraduationCap } from 'lucide-react';

const About = () => {
  // All complex state and effects for scroll locking have been removed for a pure CSS solution.  
  const facts = [
    { label: 'Location', value: 'Hangzhou' },
    { label: 'Position', value: 'Frontend Developer' },
    { label: 'Experience', value: '5+ Years' },
    { label: 'Hobbies', value: 'UI Design, 3D, Game Dev' }
  ];

  const experiences = [
    {
      role: 'Frontend Developer @ Huawei',
      date: 'Jan 2021 - Present',
      desc: 'Currently working as a Frontend Developer at Huawei, responsible for frontend development tasks on common platform product lines. Handled 20+ projects, processed 350+ issue tickets, and restored 100% of original design specs. Proficient in React and Angular frameworks with quick ramp-up and efficient development capabilities.',
      color: '#FF85A1',
      hasLine: true,
    },
    {
      role: 'Marketing Intern @ Yiqi Job Search',
      date: 'Jan 2019 - May 2019',
      desc: 'Responsible for WeChat account operations and material design, participated in content planning and follower growth initiatives. Designed logos for 10+ partner school studios, demonstrating design skills and execution abilities.',
      color: '#82A0D8',
      hasLine: false,
    }
  ];

  const educations = [
    {
      degree: 'MSc | Design & Digital Media',
      school: 'University of Edinburgh',
      date: '2019 - 2020',
      color: '#B092D5',
      icon: <Award size={24} color="#B092D5" />
    },
    {
      degree: 'BEng | Computer Network Engineering',
      school: 'Dalian Maritime University',
      date: '2015 - 2019',
      color: '#82A0D8',
      icon: <GraduationCap size={24} color="#82A0D8" />
    }
  ];

  return (
    // The .container class handles max-width and centering.
    <div className="about-page container"> 
      <div className="about-content">
        <div className="about-image-column">
            <img src="/images/kelly-zhong-portrait.jpg" alt="Kelly Zhong" className="about-image" />
        </div>
        <div className="about-text-column">
            <h1 className="greeting">Hi, I'm Kelly Zhong! 👋</h1>
            <p className="bio">
              I'm a passionate frontend developer with a Master's degree in Design & Digital Media from the University of Edinburgh. Currently working as a Frontend Developer at Huawei, proficient in React and Angular frameworks. I excel at integrating design thinking into code development, with UX design experience, and skilled in 3D visualization and motion effects.
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
