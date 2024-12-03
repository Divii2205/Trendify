import React from 'react';
import { Link } from 'react-router-dom';
import { COLOR_PALETTE } from '../../utils/colorTheme';

const Navigation = () => {
  return (
    <nav 
      className="flex justify-between items-center p-4"
      style={{ 
        backgroundColor: COLOR_PALETTE.softBeige,
        boxShadow: 'var(--box-shadow)'
      }}
    >
      <div className="logo text-2xl font-bold text-blush-pink">Trendify</div>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-pastel-blue hover:text-blush-pink">Home</Link></li>
        <li><Link to="/outfits" className="text-pastel-blue hover:text-blush-pink">Outfits</Link></li>
        <li><Link to="/price-comparison" className="text-pastel-blue hover:text-blush-pink">Price Compare</Link></li>
        <li><Link to="/chatbot" className="text-pastel-blue hover:text-blush-pink">AI Assistant</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;