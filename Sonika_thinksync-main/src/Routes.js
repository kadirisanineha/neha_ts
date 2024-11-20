import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import CreateProfile from './pages/CreateProfile';
import ViewProfiles from './pages/ViewProfiles';
import ViewTeams from './pages/ViewTeams';
import ViewProjects from './pages/ViewProjects';
import PostProject from './pages/PostProject';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create-profile" element={<CreateProfile />} />
                <Route path="/view-profiles" element={<ViewProfiles />} />
                <Route path="/view-teams" element={<ViewTeams />} />
                <Route path="/view-projects" element={<ViewProjects />} />
                <Route path="/post-project" element={<PostProject />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
