import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  if (loading) {
    return (
      <div className="home-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <section className="info">
        <h1>Sai Charan Kumar</h1>
        <p className="text-col">Computer Science & Engineering Student @ NITW</p>
        <p className="bio">
          Welcome to my portfolio! I build full-stack web applications and software solutions. Active member of the Software Development Club (SDC) at NIT Warangal.
        </p>
        <div className="info-links">
          <Link to="/projects" className="btn btn-blue">Explore Projects</Link>
          <Link to="/contact" className="btn btn-black">Contact Me</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
