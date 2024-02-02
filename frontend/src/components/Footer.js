import React from 'react';
import './Footer.css';
import pngwing12 from '../images/pngwing.com (12).png';
import pngwing11 from '../images/pngwing.com (11).png';
import pngwing10 from '../images/pngwing.com (10).png';

const Footer = () => {
  return (
    <footer>
    <div className="footer-separator"></div>
      <div className="footer-contacts">
          <p className="footer-contacts-info-contact">
            <a href="https://www.example.com" className="footer-contacts-social">
              <img className="footer-img" src={pngwing12} alt="" />
            </a>
            <a href="https://www.example2.com" className="footer-contacts-social">
              <img className="footer-img" src={pngwing11} alt="" />
            </a>
            <a href="https://www.example3.com" className="footer-contacts-social">
              <img className="footer-img" src={pngwing10} alt="" />
            </a>
          </p>
        <p className="footer-company">© 2024 LinguaHub</p>
      </div>
    </footer>
  );
}

export default Footer;
