import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostCreate.css';

const PostCreate = () => {
  const navigate = useNavigate();

  return (
    <div className="post-create-container">
      <button
        className="action-button"
        onClick={() => navigate('/post-project')}
      >
        POST A PROJECT
      </button>
      <button
        className="action-button"
        onClick={() => navigate('/create-profile')}
      >
        CREATE PROFILE
      </button>
    </div>
  );
};

export default PostCreate;
