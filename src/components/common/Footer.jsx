import React from 'react';
import { Link } from 'react-router-dom';
import { COLOR_PALETTE } from '../../utils/colorTheme';

const Footer = () => {
  return (
    <footer 
      className="p-6 grid grid-cols-3 gap-4"
      style={{ 
        backgroundColor: COLOR_PALETTE.lightGray,
        color: COLOR_PALETTE.pastelBlue 
      }}
    >
      <div>
        <h4 className="font-bold mb-2" style={{ color: COLOR_PALETTE.blushPink }}>
          Quick Links
        </h4>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold mb-2" style={{ color: COLOR_PALETTE.blushPink }}>
          Customer Service
        </h4>
        <ul>
          <li><Link to="/shipping">Shipping</Link></li>
          <li><Link to="/returns">Returns</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold mb-2" style={{ color: COLOR_PALETTE.blushPink }}>
          Connect With Us
        </h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-pastel-blue">Facebook</a>
          <a href="#" className="hover:text-pastel-blue">Instagram</a>
          <a href="#" className="hover:text-pastel-blue">Twitter</a>
        </div>
      </div>
      
      <div className="col-span-3 text-center mt-4">
        <p>© 2024 Trendify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;