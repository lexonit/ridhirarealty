/**
 * Image Constants - Public Home Images
 * Used throughout the application for consistent image management
 */

// Public Home Images from /public/home directory
export const PUBLIC_IMAGES = {
  // Hero & Banner Images
  heroBanner: '/home/create a banner Dubai Burj Khalifa image _with out words_ (2) (1).jpg',
  burjKhalifa: '/home/create a banner Dubai Burj Khalifa image _with out words_ (2) (1).jpg',
  
  // Dubai Real Estate
  dubaiRealEstate: '/home/Dubai Real Estate Outlook Discover, Invest, Prosper.png',
  realEstateOutlook: '/home/Dubai Real Estate Outlook Discover, Invest, Prosper.png',
  
  // Landscape & Architecture
  futuristicDubai: '/home/futuristic-dubai-landscape.jpg',
  dubaiLandscape: '/home/futuristic-dubai-landscape.jpg',
  
  // Generated Images
  geminiImage: '/home/Gemini_Generated_Image_4cjouz4cjouz4cjo.png',
  
  // Pexels Images - Dubai/Real Estate
  pexelsIvan: '/home/pexels-ivan-siarbolin-1513699-3787840.jpg',
  pexelsLina: '/home/pexels-lina-12238283.jpg',
  pexelsMarjan: '/home/pexels-marjan-147528816-10484112.jpg',
  pexelsMikhail: '/home/pexels-mikhail-nilov-8319455.jpg',
  pexelsNextvoyage: '/home/pexels-nextvoyage-1470405.jpg',
  pexelsPashal: '/home/pexels-pashal-337944.jpg',
  pexelsVince: '/home/pexels-vince-21856199.jpg',
  
  // Property Management
  propertyManagement: '/home/Property MAnagement_Image_aotskqaotskqaots.png',
  
  // Why Dubai & Ras Al Khaimah Section
  whyForeignOwnership: '/home/why/100-foreign.png',
  whyRentalYields: '/home/why/Highrentalyields.png',
  whyMarketInsights: '/home/why/MarketInsightsHome Page.png',
  whyPropertyTax: '/home/why/PropertyTAX.png',
  whyInfrastructure: '/home/why/World-class infrastructure and unmatched safety.png',
  
  // What is the Next Section
  rakVision2030: '/whatisthenext/RAKVision2030.jpg',
  wynnResortCasino: '/whatisthenext/WynnResortCasino.png',
  
  // Founder Section
  founderCEO: '/founder/founder-ceo.jpg',
  founderAdvisoryBoard: '/founder/SRAJUADVISORYBOARDMEMBERDIRECTOR.jpg',
} as const;

// Image rotation arrays for different sections
export const HERO_IMAGES = [
  PUBLIC_IMAGES.heroBanner,
  PUBLIC_IMAGES.futuristicDubai,
  PUBLIC_IMAGES.dubaiRealEstate,
] as const;

export const LUXURY_IMAGES = [
  PUBLIC_IMAGES.pexelsIvan,
  PUBLIC_IMAGES.pexelsMarjan,
  PUBLIC_IMAGES.pexelsMikhail,
  PUBLIC_IMAGES.pexelsNextvoyage,
  PUBLIC_IMAGES.pexelsVince,
] as const;

export const ABOUT_SECTION_IMAGE = PUBLIC_IMAGES.futuristicDubai;

export const GALLERY_IMAGES = [
  PUBLIC_IMAGES.pexelsLina,
  PUBLIC_IMAGES.pexelsMarjan,
  PUBLIC_IMAGES.pexelsMikhail,
  PUBLIC_IMAGES.pexelsNextvoyage,
  PUBLIC_IMAGES.pexelsPashal,
  PUBLIC_IMAGES.pexelsVince,
  PUBLIC_IMAGES.pexelsIvan,
  PUBLIC_IMAGES.futuristicDubai,
  PUBLIC_IMAGES.dubaiRealEstate,
] as const;

export const VIDEO_POSTER_IMAGE = PUBLIC_IMAGES.heroBanner;
export const WHY_DUBAI_BACKGROUND = PUBLIC_IMAGES.futuristicDubai;

// Why Section Images
export const WHY_IMAGES = {
  foreignOwnership: PUBLIC_IMAGES.whyForeignOwnership,
  rentalYields: PUBLIC_IMAGES.whyRentalYields,
  marketInsights: PUBLIC_IMAGES.whyMarketInsights,
  propertyTax: PUBLIC_IMAGES.whyPropertyTax,
  infrastructure: PUBLIC_IMAGES.whyInfrastructure,
} as const;

// What is the Next Section Images
export const WHAT_IS_NEXT_IMAGES = {
  rakVision: PUBLIC_IMAGES.rakVision2030,
  wynnResort: PUBLIC_IMAGES.wynnResortCasino,
} as const;

// Founder Section Images
export const FOUNDER_IMAGES = {
  ceo: PUBLIC_IMAGES.founderCEO,
  advisoryBoard: PUBLIC_IMAGES.founderAdvisoryBoard,
} as const;
