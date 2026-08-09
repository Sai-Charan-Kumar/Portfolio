import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="project-details" style={{ textAlign: 'center', padding: '64px 0' }}>
        <h2>Project Not Found</h2>
        <p style={{ marginBottom: '24px' }}>We couldn't locate a project with ID: {projectId}</p>
        <Link to="/projects" className="btn btn-blue">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-details">
      <Link to="/projects" className="btn btn-black" style={{ marginBottom: '32px' }}>
        &larr; Back to Projects
      </Link>
      <h1>{project.title}</h1>
      <p className="text-col" style={{ marginTop: '8px' }}>Project ID: {project.id}</p>
      
      <div className="project-tech" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="tech">{tech}</span>
        ))}
      </div>
      
      <p style={{ fontSize: '18px', marginBottom: '32px', maxWidth: '800px', lineHeight: '1.8' }}>
        {project.fullDescription || project.description}
      </p>
      
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-blue">
          View Source Code
        </a>
      )}
    </div>
  );
}

export default ProjectDetails;
