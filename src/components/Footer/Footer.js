import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">KALAIVANI P</h3>
            <p className="footer-title">Front-End Developer</p>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-link" title="LinkedIn">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#" className="social-link" title="GitHub">
              <i className="fa fa-github"></i>
            </a>
            <a href="mailto:kalaivaniimca5297@gmail.com" className="social-link" title="Email">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} KALAIVANI P. All Rights Reserved.
          </p>
          <p className="declaration">
            I do hereby declare that all the information given by me is true to my knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;