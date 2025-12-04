
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import AboutSection from '../components/AboutSection';
import VideoShowcase from '../components/VideoShowcase';
import GallerySection from '../components/GallerySection';
import { propertyService } from '../services/propertyService';
import { homeService } from '../services/homeService';
import { FloatingElement, ThreeDCard, CometCard } from '../components/ui/AceternityUI';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Link } from 'react-router-dom';
import { Icons } from '../components/ui/Icons';
import { motion } from 'framer-motion';
import { Property, FeatureItem, DeveloperLogo } from '../types';
import { Skeleton } from '../components/ui/Skeleton';

const Home: React.FC = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Property[]>([]);
  const [latestWork, setLatestWork] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Content States
  const [benefits, setBenefits] = useState<string[]>([]);
  const [differentiators, setDifferentiators] = useState<FeatureItem[]>([]);
  const [developers, setDevelopers] = useState<DeveloperLogo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      const [allProps, fetchedBenefits, fetchedDiffs, fetchedDevs] = await Promise.all([
        propertyService.getAllProperties(),
        homeService.getBenefits(),
        homeService.getDifferentiators(),
        homeService.getDevelopers()
      ]);

      setLatestWork(allProps.slice(0, 6)); 
      setFeaturedProjects(allProps.filter(p => p.featured));
      setBenefits(fetchedBenefits);
      setDifferentiators(fetchedDiffs);
      setDevelopers(fetchedDevs);
      
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      {/* Video Hero Section */}
      <Hero />
      
      {/* Introduction Divider */}
      <div className="h-24 md:h-32 bg-white dark:bg-black flex items-center justify-center transition-colors duration-300">
        <FloatingElement>
          <div className="w-[1px] h-12 md:h-16 bg-slate-200 dark:bg-white/20"></div>
        </FloatingElement>
      </div>

      {/* --- LATEST WORK / OUR PROJECTS SECTION --- */}
      <SectionWrapper className="py-16 md:py-24 bg-slate-50 dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-brand-600 dark:text-brand-500 uppercase tracking-widest text-xs font-semibold block mb-2">Latest Work</span>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 dark:text-white">Our Projects</h2>
            </div>
            <Link to="/projects" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-500 transition-colors">
              View all Projects
              <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white dark:bg-luxury-charcoal rounded-xl overflow-hidden border border-slate-200 dark:border-white/5">
                    <Skeleton className="h-64 w-full rounded-none" />
                    <div className="p-6">
                      <Skeleton className="h-6 w-3/4 mb-4" />
                      <Skeleton className="h-4 w-1/2 mb-4" />
                      <div className="flex justify-between mt-4">
                        <Skeleton className="h-4 w-1/4" />
                        <Skeleton className="h-8 w-8 rounded-full" />
                      </div>
                    </div>
                  </div>
               ))}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestWork.map((project, idx) => (
                // @ts-ignore: Suppressing strict type check for standard motion props
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CometCard className="h-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden group">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={project.images[0]} 
                        alt={project.location} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-3 py-1 rounded-sm border border-slate-200 dark:border-white/10">
                        <span className="text-brand-600 dark:text-white text-xs font-bold tracking-wider">
                          {project.currency} {(project.price / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 group">
                      <h3 className="text-lg font-serif text-slate-900 dark:text-white mb-2 line-clamp-1">{project.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-white/60 mb-3">{project.location}</p>
                      
                      {/* Extract handover from amenities if present */}
                      <div className="flex items-center gap-2 text-slate-500 dark:text-white/50 text-xs uppercase tracking-wide mb-4">
                        <Icons.Clock className="w-3 h-3" />
                        {project.amenities.find(a => a.includes('Handover')) || 'Handover Soon'}
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex justify-between items-center">
                        <span className="text-[10px] text-slate-400 dark:text-white/40 uppercase tracking-widest">Investment Opportunity</span>
                        <Link to={`/projects/${project.id}`} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-brand-500 group-hover:text-white transition-colors">
                          <Icons.ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </CometCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* --- FEATURED PROJECTS SECTION --- */}
      <SectionWrapper className="py-24 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <span className="text-brand-600 dark:text-brand-500 uppercase tracking-widest text-xs font-semibold block mb-4">Featured Projects</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-6">Curated Opportunities for Intelligent Investors</h2>
           </div>

           {loading ? (
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {[...Array(3)].map((_, i) => (
                 <div key={i} className="h-[400px] w-full rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 relative">
                    <Skeleton className="w-full h-full rounded-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <Skeleton className="h-1 w-10 mb-4 bg-brand-500" />
                      <Skeleton className="h-8 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                 </div>
               ))}
             </div>
           ) : (
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredProjects.slice(0, 3).map((project, idx) => (
                  // @ts-ignore: Suppressing strict type check for standard motion props
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <Link to={`/projects/${project.id}`}>
                      <ThreeDCard className="h-[400px] w-full cursor-pointer group">
                        <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl dark:shadow-none border border-slate-200 dark:border-white/10">
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-90" />
                          <img 
                            src={project.images[0]} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                             <div className="w-10 h-[2px] bg-brand-500 mb-4 transition-all duration-300 group-hover:w-20"></div>
                             <h3 className="text-2xl font-serif text-white mb-2 leading-tight">{project.title}</h3>
                             <p className="text-white/70 text-sm font-light line-clamp-2">{project.description}</p>
                          </div>
                        </div>
                      </ThreeDCard>
                    </Link>
                  </motion.div>
                ))}
             </div>
           )}
           
           <div className="text-center mt-12">
             <Link to="/projects" className="inline-block px-8 py-3 border border-slate-200 dark:border-white/20 rounded-full text-slate-900 dark:text-white uppercase tracking-widest text-xs hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all duration-300">
               View All Projects
             </Link>
           </div>
        </div>
      </SectionWrapper>

      {/* --- TRUSTED DEVELOPERS MARQUEE --- */}
      <SectionWrapper className="py-16 bg-slate-50 dark:bg-luxury-charcoal border-y border-slate-200 dark:border-white/5 overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-brand-600 dark:text-brand-500 uppercase tracking-widest text-xs font-semibold">Authorized Channel Partner</span>
        </div>
        
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-scroll whitespace-nowrap gap-16 px-8 items-center">
             {[...developers, ...developers].map((dev, idx) => (
               <div key={`${dev.name}-${idx}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100">
                 <img src={dev.logo} alt={dev.name} className="h-10 md:h-12 w-auto object-contain" />
               </div>
             ))}
          </div>
        </div>
      </SectionWrapper>

      {/* --- WHY DUBAI & RAK SECTION --- */}
      <SectionWrapper className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea904f8486d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-luxury-black/90"></div>
        
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="flex-1">
                <span className="text-brand-400 uppercase tracking-widest text-xs font-semibold block mb-4">Why Dubai & Ras Al Khaimah</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Two Powerhouses.<br/>One Investment Vision.</h2>
                <h3 className="text-xl text-white/90 mb-8 font-light">Dubai – The Global Benchmark</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icons.CheckCircle className="w-5 h-5 text-brand-400 shrink-0" />
                      <span className="text-sm md:text-base text-white/80">{benefit}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                     <Icons.ShieldCheck className="w-5 h-5 text-brand-400 shrink-0" />
                     <span className="text-sm md:text-base text-white/80">Unmatched Safety</span>
                  </div>
                </div>
             </div>
             
             <div className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 translate-y-8">
                     <div className="h-40 md:h-56 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6 flex flex-col justify-end">
                        <span className="text-4xl font-serif text-brand-400 mb-2">0%</span>
                        <span className="text-xs uppercase tracking-widest text-white/60">Tax</span>
                     </div>
                     <div className="h-40 md:h-56 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6 flex flex-col justify-end">
                        <span className="text-4xl font-serif text-brand-400 mb-2">100%</span>
                        <span className="text-xs uppercase tracking-widest text-white/60">Ownership</span>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="h-40 md:h-56 bg-brand-500 rounded-2xl border border-white/10 p-6 flex flex-col justify-end shadow-2xl">
                        <Icons.TrendingUp className="w-8 h-8 text-white mb-auto" />
                        <span className="text-4xl font-serif text-white mb-2">10%</span>
                        <span className="text-xs uppercase tracking-widest text-white/80">Yields</span>
                     </div>
                     <div className="h-40 md:h-56 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6 flex flex-col justify-end">
                        <Icons.Globe className="w-8 h-8 text-brand-400 mb-auto" />
                        <span className="text-lg font-serif text-white">Golden Visa</span>
                        <span className="text-xs uppercase tracking-widest text-white/60 mt-1">Eligibility</span>
                     </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </SectionWrapper>

      {/* --- THE RIDHIRA DIFFERENCE --- */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <span className="text-brand-600 dark:text-brand-500 uppercase tracking-widest text-xs font-semibold block mb-4">The Ridhira Difference</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-6">Why Investors Choose Ridhira</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
             {differentiators.map((item, idx) => (
               <div key={idx} className="bg-white dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/5 hover:border-brand-500/50 transition-all duration-300 shadow-sm dark:shadow-none group">
                 <div className="w-12 h-12 bg-brand-50 dark:bg-brand-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors text-brand-600 dark:text-brand-400">
                   {item.icon && <item.icon className="w-6 h-6" />}
                 </div>
                 <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-3">{item.title}</h3>
                 <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed">
                   {item.description}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </SectionWrapper>

      <AboutSection />
      
      <SectionWrapper>
        <VideoShowcase />
      </SectionWrapper>

      <GallerySection />
      
      {/* --- NEW CUSTOM CTA SECTION --- */}
      <SectionWrapper id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-charcoal z-0">
          <div className="absolute inset-0 bg-brand-900/40 mix-blend-overlay"></div>
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Consultation" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Ready to Begin Your Property Journey?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg font-light">
            Let Ridhira Realty guide you through the UAE’s most promising investment destinations — backed by research, clarity, and trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-white text-brand-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-colors shadow-lg">
              Schedule a Free Consultation
            </Link>
            <a href="https://wa.me/971561705995" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-colors shadow-lg flex items-center justify-center gap-2">
              <Icons.MessageSquare className="w-5 h-5" />
              Whatsapp Now
            </a>
          </div>
        </div>
      </SectionWrapper>

    </main>
  );
};

export default Home;
