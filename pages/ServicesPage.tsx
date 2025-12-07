import React, { useEffect, useState, useRef } from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';
import ContactSection from '../components/ContactSection';
import { Icons } from '../components/ui/Icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { servicePageService } from '../services/servicePageService';
import { HeroSectionData, FeatureItem, StatItem } from '../types';
import { Skeleton } from '../components/ui/Skeleton';
import SEO from '../components/SEO';
import { FlipWords } from '../components/ui/flip-words';

const ServicesPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState<HeroSectionData | null>(null);
  const [services, setServices] = useState<FeatureItem[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<any[]>([]);
  const [investmentStats, setInvestmentStats] = useState<StatItem[]>([]);

  // Parallax Hero
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [hero, srvs, types, stats] = await Promise.all([
        servicePageService.getHeroData(),
        servicePageService.getServices(),
        servicePageService.getPropertyTypes(),
        servicePageService.getInvestmentStats()
      ]);

      setHeroData(hero);
      setServices(srvs);
      setPropertyTypes(types);
      setInvestmentStats(stats);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading || !heroData) {
    return (
      <main className="bg-white dark:bg-luxury-black min-h-screen">
         <Skeleton className="h-[60vh] w-full rounded-none" />
         <div className="container mx-auto px-6 py-24 space-y-8">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
         </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
      <SEO 
        title="Our Services - Property Management & Consultation" 
        description="Comprehensive real estate services including investment advisory, property management, golden visa assistance, and residential sales."
      />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/service/service-hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
         <motion.div style={{ y }} className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
         </motion.div>
         
         <div className="relative z-10 container mx-auto px-6 text-center">
           <SectionWrapper>
             {/* <span className="text-brand-400 uppercase tracking-widest text-sm block mb-4 font-semibold">{heroData.subTitleLabel}</span> */}
             <h1 className="text-4xl md:text-6xl  text-white mb-6">
               <FlipWords 
                 words={["Intelligent Services. Tailored for You."]} 
                 duration={3000}
                 className="text-brand-400"
               />
             </h1>
             <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg font-light">
               {heroData.subtitle}
             </p>
           </SectionWrapper>
         </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          {/* <span className="text-brand-600 dark:text-brand-400 uppercase tracking-widest text-xs font-semibold block mb-4">Our Services</span> */}
          <h2 className="text-4xl md:text-5xl  text-slate-900 dark:text-white mb-6">Core Advisory & Investment Services</h2>
          <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">Strategic offerings designed for investors, buyers, and institutions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <SectionWrapper key={idx} delay={idx * 0.05}>
              <div className="group relative h-full bg-white dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-brand-500/50 hover:shadow-xl dark:hover:shadow-none transition-all duration-500 flex flex-col md:flex-row shadow-lg dark:shadow-none">
                
                {/* Image Side (Mobile: Top, Desktop: Left) */}
                <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-900/10 dark:bg-brand-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/80 dark:bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-slate-200 dark:border-white/10">
                    {service.icon && <service.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                   <h3 className="text-2xl  text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" style={{ color: 'goldenrod' }}>{service.title}</h3>
                   <p className="text-slate-600 dark:text-white/60 text-sm mb-6 leading-relaxed">{service.description}</p>
                   
                   <ul className="flex flex-wrap gap-2 mt-auto">
                     {service.features?.map((feature, i) => (
                       <li key={i} className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/30 border border-amber-500/50 rounded-full text-xs md:text-sm text-slate-700 dark:text-white/80 font-medium">
                         <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                         {feature}
                       </li>
                     ))}
                   </ul>
                </div>

              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>

      {/* Property Types Specialization */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-luxury-charcoal relative transition-colors duration-300">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               {/* <span className="text-brand-600 dark:text-brand-400 uppercase tracking-widest text-sm font-semibold">Tailored Portfolio</span> */}
               <h2 style={{ color: 'goldenrod' }} className="text-4xl font-semibold text-slate-900 dark:text-white mt-4">Property Types We Specialize In</h2>
               <p className="text-slate-600 dark:text-white/50 mt-4">Curated property types for investor profiles and lifestyles.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {propertyTypes.map((type, idx) => (
                 // @ts-ignore: Suppressing strict type check for standard motion props
                 <motion.div 
                   key={idx}
                   whileHover={{ y: -5 }}
                   className="relative h-64 rounded-xl overflow-hidden group cursor-pointer border border-slate-200 dark:border-white/5 shadow-md dark:shadow-none"
                 >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity" />
                    <img 
                      src={type.img} 
                      alt={type.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                       <h3 className="text-2xl  text-white mb-1 drop-shadow-md">{type.name}</h3>
                       <p className="text-xs text-white/90 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 drop-shadow-md">
                         {type.desc}
                       </p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </SectionWrapper>

      {/* Why Invest Section */}
      <SectionWrapper className="py-24 bg-gradient-to-r from-brand-800 to-slate-900 dark:from-brand-900 dark:to-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
           <h2 className="text-3xl md:text-5xl  text-white mb-12">Why Invest in UAE Real Estate</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {investmentStats.map((stat, idx) => (
                <div key={idx} className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
                   {stat.icon ? (
                     <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-brand-400 mx-auto mb-4" />
                   ) : (
                     <div className="text-4xl md:text-5xl  text-brand-400 mb-2">{stat.value}</div>
                   )}
                   <p className="text-white/70 uppercase tracking-widest text-xs">{stat.label}</p>
                </div>
              ))}
           </div>
           <p className="mt-12 text-white/60 max-w-3xl mx-auto text-sm md:text-base leading-relaxed italic">
             "Invest in one of the world’s safest, fastest-growing markets — where innovation, governance, and opportunity align."
           </p>
        </div>
      </SectionWrapper>

      <ContactSection />
    </main>
  );
};

export default ServicesPage;