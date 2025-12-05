import React, { useRef } from 'react';
import PropertyGrid from '../components/PropertyGrid';
import { MOCK_PROPERTIES } from '../services/mockData';
import SectionWrapper from '../components/ui/SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FlipWords } from '../components/ui/flip-words';

const PropertiesPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="bg-black min-h-screen">
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/home/pexels-marjan-147528816-10484112.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
         <motion.div style={{ y }} className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/60" />
         </motion.div>
         
         <div className="relative z-10 container mx-auto px-6 text-center">
           <SectionWrapper>
             <span className="text-brand-500 uppercase tracking-widest text-sm block mb-4">Our Portfolio</span>
             <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
               <FlipWords 
                 words={["Luxury Residences", "Premium Estates", "Elite Properties", "Exclusive Homes"]} 
                 duration={3000}
                 className="text-brand-400"
               />
             </h1>
           </SectionWrapper>
         </div>
      </div>
      
      <SectionWrapper>
        <PropertyGrid properties={MOCK_PROPERTIES} title="All Collections" />
      </SectionWrapper>
    </main>
  );
};

export default PropertiesPage;