import './Projects.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Vibe Coding', '古法编程'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);
  return (
    <div className="detailed-projects-page container">
      <section className="title-group">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-sub">A deep dive into my creative coding journey.</p>
      </section>

      <div className="filters-container">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn-detailed ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-list-detailed">
        {filteredProjects.map(project => (
          <Link to={`/project/${project.id}`} key={project.id} className="detailed-proj-card-link">
            <div className="detailed-proj-card">
              <div className="proj-image-frame">
                <img src={project.image} alt={project.title} className="proj-img-content" />
              </div>
              <div className="proj-info-content">
                <div className="proj-badge" style={{ backgroundColor: `${project.badgeColor}15`, color: project.badgeColor }}>
                  {project.badge}
                </div>
                <h2 className="proj-title-text">{project.title}</h2>
                <p className="proj-desc-text">{project.desc}</p>
                <div className="proj-stacks-row">
                  {project.tags.map(tag => (
                    <span key={tag} className="stack-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
