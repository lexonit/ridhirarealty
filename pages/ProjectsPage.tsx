import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyGrid from '../components/PropertyGrid';
import { propertyService } from '../services/propertyService';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Property } from '../types';
import { Icons } from '../components/ui/Icons';
import { MOCK_PROPERTIES } from '../services/mockData';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';

const ProjectsPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter States
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedType, setSelectedType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  // Parallax Hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Load initial data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulating API fetch
        await new Promise(resolve => setTimeout(resolve, 800)); // Increased delay to show off skeleton
        let data = [...MOCK_PROPERTIES];

        // Apply Search
        if (searchQuery) {
          const lowerQ = searchQuery.toLowerCase();
          data = data.filter(p => 
            p.title.toLowerCase().includes(lowerQ) || 
            p.location.toLowerCase().includes(lowerQ)
          );
        }

        // Apply Type Filter
        if (selectedType !== 'All') {
          data = data.filter(p => p.type === selectedType);
        }

        // Apply Price Filter
        if (priceRange !== 'All') {
          if (priceRange === 'Under 2M') {
            data = data.filter(p => p.price < 2000000);
          } else if (priceRange === '2M - 10M') {
            data = data.filter(p => p.price >= 2000000 && p.price <= 10000000);
          } else if (priceRange === 'Above 10M') {
            data = data.filter(p => p.price > 10000000);
          }
        }

        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, selectedType, priceRange]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
    setPriceRange('All');
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || selectedType !== 'All' || priceRange !== 'All';

  return (
    <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
      <SEO 
        title="Luxury Projects & Properties" 
        description="Browse our curated collection of luxury villas, apartments, and penthouses in Dubai's most prestigious communities."
      />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
         <motion.div style={{ y }} className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1512453979798-5ea904f8486d?q=80&w=2070&auto=format&fit=crop" 
             alt="Dubai Skyline" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
         </motion.div>
         
         <div className="relative z-10 container mx-auto px-6 text-center">
           <SectionWrapper>
             <div className="w-px h-16 bg-gradient-to-b from-brand-500 to-transparent mx-auto mb-6"></div>
             <span className="text-brand-400 uppercase tracking-widest text-sm block mb-4 font-semibold">Our Portfolio</span>
             <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Master Projects</h1>
             <p className="text-white/80 max-w-xl mx-auto text-lg font-light">
               Explore our collection of iconic developments defining the future of luxury living in Dubai and beyond.
             </p>
           </SectionWrapper>
         </div>
      </div>

      <SectionWrapper>
        {/* Filter Bar */}
        <div className="sticky top-16 z-30 bg-white/80 dark:bg-luxury-black/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-sm py-6">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-4 justify-between items-center">
             
             {/* Search Input */}
             <div className="relative w-full lg:w-96 group">
                <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by location or project..." 
                  className="w-full bg-white dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 rounded-full py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900 dark:text-white placeholder-slate-400 transition-all shadow-sm"
                />
             </div>

             {/* Dropdowns & Actions */}
             <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full lg:w-auto items-center">
                
                {/* Type Select */}
                <div className="relative w-full sm:w-auto">
                  <select 
                    value={selectedType} 
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full sm:w-40 appearance-none bg-white dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white text-sm rounded-full px-5 py-3 pr-10 outline-none focus:border-brand-500 cursor-pointer shadow-sm transition-all"
                  >
                    <option className="bg-white text-slate-900 dark:bg-luxury-charcoal dark:text-white" value="All">All Types</option>
                    <option className="bg-white text-slate-900 dark:bg-luxury-charcoal dark:text-white" value="Villa">Villa</option>
                    <option className="bg-white text-slate-900 dark:bg-luxury-charcoal dark:text-white" value="Apartment">Apartment</option>
                    <option className="bg-white text-slate-900 dark:bg-luxury-charcoal dark:text-white" value="Penthouse">Penthouse</option>
                    <option className="bg-white text-slate-900 dark:bg-luxury-charcoal dark:text-white" value="Mansion">Mansion</option>
                  </select>
                  <Icons.ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>

                {/* Price Select */}
                <div className="relative w-full sm:w-auto">
                  <select 
                    value={priceRange} 
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full sm:w-48 appearance-none bg-white dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white text-sm rounded-full px-5 py-3 pr-10 outline-none focus:border-brand-500 cursor-pointer shadow-sm transition-all"
                  >
                    <option className="bg-white text-slate-900 dark:bg-luxury-charcoal dark:text-white" value="All">All Prices</option>
                    <option className="bg-white text-slate-900 dark:bg-luxury-charcoal dark:text-white" value="Under 2M">Under AED 2M</option>
                    <option className="bg-white text-slate-900 dark:bg-luxury-charcoal dark:text-white" value="2M - 10M">AED 2M - 10M</option>
                    <option className="bg-white text-slate-900 dark:bg-luxury-charcoal dark:text-white" value="Above 10M">Above AED 10M</option>
                  </select>
                  <Icons.ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>

                {/* Clear Button */}
                <div className={`overflow-hidden transition-all duration-300 ${hasActiveFilters ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}>
                  <button 
                    onClick={clearFilters}
                    className="w-full text-brand-600 dark:text-brand-400 text-xs uppercase tracking-widest font-bold hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center gap-1 py-3"
                  >
                    <Icons.X className="w-3 h-3" /> Clear
                  </button>
                </div>
             </div>
          </div>
        </div>

        <PropertyGrid 
          properties={properties} 
          title={selectedType !== 'All' ? `${selectedType} Collections` : "All Master Projects"} 
          showViewAll={false}
          loading={loading}
        />
      </SectionWrapper>
    </main>
  );
};

export default ProjectsPage;