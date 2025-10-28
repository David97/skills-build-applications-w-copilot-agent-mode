import React, { useEffect, useState } from 'react';

const Teams = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespace}-8000.app.github.dev/api/teams/`;
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API endpoint:', endpoint);
        console.log('Fetched teams:', data);
        setTeams(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card p-3">
      <h2 className="card-title">Teams</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Universe</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, idx) => (
            <tr key={idx}>
              <td>{team.name}</td>
              <td>{team.universe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;

