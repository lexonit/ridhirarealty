import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Icons } from './ui/Icons';
import { FlipText } from './ui/AceternityUI';
import { propertyService } from '../services/propertyService';
import { homeService } from '../services/homeService';
import { Property, HeroSlide } from '../types';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  
  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Slider State
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      const slides = await homeService.getHeroSlides();
      setHeroSlides(slides);
    };
    fetchSlides();
  }, []);

  useEffect(() => {
    // Force video playback to handle potential browser autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  // Text Rotation Timer
  useEffect(() => {
    if (heroSlides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(timer);
  }, [heroSlides]);

  // Real-time search effect with debounce
  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery.trim().length > 1) {
        setIsSearching(true);
        try {
          const results = await propertyService.searchProperties(searchQuery);
          setSearchResults(results);
          setShowResults(true);
        } catch (error) {
          console.error("Search failed", error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    };

    const debounceTimer = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleSearchSubmit = () => {
    if (searchQuery) {
      navigate(`/projects?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/projects');
    }
  };

  const currentSlide = heroSlides[currentSlideIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/40 to-luxury-black z-10" />
        <video 
          ref={videoRef}
          autoPlay 
          muted={true} 
          loop 
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1600596542815-3ad19fb21208?q=80&w=2074&auto=format&fit=crop"
        >
          {/* Using a reliable HD source for smoother playback. */}
          <source src="https://www.pexels.com/download/video/27740273/" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full">
        {/* @ts-ignore: Suppressing strict type check for standard motion props */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-brand-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-4"
        >
          Redefining Luxury Living
        </motion.p>
        
        {currentSlide && (
          <div className="min-h-[220px] md:min-h-[260px] flex flex-col items-center justify-center">
            {/* Static Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-baskerville text-white mb-6 leading-tight drop-shadow-lg">
              {currentSlide.heading}
            </h2>
            
            {/* Rotating Subheading using FlipText */}
            {/* We use key to force re-render/re-animation when slide changes */}
            <div key={currentSlide.id} className="mb-8">
              <FlipText 
                className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed" 
                delay={0.2}
              >
                {currentSlide.subHeading}
              </FlipText>
            </div>

            {/* Rotating CTA Button */}
            <div key={`btn-${currentSlide.id}`}>
              {/* @ts-ignore */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <Link 
                  to={currentSlide.ctaLink}
                  className="inline-block px-8 py-3 bg-transparent border border-white text-white font-serif uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-luxury-black transition-all duration-300"
                >
                  {currentSlide.ctaText}
                </Link>
              </motion.div>
            </div>
          </div>
        )}

        {/* Real-time Search Bar */}
        <div className="relative max-w-sm md:max-w-2xl mx-auto mt-8 md:mt-12 z-50">
          {/* @ts-ignore: Suppressing strict type check for standard motion props */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-full flex items-center shadow-2xl relative z-50"
          >
            <div className="flex-1 px-4 border-r border-white/10">
              <label className="block text-[8px] md:text-[10px] text-white/50 uppercase tracking-wider text-left">Location / Project</label>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                placeholder="Search Palm Jumeirah, Villa..." 
                className="w-full bg-transparent text-white placeholder-white/70 outline-none text-sm" 
              />
            </div>
            <div className="flex-1 px-4 border-r border-white/10 hidden md:block">
              <label className="block text-[10px] text-white/50 uppercase tracking-wider text-left">Property Type</label>
              <select className="w-full bg-transparent text-white outline-none text-sm appearance-none cursor-pointer">
                <option className="bg-luxury-black">All Types</option>
                <option className="bg-luxury-black">Villa</option>
                <option className="bg-luxury-black">Penthouse</option>
                <option className="bg-luxury-black">Apartment</option>
              </select>
            </div>
            <button 
              onClick={handleSearchSubmit}
              className="bg-brand-500 hover:bg-brand-400 text-white rounded-full p-3 md:p-4 transition-colors shadow-[0_0_15px_rgba(0,94,184,0.4)]"
            >
              <Icons.Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </motion.div>

          {/* Real-time Results Dropdown */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-luxury-charcoal/95 backdrop-blur-xl rounded-xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden text-left"
              >
                {isSearching ? (
                  <div className="p-4 text-center text-slate-500 dark:text-white/50 text-sm">Searching...</div>
                ) : searchResults.length > 0 ? (
                  <div className="max-h-[300px] overflow-y-auto">
                    {searchResults.map((property) => (
                      <Link 
                        to={`/projects/${property.id}`}
                        key={property.id}
                        className="flex items-center gap-4 p-3 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5 last:border-0"
                      >
                        <img src={property.images[0]} alt={property.title} className="w-12 h-12 rounded-md object-cover" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{property.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-white/50">{property.location}</p>
                        </div>
                        <div className="ml-auto text-brand-600 dark:text-brand-400 text-xs font-bold whitespace-nowrap">
                          {property.currency} {(property.price / 1000000).toFixed(1)}M
                        </div>
                      </Link>
                    ))}
                    <Link to="/projects" className="block p-3 text-center text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 hover:bg-slate-50 dark:hover:bg-white/5">
                      View all results
                    </Link>
                  </div>
                ) : (
                  <div className="p-4 text-center text-slate-500 dark:text-white/50 text-sm">No properties found.</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* @ts-ignore: Suppressing strict type check for standard motion props */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-brand-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;