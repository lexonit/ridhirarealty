
import React, { useEffect, useState } from 'react';
import ContactSection from '../components/ContactSection';
import { Icons } from '../components/ui/Icons';
import SectionWrapper from '../components/ui/SectionWrapper';
import { contactService } from '../services/contactService';
import { HeroSectionData, FeatureItem } from '../types';
import { Skeleton } from '../components/ui/Skeleton';

const ContactPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState<HeroSectionData | null>(null);
  const [contactInfo, setContactInfo] = useState<FeatureItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [hero, info] = await Promise.all([
        contactService.getHeroData(),
        contactService.getContactInfo()
      ]);
      setHeroData(hero);
      setContactInfo(info);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading || !heroData) {
    return (
      <main className="bg-white dark:bg-black min-h-screen">
         <Skeleton className="h-[60vh] w-full rounded-none" />
         <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
         </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
           <img 
             src={heroData.backgroundImage}
             alt={heroData.subTitleLabel}
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
         </div>
         
         <div className="relative z-10 container mx-auto px-6 text-center">
           <span className="text-brand-400 uppercase tracking-widest text-sm block mb-4 font-semibold">{heroData.subTitleLabel}</span>
           <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">{heroData.title}</h1>
           <p className="text-white/80 max-w-xl mx-auto text-lg font-light">
             {heroData.subtitle}
           </p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-24">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/5 text-center group hover:border-brand-500/50 transition-all shadow-md dark:shadow-none">
                 <div className="w-12 h-12 bg-brand-100 dark:bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                   {info.icon && <info.icon className="w-5 h-5 text-brand-600 dark:text-brand-500" />}
                 </div>
                 <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">{info.title}</h3>
                 <p className="text-slate-600 dark:text-white/60" dangerouslySetInnerHTML={{ __html: info.description || '' }}></p>
              </div>
            ))}
         </div>
      </div>
      
      <ContactSection />
    </main>
  );
};

export default ContactPage;
