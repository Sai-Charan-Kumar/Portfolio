import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch projects');
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="projects-page"><h2 className="page-title">Loading projects...</h2></div>;
  if (error) return <div className="projects-page"><h2 className="page-title">Error: {error}</h2></div>;

  return (
    <div className="projects-page">
      <h2 className="page-title">Featured Projects</h2>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Projects;
