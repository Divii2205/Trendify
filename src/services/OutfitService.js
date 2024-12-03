class OutfitService {
    static outfits = [];
  
    static createOutfit(outfit) {
      const newOutfit = {
        id: `outfit-${Date.now()}`,
        ...outfit
      };
      this.outfits.push(newOutfit);
      return newOutfit;
    }
  
    static getOutfits() {
      return [...this.outfits];
    }
  
    static getOutfitsByOccasion(occasion) {
      return this.outfits.filter(outfit => outfit.occasion === occasion);
    }
  
    static updateOutfit(id, updates) {
      const index = this.outfits.findIndex(outfit => outfit.id === id);
      if (index !== -1) {
        this.outfits[index] = { ...this.outfits[index], ...updates };
        return this.outfits[index];
      }
      return null;
    }
  }
  
  export default OutfitService;

  export const getOutfitRecommendations = () => {
    return OutfitService.getOutfits().slice(0, 3);
  };