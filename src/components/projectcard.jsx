import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, techStack, image, link, id }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project-card card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        
        {showDetails && (
          <div className="project-extra">
            <p>ID: {id}</p>
            <p>Built primarily with {techStack.join(', ')}.</p>
          </div>
        )}

        <div className="project-tech">
          {techStack.map((tech, idx) => (
            <span key={idx} className="tech">{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-actions">
        <button onClick={() => setShowDetails(!showDetails)} className="btn btn-blue pro">
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-black pro">
            Source
          </a>
        )}
        <Link to={`/projects/${id}`} className="btn btn-black pro">
          Page
        </Link>
      </div>
    </div>
  );
} 

export default ProjectCard;
