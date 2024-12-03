class PriceComparisonService {
    static async fetchProductPrices(product) {
      const mockPrices = {
        'Amazon': Math.random() * 100,
        'Walmart': Math.random() * 100,
        'Target': Math.random() * 100
      };
      return mockPrices;
    }
  
    static async compareMultipleProducts(products) {
      const comparisons = await Promise.all(
        products.map(async (product) => {
          const prices = await this.fetchProductPrices(product);
          const bestStore = Object.keys(prices).reduce((a, b) => 
            prices[a] < prices[b] ? a : b
          );
  
          return {
            productName: product,
            prices,
            bestPrice: prices[bestStore],
            bestStore
          };
        })
      );
  
      return comparisons;
    }
}
  
export default PriceComparisonService;