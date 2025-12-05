import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/ui/SectionWrapper';
import ContactSection from '../components/ContactSection';
import { Icons } from '../components/ui/Icons';
import { aboutService } from '../services/aboutService';
import { HeroSectionData, FeatureItem } from '../types';
import { Skeleton } from '../components/ui/Skeleton';
import SEO from '../components/SEO';
import { FOUNDER_IMAGES } from '../constants/images';

const AboutPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState<HeroSectionData | null>(null);
  const [introText, setIntroText] = useState<{lead: string, body: string} | null>(null);
  const [coreValues, setCoreValues] = useState<FeatureItem[]>([]);
  const [differentiators, setDifferentiators] = useState<string[]>([]);
  const [teamExpertise, setTeamExpertise] = useState<FeatureItem[]>([]);
  const [promises, setPromises] = useState<string[]>([]);
  const [vision, setVision] = useState<any>(null);
  const [founderImagesLoaded, setFounderImagesLoaded] = useState({ ceo: false, advisoryBoard: false });

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
           <h2 className="text-2xl md:text-3xl font-serif text-brand-600 dark:text-brand-400 mb-6">Knowledge First. Trust Always.</h2>
           <div className="space-y-6 text-slate-600 dark:text-white/70 leading-relaxed">
             <p>Ridhira Realty LLC was founded with one vision — to redefine how property investment is experienced.</p>
             <p>We believe that real estate decisions should be made through knowledge, not hype.</p>
             <p>With a foundation rooted in transparency, advisory excellence, and technology-driven insights, Ridhira helps clients identify the right opportunities and achieve sustainable returns.</p>
           </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-luxury-charcoal transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-luxury-black p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-md dark:shadow-none">
              <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Icons.Target className="w-6 h-6 text-brand-500" />
                Mission
              </h3>
              <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                To educate and empower investors through data-driven real estate intelligence.
              </p>
            </div>
            
            <div className="bg-white dark:bg-luxury-black p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-md dark:shadow-none">
              <h3 className="text-2xl font-serif text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Icons.Eye className="w-6 h-6 text-brand-500" />
                Vision
              </h3>
              <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                To be the UAE's most trusted name in intelligent property investment.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <div className="py-24 bg-white dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-4xl font-serif text-slate-900 dark:text-white text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {/* Trust */}
              <div className="bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 p-8 rounded-xl hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none group">
                <h3 className="text-xl font-serif text-brand-600 dark:text-brand-400 mb-3">Trust</h3>
                <p className="text-slate-600 dark:text-white/70 text-sm">Every interaction built on honesty, clarity, and accountability.</p>
              </div>
              
              {/* Transparency */}
              <div className="bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 p-8 rounded-xl hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none group">
                <h3 className="text-xl font-serif text-brand-600 dark:text-brand-400 mb-3">Transparency</h3>
                <p className="text-slate-600 dark:text-white/70 text-sm">Every property and process is fully verified and visible.</p>
              </div>
              
              {/* Technology */}
              <div className="bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 p-8 rounded-xl hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none group">
                <h3 className="text-xl font-serif text-brand-600 dark:text-brand-400 mb-3">Technology</h3>
                <p className="text-slate-600 dark:text-white/70 text-sm">Leveraging analytics, automation, and AI to empower decisions.</p>
              </div>
              
              {/* Intelligence */}
              <div className="bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 p-8 rounded-xl hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none group">
                <h3 className="text-xl font-serif text-brand-600 dark:text-brand-400 mb-3">Intelligence</h3>
                <p className="text-slate-600 dark:text-white/70 text-sm">Transforming raw data into actionable foresight.</p>
              </div>
              
              {/* Integrity */}
              <div className="bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 p-8 rounded-xl hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none group">
                <h3 className="text-xl font-serif text-brand-600 dark:text-brand-400 mb-3">Integrity</h3>
                <p className="text-slate-600 dark:text-white/70 text-sm">Ethical guidance — always in the client's best interest.</p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>

      {/* Differentiators */}
      <SectionWrapper className="py-24 bg-white dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-600 dark:text-brand-400 uppercase tracking-widest text-sm block mb-4 font-semibold">What Sets Us Apart</span>
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
      <div className="py-24 bg-white dark:bg-luxury-black container-fluid transition-colors duration-300">
        <div className="container mx-auto px-6">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-4xl font-serif text-slate-900 dark:text-white mb-6">Our Team & Expertise</h2>
            <p className="text-slate-600 dark:text-white/60 max-w-3xl mx-auto">
              RERA-certified advisors, financial analysts and data scientists work together to deliver complete 360° support in:
            </p>
          </SectionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-slate-50 dark:bg-luxury-charcoal p-6 rounded-xl border border-slate-200 dark:border-white/10 text-center hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none">
              <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 dark:text-brand-400">
                <Icons.TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold">Market Analytics & Forecasting</h3>
            </div>
            
            <div className="bg-slate-50 dark:bg-luxury-charcoal p-6 rounded-xl border border-slate-200 dark:border-white/10 text-center hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none">
              <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 dark:text-brand-400">
                <Icons.DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold">Real-Estate Finance & Planning</h3>
            </div>
            
            <div className="bg-slate-50 dark:bg-luxury-charcoal p-6 rounded-xl border border-slate-200 dark:border-white/10 text-center hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none">
              <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 dark:text-brand-400">
                <Icons.Scale className="w-5 h-5" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold">Legal Compliance (RERA/DLD)</h3>
            </div>
            
            <div className="bg-slate-50 dark:bg-luxury-charcoal p-6 rounded-xl border border-slate-200 dark:border-white/10 text-center hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none">
              <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 dark:text-brand-400">
                <Icons.Zap className="w-5 h-5" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold">AI-Driven Portfolio Advisory</h3>
            </div>
            
            <div className="bg-slate-50 dark:bg-luxury-charcoal p-6 rounded-xl border border-slate-200 dark:border-white/10 text-center hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none">
              <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 dark:text-brand-400">
                <Icons.Passport className="w-5 h-5" />
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold">Golden Visa & Residency</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Our Promise */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-luxury-charcoal border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-slate-900 dark:text-white text-center mb-12">Our Promise to Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-luxury-black p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-brand-500/50 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <Icons.CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                <h3 className="text-slate-900 dark:text-white font-semibold">Actionable Intelligence</h3>
              </div>
              <p className="text-slate-600 dark:text-white/70 text-sm">Market intelligence before recommendations</p>
            </div>
            
            <div className="bg-white dark:bg-luxury-black p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-brand-500/50 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <Icons.CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                <h3 className="text-slate-900 dark:text-white font-semibold">Full Transparency</h3>
              </div>
              <p className="text-slate-600 dark:text-white/70 text-sm">Zero hidden fees & full documentation</p>
            </div>
            
            <div className="bg-white dark:bg-luxury-black p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-brand-500/50 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <Icons.CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                <h3 className="text-slate-900 dark:text-white font-semibold">Verified Projects</h3>
              </div>
              <p className="text-slate-600 dark:text-white/70 text-sm">RERA & DLD-verified projects only</p>
            </div>
            
            <div className="bg-white dark:bg-luxury-black p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-brand-500/50 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <Icons.CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                <h3 className="text-slate-900 dark:text-white font-semibold">Education First</h3>
              </div>
              <p className="text-slate-600 dark:text-white/70 text-sm">Guidance through each investment stage</p>
            </div>
            
            <div className="bg-white dark:bg-luxury-black p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-brand-500/50 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <Icons.CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                <h3 className="text-slate-900 dark:text-white font-semibold">ROI Focus</h3>
              </div>
              <p className="text-slate-600 dark:text-white/70 text-sm">Long-term returns over quick sales</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Future */}
      <SectionWrapper className="py-24 container mx-auto px-6 bg-white dark:bg-luxury-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-serif text-slate-900 dark:text-white mb-8">Our Vision for the Future</h2>
            <p className="text-slate-600 dark:text-white/70 leading-relaxed text-lg max-w-3xl mx-auto">
              Aligned with Dubai Vision 2040 and RAK Vision 2030, we aim to lead the AI-driven investment era. Our upcoming Investor Dashboard lets clients track returns, compare communities and receive alerts — bringing institutional-grade tools to individual investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Icons.Leaf className="w-6 h-6 text-green-500" />
                Sustainability Focus
              </h3>
              <p className="text-slate-600 dark:text-white/70">
                We champion projects with green certifications and community value, encouraging investments that balance profitability and purpose.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Icons.Globe className="w-6 h-6 text-brand-500" />
                Global Presence
              </h3>
              <p className="text-slate-600 dark:text-white/70">
                Through our UAE and India network, we serve individual investors, HNIs, and corporates with regular Investor Workshops and Roadshows.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Icons.Zap className="w-6 h-6 text-yellow-500" />
                Technology Innovation
              </h3>
              <p className="text-slate-600 dark:text-white/70">
                We continue building analytics tools and AI platforms to make advisory more accurate and accessible for all investors.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-brand-900 to-luxury-black p-8 md:p-12 rounded-2xl border border-brand-500/20 text-center text-white shadow-2xl">
            <h3 className="text-2xl font-serif mb-4">Looking Ahead</h3>
            <p className="text-white/90 text-lg font-light leading-relaxed">
              As the UAE transforms into an AI-first economy, Ridhira Realty will remain your bridge between intelligence and investment. We're committed to making advisory smarter, faster, and more accessible than ever before.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Founder Section */}
      <SectionWrapper className="py-24 bg-slate-50 dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-600 dark:text-brand-400 uppercase tracking-widest text-xs font-semibold block mb-4">Our Leadership</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white">Visionary Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* SS RAJU - Advisory Board Member & Director */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl">
                <div className="relative h-96 md:h-[500px] bg-slate-200 dark:bg-white/5">
                  {!founderImagesLoaded.advisoryBoard && <Skeleton className="w-full h-full rounded-none" />}
                  <img 
                    src={FOUNDER_IMAGES.advisoryBoard}
                    alt="SS Raju - Advisory Board Member & Director"
                    onLoad={() => setFounderImagesLoaded(prev => ({ ...prev, advisoryBoard: true }))}
                    className={`w-full h-full object-cover ${!founderImagesLoaded.advisoryBoard ? 'hidden' : ''}`}
                  />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-serif text-slate-900 dark:text-white mb-2">SS Raju</h3>
                <p className="text-brand-600 dark:text-brand-400 font-semibold text-lg mb-4">Advisory Board Member & Director</p>
                <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                  With decades of experience in real estate investment and strategic advisory, SS Raju brings visionary leadership to Ridhira Realty. His expertise in emerging markets and commitment to excellence drive the company's mission to deliver exceptional value to investors.
                </p>
              </div>
            </motion.div>

            {/* Founder & CEO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl">
                <div className="relative h-96 md:h-[500px] bg-slate-200 dark:bg-white/5">
                  {!founderImagesLoaded.ceo && <Skeleton className="w-full h-full rounded-none" />}
                  <img 
                    src={FOUNDER_IMAGES.ceo}
                    alt="Founder & CEO"
                    onLoad={() => setFounderImagesLoaded(prev => ({ ...prev, ceo: true }))}
                    className={`w-full h-full object-cover ${!founderImagesLoaded.ceo ? 'hidden' : ''}`}
                  />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-serif text-slate-900 dark:text-white mb-2">Founder & CEO</h3>
                <p className="text-brand-600 dark:text-brand-400 font-semibold text-lg mb-4">Ridhira Realty</p>
                <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                  Leading Ridhira Realty with passion and purpose, our Founder & CEO is dedicated to revolutionizing the real estate investment landscape in the UAE. Their strategic vision and market insights have established Ridhira as a trusted partner for high-net-worth investors globally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <ContactSection />
    </main>
  );
};

export default AboutPage;