
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { propertyService } from '../services/propertyService';
import { Property } from '../types';
import { Icons } from '../components/ui/Icons';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Skeleton } from '../components/ui/Skeleton';

const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      if (id) {
        const data = await propertyService.getPropertyById(id);
        if (data) setProperty(data);
      }
      setLoading(false);
    };
    fetchProperty();
  }, [id]);

  // Handle Scroll Spy for Sticky Nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'amenities', 'gallery', 'location', 'register'];
      // Offset to trigger active state a bit earlier
      const scrollPosition = window.scrollY + 200; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 85; // Navbar/Sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Manually set active for immediate feedback
      setActiveSection(id);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property?.title,
        text: `Check out ${property?.title} by Ridhira Realty`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Property link copied to clipboard!");
    }
  };

  const handleEnquire = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      alert(`Thank you! Your enquiry for ${property?.title} has been received. Our team will contact you shortly.`);
      setFormStatus('idle');
    }, 1500);
  };

  const handleOpenMaps = () => {
    if (property?.location) {
      const query = encodeURIComponent(`${property.location}, Dubai, UAE`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
  };

  if (loading) {
    return (
      <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
        {/* Skeleton Hero */}
        <div className="relative h-screen w-full bg-slate-200 dark:bg-luxury-charcoal animate-pulse">
           <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
             <div className="container mx-auto">
               <Skeleton className="h-6 w-48 mb-4" />
               <Skeleton className="h-20 w-3/4 mb-6" />
               <div className="flex gap-6">
                 <Skeleton className="h-6 w-24" />
                 <Skeleton className="h-6 w-32" />
                 <Skeleton className="h-6 w-32" />
               </div>
             </div>
           </div>
        </div>
        
        {/* Skeleton Nav */}
        <div className="sticky top-[80px] z-40 bg-white/95 dark:bg-luxury-black/95 border-b border-slate-200 dark:border-white/10 h-16">
          <div className="container mx-auto px-6 h-full flex items-center gap-6">
             <Skeleton className="h-4 w-24" />
             <Skeleton className="h-4 w-24" />
             <Skeleton className="h-4 w-24" />
          </div>
        </div>

        {/* Skeleton Content */}
        <div className="container mx-auto px-6 py-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                 <Skeleton className="h-4 w-32" />
                 <Skeleton className="h-12 w-full" />
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}
              </div>
           </div>
        </div>
      </main>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-luxury-black text-slate-900 dark:text-white">
        <h2 className="text-3xl font-serif mb-4">Property Not Found</h2>
        <Link to="/projects" className="text-brand-500 hover:underline">Return to Portfolio</Link>
      </div>
    );
  }

  return (
    <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
      
      {/* --- IMMERSIVE HERO --- */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
          <div className="container mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-400 uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">
                {property.location}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 leading-none">
                {property.title}
              </h1>
              <div className="flex gap-6 text-white/80 text-sm md:text-base font-light tracking-wide">
                <span>{property.type}</span>
                <span className="w-px h-6 bg-white/30"></span>
                <span>{property.beds} Bedrooms</span>
                <span className="w-px h-6 bg-white/30"></span>
                <span>{property.currency} {(property.price / 1000000).toFixed(2)}M</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
               <button onClick={() => scrollToSection('register')} className="bg-white text-black px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-500 hover:text-white transition-all duration-300">
                 Register Interest
               </button>
               <button onClick={handleShare} className="border border-white/30 text-white px-4 py-4 hover:bg-white hover:text-black transition-all duration-300" aria-label="Share">
                 <Icons.Share2 className="w-5 h-5" />
               </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- STICKY SUB-NAV --- */}
      <div className="sticky top-[60px] lg:top-[80px] z-40 bg-white/95 dark:bg-luxury-black/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm transition-all">
        <div className="container mx-auto px-6 overflow-x-auto hide-scrollbar">
          <div className="flex whitespace-nowrap min-w-full md:justify-center">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'amenities', label: 'Amenities' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'location', label: 'Location' },
              { id: 'register', label: 'Enquire' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-5 text-xs uppercase tracking-widest font-semibold transition-colors border-b-2 ${
                  activeSection === item.id 
                  ? 'border-brand-600 text-brand-600 dark:border-brand-400 dark:text-brand-400' 
                  : 'border-transparent text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- OVERVIEW SECTION --- */}
      <section id="overview" className="py-24 bg-white dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Text */}
            <SectionWrapper>
              <h2 className="text-sm font-bold text-brand-600 dark:text-brand-500 uppercase tracking-widest mb-4">The Concept</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-8 leading-tight">
                A Sanctuary of <br/> Unmatched Elegance.
              </h3>
              <p className="text-slate-600 dark:text-white/70 text-lg leading-relaxed font-light mb-8">
                {property.description}
              </p>
              <p className="text-slate-600 dark:text-white/70 text-lg leading-relaxed font-light">
                Designed for those who seek the extraordinary, {property.title} offers a harmonious blend of nature and modern architecture. Every detail has been meticulously crafted to provide an environment that inspires and rejuvenates.
              </p>
              
              <div className="mt-12 flex gap-4">
                 <button 
                  onClick={() => scrollToSection('register')}
                  className="flex items-center gap-2 text-brand-600 dark:text-brand-400 uppercase tracking-widest text-xs font-bold border-b border-brand-600 dark:border-brand-400 pb-1 hover:text-slate-900 dark:hover:text-white transition-colors"
                 >
                   <Icons.Download className="w-4 h-4" /> Download Brochure
                 </button>
              </div>
            </SectionWrapper>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
               <SectionWrapper delay={0.2} className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-none border border-slate-100 dark:border-white/5 text-center">
                  <span className="block text-3xl font-serif text-slate-900 dark:text-white mb-2">{property.beds}</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/50">Bedrooms</span>
               </SectionWrapper>
               <SectionWrapper delay={0.3} className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-none border border-slate-100 dark:border-white/5 text-center">
                  <span className="block text-3xl font-serif text-slate-900 dark:text-white mb-2">{property.sqft.toLocaleString()}</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/50">Sq. Ft.</span>
               </SectionWrapper>
               <SectionWrapper delay={0.4} className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-none border border-slate-100 dark:border-white/5 text-center">
                  <span className="block text-3xl font-serif text-slate-900 dark:text-white mb-2">Q4 2026</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/50">Completion</span>
               </SectionWrapper>
               <SectionWrapper delay={0.5} className="bg-brand-600 dark:bg-brand-900 p-8 rounded-none border border-transparent text-center">
                  <span className="block text-3xl font-serif text-white mb-2">{(property.price / 1000000).toFixed(1)}M</span>
                  <span className="text-xs uppercase tracking-widest text-white/70">Starting Price (AED)</span>
               </SectionWrapper>
            </div>

          </div>
        </div>
      </section>

      {/* --- AMENITIES SECTION --- */}
      <section id="amenities" className="py-24 bg-slate-50 dark:bg-luxury-charcoal transition-colors duration-300">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-4">World-Class Amenities</h2>
               <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">Experience a lifestyle curated for the elite, with facilities that cater to your every need.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {property.amenities.map((amenity, idx) => (
                 <SectionWrapper key={idx} delay={idx * 0.1}>
                    <div className="group relative h-64 w-full overflow-hidden bg-white dark:bg-luxury-black cursor-pointer">
                       {/* Use the property's images as fallback for amenities to ensure reliability */}
                       <img 
                         src={property.images[idx % property.images.length]} 
                         alt={amenity}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                       />
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                       <div className="absolute bottom-6 left-6 text-white">
                          <div className="w-10 h-1 bg-white mb-3 transition-all duration-300 group-hover:w-16"></div>
                          <h3 className="text-xl font-serif tracking-wide">{amenity}</h3>
                       </div>
                    </div>
                 </SectionWrapper>
               ))}
            </div>
         </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section id="gallery" className="py-24 bg-white dark:bg-luxury-black transition-colors duration-300">
         <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-12 text-center">Interiors & Views</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
               {/* Large Feature Image (Use index 1 or fallback to 0) */}
               <div className="md:col-span-2 h-[500px] overflow-hidden rounded-sm group relative">
                  <img src={property.images[1] || property.images[0]} alt="Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-black/80 px-4 py-2 text-xs uppercase tracking-widest">Living Area</div>
               </div>
               
               {/* Secondary Images (Use distinct images) */}
               {property.images.length > 2 ? 
                 property.images.slice(2, 4).map((img, idx) => (
                    <div key={idx} className="h-[350px] overflow-hidden rounded-sm group relative">
                      <img src={img} alt="Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                 )) : 
                 // Fallback if few images, reuse with slight variation
                 property.images.slice(0, 2).map((img, idx) => (
                    <div key={idx} className="h-[350px] overflow-hidden rounded-sm group relative">
                      <img src={img} alt="Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                 ))
               }
            </div>
            
            <div className="text-center mt-12">
               <button onClick={() => scrollToSection('gallery')} className="border border-slate-900 dark:border-white px-10 py-3 text-slate-900 dark:text-white uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                  View Full Gallery
               </button>
            </div>
         </div>
      </section>

      {/* --- LOCATION SECTION --- */}
      <section id="location" className="h-[500px] bg-slate-200 dark:bg-slate-800 relative group overflow-hidden">
         <img src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000" alt="Map Background" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white dark:bg-luxury-charcoal p-8 md:p-12 shadow-2xl max-w-lg text-center backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
               <Icons.MapPin className="w-10 h-10 text-brand-600 dark:text-brand-500 mx-auto mb-4" />
               <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-2">{property.location}</h3>
               <p className="text-slate-600 dark:text-white/60 mb-6">Ideally situated with easy access to major highways, airports, and luxury shopping destinations.</p>
               <button 
                onClick={handleOpenMaps}
                className="text-brand-600 dark:text-brand-500 uppercase tracking-widest text-xs font-bold border-b border-brand-500 pb-1 hover:text-slate-900 dark:hover:text-white transition-colors"
               >
                 Open in Google Maps
               </button>
            </div>
         </div>
      </section>

      {/* --- REGISTER / ENQUIRE SECTION --- */}
      <section id="register" className="py-24 bg-brand-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="bg-white dark:bg-luxury-charcoal overflow-hidden shadow-2xl flex flex-col lg:flex-row">
               
               {/* Form Side */}
               <div className="p-10 lg:p-16 w-full lg:w-1/2">
                  <span className="text-brand-600 dark:text-brand-500 uppercase tracking-widest text-xs font-bold mb-4 block">Exclusive Opportunity</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-6">Register Your Interest</h2>
                  <p className="text-slate-600 dark:text-white/60 mb-8">
                    Submit your details to receive the official brochure, floor plans, and payment plan options for {property.title}.
                  </p>
                  
                  <form className="space-y-6" onSubmit={handleEnquire}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">First Name</label>
                           <input required type="text" className="w-full bg-slate-50 dark:bg-black/20 border-b border-slate-300 dark:border-white/20 p-3 outline-none focus:border-brand-500 transition-colors dark:text-white" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">Last Name</label>
                           <input required type="text" className="w-full bg-slate-50 dark:bg-black/20 border-b border-slate-300 dark:border-white/20 p-3 outline-none focus:border-brand-500 transition-colors dark:text-white" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">Email Address</label>
                        <input required type="email" className="w-full bg-slate-50 dark:bg-black/20 border-b border-slate-300 dark:border-white/20 p-3 outline-none focus:border-brand-500 transition-colors dark:text-white" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">Phone Number</label>
                        <input required type="tel" className="w-full bg-slate-50 dark:bg-black/20 border-b border-slate-300 dark:border-white/20 p-3 outline-none focus:border-brand-500 transition-colors dark:text-white" />
                     </div>
                     
                     <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className={`w-full bg-slate-900 dark:bg-brand-600 text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-brand-600 dark:hover:bg-brand-500 transition-colors mt-4 flex justify-center ${formStatus === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                     >
                        {formStatus === 'submitting' ? 'Processing...' : formStatus === 'success' ? 'Enquiry Sent' : 'Request Callback'}
                     </button>
                  </form>
               </div>

               {/* Image Side */}
               <div className="w-full lg:w-1/2 relative min-h-[400px]">
                  <img src={property.images[0]} className="absolute inset-0 w-full h-full object-cover" alt="Concierge" />
                  <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                     <p className="font-serif italic text-xl">"Ideally positioned for high capital appreciation and rental yield."</p>
                     <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                           <Icons.Phone className="w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-xs uppercase tracking-widest opacity-70">Direct Sales Line</p>
                           <a href="tel:+971561705995" className="font-bold hover:underline">+971 56 170 5995</a>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

    </main>
  );
};

export default PropertyDetailsPage;
