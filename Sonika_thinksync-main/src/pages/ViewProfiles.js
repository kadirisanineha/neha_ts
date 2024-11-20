import React, { useState, useEffect } from 'react';

const ViewProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch('/api/profiles');
      const data = await response.json();
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h2>View Profiles</h2>
      {profiles.map((profile) => (
        <div key={profile._id}>
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
          {/* Other profile details */}
        </div>
      ))}
    </div>
  );
};

export default ViewProfiles;