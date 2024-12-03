import React from 'react';
import { Link } from 'react-router-dom';
import { COLOR_PALETTE } from '../../utils/colorTheme';

const Header = () => {
  return (
    <header 
      className="flex justify-between items-center p-4 shadow-md"
      style={{ 
        backgroundColor: COLOR_PALETTE.softBeige,
        color: COLOR_PALETTE.blushPink 
      }}
    >
      <div className="logo text-2xl font-bold">
        <Link to="/" style={{ color: COLOR_PALETTE.blushPink }}>
          Trendify
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link 
          to="/account" 
          className="hover:text-pastel-blue"
          style={{ color: COLOR_PALETTE.pastelBlue }}
        >
          My Account
        </Link>
        <Link 
          to="/favorites" 
          className="hover:text-pastel-blue"
          style={{ color: COLOR_PALETTE.pastelBlue }}
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;