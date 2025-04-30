import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="header">
        <h1>Team CodeHerThing</h1>
        <p className="subtitle">Welcome to the CodeHerThing Management!!</p>
      </div>

      <div className="manage-team">
        <h3>Manage Team</h3>
        <div className="buttons">
          <Link to="/add"><button className="btn">Add Member</button></Link>
          <Link to="/view"><button className="btn">View Members</button></Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
