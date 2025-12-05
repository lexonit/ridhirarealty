import { Property } from '../types';

export const MOCK_PROPERTIES: Property[] = [
  // --- LATEST WORK (First 6 items) ---
  {
    id: '1',
    title: 'Jumeirah Circle Residences',
    location: 'Jumeirah Village Circle, Dubai',
    price: 900000,
    currency: 'AED',
    beds: 1,
    baths: 2,
    sqft: 950,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1512918760513-95f1929c3d4a?q=80&w=2090&auto=format&fit=crop', // Interior
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'  // Exterior
    ],
    description: 'Modern apartments in the heart of Jumeirah Village Circle. Ideal for investors looking for high rental yields and community living.',
    amenities: ['Community Pool', 'Gym', 'Parking', 'Park View', 'Handover Q4-2026'],
    featured: false
  },
  {
    id: '2',
    title: 'Dubai Residence Complex',
    location: 'Dubai Residence Complex, Dubai',
    price: 840000,
    currency: 'AED',
    beds: 1,
    baths: 1,
    sqft: 800,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop', // Interior
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop'  // Building
    ],
    description: 'Affordable luxury in a rapidly growing community. Excellent connectivity and future appreciation potential.',
    amenities: ['24/7 Security', 'Kids Play Area', 'Retail Outlets', 'Handover Q2-2028'],
    featured: false
  },
  {
    id: '3',
    title: 'Jumeirah Village Circle',
    location: 'Jumeirah Village Circle, Dubai',
    price: 890000,
    currency: 'AED',
    beds: 1,
    baths: 2,
    sqft: 880,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop', // Interior (Updated)
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'  // Exterior
    ],
    description: 'Premium finishes in a prime JVC location. A perfect balance of tranquility and urban accessibility.',
    amenities: ['Roof Deck', 'Gym', 'Swimming Pool', 'Handover Q2-2026'],
    featured: false
  },
  {
    id: '4',
    title: 'Dubai Island Waterfront',
    location: 'Dubai Islands, Dubai',
    price: 2600000,
    currency: 'AED',
    beds: 2,
    baths: 3,
    sqft: 1400,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea904f8486d?q=80&w=2070&auto=format&fit=crop', // Waterfront
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop'  // Interior
    ],
    description: 'Exclusive waterfront living on the new Dubai Islands. Experience resort-style amenities and breathtaking sea views.',
    amenities: ['Private Beach', 'Marina Access', 'Sea Views', 'Handover Q3-2026'],
    featured: false
  },
  {
    id: '5',
    title: 'Jumeirah Islands Villa',
    location: 'Jumeirah Islands, Dubai',
    price: 2400000,
    currency: 'AED',
    beds: 3,
    baths: 4,
    sqft: 2500,
    type: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop', // Luxury Villa
      'https://images.unsplash.com/photo-1600596542815-3ad19fb21208?q=80&w=2074&auto=format&fit=crop'  // Pool
    ],
    description: 'Spacious townhouse villa in a prestigious gated community surrounded by lakes and lush greenery.',
    amenities: ['Lake View', 'Private Garden', 'Clubhouse', 'Gated Community'],
    featured: false
  },
  {
    id: '6',
    title: 'Dubai Land Residences',
    location: 'Dubai Land, Dubai',
    price: 600000,
    currency: 'AED',
    beds: 1,
    baths: 1,
    sqft: 650,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a1c00207bf9a?q=80&w=2070&auto=format&fit=crop', // Cozy Interior
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'  // Building
    ],
    description: 'An exceptional entry-point investment in a master-planned community. High value for money.',
    amenities: ['Community Parks', 'Sports Courts', 'Retail Center', 'Handover Q2-2028'],
    featured: false
  },

  // --- FEATURED PROJECTS (Specific Requests) ---
  {
    id: '7',
    title: 'Wynn Al Marjan Island',
    location: 'Al Marjan Island, Ras Al Khaimah',
    price: 3500000,
    currency: 'AED',
    beds: 2,
    baths: 3,
    sqft: 1600,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop', // Resort
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1974&auto=format&fit=crop'  // Pool
    ],
    description: 'The region’s first integrated gaming resort. A landmark destination offering unprecedented ROI potential and luxury living.',
    amenities: ['Casino Access', 'Private Beach', 'Fine Dining', 'Resort Living'],
    featured: true
  },
  {
    id: '8',
    title: 'Palm Jebel Ali Residences',
    location: 'Palm Jebel Ali, Dubai',
    price: 18500000,
    currency: 'AED',
    beds: 5,
    baths: 6,
    sqft: 7500,
    type: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1512918760513-95f1929c3d4a?q=80&w=2090&auto=format&fit=crop', // Palm View
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'  // Interior
    ],
    description: 'Waterfront living re-imagined on twice the scale of Palm Jumeirah. Exclusive villas with private beaches and futuristic amenities.',
    amenities: ['Private Beach', 'Marina', 'Smart Home', 'Gated Security'],
    featured: true
  },
  {
    id: '9',
    title: 'Dubai Creek Harbour',
    location: 'Dubai Creek Harbour, Dubai',
    price: 4200000,
    currency: 'AED',
    beds: 3,
    baths: 4,
    sqft: 1900,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef6c3?q=80&w=2070&auto=format&fit=crop', // Creek Skyline
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop'  // Interior
    ],
    description: 'The next iconic skyline of Dubai. Sustainable urban living with direct views of the Creek Tower and wildlife sanctuary.',
    amenities: ['Creek Promenade', 'Yacht Club', 'Central Park', 'Eco-Friendly'],
    featured: true
  },

  // --- EXTRA LUXURY LISTINGS (Filler) ---
  {
    id: '10',
    title: 'The Royal Atlantis Penthouse',
    location: 'Palm Jumeirah, Dubai',
    price: 45000000,
    currency: 'AED',
    beds: 4,
    baths: 5,
    sqft: 6000,
    type: 'Penthouse',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop', // Atlantis
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop'  // Kitchen
    ],
    description: 'Ultra-luxury penthouse with private infinity pool and 360-degree views of the Arabian Gulf.',
    amenities: ['Private Pool', 'Concierge', 'Beach Access'],
    featured: true
  }
];