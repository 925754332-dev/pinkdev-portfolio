import './Home.css';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
);
 }, []);

  const title = "Crafting Digital Experiences";

  const skills = [
    { name: 'React', color: 'var(--primary-color)' },
    { name: 'Angular', color: 'var(--secondary-color)' },
    { name: 'TypeScript', color: 'var(--primary-color)', solid: true },
    { name: 'Vue', color: 'var(--accent-green)' },
    { name: 'UI Design', color: 'rgba(255, 133, 161, 0.2)' },
    { name: 'Unity 3D', color: 'var(--accent-purple)' },
  ];

  return (
    <div className="home">
      <section className="hero container">
        <div className="hero-left" style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` }}>
          <div className="badge typing-cursor">Frontend Developer</div>
          <h1 className="headline typing-text">
            {title.split('').map((char, index) => (
              <span key={index} className="char" style={{ '--index': index }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="subline fade-in">
            Hi! I'm Kelly Zhong. A Huawei frontend developer with a Master's degree in Design & Digital Media from the University of Edinburgh. I excel at React and Angular, with expertise in UI design, 3D visualization, and motion development.
          </p>
          <Link to="/projects" className="view-projects-btn">View My Projects</Link>
        </div>
        <div className="hero-right">
          <img src="/images/kelly-zhong-academic.jpg" alt="Kelly Zhong" className="hero-image" />
        </div>
      </section>

      <section id="skills" className="skills-section container">
        <h2 className="section-title fade-in" style={{ '--delay': '0.2s' }}>My Skills 🍭</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-item ${skill.solid ? 'solid' : ''} pulse-skill`}
              style={{ 
                '--skill-color': skill.color,
                '--index': index
              }}
            >
              {skill.name}
            </div>
          ))}  
        </div>
      </section>

      <section className="projects-section container">
        <h2 className="section-title fade-in" style={{ '--delay': '0.4s' }}>Featured Projects</h2>
        <div className="home-projects-grid">
          {projects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={project.id} className="home-project-card floating-card" style={{ '--index': index }}>
              <div className="home-project-image-wrapper">
                <img src={project.image} alt={project.title} className="home-project-img" />
              </div>
              <h3 className="home-project-title">{project.title}</h3>
              <p className="home-project-desc fade-in" style={{ '--delay': `${0.5 + index * 0.1}s` }}>{project.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="stars"></div>
    </div>
  );
};

export default Home;
