import { useState, useCallback } from 'react';
import { PriceComparisonService } from './priceComparisonService';

export const usePriceComparison = () => {
  const [comparisons, setComparisons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const compareProducts = useCallback(async (products) => {
    setIsLoading(true);
    setError(null);

    try {
      const results = await PriceComparisonService.compareMultipleProducts(products);
      setComparisons(results);
    } catch (err) {
      setError(err.message || 'Price comparison failed');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { comparisons, compareProducts, isLoading, error };
};