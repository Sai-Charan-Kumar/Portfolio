import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="project-details">
        <h2>Project Not Found</h2>
        <p>We couldn't locate a project with ID: {projectId}</p>
        <Link to="/projects" className="btn btn-blue">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div >
      <Link to="/projects" className="btn btn-black mar">
        &larr; Back to Projects
      </Link>
      <h1>{project.title}</h1>
      <p className="text-col">Project ID: {project.id}</p>
      
      <div className="project-tech">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="tech">{tech}</span>
        ))}
      </div>
      
      <p className = "project-para">
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
