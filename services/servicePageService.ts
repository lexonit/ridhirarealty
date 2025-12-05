
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
  },
  {
    title: "Investor Advisory Dashboard",
    description: "Real-time tracking of your holdings through our upcoming Investor Dashboard.",
    features: ["ROI calculator", "Comparison tracker", "Market alerts", "AI Assistant"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    icon: Icons.Search
  },
  {
    title: "Property Valuation",
    description: "Get data-driven valuations and market updates across Dubai and RAK.",
    features: ["Comparative Market Analysis", "Yield benchmarking", "Developer credibility index"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop", 
    icon: Icons.Square
  }
];

const PROPERTY_TYPES = [
  { name: "Apartment", desc: "Steady rental income in high-demand areas", img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop" },
  { name: "Townhouse", desc: "Privacy, space, and modern architecture", img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop" },
  { name: "Villa", desc: "Exclusive residences with premium amenities", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" },
  { name: "Mansion", desc: "Ultra-luxury estates for discerning buyers", img: "https://images.unsplash.com/photo-1600596542815-3ad19fb21208?q=80&w=2074&auto=format&fit=crop" },
  { name: "Off-Plan", desc: "High appreciation & flexible payment plans", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop" },
  { name: "Plot", desc: "Build your own project in prime freehold zones", img: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2070&auto=format&fit=crop" },
];

const INVESTMENT_STATS: StatItem[] = [
  { value: "0%", label: "Income Tax" },
  { value: "6-10%", label: "Rental Yield" },
  { value: "100%", label: "Freehold Ownership" },
  { value: "World-Class", label: "Infrastructure", icon: Icons.Star }
];

export const servicePageService = {
  getHeroData: async () => HERO_DATA,
  getServices: async () => SERVICES,
  getPropertyTypes: async () => PROPERTY_TYPES,
  getInvestmentStats: async () => INVESTMENT_STATS
};
