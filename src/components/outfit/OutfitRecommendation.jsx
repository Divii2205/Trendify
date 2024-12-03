import React, { useState, useEffect } from 'react';
import { useOutfitRecommendation } from '../../hooks/useOutfitRecommendation';
import { COLOR_PALETTE } from '../../utils/colorTheme';

const OutfitRecommendation = () => {
  const { recommendations, loading, error } = useOutfitRecommendation();
  const [filters, setFilters] = useState({
    style: '',
    size: '',
    budget: ''
  });

  return (
    <div 
      className="p-6 rounded-lg"
      style={{ 
        backgroundColor: COLOR_PALETTE.white,
        border: `1px solid ${COLOR_PALETTE.pastelBlue}`
      }}
    >
      <h2 
        className="text-2xl font-bold mb-4"
        style={{ color: COLOR_PALETTE.blushPink }}
      >
        Your Personalized Outfits
      </h2>
      
      {/* Outfit Filters */}
      <div className="flex space-x-4 mb-4">
        <select 
          value={filters.style} 
          onChange={(e) => setFilters({...filters, style: e.target.value})}
          className="p-2 rounded border"
        >
          <option value="">Select Style</option>
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="streetwear">Streetwear</option>
        </select>
        {/* Similar selects for size and budget */}
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-3 gap-4">
        {recommendations.map(outfit => (
          <div 
            key={outfit.id} 
            className="p-4 rounded-lg shadow-md"
            style={{ 
              backgroundColor: COLOR_PALETTE.lightGray,
              borderColor: COLOR_PALETTE.pastelBlue
            }}
          >
            <img src={outfit.imageUrl} alt={outfit.name} className="w-full h-64 object-cover rounded" />
            <h3 className="mt-2 text-lg font-semibold">{outfit.name}</h3>
            <p className="text-sm text-gray-600">${outfit.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutfitRecommendation;