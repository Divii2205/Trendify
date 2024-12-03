import React from 'react';
import { COLOR_PALETTE } from '../../utils/colorTheme';

const StoreComparison = ({ storeData }) => {
  return (
    <div 
      className="flex items-center justify-between p-4 rounded-lg shadow-sm"
      style={{ 
        backgroundColor: COLOR_PALETTE.lightGray,
        borderColor: COLOR_PALETTE.pastelBlue
      }}
    >
      <div className="flex items-center space-x-4">
        <img 
          src={storeData.logo} 
          alt={`${storeData.store} logo`} 
          className="w-12 h-12 object-contain"
        />
        <div>
          <h3 
            className="font-semibold"
            style={{ color: COLOR_PALETTE.blushPink }}
          >
            {storeData.store}
          </h3>
          <div className="text-sm text-gray-500">
            Rating: {storeData.rating}/5
          </div>
        </div>
      </div>
      <div className="text-right">
        <div 
          className="font-bold"
          style={{ color: COLOR_PALETTE.pastelBlue }}
        >
          ${storeData.price}
        </div>
        <div className="text-sm text-gray-500">
          Shipping: ${storeData.shipping}
        </div>
        <div 
          className="font-semibold mt-1"
          style={{ color: COLOR_PALETTE.blushPink }}
        >
          Total: ${storeData.totalPrice}
        </div>
      </div>
    </div>
  );
};

export default StoreComparison;