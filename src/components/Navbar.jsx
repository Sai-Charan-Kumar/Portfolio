import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/Home" className="nav-name">
          <span className="text-col">&lt;</span>
          SaiCharan
          <span className="text-col">/&gt;</span>
        </NavLink>
        
        <div className="nav-links">
          <NavLink to="/Home" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Projects</NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Skills</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Contact</NavLink>
          
          <button onClick={toggleTheme} className="theme-toggle btn btn-black pro">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
