import React, { useState } from 'react';
import PriceComparisonTable from '../components/price-comparison/PriceComparisonTable';
import { COLOR_PALETTE } from '../utils/colorTheme';

const PriceComparisonPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Summer Blazer', basePrice: 89.99 },
    { id: 2, name: 'Floral Dress', basePrice: 64.50 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 
        className="text-3xl font-bold mb-6"
        style={{ color: COLOR_PALETTE.blushPink }}
      >
        Price Comparison
      </h1>

      <div className="mb-6">
        <select 
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="w-full p-2 rounded border"
          style={{ borderColor: COLOR_PALETTE.pastelBlue }}
        >
          <option value="">Select a Product</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>
              {product.name} - ${product.basePrice}
            </option>
          ))}
        </select>
      </div>

      {selectedProduct && (
        <PriceComparisonTable productId={selectedProduct} />
      )}
    </div>
  );
};

export default PriceComparisonPage;