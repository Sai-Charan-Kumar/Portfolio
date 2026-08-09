import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-con">
        <p>&copy; {new Date().getFullYear()} Sai Charan Kumar. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;