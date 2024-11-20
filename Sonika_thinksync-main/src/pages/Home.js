import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Create a CSS file for custom styles
//import PuzzleImage from './assets/puzzle-image.png'; // Replace with your actual image path

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">WELCOME TO STUDENT PROJECT MATCHMAKER!</h1>
        <p className="subtitle">Find your team with us</p>
        <div className="buttons">
          <button className="custom-button" onClick={() => navigate('/login')}>
            LOGIN
          </button>
          <button className="custom-button" onClick={() => navigate('/signup')}>
            SIGN UP
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Home;


