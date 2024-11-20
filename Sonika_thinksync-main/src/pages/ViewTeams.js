import React, { useState, useEffect } from 'react';

const ViewTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('/api/teams');
      const data = await response.json();
      setTeams(data);
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h2>View Teams</h2>
      {teams.map((team) => (
        <div key={team._id}>
          <h3>{team.name}</h3>
          <p>Members: {team.members.map((member) => member.name).join(', ')}</p>
          {/* Other team details */}
        </div>
      ))}
    </div>
  );
};

export default ViewTeams;