import React, { useState } from 'react';
import './PostProject.css'; // Custom CSS file for styling

const PostProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [deadline, setDeadline] = useState('');
  const [file, setFile] = useState(null);

  const handlePostProject = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('skills', skills);
    formData.append('deadline', deadline);
    formData.append('file', file);

    const response = await fetch('/api/projects', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      window.location.href = '/view-projects';
    } else {
      alert('Project posting failed');
    }
  };

  return (
    <div className="post-project-container">
      <h1 className="title">POST A PROJECT</h1>
      <form className="form">
        <label>PROJECT TITLE</label>
        <input
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>DESCRIPTION</label>
        <textarea
          placeholder="Enter project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <label>REQUIRED SKILLS</label>
        <input
          type="text"
          placeholder="Enter required skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        
        <label>DEADLINE</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        
        <button type="button" onClick={handlePostProject}>
          SUBMIT PROJECT
        </button>
      </form>
    </div>
  );
};

export default PostProject;
