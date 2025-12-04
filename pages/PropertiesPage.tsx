import React from 'react';
import PropertyGrid from '../components/PropertyGrid';
import { MOCK_PROPERTIES } from '../services/mockData';
import SectionWrapper from '../components/ui/SectionWrapper';

const PropertiesPage: React.FC = () => {
  return (
    <main className="bg-black min-h-screen pt-20">
      <SectionWrapper>
        <div className="py-12 text-center bg-luxury-charcoal border-b border-white/5">
           <span className="text-brand-500 uppercase tracking-widest text-sm block mb-4">Our Portfolio</span>
           <h1 className="text-5xl font-serif text-white">Luxury Residences</h1>
        </div>
        <PropertyGrid properties={MOCK_PROPERTIES} title="All Collections" />
      </SectionWrapper>
    </main>
  );
};

export default PropertiesPage;