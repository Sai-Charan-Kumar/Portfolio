import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page" style={{ textAlign: 'center', padding: '100px 0' }}>
      <h1 style={{ fontSize: '72px', marginBottom: '24px' }}>404</h1>
      <h2 style={{ marginBottom: '32px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '32px' }}>The page you are looking for does not exist or has been moved.</p>
      <Link to="/Home" className="btn btn-blue">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
