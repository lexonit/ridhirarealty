import React, { useEffect, useState } from 'react';
import { ParallaxScroll } from './ui/ParallaxScroll';
import { propertyService } from '../services/propertyService';
import SectionWrapper from './ui/SectionWrapper';

const GallerySection: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    propertyService.getAllProperties().then(props => {
      // Collect all images from properties to create a rich gallery
      const allImages = props.flatMap(p => p.images).slice(0, 9);
      setImages(allImages);
    });
  }, []);

  return (
    <SectionWrapper id="journal" className="py-24 bg-slate-50 dark:bg-luxury-black relative z-10 transition-colors duration-300">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-brand-600 dark:text-brand-500 uppercase tracking-widest text-sm block mb-4 font-semibold">Visual Journal</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-6">Curated Perspectives</h2>
        <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto font-light">
          A glimpse into the architectural brilliance and bespoke interiors that define our portfolio.
        </p>
      </div>
      {images.length > 0 && <ParallaxScroll images={images} />}
    </SectionWrapper>
  );
};

export default GallerySection;