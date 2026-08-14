import React from 'react';
import ProjectCard from './projectcard';

function ProjectList({ projects }) {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectList;
