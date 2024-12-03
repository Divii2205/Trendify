import React, { useState } from 'react';
import OutfitFilter from '../components/outfit/OutfitFilter';
import OutfitCard from '../components/outfit/OutfitCard';
import { COLOR_PALETTE } from '../utils/colorTheme';

const OutfitPage = () => {
  const [filteredOutfits, setFilteredOutfits] = useState([
    { 
      id: 1, 
      name: 'Casual Chic Blazer', 
      price: 89.99, 
      imageUrl: '/placeholder-outfit-1.jpg' 
    },
    { 
      id: 2, 
      name: 'Summer Floral Dress', 
      price: 64.50, 
      imageUrl: '/placeholder-outfit-2.jpg' 
    },
    // More outfit entries
  ]);

  const handleFilterChange = (filters) => {
    // Implement filtering logic
    console.log('Filters applied:', filters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 
        className="text-3xl font-bold mb-6"
        style={{ color: COLOR_PALETTE.blushPink }}
      >
        Explore Outfits
      </h1>

      <OutfitFilter onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-3 gap-6 mt-6">
        {filteredOutfits.map(outfit => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </div>
  );
};

export default OutfitPage;