import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="centered-text">
        <h1>Task Priority and Deadline Tracker</h1>
        <Link to="/home" className="start-link">
          Start
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
