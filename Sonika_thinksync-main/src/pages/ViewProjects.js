import React, { useState, useEffect } from 'react';

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>View Projects</h2>
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Team: {project.team.name}</p>
          {/* Other project details */}
        </div>
      ))}
    </div>
  );
};

export default ViewProjects;