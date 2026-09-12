import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects/${projectId}`)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to fetch project');
        return data;
      })
      .then(data => {
        setProject(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) return <div className="project-details"><h2>Loading...</h2></div>;
  
  if (error) {
    return (
      <div className="project-details">
        <h2>Project Not Found</h2>
        <p>{error}</p>
        <Link to="/projects" className="btn btn-blue">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div>
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
      
      <p className="project-para">
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
