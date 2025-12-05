
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { Icons } from './ui/Icons';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  property: Property;
  index: number;
}

const LuxuryPropertyCard: React.FC<Props> = ({ property, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    // @ts-ignore
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 border border-brand-800/30"
    >
      {/* 1. Image Section (65-70% Height) */}
      <div className="relative h-[400px] w-full overflow-hidden bg-gray-900">
        <Link to={`/projects/${property.id}`}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={property.images[currentImageIndex]}
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
          </AnimatePresence>
        </Link>
        
        {/* Navigation Arrows */}
        {property.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-colors border border-white/20 z-10"
            >
              <Icons.ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-colors border border-white/20 z-10"
            >
              <Icons.ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              <span className="text-white text-xs font-semibold">
                {currentImageIndex + 1} / {property.images.length}
              </span>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 right-4 flex gap-1.5">
              {property.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Top Badge */}
        <div className="absolute top-4 right-4 bg-luxury-black/60 backdrop-blur-md px-4 py-1 border border-white/20 rounded-sm">
           <span className="text-white text-xs font-bold uppercase tracking-widest">{property.type}</span>
        </div>
      </div>

      {/* 2. Details Section (Theme Background - Luxury Charcoal/Navy) */}
      <div className="bg-luxury-charcoal p-6 text-white relative z-10 border-t border-brand-500/20">
        {/* Title & Location Row */}
        <div className="flex justify-between items-start mb-2">
           <div>
             <h3 className="text-xl font-serif font-bold leading-tight text-white group-hover:text-brand-200 transition-colors">{property.title}</h3>
             <p className="text-xs uppercase tracking-wider font-semibold opacity-70 mt-1 text-brand-200">{property.type}</p>
           </div>
           <div className="flex flex-col items-end text-right">
              <Icons.MapPin className="w-5 h-5 text-brand-400 mb-1" />
              <span className="text-xs font-medium text-white/90">{property.location.split(',')[0]}</span>
           </div>
        </div>

        {/* Price */}
        <div className="mb-6 mt-4">
           <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Starting From</p>
           <p className="text-2xl font-serif font-bold text-white">{property.currency} {(property.price).toLocaleString()}</p>
        </div>

        {/* Amenities Grid (2x2) matches screenshot style */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 border-t border-white/10 pt-4 text-white/80">
           <div className="flex items-center gap-3">
              <Icons.Waves className="w-5 h-5 opacity-70" />
              <span className="text-sm font-medium">Pool</span>
           </div>
           <div className="flex items-center gap-3">
              <Icons.Dumbbell className="w-5 h-5 opacity-70" />
              <span className="text-sm font-medium">Gym</span>
           </div>
           <div className="flex items-center gap-3">
              <Icons.Warehouse className="w-5 h-5 opacity-70" />
              <span className="text-sm font-medium">Parking</span>
           </div>
           <div className="flex items-center gap-3">
              <Icons.BedDouble className="w-5 h-5 opacity-70" />
              <span className="text-sm font-medium">{property.beds} Bedroom</span>
           </div>
           <div className="flex items-center gap-3">
              <Icons.Square className="w-5 h-5 opacity-70" />
              <span className="text-sm font-medium">{property.sqft} sq.ft</span>
           </div>
           <div className="flex items-center gap-3">
              <Icons.Building2 className="w-5 h-5 opacity-70" />
              <span className="text-sm font-medium">Balcony</span>
           </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
           <Link 
             to={`/projects/${property.id}`}
             className="flex items-center justify-center gap-2 bg-white text-luxury-black py-3 px-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-100 transition-colors rounded-sm shadow-md"
           >
             <Icons.Phone className="w-4 h-4" /> Inquiry
           </Link>
           <a 
             href={`https://wa.me/971561705995?text=Hi, I am interested in ${property.title}`}
             target="_blank"
             rel="noreferrer"
             className="flex items-center justify-center gap-2 bg-brand-600 text-white border border-brand-500 py-3 px-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-500 transition-colors rounded-sm shadow-md"
           >
             <Icons.MessageSquare className="w-4 h-4" /> Whatsapp
           </a>
        </div>
      </div>
    </motion.div>
  );
};

export default LuxuryPropertyCard;