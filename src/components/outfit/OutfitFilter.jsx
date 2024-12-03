import React, { useState } from 'react';
import { COLOR_PALETTE } from '../../utils/colorTheme';

const OutfitFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    style: '',
    size: '',
    priceRange: '',
    category: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div 
      className="p-4 rounded-lg grid grid-cols-4 gap-4"
      style={{ 
        backgroundColor: COLOR_PALETTE.lightGray,
        border: `1px solid ${COLOR_PALETTE.pastelBlue}`
      }}
    >
      <select 
        name="style"
        value={filters.style}
        onChange={handleFilterChange}
        className="p-2 rounded border"
        style={{ borderColor: COLOR_PALETTE.pastelBlue }}
      >
        <option value="">Style</option>
        <option value="casual">Casual</option>
        <option value="formal">Formal</option>
        <option value="streetwear">Streetwear</option>
      </select>

      <select 
        name="size"
        value={filters.size}
        onChange={handleFilterChange}
        className="p-2 rounded border"
        style={{ borderColor: COLOR_PALETTE.pastelBlue }}
      >
        <option value="">Size</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
      </select>

      <select 
        name="priceRange"
        value={filters.priceRange}
        onChange={handleFilterChange}
        className="p-2 rounded border"
        style={{ borderColor: COLOR_PALETTE.pastelBlue }}
      >
        <option value="">Price Range</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100-200">$100 - $200</option>
        <option value="200+">$200+</option>
      </select>

      <select 
        name="category"
        value={filters.category}
        onChange={handleFilterChange}
        className="p-2 rounded border"
        style={{ borderColor: COLOR_PALETTE.pastelBlue }}
      >
        <option value="">Category</option>
        <option value="tops">Tops</option>
        <option value="bottoms">Bottoms</option>
        <option value="dresses">Dresses</option>
        <option value="accessories">Accessories</option>
      </select>
    </div>
  );
};

export default OutfitFilter;