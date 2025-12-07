import React from 'react';
import { 
  Menu, X, Search, ChevronRight, ChevronDown, Star, MapPin, 
  BedDouble, Bath, Square, ArrowRight, MessageSquare,
  Phone, Mail, Instagram, Linkedin, Send, Play, Pause,
  Heart, Clock, Eye, Sun, Moon,
  CheckCircle, ShieldCheck, TrendingUp, Globe, FileCheck, Users, Briefcase,
  Youtube, Download, Share2, Waves, Dumbbell, Warehouse, Building2,
  Languages, Banknote
} from 'lucide-react';

// Custom Ethical Guidance Icon
const EthicalGuidance = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
    <path d="M5 10h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
    <path d="M8 10c0 2.5-2 4-3 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
    <path d="M16 10c0 2.5 2 4 3 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
  </svg>
);

// Custom Global Network Icon
const GlobalNetwork = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.95"></circle>
    <path d="M2 12h20M12 2v20" stroke="currentColor" strokeWidth="1.2" opacity="0.95"></path>
  </svg>
);

// Custom Developer-Direct Access Icon
const DeveloperAccess = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 13l6-5 8 6 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"></path>
    <path d="M7 8l3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"></path>
  </svg>
);

// Custom Data-Driven Advisory Icon
const DataDriven = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="10" width="3" height="11" rx="0.5" fill="currentColor" opacity="0.95"></rect>
    <rect x="9" y="6" width="3" height="15" rx="0.5" fill="currentColor" opacity="0.95"></rect>
    <rect x="15" y="3" width="3" height="18" rx="0.5" fill="currentColor" opacity="0.95"></rect>
  </svg>
);

// Custom Legal & Visa Support Icon
const LegalVisa = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="4" width="14" height="16" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.95"></rect>
    <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.95"></circle>
    <path d="M19 8v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
  </svg>
);

// Custom Technology Icon
const Technology = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="4" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.95"></rect>
    <path d="M8 18h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
    <path d="M10 18v2M14 18v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
  </svg>
);

// Custom Intelligence Icon - Light Bulb
const Intelligence = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 18h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
    <path d="M10 21h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
    <path d="M12 3v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
    <path d="M12 2a6 6 0 0 0-6 6c0 2.5 1.5 4.5 3 6h6c1.5-1.5 3-3.5 3-6a6 6 0 0 0-6-6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"></path>
    <path d="M9 14v4M15 14v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.95"></path>
  </svg>
);

export const Icons = {
  Menu, X, Search, ChevronRight, ChevronDown, Star, MapPin, 
  BedDouble, Bath, Square, ArrowRight, MessageSquare,
  Phone, Mail, Instagram, Linkedin, Send, Play, Pause,
  Heart, Clock, Eye, Sun, Moon,
  CheckCircle, ShieldCheck, TrendingUp, Globe, FileCheck, Users, Briefcase,
  Youtube, Download, Share2, Waves, Dumbbell, Warehouse, Building2,
  Languages, Banknote, EthicalGuidance, GlobalNetwork, DeveloperAccess, DataDriven, LegalVisa, Technology, Intelligence
};