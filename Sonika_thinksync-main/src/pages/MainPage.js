import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const goToViewProfiles = () => {
    navigate('/view-profiles');
  };

  const goToViewProjects = () => {
    navigate('/view-projects');
  };

  const goToViewTeams = () => {
    navigate('/view-teams');
  };

  const viewYourProfile = () => {
    navigate('/profile');
  };

  const goToPostProject = () => {
    navigate('/post-project');
  };

  const goToCreateProfile = () => {
    navigate('/create-profile');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Main Page</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={goToViewProfiles}>
          View Profiles
        </button>
        <button style={styles.button} onClick={goToViewProjects}>
          View Projects
        </button>
        <button style={styles.button} onClick={goToViewTeams}>
          View Teams
        </button>
        <button style={styles.button} onClick={viewYourProfile}>
          Your Profile
        </button>
        <button style={styles.button} onClick={goToPostProject}>
          Post a Project
        </button>
        <button style={styles.button} onClick={goToCreateProfile}>
          Create a Profile
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#2e0d46',
    color: '#ffffff',
    height: '100vh',
    padding: '20px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'grid',
    gap: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  button: {
    padding: '15px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#6a11cb',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#2575fc',
  },
};

export default MainPage;
