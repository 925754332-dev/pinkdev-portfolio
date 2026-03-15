import './Home.css';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';
import { Sparkles, Code2, Globe, Palette, Box, Layers, Cpu, Server, Zap, Database, Terminal, Smartphone, Layout } from 'lucide-react';

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
  }, []);

  const title = "Crafting Digital Experiences";

  const skills = [
    { name: 'React', icon: <Layers size={18} />, color: 'var(--primary-color)' },
    { name: 'Angular', icon: <Cpu size={18} />, color: 'var(--secondary-color)' },
    { name: 'TypeScript', icon: <Code2 size={18} />, color: 'var(--primary-color)' },
    { name: 'Vue', icon: <Globe size={18} />, color: 'var(--accent-green)' },
    { name: 'UI/UX Design', icon: <Palette size={18} />, color: 'var(--accent-purple)' },
    { name: 'Unity 3D', icon: <Box size={18} />, color: 'var(--accent-green)' },
    { name: '3D Visualization', icon: <Box size={18} />, color: 'var(--accent-purple)' },
    { name: 'Motion Dev', icon: <Zap size={18} />, color: 'var(--primary-color)' },
    { name: 'ES6+ JS', icon: <Terminal size={18} />, color: 'var(--secondary-color)' },
    { name: 'CSS Animation', icon: <Layout size={18} />, color: 'var(--primary-color)' },
    { name: 'Digital Media', icon: <Smartphone size={18} />, color: 'var(--accent-purple)' },
    { name: 'Responsive', icon: <Layout size={18} />, color: 'var(--secondary-color)' },
  ];

  return (
    <div className="home" style={{ 
      '--mouse-x': `${mousePosition.x}px`, 
      '--mouse-y': `${mousePosition.y}px` 
    } as React.CSSProperties}>
      <div className="stars"></div>
      
      <section className="hero container">
        <div className="hero-left">
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
        <h2 className="section-title fade-in" style={{ '--delay': '0.2s' }}>
          My Skills <Sparkles className="title-icon" />
        </h2>
        <div className="skills-flex">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-pill floating-skill"
              style={{ 
                '--skill-color': skill.color,
                '--index': index,
                '--delay': `${index * 0.1}s`
              } as React.CSSProperties}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
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

    </div>
  );
};

export default Home;
