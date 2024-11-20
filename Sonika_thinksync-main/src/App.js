/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

/*import React from 'react';
import AppRoutes from './Routes'; // Import your Routes component

function App() {
  return (
    <AppRoutes />
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import PostCreate from './pages/PostCreate';
import CreateProfile from './pages/CreateProfile';
import ViewProfiles from './pages/ViewProfiles';
import ViewTeams from './pages/ViewTeams';
import ViewProjects from './pages/ViewProjects';
import PostProject from './pages/PostProject';
import MainPage from './pages/MainPage'; // Import MainPage

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/post-create" element={<PostCreate />} />
                <Route path="/create-profile" element={<CreateProfile />} />
                <Route path="/view-profiles" element={<ViewProfiles />} />
                <Route path="/view-teams" element={<ViewTeams />} />
                <Route path="/view-projects" element={<ViewProjects />} />
                <Route path="/post-project" element={<PostProject />} />
                <Route path="/main-page" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

