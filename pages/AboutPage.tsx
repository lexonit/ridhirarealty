
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/ui/SectionWrapper';
import ContactSection from '../components/ContactSection';
import { Icons } from '../components/ui/Icons';
import { aboutService } from '../services/aboutService';
import { HeroSectionData, FeatureItem } from '../types';
import { Skeleton } from '../components/ui/Skeleton';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState<HeroSectionData | null>(null);
  const [introText, setIntroText] = useState<{lead: string, body: string} | null>(null);
  const [coreValues, setCoreValues] = useState<FeatureItem[]>([]);
  const [differentiators, setDifferentiators] = useState<string[]>([]);
  const [teamExpertise, setTeamExpertise] = useState<FeatureItem[]>([]);
  const [promises, setPromises] = useState<string[]>([]);
  const [vision, setVision] = useState<any>(null);

  // Parallax Hero Refs
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [hero, intro, values, diffs, team, prom, vis] = await Promise.all([
        aboutService.getHeroData(),
        aboutService.getIntroText(),
        aboutService.getCoreValues(),
        aboutService.getDifferentiatorsList(),
        aboutService.getTeamExpertise(),
        aboutService.getPromises(),
        aboutService.getVision()
      ]);

      setHeroData(hero);
      setIntroText(intro);
      setCoreValues(values);
      setDifferentiators(diffs);
      setTeamExpertise(team);
      setPromises(prom);
      setVision(vis);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading || !heroData || !introText || !vision) {
    return (
      <main className="bg-white dark:bg-luxury-black min-h-screen">
         <Skeleton className="h-[60vh] w-full rounded-none" />
         <div className="container mx-auto px-6 py-24 space-y-8">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-8 w-1/2 mx-auto" />
            <Skeleton className="h-32 w-full" />
         </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
      <SEO 
        title="About Us - Trusted Real Estate Advisory" 
        description="Learn about Ridhira Realty's mission to redefine property investment through transparency, data-driven insights, and unwavering trust."
      />
      
      {/* Hero Section with Parallax */}
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
         <motion.div style={{ y }} className="absolute inset-0 z-0">
           <img 
             src={heroData.backgroundImage}
             alt={heroData.subTitleLabel}
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
         </motion.div>
         
         <div className="relative z-10 container mx-auto px-6 text-center">
           <SectionWrapper>
             <span className="text-brand-400 uppercase tracking-widest text-sm block mb-4 font-semibold">{heroData.subTitleLabel}</span>
             <h1 className="text-5xl md:text-7xl font-serif text-white mb-6" dangerouslySetInnerHTML={{ __html: heroData.title }}></h1>
             <p className="text-white/80 max-w-2xl mx-auto text-lg font-light leading-relaxed">
               {heroData.subtitle}
             </p>
           </SectionWrapper>
         </div>
      </div>

      {/* Intro Text */}
      <SectionWrapper className="py-24 bg-white dark:bg-luxury-black container mx-auto px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <p className="text-xl md:text-2xl font-serif text-slate-800 dark:text-white leading-relaxed">
             {introText.lead}
           </p>
           <p className="text-slate-600 dark:text-white/70">
             {introText.body}
           </p>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <div className="py-24 bg-slate-50 dark:bg-luxury-charcoal transition-colors duration-300">
        <div className="container mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl font-serif text-slate-900 dark:text-white text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {coreValues.map((val, idx) => (
                <div key={idx} className="bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 p-8 rounded-xl hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none group">
                  <div className="w-12 h-1 bg-brand-500 mb-6 group-hover:w-20 transition-all duration-300"></div>
                  <h3 className="text-2xl font-serif text-brand-600 dark:text-white mb-4">{val.title}</h3>
                  <p className="text-slate-600 dark:text-white/70">{val.description}</p>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Differentiators */}
      <SectionWrapper className="py-24 bg-white dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 dark:text-brand-500 uppercase tracking-widest text-sm block mb-4 font-semibold">What Sets Us Apart</span>
              <h2 className="text-4xl font-serif text-slate-900 dark:text-white mb-8">Unlike listing-driven brokers, we focus on data, depth and direction.</h2>
              <ul className="space-y-6">
                {differentiators.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-brand-100 dark:bg-brand-900/30 p-1 rounded-full">
                      <Icons.Star className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    </div>
                    <span className="text-slate-700 dark:text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 border-l-2 border-brand-500 bg-slate-50 dark:bg-white/5 italic text-slate-800 dark:text-white/90 font-serif rounded-r-lg">
                “We don’t just match you with properties — we match you with possibilities.”
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
                alt="Data Intelligence" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Team & Expertise */}
      <div className="py-24 bg-slate-50 dark:bg-luxury-charcoal container-fluid transition-colors duration-300">
        <div className="container mx-auto px-6">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-4xl font-serif text-slate-900 dark:text-white mb-6">Our Team & Expertise</h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto">
              RERA-certified advisors, financial analysts and data scientists work together to deliver complete 360° support.
            </p>
          </SectionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamExpertise.map((item, idx) => (
              <SectionWrapper key={idx} delay={idx * 0.1} className="bg-white dark:bg-black/50 p-8 rounded-xl border border-slate-200 dark:border-white/5 hover:border-brand-500/50 text-center shadow-lg dark:shadow-none hover:-translate-y-2 transition-transform duration-300">
                 <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600 dark:text-brand-400">
                    {item.icon && <item.icon className="w-6 h-6" />}
                 </div>
                 <h3 className="text-slate-800 dark:text-white font-medium text-lg">{item.title}</h3>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Our Promise */}
      <SectionWrapper className="py-24 bg-white dark:bg-luxury-black border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white text-center mb-12">Our Promise to Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {promises.map((promise, idx) => (
               <div key={idx} className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
                 <div className="mb-4 flex justify-center"><Icons.CheckCircle className="w-6 h-6 text-brand-500" /></div>
                 <p className="text-slate-800 dark:text-white/90 font-medium">{promise}</p>
               </div>
             ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Future */}
      <SectionWrapper className="py-24 container mx-auto px-6 bg-slate-50 dark:bg-luxury-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-600 dark:text-brand-400 mb-6">Our Vision for the Future</h2>
            <p className="text-slate-600 dark:text-white/70 leading-relaxed text-lg">
              {vision.text}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            {vision.subsections.map((sub: any, idx: number) => (
              <div key={idx} className="bg-white dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/10">
                <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-4">{sub.title}</h3>
                <p className="text-slate-600 dark:text-white/70">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-brand-900 to-luxury-black p-8 md:p-12 rounded-2xl border border-brand-500/20 text-center text-white shadow-2xl">
            <h3 className="text-2xl font-serif mb-4">Looking Ahead</h3>
            <p className="text-white/80 text-lg font-light">
              {vision.futureOutlook}
            </p>
          </div>
        </div>
      </SectionWrapper>

      <ContactSection />
    </main>
  );
};

export default AboutPage;
