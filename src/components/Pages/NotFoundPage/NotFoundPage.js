import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="centered-text">
        <h1>404 Not Found</h1>
        <p>The page you are looking for might be unavailable or does not exist.</p>
        <Link to="/" className="home-link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
