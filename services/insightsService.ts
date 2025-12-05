
import { HeroSectionData } from '../types';

const HERO_DATA: HeroSectionData = {
  title: "Insights Hub",
  subtitle: "Expert analysis, market trends, and lifestyle chronicles from the world of luxury real estate.",
  subTitleLabel: "Knowledge & News",
  backgroundImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
};

// Fallback mock videos in case dynamic fetch fails.
// Using REAL YouTube Video IDs to ensure playback works even in fallback mode.
const MOCK_VIDEOS = [
  {
    title: "Why Invest in Dubai Real Estate Now?",
    videoId: "Top0l0Q7hVw", // Real YouTube ID about Dubai Investment
    duration: "10:15",
    views: "15K",
    image: "https://img.youtube.com/vi/Top0l0Q7hVw/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=Top0l0Q7hVw"
  },
  {
    title: "Dubai Property Market Update 2025",
    videoId: "ysz5S6PUM-U", // Real YouTube ID about Living in Dubai/Property
    duration: "8:45",
    views: "8.2K",
    image: "https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=ysz5S6PUM-U"
  },
  {
    title: "Luxury Villa Tours: Palm Jumeirah",
    videoId: "b9eHMt37tqg", // Real YouTube ID (Dubai 4K)
    duration: "14:20",
    views: "22K",
    image: "https://img.youtube.com/vi/b9eHMt37tqg/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=b9eHMt37tqg"
  }
];

// Updated Channel ID for @invest_dubai_ramesh
const CHANNEL_ID = 'UCk3mjQzR1t9P8MigccXsSAA'; 
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

export const insightsService = {
  getHeroData: async () => HERO_DATA,
  
  getVideos: async () => {
    try {
      // Attempt to fetch dynamic videos from YouTube RSS feed
      const response = await fetch(RSS_URL);
      const data = await response.json();

      if (data.status === 'ok' && data.items && data.items.length > 0) {
        // Transform RSS items to our Video format
        return data.items.map((item: any) => {
          // Robust extraction of Video ID from link (e.g. https://www.youtube.com/watch?v=VIDEO_ID)
          let videoId = '';
          try {
            const urlObj = new URL(item.link);
            videoId = urlObj.searchParams.get('v') || '';
          } catch (e) {
            // Fallback split if URL parsing fails
            videoId = item.link.split('v=')[1]?.split('&')[0] || '';
          }
          
          return {
            title: item.title,
            videoId: videoId,
            // RSS doesn't provide duration/views, so we mock them for the UI feel or hide them
            duration: "New", 
            views: "Trending",
            // Construct high-res thumbnail URL
            image: videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : item.thumbnail,
            link: item.link
          };
        }).slice(0, 12); // Take up to 12 latest videos
      }
      
      throw new Error("No items found in RSS feed");
    } catch (error) {
      console.warn("Failed to fetch dynamic YouTube videos, using fallback:", error);
      // Fallback to mock data if fetch fails (e.g. rate limit or bad ID)
      return MOCK_VIDEOS;
    }
  }
};
