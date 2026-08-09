import React from 'react';
import ProjectList from '../components/ProjectList';
import { projectsData } from '../data/projects';

function Projects({ theme }) {
  return (
    <div className="projects-page">
      <h2 className="page-title">Featured Projects</h2>
      <ProjectList projects={projectsData} theme={theme} />
    </div>
  );
}

export default Projects;