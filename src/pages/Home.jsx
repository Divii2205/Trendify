import React from 'react';
import { Link } from 'react-router-dom';
import { COLOR_PALETTE } from '../utils/colorTheme';
import OutfitRecommendation from '../components/outfit/OutfitRecommendation';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section 
        className="hero mb-12 text-center"
        style={{ color: COLOR_PALETTE.blushPink }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Discover Your Perfect Style
        </h1>
        <p className="text-xl mb-6" style={{ color: COLOR_PALETTE.pastelBlue }}>
          Personalized fashion recommendations just for you
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/outfits"
            className="px-6 py-3 rounded-full"
            style={{ 
              backgroundColor: COLOR_PALETTE.softBeige,
              color: COLOR_PALETTE.blushPink 
            }}
          >
            Browse Outfits
          </Link>
          <Link 
            to="/chatbot"
            className="px-6 py-3 rounded-full"
            style={{ 
              backgroundColor: COLOR_PALETTE.pastelBlue,
              color: COLOR_PALETTE.white 
            }}
          >
            AI Stylist
          </Link>
        </div>
      </section>

      <section className="featured-recommendations mb-12">
        <h2 
          className="text-2xl font-bold mb-6"
          style={{ color: COLOR_PALETTE.blushPink }}
        >
          Recommended for You
        </h2>
        <OutfitRecommendation />
      </section>
    </div>
  );
};

export default Home;