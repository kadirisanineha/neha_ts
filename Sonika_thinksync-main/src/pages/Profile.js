import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/profiles/me');
      const data = await response.json();
      setProfileData(data);
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profileData ? (
        <div>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          {/* Other profile details */}
        </div>
      ) : (
        <p>Profile not found</p>
      )}
    </div>
  );
};

export default Profile;