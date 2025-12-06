import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { Icons } from './ui/Icons';
import { ThreeDCard } from './ui/AceternityUI';
import { Skeleton } from './ui/Skeleton';

interface Props {
  properties: Property[];
  title: string;
  showViewAll?: boolean;
  loading?: boolean;
}

const PropertyCardSkeleton = () => (
  <div className="w-full h-[450px] md:h-[500px] lg:h-[550px] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 bg-white dark:bg-luxury-charcoal flex flex-col">
    {/* Image Skeleton */}
    <div className="h-[60%] md:h-[65%] w-full relative">
       <Skeleton className="w-full h-full rounded-none" />
       <div className="absolute top-4 right-4 z-20">
         <Skeleton className="h-6 w-20 rounded-full" />
       </div>
    </div>
    
    {/* Content Skeleton */}
    <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
      <div>
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="flex gap-4">
           <Skeleton className="h-4 w-16" />
           <Skeleton className="h-4 w-16" />
           <Skeleton className="h-4 w-16" />
        </div>
      </div>
      <div className="flex justify-between items-end border-t border-slate-200 dark:border-white/10 pt-4 mt-4">
        <div>
           <Skeleton className="h-3 w-20 mb-1" />
           <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  </div>
);

const PropertyCard: React.FC<{ property: Property; index: number }> = ({ property, index }) => {
  return (
    // @ts-ignore: Suppressing strict type check for standard motion props
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/projects/${property.id}`}>
        <ThreeDCard className="w-full h-[450px] md:h-[500px] lg:h-[550px] group cursor-pointer">
          <div className="relative h-full w-full rounded-xl overflow-hidden bg-white dark:bg-luxury-charcoal border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="h-[60%] md:h-[65%] w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-luxury-charcoal/90 to-transparent z-10" />
              {/* @ts-ignore: Suppressing strict type check for standard motion props */}
              <motion.img 
                src={property.images[0]} 
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-luxury-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
                <span className="text-[10px] md:text-xs text-slate-900 dark:text-white uppercase tracking-widest font-semibold">{property.type}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 relative z-20 h-[40%] md:h-[35%] flex flex-col justify-between group-hover:bg-slate-50 dark:group-hover:bg-luxury-charcoal/80 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl  text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1">{property.title}</h3>
                </div>
                <div className="flex items-center text-slate-600 dark:text-white/60 text-xs md:text-sm mb-4">
                  <Icons.MapPin className="w-3 h-3 mr-1 text-brand-500" />
                  {property.location}
                </div>
                
                <div className="flex gap-4 text-slate-500 dark:text-white/50 text-xs md:text-xs font-medium">
                  <span className="flex items-center"><Icons.BedDouble className="w-3 h-3 mr-1" /> {property.beds} Beds</span>
                  <span className="flex items-center"><Icons.Bath className="w-3 h-3 mr-1" /> {property.baths} Baths</span>
                  <span className="flex items-center"><Icons.Square className="w-3 h-3 mr-1" /> {property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-slate-200 dark:border-white/10 pt-4">
                <div>
                  <p className="text-[10px] text-slate-400 dark:text-white/40 uppercase">Starting from</p>
                  <p className="text-base md:text-lg font-medium text-brand-900 dark:text-white">{property.currency} {(property.price / 1000000).toFixed(1)}M</p>
                </div>
                <span className="text-brand-600 dark:text-brand-400 hover:text-brand-900 dark:hover:text-white transition-colors">
                  <Icons.ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
            
            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:animate-shimmer z-30" />
          </div>
        </ThreeDCard>
      </Link>
    </motion.div>
  );
};

const PropertyGrid: React.FC<Props> = ({ properties, title, showViewAll = true, loading = false }) => {
  return (
    <section id="properties" className="py-16 md:py-24 bg-slate-50 dark:bg-luxury-black relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16">
          {/* @ts-ignore: Suppressing strict type check for standard motion props */}
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-600 dark:text-brand-400 uppercase tracking-widest text-xs md:text-sm font-semibold"
          >
            Exclusive Portfolio
          </motion.span>
          {/* @ts-ignore: Suppressing strict type check for standard motion props */}
          <motion.div 
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl  text-slate-900 dark:text-white">{title}</h2>
            
            {showViewAll && !loading && (
              <Link to="/projects" className="text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center text-xs md:text-sm uppercase tracking-widest pb-2 border-b border-slate-300 dark:border-white/20 hover:border-brand-600 dark:hover:border-brand-500 self-start md:self-auto">
                View All Collections <Icons.ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            )}
          </motion.div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, i) => (
              <PropertyCardSkeleton key={i} />
            ))}
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {properties.map((property, idx) => (
              <PropertyCard key={property.id} property={property} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-slate-300 dark:border-white/10 rounded-xl">
             <p className="text-slate-500 dark:text-white/50">No properties found matching your criteria.</p>
             <button onClick={() => window.location.reload()} className="mt-4 text-brand-600 hover:underline">Reset Filters</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGrid;