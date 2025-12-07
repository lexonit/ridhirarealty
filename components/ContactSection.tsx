import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionWrapper from './ui/SectionWrapper';
import { Icons } from './ui/Icons';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ 
  title = "Begin Your Journey",
  subtitle = "Schedule a private consultation with our property experts to discover your next legacy."
}) => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <SectionWrapper id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/aboutus/burj.jpg"
          alt="Burj Khalifa skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/40" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl  text-white mb-8">{title}</h2>
        <p className="text-white max-w-xl mx-auto mb-12 font-semibold text-lg md:text-xl">
          {subtitle}
        </p>
        
        {isContactPage ? (
          <a 
            href="https://wa.me/971561705995" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand-900 transition-colors shadow-[0_0_30px_rgba(0,94,184,0.3)]"
          >
            <Icons.MessageSquare className="w-5 h-5" />
            Book via WhatsApp
          </a>
        ) : (
          <Link 
            to="/contact" 
            className="inline-block bg-brand-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand-900 transition-colors shadow-[0_0_30px_rgba(0,94,184,0.3)]"
          >
            Book Private Viewing
          </Link>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;