import React, { useState, useEffect } from 'react';
import { COLOR_PALETTE } from '../../utils/colorTheme';
import StoreComparison from './StoreComparison';

const PriceComparisonTable = ({ productId }) => {
  const [comparisons, setComparisons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPriceComparisons = async () => {
      try {
        // Simulate API call
        const mockData = [
          { 
            store: 'Amazon', 
            price: 59.99, 
            shipping: 5.99, 
            totalPrice: 65.98,
            logo: 'amazon-logo.png',
            rating: 4.5
          },
          { 
            store: 'Nordstrom', 
            price: 64.50, 
            shipping: 0, 
            totalPrice: 64.50,
            logo: 'nordstrom-logo.png',
            rating: 4.7
          }
        ];
        setComparisons(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch price comparisons', error);
        setLoading(false);
      }
    };

    fetchPriceComparisons();
  }, [productId]);

  if (loading) return <div>Loading price comparisons...</div>;

  return (
    <div 
      className="p-4 rounded-lg"
      style={{ 
        backgroundColor: COLOR_PALETTE.white,
        border: `1px solid ${COLOR_PALETTE.pastelBlue}`
      }}
    >
      <h2 
        className="text-xl font-bold mb-4"
        style={{ color: COLOR_PALETTE.blushPink }}
      >
        Price Comparison
      </h2>
      <div className="grid gap-4">
        {comparisons.map((comparison, index) => (
          <StoreComparison 
            key={index} 
            storeData={comparison} 
          />
        ))}
      </div>
    </div>
  );
};

export default PriceComparisonTable;