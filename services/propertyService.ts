import { Property } from '../types';
import { MOCK_PROPERTIES } from './mockData';

// Simulate network delay for realistic feel
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const propertyService = {
  getAllProperties: async (): Promise<Property[]> => {
    await delay(300); // Simulate network latency
    return MOCK_PROPERTIES;
  },

  getFeaturedProperties: async (): Promise<Property[]> => {
    await delay(300);
    return MOCK_PROPERTIES.filter(p => p.featured);
  },

  getPropertyById: async (id: string): Promise<Property | undefined> => {
    await delay(200);
    return MOCK_PROPERTIES.find(p => p.id === id);
  },

  searchProperties: async (query: string): Promise<Property[]> => {
    await delay(300);
    if (!query) return [];
    
    const lowerQuery = query.toLowerCase();
    return MOCK_PROPERTIES.filter(p => 
      p.title.toLowerCase().includes(lowerQuery) ||
      p.location.toLowerCase().includes(lowerQuery) ||
      p.type.toLowerCase().includes(lowerQuery)
    );
  }
};