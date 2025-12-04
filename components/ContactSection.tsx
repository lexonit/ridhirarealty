import React from 'react';
import SectionWrapper from './ui/SectionWrapper';

const ContactSection: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-900/20 z-0"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Begin Your Journey</h2>
        <p className="text-white/60 max-w-xl mx-auto mb-12">
          Schedule a private consultation with our property experts to discover your next legacy.
        </p>
        <button className="bg-brand-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand-900 transition-colors shadow-[0_0_30px_rgba(0,94,184,0.3)]">
          Book Private Viewing
        </button>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;