
import { HeroSectionData } from '../types';

const HERO_DATA: HeroSectionData = {
  title: "Insights Hub",
  subtitle: "Expert analysis, market trends, and lifestyle chronicles from the world of luxury real estate.",
  subTitleLabel: "Knowledge & News",
  backgroundImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
};

const VIDEOS = [
  {
    title: "The Royal Penthouse Tour",
    duration: "4:32",
    views: "12.5K",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Future Living: Dubai Creek Harbour",
    duration: "8:15",
    views: "8.2K",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef6c3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Behind The Scenes: Architectural Masterclass",
    duration: "12:00",
    views: "5.9K",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  }
];

export const insightsService = {
  getHeroData: async () => HERO_DATA,
  getVideos: async () => VIDEOS
};
