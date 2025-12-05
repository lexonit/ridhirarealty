
import { HeroSlide, FeatureItem, DeveloperLogo } from '../types';
import { Icons } from '../components/ui/Icons';

// Simulate delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    heading: "Invest Smart. Live Inspired.",
    subHeading: "Ridhira Realty LLC is a Dubai-based real estate advisory <br> built on trust, transparency, and technology.",
    ctaText: "Discover Insights",
    ctaLink: "/insights"
  },
  {
    id: 2,
    heading: "Invest Smart. Live Inspired.",
    subHeading: "Empowering investors and homebuyers with insights, trust, <br> and opportunities — powered by market intelligence.",
    ctaText: "Explore Projects",
    ctaLink: "/projects"
  }
];

const BENEFITS: string[] = [
  "100% Foreign Ownership",
  "0% Property Tax",
  "High Rental Yields (6–10%)",
  "Golden Visa Eligibility",
  "World-class Infrastructure"
];

const DIFFERENTIATORS: FeatureItem[] = [
  {
    title: "Data-Driven Advisory Approach",
    description: "Evidence-backed market insights and trend analysis.",
    icon: Icons.TrendingUp
  },
  {
    title: "Developer-Direct Access",
    description: "Relationships that unlock exclusive opportunities.",
    icon: Icons.Briefcase
  },
  {
    title: "End-to-End Legal & Visa Support",
    description: "Full legal guidance for domestic and international investors.",
    icon: Icons.FileCheck
  },
  {
    title: "Transparent & Ethical Guidance",
    description: "Clear, honest advice with compliance at the core.",
    icon: Icons.ShieldCheck
  },
  {
    title: "Global Investor Network",
    description: "(India | GCC | Europe) — Active international connections.",
    icon: Icons.Globe
  }
];

const WHY_CHOOSE_US: FeatureItem[] = [
  {
    title: "Specialists in Investment Properties",
    description: "Tailored selections for dream homes and high-ROI investments.",
    icon: Icons.TrendingUp
  },
  {
    title: "Multilingual, Client-Focused Team",
    description: "We speak multiple languages to ensure smooth, transparent communication with clients from around the world.",
    icon: Icons.Languages
  },
  {
    title: "Golden Visa & Mortgage Support",
    description: "From securing a Golden Visa to mortgage consultancy, we simplify every step.",
    icon: Icons.FileCheck // Using FileCheck for Visa/Documents
  },
  {
    title: "Global Reach",
    description: "Personalized, one-on-one service backed by an international network across India, GCC, and the UAE.",
    icon: Icons.Globe
  }
];

const DEVELOPERS: DeveloperLogo[] = [
  { name: "Emaar", logo: "https://logo.clearbit.com/emaar.com" },
  { name: "Damac", logo: "https://logo.clearbit.com/damacproperties.com" },
  { name: "Nakheel", logo: "https://logo.clearbit.com/nakheel.com" },
  { name: "Meraas", logo: "https://logo.clearbit.com/meraas.com" },
  { name: "Sobha", logo: "https://logo.clearbit.com/sobharealty.com" },
  { name: "Aldar", logo: "https://logo.clearbit.com/aldar.com" },
  { name: "Binghatti", logo: "https://logo.clearbit.com/binghatti.com" },
  { name: "Danube", logo: "https://logo.clearbit.com/danubeproperties.com" },
  { name: "Omniyat", logo: "https://logo.clearbit.com/omniyat.com" },
  { name: "Ellington", logo: "https://logo.clearbit.com/ellingtonproperties.ae" },
];

export const homeService = {
  getHeroSlides: async (): Promise<HeroSlide[]> => {
    // await delay(100); 
    return HERO_SLIDES;
  },
  getBenefits: async (): Promise<string[]> => {
    // await delay(100);
    return BENEFITS;
  },
  getDifferentiators: async (): Promise<FeatureItem[]> => {
    // await delay(100);
    return DIFFERENTIATORS;
  },
  getWhyChooseUs: async (): Promise<FeatureItem[]> => {
    return WHY_CHOOSE_US;
  },
  getDevelopers: async (): Promise<DeveloperLogo[]> => {
    // await delay(100);
    return DEVELOPERS;
  }
};