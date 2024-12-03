import React from 'react';
import { COLOR_PALETTE } from '../../utils/colorTheme';

const OutfitCard = ({ outfit }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105"
      style={{ 
        borderColor: COLOR_PALETTE.pastelBlue,
        backgroundColor: COLOR_PALETTE.white 
      }}
    >
      <img 
        src={outfit.imageUrl} 
        alt={outfit.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 
          className="text-lg font-semibold"
          style={{ color: COLOR_PALETTE.blushPink }}
        >
          {outfit.name}
        </h3>
        <div className="flex justify-between items-center mt-2">
          <span 
            className="text-sm font-medium"
            style={{ color: COLOR_PALETTE.pastelBlue }}
          >
            ${outfit.price}
          </span>
          <button 
            className="px-3 py-1 rounded-full text-sm"
            style={{ 
              backgroundColor: COLOR_PALETTE.softBeige,
              color: COLOR_PALETTE.blushPink 
            }}
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;