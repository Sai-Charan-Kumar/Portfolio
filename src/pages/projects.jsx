import React from 'react';
import ProjectList from '../components/ProjectList';
import { projectsData } from '../data/projects';

function Projects() {
  return (
    <div className="projects-page">
      <h2 className="page-title">Featured Projects</h2>
      <ProjectList projects={projectsData}/>
    </div>
  );
}

export default Projects;
