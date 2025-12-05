import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from './ui/AceternityUI';
import { ABOUT_SECTION_IMAGE } from '../constants/images';

const AboutSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-luxury-charcoal overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="w-16 h-[1px] bg-brand-500 mb-6 md:mb-8"></div>
            <TextReveal text="Crafting Legacies" className="text-3xl md:text-4xl lg:text-6xl font-serif text-slate-900 dark:text-white mb-6" />
            {/* @ts-ignore: Suppressing strict type check for standard motion props */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-600 dark:text-white/70 leading-loose mb-8 font-light text-sm md:text-base"
            >
              At Ridhira Realty, we don't just build homes; we curate lifestyles. 
              Inspired by the boundless ambition of Dubai, our developments are 
              symphonies of glass, light, and innovation. Every inch is meticulously 
              designed to offer an unparalleled living experience for the global elite.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
               <div>
                 <h4 className="text-2xl md:text-3xl font-serif text-brand-600 dark:text-brand-400">25+</h4>
                 <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 dark:text-white/50 mt-1">Years of Excellence</p>
               </div>
               <div>
                 <h4 className="text-2xl md:text-3xl font-serif text-brand-600 dark:text-brand-400">$2B+</h4>
                 <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 dark:text-white/50 mt-1">Portfolio Value</p>
               </div>
            </div>

            <button className="px-6 py-3 md:px-8 bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-brand-600 dark:hover:bg-brand-600 hover:text-white dark:hover:text-white transition-all duration-300 text-[10px] md:text-xs uppercase tracking-widest font-bold shadow-lg">
              Read Our Story
            </button>
          </div>

          {/* Image Parallax */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
            {/* @ts-ignore: Suppressing strict type check for standard motion props */}
            <motion.div style={{ y }} className="absolute inset-0">
               <img 
                 src={ABOUT_SECTION_IMAGE} 
                 alt="Luxury Interior" 
                 className="w-full h-full object-cover opacity-90 dark:opacity-80"
               />
            </motion.div>
            {/* Floating Card Overlay */}
            {/* @ts-ignore: Suppressing strict type check for standard motion props */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-white dark:bg-luxury-black p-6 md:p-8 max-w-[250px] md:max-w-xs border border-slate-200 dark:border-brand-500/30 hidden md:block shadow-2xl"
            >
               <p className="font-serif italic text-slate-800 dark:text-white/90 text-base md:text-lg">"Architecture is a visual art, and the buildings speak for themselves."</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;