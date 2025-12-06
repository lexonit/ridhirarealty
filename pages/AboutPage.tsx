import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/ui/SectionWrapper';
import ContactSection from '../components/ContactSection';
import { Icons } from '../components/ui/Icons';
import SEO from '../components/SEO';
import { FlipWords } from '../components/ui/flip-words';

const AboutPage: React.FC = () => {
  // Parallax Hero Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Static content data
  const coreValues = [
    {
      title: 'Trust',
      description: 'Every interaction built on honesty, clarity, and accountability.'
    },
    {
      title: 'Transparency',
      description: 'Every property and process is fully verified and visible.'
    },
    {
      title: 'Technology',
      description: 'Leveraging analytics, automation, and AI to empower decisions.'
    },
    {
      title: 'Intelligence',
      description: 'Transforming raw data into actionable foresight.'
    },
    {
      title: 'Integrity',
      description: 'Ethical guidance — always in the client\'s best interest.'
    }
  ];

  const differentiators = [
    'Data-Intelligence Core (price per sq.ft, yield models, supply ratios)',
    'Global Investor Orientation (NRIs, GCC HNIs, Europe buyers)',
    'Transparency & Compliance (escrow vetted projects)',
    'Beyond Listings (valuations, Golden Visa advisory, dashboards)'
  ];

  const teamExpertise = [
    { title: 'Market Analytics & Forecasting' },
    { title: 'Real-Estate Finance & Planning' },
    { title: 'Legal Compliance (RERA/DLD)' },
    { title: 'AI-Driven Portfolio Advisory' },
    { title: 'Golden Visa & Residency Strategy' }
  ];

  const promises = [
    'Actionable market intelligence before recommendations',
    'Zero hidden fees & full documentation transparency',
    'RERA & DLD-verified projects only',
    'Education through each stage',
    'Long-term ROI focus over quick sales'
  ];

  return (
    <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
      <SEO 
        title="About Us - Trusted Real Estate Advisory" 
        description="Learn about Ridhira Realty's mission to redefine property investment through transparency, data-driven insights, and unwavering trust."
      />
      
      {/* Hero Section with Parallax */}
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800" style={{
        backgroundImage: `url('/aboutus/aboutus.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
         <motion.div style={{ y }} className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/60" />
         </motion.div>
         
         <div className="relative z-10 container mx-auto px-6 text-center">
           <SectionWrapper>
             <span className="text-brand-400 uppercase tracking-widest text-sm block mb-4 font-semibold">About Ridhira Realty</span>
             <h1 className="text-5xl md:text-7xl  text-white mb-6">
               <FlipWords 
                 words={["Knowledge First","Trust Always", "Discover", "Invest", "Prosper"]} 
                 duration={3000}
                 className="text-brand-400"
               />
             </h1>
             <p className="text-white/80 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Dubai real estate outlook
             </p>
           </SectionWrapper>
         </div>
      </div>

      {/* Intro Text with Mission & Vision */}
      <SectionWrapper className="py-24 bg-white dark:bg-luxury-black container mx-auto px-6 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Main Body */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl  text-slate-800 dark:text-white leading-relaxed">
              Ridhira Realty LLC was founded with one vision — to redefine how property investment is experienced.
            </p>
            <div className="space-y-4 text-slate-600 dark:text-white/70 text-lg leading-relaxed">
              <p>We believe that real estate decisions should be made through knowledge, not hype.</p>
              <p>With a foundation rooted in transparency, advisory excellence, and technology-driven insights, Ridhira helps clients identify the right opportunities and achieve sustainable returns.</p>
            </div>
          </motion.div>

          {/* Intro Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl"
          >
            <img
              src="/aboutus/aboutus-2.jpg"
              alt="Ridhira Realty Foundation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icons.Briefcase className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                <h3 className="text-2xl  text-slate-900 dark:text-white">Mission</h3>
              </div>
              <p className="text-slate-600 dark:text-white/70">
                To educate and empower investors through data-driven real estate intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icons.Eye className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                <h3 className="text-2xl  text-slate-900 dark:text-white">Vision</h3>
              </div>
              <p className="text-slate-600 dark:text-white/70">
                To be the UAE's most trusted name in intelligent property investment.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <div className="py-24 bg-slate-50 dark:bg-luxury-charcoal transition-colors duration-300">
        <div className="container mx-auto px-6">
          <SectionWrapper>
            <h2 className="text-3xl  text-slate-900 dark:text-white text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {coreValues.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 p-8 rounded-xl hover:border-brand-500/50 transition-colors shadow-sm dark:shadow-none group"
                >
                  <div className="w-12 h-1 bg-brand-500 mb-6 group-hover:w-20 transition-all duration-300"></div>
                  <h3 className="text-xl  text-brand-600 dark:text-white mb-4">{val.title}</h3>
                  <p className="text-slate-600 dark:text-white/70 text-sm leading-relaxed">{val.description}</p>
                </motion.div>
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
              <span className="text-brand-600 dark:text-brand-400 uppercase tracking-widest text-sm block mb-4 font-semibold">What Sets Us Apart</span>
              <h2 className="text-4xl  text-slate-900 dark:text-white mb-8">Unlike listing-driven brokers, we focus on data, depth and direction.</h2>
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
              <div className="mt-8 p-6 border-l-2 border-brand-500 bg-slate-50 dark:bg-white/5 italic text-slate-800 dark:text-white/90  rounded-r-lg">
                “We don’t just match you with properties — we match you with possibilities.”
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl"
            >
              <img
                src="/aboutus/aboutus.jpg"
                alt="Data Intelligence Platform"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Team & Expertise */}
      <div className="py-24 bg-slate-50 dark:bg-luxury-charcoal container-fluid transition-colors duration-300">
        <div className="container mx-auto px-6">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-4xl  text-slate-900 dark:text-white mb-6">Our Team & Expertise</h2>
            <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto text-lg">
              RERA-certified advisors, financial analysts and data scientists work together to deliver complete 360° support in:
            </p>
          </SectionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamExpertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-black/50 p-8 rounded-xl border border-slate-200 dark:border-white/5 hover:border-brand-500/50 text-center shadow-lg dark:shadow-none hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600 dark:text-brand-400">
                    <Icons.Star className="w-6 h-6" />
                 </div>
                 <h3 className="text-slate-800 dark:text-white font-medium text-sm leading-relaxed">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Promise */}
      <SectionWrapper className="py-24 bg-white dark:bg-luxury-black border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl  text-slate-900 dark:text-white text-center mb-12">Our Promise to Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
             {promises.map((promise, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: idx * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none"
               >
                 <div className="mb-4 flex justify-center"><Icons.CheckCircle className="w-6 h-6 text-brand-500" /></div>
                 <p className="text-slate-800 dark:text-white/90 font-medium text-sm leading-relaxed">{promise}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Future */}
      <SectionWrapper className="py-24 container mx-auto px-6 bg-slate-50 dark:bg-luxury-charcoal transition-colors duration-300">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl  text-brand-600 dark:text-brand-400 mb-8">Our Vision for the Future</h2>
            <p className="text-slate-600 dark:text-white/70 leading-relaxed text-lg mb-8">
              Aligned with Dubai Vision 2040 and RAK Vision 2030, we aim to lead the AI-driven investment era.
            </p>
            <p className="text-slate-600 dark:text-white/70 leading-relaxed text-lg">
              Our upcoming Investor Dashboard lets clients track returns, compare communities and receive alerts — bringing institutional-grade tools to individual investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-luxury-black p-8 rounded-xl border border-slate-200 dark:border-white/10 hover:border-brand-500/30 transition-colors"
            >
              <h3 className="text-xl  text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Icons.MapPin className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                Sustainability & Community Focus
              </h3>
              <p className="text-slate-600 dark:text-white/70">
                We champion projects with green certifications and community value, encouraging investments that balance profitability and purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-[300px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl"
            >
              <img
                src="/aboutus/Burj Khalifa.png"
                alt="Dubai Vision - Burj Khalifa"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-luxury-black p-8 rounded-xl border border-slate-200 dark:border-white/10 hover:border-brand-500/30 transition-colors"
            >
              <h3 className="text-xl  text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Icons.Globe className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                Global Presence & Outreach
              </h3>
              <p className="text-slate-600 dark:text-white/70">
                Through our UAE and India network, we serve individual investors, HNIs, and corporates. We regularly host Investor Workshops and Roadshows to educate buyers entering the UAE market.
              </p>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-brand-900 to-luxury-black p-8 md:p-12 rounded-2xl border border-brand-500/20 text-center text-white shadow-2xl">
            <h3 className="text-2xl  mb-4">Looking Ahead</h3>
            <p className="text-white/80 text-lg font-light leading-relaxed">
              We will continue building analytics tools and AI platforms to make advisory more accurate and accessible.
              As the UAE transforms into an AI-first economy, Ridhira Realty will remain your bridge between intelligence and investment.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Founders & Leadership */}
      <SectionWrapper className="py-24 bg-white dark:bg-luxury-black transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl  text-slate-900 dark:text-white text-center mb-16">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Ramesh Koneti */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-luxury-charcoal rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-brand-500/50 transition-colors shadow-lg dark:shadow-none group"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600">
                <img 
                  src="/founder/founder-ceo.jpg" 
                  alt="Ramesh Koneti"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl  text-slate-900 dark:text-white mb-2">Ramesh Koneti</h3>
                <p className="text-brand-600 dark:text-brand-400 font-medium">Founder & CEO</p>
              </div>
            </motion.div>

            {/* SS Raju */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-luxury-charcoal rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-brand-500/50 transition-colors shadow-lg dark:shadow-none group"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600">
                <img 
                  src="/founder/SRAJUADVISORYBOARDMEMBERDIRECTOR.jpg" 
                  alt="SS Raju"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl  text-slate-900 dark:text-white mb-2">SS Raju</h3>
                <p className="text-brand-600 dark:text-brand-400 font-medium">Advisory Board Member & Director</p>
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