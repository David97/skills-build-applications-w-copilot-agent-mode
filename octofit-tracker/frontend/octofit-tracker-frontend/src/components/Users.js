import React, { useEffect, useState } from 'react';

const Users = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespace}-8000.app.github.dev/api/users/`;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Users API endpoint:', endpoint);
        console.log('Fetched users:', data);
        setUsers(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card p-3">
      <h2 className="card-title">Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.team?.name || 'Unknown'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

