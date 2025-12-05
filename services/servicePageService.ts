import { HeroSectionData, FeatureItem, StatItem } from '../types';
import { Icons } from '../components/ui/Icons';

const HERO_DATA: HeroSectionData = {
  title: "Core Advisory & Investment",
  subtitle: "Combining data-driven advisory, luxury property expertise, and AI-powered market intelligence to deliver clarity, confidence, and long-term value.",
  subTitleLabel: "Our Expertise",
  backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
};

const SERVICES: FeatureItem[] = [
  {
    title: "Real Estate Consultation",
    description: "Strategic, data-backed consultations that identify the right community, price point, and property type for your goals.",
    features: ["ROI projections", "Market comparison dashboards", "Risk analysis", "Personalized investment roadmaps"],
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2069&auto=format&fit=crop", 
    icon: Icons.MapPin
  },
  {
    title: "Elegant & Premium",
    description: "Private, chauffeur-assisted tours of curated luxury and off-plan properties, tailored to your preferences.",
    features: ["Virtual-reality previews", "Developer brief packs", "Priority launch access", "Post-visit ROI summary"],
    image: "https://images.unsplash.com/photo-1560669887-8798cd950c55?q=80&w=2070&auto=format&fit=crop", 
    icon: Icons.Star
  },
  {
    title: "Property Management",
    description: "Our full-service team ensures your assets are well-maintained and yield-optimized — from tenant screening to preventive maintenance.",
    features: ["Digital income dashboards", "Lease renewals", "Tenant lifecycle tracking", "Profitability reports"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", 
    icon: Icons.Square
  },
  {
    title: "Commercial Real Estate",
    description: "Transactions for retail spaces to Grade-A offices focused on strong rental performance.",
    features: ["Corporate leasing advisory", "Market valuation", "Tenant acquisition", "Portfolio diversification"],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop", 
    icon: Icons.BedDouble
  },
  {
    title: "Investment Properties",
    description: "We assist global investors in identifying high-yield, data-verified opportunities across Dubai and RAK.",
    features: ["ROI optimization", "Financial assessment", "Risk-adjusted strategy", "Golden Visa guidance"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop", 
    icon: Icons.ChevronRight
  },
  {
    title: "Consultation & Advisory",
    description: "Insight-driven strategies for individuals and institutions to make informed real-estate decisions.",
    features: ["Custom advisory reports", "Strategic investment planning", "Market-entry guidance"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", 
    icon: Icons.MessageSquare
  },
  {
    title: "Residential Sales & Leasing",
    description: "Buying, selling, or leasing with seamless, transparent transactions and ethical negotiation.",
    features: ["Verified listings", "Comparative pricing", "Legal documentation support", "After-sales assistance"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop", 
    icon: Icons.Heart
  },
  {
    title: "Golden Visa Assistance",
    description: "Secure UAE residency through qualifying property investment with complete document support.",
    features: ["Eligibility assessment", "DLD-verified project curation", "Escrow compliance certification"],
    image: "https://images.unsplash.com/photo-1540910419868-474947ce5ade?q=80&w=2070&auto=format&fit=crop", 
    icon: Icons.Star
  }
];

const PROPERTY_TYPES = [
  {
    name: "Luxury Villas",
    desc: "Spacious, private residences in gated communities like Palm Jumeirah and Emirates Hills.",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Penthouses",
    desc: "Sky-high living with panoramic views and exclusive amenities.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Waterfront Apartments",
    desc: "Premium apartments with direct beach access and sea views.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea904f8486d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Townhouses",
    desc: "Community-focused living with modern designs and family-friendly amenities.",
    img: "https://images.unsplash.com/photo-1600596542815-3ad19fb21208?q=80&w=2074&auto=format&fit=crop"
  },
  {
    name: "Off-Plan Investment",
    desc: "High-growth potential properties in emerging districts.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Commercial Spaces",
    desc: "Strategic office and retail spaces in business hubs.",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
  }
];

const INVESTMENT_STATS: StatItem[] = [
  {
    value: "6-10%",
    label: "Avg. Rental Yield",
    icon: undefined
  },
  {
    value: "0%",
    label: "Income Tax",
    icon: undefined
  },
  {
    value: "100%",
    label: "Foreign Ownership",
    icon: undefined
  },
  {
    value: "AED 2M",
    label: "Golden Visa Entry",
    icon: undefined
  }
];

export const servicePageService = {
  getHeroData: async () => HERO_DATA,
  getServices: async () => SERVICES,
  getPropertyTypes: async () => PROPERTY_TYPES,
  getInvestmentStats: async () => INVESTMENT_STATS
};
