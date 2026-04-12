import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div className="container">Project not found</div>;
  }

  return (
    <div className="project-detail-page container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <div className="detail-hero">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="detail-image-link">
            <div className="detail-image-frame">
              <img src={project.image} alt={project.title} className="detail-img-content" />
            </div>
          </a>
        ) : (
          <div className="detail-image-frame">
            <img src={project.image} alt={project.title} className="detail-img-content" />
          </div>
        )}
        <div className="detail-info-content">
          <div className="proj-badge" style={{ backgroundColor: `${project.badgeColor}15`, color: project.badgeColor }}>
            {project.badge}
          </div>
          <h1 className="detail-title-text">{project.title}</h1>
          <p className="detail-desc-text">{project.longDesc}</p>
          <div className="detail-stacks-row">
            {project.tags.map(tag => (
              <span key={tag} className="stack-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
