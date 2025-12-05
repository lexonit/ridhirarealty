import { LucideIcon } from 'lucide-react';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Villa' | 'Penthouse' | 'Mansion' | 'Apartment' | 'Office';
  images: string[];
  description: string;
  amenities: string[];
  featured?: boolean;
}

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  type: string;
  search: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  author: string;
  readTime: string;
}

// --- Content Types ---

export interface HeroSlide {
  id: number;
  heading: string;
  subHeading: string;
  ctaText: string;
  ctaLink: string;
}

export interface HeroSectionData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  subTitleLabel?: string;
}

export interface FeatureItem {
  title: string;
  description?: string;
  icon?: any; // Using any to store the Icon component reference for mock services
  image?: string;
  features?: string[];
}

export interface StatItem {
  value: string;
  label: string;
  icon?: any;
}

export interface DeveloperLogo {
  name: string;
  logo: string;
}