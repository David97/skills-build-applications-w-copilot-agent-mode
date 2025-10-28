import React, { useEffect, useState } from 'react';

const Activities = () => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespace}-8000.app.github.dev/api/activities/`;
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities:', data);
        setActivities(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card p-3">
      <h2 className="card-title">Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Duration (min)</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, idx) => (
            <tr key={idx}>
              <td>{activity.type}</td>
              <td>{activity.duration}</td>
              <td>{activity.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;

