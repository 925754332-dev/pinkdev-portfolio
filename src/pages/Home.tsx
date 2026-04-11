import './Home.css';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';
import { Sparkles, Code2, Globe, Palette, Box, Layers, Cpu, Zap, Smartphone, Layout } from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'React', icon: <Layers size={18} />, color: '#61DAFB' },
    { name: 'Angular', icon: <Cpu size={18} />, color: '#DD0031' },
    { name: 'TypeScript', icon: <Code2 size={18} />, color: '#3178C6' },
    { name: 'Vue', icon: <Globe size={18} />, color: '#4FC08D' },
    { name: 'HarmonyOS', icon: <Smartphone size={18} />, color: '#007DFF' },
    { name: 'UI/UX Design', icon: <Palette size={18} />, color: 'var(--primary-color)' },
    { name: '3D Vision', icon: <Box size={18} />, color: 'var(--accent-purple)' },
    { name: 'Motion Dev', icon: <Zap size={18} />, color: 'var(--primary-color)' },
    { name: 'CSS Magic', icon: <Layout size={18} />, color: 'var(--primary-color)' },
    { name: 'Digital Media', icon: <Smartphone size={18} />, color: 'var(--accent-purple)' },
    { name: 'Responsive', icon: <Layout size={18} />, color: 'var(--secondary-color)' },
  ];

  return (
    <div className="home" style={{ 
      '--mouse-x': `${mousePosition.x}px`, 
      '--mouse-y': `${mousePosition.y}px` 
    } as React.CSSProperties}>
      <div className="stars"></div>
      
      <section className="hero">
        <div className="hero-left">
          <div className="dynamic-subtitle">
            AI Agent & Frontend Engineer
          </div>
          <h1 className="headline typing-text">
            {"Crafting Digital Experiences".split(" ").map((word, wordIndex, wordsArray) => {
              const prevLettersCount = wordsArray.slice(0, wordIndex).reduce((count, w) => count + w.length + 1, 0);
              return (
                <span key={wordIndex} className="word-wrapper" style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
                  {word.split("").map((char, charIndex) => (
                    <span 
                      key={charIndex} 
                      className="char" 
                      style={{ '--index': prevLettersCount + charIndex } as React.CSSProperties}
                    >
                      {char}
                    </span>
                  ))}
                  {wordIndex < wordsArray.length - 1 && (
                    <span className="char" style={{ '--index': prevLettersCount + word.length } as React.CSSProperties}>
                      &nbsp;
                    </span>
                  )}
                </span>
              );
            })}
          </h1>
          <p className="subline">
            Hi! I'm Kelly Zhong. An AI-focused Frontend Engineer specializing in Agentic UI and interactive digital media. Currently at Huawei, I excel at building seamless interfaces for complex AI workflows, backed by a Master's degree from the University of Edinburgh.
          </p>
          <Link to="/projects" className="view-projects-btn">View My Projects</Link>
        </div>
        <div className="hero-right">
          <img src="/images/kelly-zhong-academic.jpg" alt="Kelly Zhong" className="hero-image" />
        </div>
      </section>

      <section id="skills" className="skills-section container">
        <h2 className="section-title">
          My Skills <Sparkles className="title-icon" />
        </h2>
        <div className="skills-flex">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-pill"
              style={{ 
                '--skill-color': skill.color,
                '--index': index 
              } as React.CSSProperties}
            >
              <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}  
        </div>
      </section>

      <section className="projects-section container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="home-projects-grid">
          {projects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={project.id} className="home-project-card" style={{ '--index': index } as React.CSSProperties}>
              <div className="home-project-image-wrapper">
                <img src={project.image} alt={project.title} className="home-project-img" />
              </div>
              <h3 className="home-project-title">{project.title}</h3>
              <p className="home-project-desc">{project.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
