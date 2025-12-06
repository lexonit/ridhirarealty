import { Property } from '../types';

export const MOCK_PROPERTIES: Property[] = [
  // --- LATEST WORK (First 6 items) ---
  {
    id: '1',
    title: 'Grade A Offices in Main Business District',
    location: 'Business Bay, Dubai',
    price: 2300000,
    currency: 'AED',
    beds: 1,
    baths: 2,
    sqft: 950,
    type: 'Office',
    images: [
      '/home/projects/project01/IMG-20251206-WA0019.jpg',
      '/home/projects/project01/IMG-20251206-WA0020.jpg',
      '/home/projects/project01/IMG-20251206-WA0021.jpg',
      '/home/projects/project01/IMG-20251206-WA0022.jpg'
    ],
    description: 'Grade A offices in the main business district of Dubai. Premium commercial space ideal for businesses looking to establish a presence in the heart of Dubai.',
    amenities: ['Premium Location', 'High-Speed Elevators', 'Parking', 'Business Facilities', 'Ready to Move'],
    featured: true
  },
  {
    id: '2',
    title: 'Private Mansions in the Most Prestigious Areas',
    location: 'Emirates Hills, Dubai',
    price: 32000000,
    currency: 'AED',
    beds: 6,
    baths: 8,
    sqft: 15000,
    type: 'Mansion',
    images: [
      '/home/projects/Project02/IMG-20251206-WA0014.jpg',
      '/home/projects/Project02/IMG-20251206-WA0015.jpg',
      '/home/projects/Project02/IMG-20251206-WA0016.jpg',
      '/home/projects/Project02/IMG-20251206-WA0017.jpg',
      '/home/projects/Project02/IMG-20251206-WA0018.jpg'
    ],
    description: 'Private Mansions in the most Prestigious Areas. Ultra-luxury residences offering unparalleled exclusivity and sophistication.',
    amenities: ['Private Pool', 'Home Cinema', 'Spa & Wellness', 'Smart Home', 'Landscaped Gardens'],
    featured: true
  },
  {
    id: '3',
    title: 'Townhouses and Villas from One of the Top Upcoming Communities',
    location: 'Dubai',
    price: 2700000,
    currency: 'AED',
    beds: 3,
    baths: 4,
    sqft: 2500,
    type: 'Villa',
    images: [
      '/home/projects/project03/IMG-20251206-WA0010.jpg',
      '/home/projects/project03/IMG-20251206-WA0011.jpg',
      '/home/projects/project03/IMG-20251206-WA0012.jpg',
      '/home/projects/project03/IMG-20251206-WA0013.jpg'
    ],
    description: 'Townhouses and villas (3 bed to 5 bed) from one of the top upcoming communities. Premium residential properties offering spacious living in a thriving neighborhood.',
    amenities: ['Private Garden', 'Community Pool', 'Gym', 'Kids Play Area', 'Handover Q4-2026'],
    featured: true
  },
  {
    id: '4',
    title: 'Premium 1BR in Jumeirah Village Circle',
    location: 'Jumeirah Village Circle, Dubai, UAE',
    price: 890000,
    currency: 'AED',
    beds: 1,
    baths: 2,
    sqft: 880,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Premium 1 Bedroom apartment in Jumeirah Village Circle. Handover Q2-2026.',
    amenities: ['Gym', 'Swimming Pool', 'Community Parks', 'Kids Play Area'],
    featured: false
  },
  {
    id: '5',
    title: '1BR in Jumeirah Circle',
    location: 'Jumeirah Circle, Dubai, UAE',
    price: 900000,
    currency: 'AED',
    beds: 1,
    baths: 2,
    sqft: 880,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    ],
    description: '1 Bedroom apartment in Jumeirah Circle. Handover Q4-2026.',
    amenities: ['Gym', 'Swimming Pool', 'Community Parks', 'Retail Center'],
    featured: false
  },
  {
    id: '6',
    title: 'Luxury Villa in Jumeirah Islands',
    location: 'Jumeirah Islands, Dubai, UAE',
    price: 2400000,
    currency: 'AED',
    beds: 3,
    baths: 4,
    sqft: 2500,
    type: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-3ad19fb21208?q=80&w=2074&auto=format&fit=crop'
    ],
    description: 'Spacious villa in prestigious Jumeirah Islands gated community. Surrounded by lakes and lush greenery.',
    amenities: ['Lake View', 'Private Garden', 'Clubhouse', 'Gated Community'],
    featured: false
  },
  {
    id: '7',
    title: 'Premium Waterfront Apartments',
    location: 'Dubai Island, Dubai, UAE',
    price: 2600000,
    currency: 'AED',
    beds: 2,
    baths: 3,
    sqft: 1400,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea904f8486d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Exclusive waterfront living on Dubai Islands. Handover Q3-2026. Resort-style amenities with breathtaking sea views.',
    amenities: ['Private Beach', 'Marina Access', 'Sea Views', 'Community Pool'],
    featured: false
  },
  {
    id: '8',
    title: 'Dubai Residence Complex',
    location: 'Dubai, UAE',
    price: 840000,
    currency: 'AED',
    beds: 1,
    baths: 2,
    sqft: 750,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a1c00207bf9a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Modern apartment in Dubai Residence Complex. Handover Q2-2028. Premium community with excellent amenities.',
    amenities: ['Gym', 'Swimming Pool', 'Community Parks', 'Security 24/7'],
    featured: false
  },
  {
    id: '9',
    title: 'Dubai Land Residences',
    location: 'Dubai Land, Dubai, UAE',
    price: 600000,
    currency: 'AED',
    beds: 1,
    baths: 1,
    sqft: 650,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a1c00207bf9a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Entry-point investment in master-planned Dubai Land community. Handover Q2-2028. High value for money.',
    amenities: ['Community Parks', 'Sports Courts', 'Retail Center', 'School Nearby'],
    featured: false
  },
  {
    id: '10',
    title: 'Hot Deal: Premium 1BR in Al Jaddaf',
    location: 'Al Jaddaf, Dubai, UAE',
    price: 1300000,
    currency: 'AED',
    beds: 1,
    baths: 2,
    sqft: 900,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Special offer! 1 Bedroom in prime Al Jaddaf location. Original price AED 1.7M, now AED 1.3M (AED 400K discount). Handover in 1 month. Limited availability!',
    amenities: ['Prime Location', 'Ready to Move', 'Furnished', 'Community Pool'],
    featured: true
  },
  {
    id: '11',
    title: 'Exclusive 2BR in Al Jaddaf - 25/75 Payment Plan',
    location: 'Al Jaddaf, Dubai, UAE',
    price: 2400000,
    currency: 'AED',
    beds: 2,
    baths: 3,
    sqft: 1200,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Premium 2 Bedroom in Al Jaddaf with exclusive 25/75 payment plan. One of Dubai\'s most sought-after locations. Limited availability.',
    amenities: ['Prime Location', 'Flexible Payment', 'Community Pool', 'Gym'],
    featured: true
  },
  {
    id: '12',
    title: 'One River Point - 2BR in Business Bay',
    location: 'Business Bay, Dubai, UAE',
    price: 3721828,
    currency: 'AED',
    beds: 2,
    baths: 3,
    sqft: 1489,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea904f8486d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Waterfront apartment on the canal at One River Point. Business Bay location, 5 minutes from Downtown Dubai. Expected completion Q3 2027. ROI 7-8%.',
    amenities: ['Waterfront View', 'Premium Location', 'High ROI', 'Service Charge AED 20/sqft'],
    featured: true
  },
  {
    id: '13',
    title: 'Binghatti Aquarise - Business Bay',
    location: 'Business Bay, Dubai, UAE',
    price: 1950000,
    currency: 'AED',
    beds: 1,
    baths: 2,
    sqft: 900,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea904f8486d?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Binghatti Aquarise in Business Bay. 1 Bedroom starting from AED 1.95M. Resort-style living with artificial beach. Handover March 2027. Strong growth potential.',
    amenities: ['Artificial Beach', 'Resort Living', 'High ROI', 'Community Pool'],
    featured: false
  },
  {
    id: '14',
    title: 'Binghatti SkyTerraces - Motor City',
    location: 'Motor City, Dubai, UAE',
    price: 770000,
    currency: 'AED',
    beds: 0,
    baths: 1,
    sqft: 450,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a1c00207bf9a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Binghatti SkyTerraces in Motor City. Studio apartments from AED 770K. Mature community with future metro access. Handover December 2027. Resort-style living.',
    amenities: ['Mature Community', 'Future Metro Access', 'Strong Growth', 'Resort Living'],
    featured: false
  },
  {
    id: '15',
    title: 'Deal of the Day: Binghatti SkyTerraces 1BR',
    location: 'Motor City, Dubai, UAE',
    price: 1215999,
    currency: 'AED',
    beds: 1,
    baths: 2,
    sqft: 657,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a1c00207bf9a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Binghatti SkyTerraces - 1 Bedroom on 15th floor. Motor City location. Price AED 1,215,999 (AED 300 less than average). Dubai Autodrome view. High ROI, upcoming metro line.',
    amenities: ['Autodrome View', 'High ROI', 'Upcoming Metro', 'Easy Access to 311/611'],
    featured: true
  },
  {
    id: '16',
    title: 'Deal of the Day: Binghatti AmberHall - Studio',
    location: 'JVC, Dubai, UAE',
    price: 650000,
    currency: 'AED',
    beds: 0,
    baths: 1,
    sqft: 373,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a1c00207bf9a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Binghatti AmberHall in JVC - Studio apartment. Offer price AED 650,000 (from AED 750,000). Floor 14. Handover Q2-2026. Early handover opportunity!',
    amenities: ['Early Handover', 'Upcoming Metro', 'Easy Access', 'Discount Available'],
    featured: false
  },
  {
    id: '17',
    title: 'Celesto 3 - New Luxury Landmark by Tarrad',
    location: 'DLRC, Dubai, UAE',
    price: 540000,
    currency: 'AED',
    beds: 0,
    baths: 1,
    sqft: 450,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1484154218962-a1c00207bf9a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop'
    ],
    description: 'Celesto 3 - A new landmark by Tarrad in DLRC. Fully furnished luxury units starting from AED 540,000. A new era of elegance and modern living.',
    amenities: ['Fully Furnished', 'Luxury Units', 'Prime Location', 'Upcoming Community'],
    featured: false
  }
];

export const FEATURED_PROJECTS = [
  {
    id: 'fp1',
    name: 'Wynn Al Marjan Island Residences',
    description: "The region's first integrated resort experience.",
    location: 'Al Marjan Island, Ras Al Khaimah, UAE',
    image: '/home/projects/featured/featured01.jpg'
  },
  {
    id: 'fp2',
    name: 'Palm Jebel Ali Residences',
    description: 'Waterfront living re-imagined.',
    location: 'Palm Jebel Ali, Dubai, UAE',
    image: '/home/projects/featured/featured02.jpg'
  },
  {
    id: 'fp3',
    name: 'Dubai Creek Harbour',
    description: 'The next iconic skyline of Dubai.',
    location: 'Dubai Creek Harbour, Dubai, UAE',
    image: '/home/projects/featured/featured03.jpg'
  }
];
