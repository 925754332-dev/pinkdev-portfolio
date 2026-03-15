import './Home.css';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Home = () => {
  const skills = [
    { name: 'React', color: 'var(--)primary-color)' },
    { name: 'Angular', color: 'var(--secondary-color)' },
    { name: 'TypeScript', color: 'var(--primary-color)', solid: true },
    { name: 'Vue', color: 'var(--accent-green)' },
    { name: 'UI Design', color: 'rgba(255, 133, 161, 0.2)' },
    { name: 'Unity 3D', color: 'var(--accent-purple)' },
  ];

  return (
    <div className="home">
      <section className="hero container">
        <div className="hero-left">
          <div className="badge">Frontend Developer</div>
          <h1 className="headline">Crafting Digital Experiences</h1>
          <p className="subline">
            Hi! I'm Kelly Zhong. A Huawei frontend developer with a Master's degree in Design & Digital Media from the University of Edinburgh. I excel at React and Angular, with expertise in UI design, 3D visualization, and motion development.
          </p>
          <Link to="/projects" className="view-projects-btn">View My Projects</Link>
        </div>
        <div className="hero-right">
          <img src="/images/kelly-zhong-academic.jpg" alt="Kelly Zhong" className="hero-image" />
        </div>
      </section>

      <section id="skills" className="skills-section container">
        <h2 className="section-title">My Skills 🍭</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-item ${skill.solid ? 'solid' : ''}`}
              style={{ 
                borderColor: !skill.solid ? skill.color : 'transparent',
                backgroundColor: skill.solid ? skill.color : 'var(--white)',
                color: skill.solid ? 'var(--white)' : 'var(--text-primary)'
              }}
            >
              {skill.name}
            </div>
          ))}  
        </div>
      </section>

      <section className="projects-section container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="home-projects-grid">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="home-project-card">
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
