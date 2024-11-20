import React, { useState } from 'react';

const CreateProfile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState([]);

  const handleCreateProfile = async () => {
    // Send create profile request to the backend
    const response = await fetch('/api/profiles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, bio, skills }),
    });

    if (response.ok) {
      // Redirect to profile or another appropriate page
      window.location.href = '/profile';
    } else {
      alert('Profile creation failed');
    }
  };

  return (
    <div>
      <h2>Create Profile</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Bio" onChange={(e) => setBio(e.target.value)} />
      {/* Add input fields for skills */}
      <button onClick={handleCreateProfile}>Create Profile</button>
    </div>
  );
};

export default CreateProfile;