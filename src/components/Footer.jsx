import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#menu" className="footer-link">View Menu</a>
          <a href="#contact" className="footer-link">Contact Us</a>
          <a href="#privacy-policy" className="footer-link">Privacy Policy</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; Copyright Albaik. All Right Reserved.</p>
          <p>Site Powered & Marketed by OrderSense</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
