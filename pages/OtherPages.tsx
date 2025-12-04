import React from 'react';
import SectionWrapper from '../components/ui/SectionWrapper';

const PlaceholderPage: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <main className="bg-black min-h-screen pt-32 pb-24 flex items-center justify-center">
    <SectionWrapper className="text-center px-6">
      <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">{title}</h1>
      <p className="text-brand-400 uppercase tracking-widest text-sm">{subtitle}</p>
      <div className="w-px h-24 bg-gradient-to-b from-brand-500 to-transparent mx-auto mt-12"></div>
    </SectionWrapper>
  </main>
);

export const CommunitiesPage = () => <PlaceholderPage title="Communities" subtitle="Coming Soon" />;
export const MediaPage = () => <PlaceholderPage title="Media Center" subtitle="Press & News" />;
export const CareersPage = () => <PlaceholderPage title="Careers" subtitle="Join Our Team" />;
export const LifestylePage = () => <PlaceholderPage title="Lifestyle" subtitle="Experience Luxury" />;
export const JournalPage = () => <PlaceholderPage title="Journal" subtitle="Insights & Trends" />;