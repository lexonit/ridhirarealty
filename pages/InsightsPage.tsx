import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/ui/SectionWrapper';
import ContactSection from '../components/ContactSection';
import { ThreeDCard } from '../components/ui/AceternityUI';
import { Icons } from '../components/ui/Icons';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { blogService } from '../services/blogService';
import { insightsService } from '../services/insightsService';
import { BlogPost, HeroSectionData } from '../types';
import { Skeleton } from '../components/ui/Skeleton';
import SEO from '../components/SEO';
import { FlipWords } from '../components/ui/flip-words';

const InsightsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState<HeroSectionData | null>(null);
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Parallax Hero
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [hero, blogPosts, vids] = await Promise.all([
        insightsService.getHeroData(),
        blogService.getAllPosts(),
        insightsService.getVideos()
      ]);
      setHeroData(hero);
      setArticles(blogPosts);
      setVideos(vids);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading || !heroData) {
    return (
      <main className="bg-white dark:bg-luxury-black min-h-screen">
         <Skeleton className="h-[60vh] w-full rounded-none" />
         <div className="container mx-auto px-6 py-24 space-y-12">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
         </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
      <SEO 
        title="Insights Hub - Real Estate Trends & Analysis" 
        description="Expert analysis, market trends, and lifestyle chronicles from the world of luxury real estate in Dubai."
      />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/home/pexels-lina-12238283.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
         <motion.div style={{ y }} className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
         </motion.div>
         
         <div className="relative z-10 container mx-auto px-6 text-center">
           <SectionWrapper>
             <span className="text-brand-400 uppercase tracking-widest text-sm block mb-4 font-semibold">{heroData.subTitleLabel}</span>
             <h1 className="text-5xl md:text-7xl  text-white mb-6">
               <FlipWords 
                 words={["Market Insights", "Expert Analysis", "Trends & Data", "Industry Knowledge"]} 
                 duration={3000}
                 className="text-brand-400"
               />
             </h1>
             <p className="text-white/80 max-w-xl mx-auto text-lg font-light">
               {heroData.subtitle}
             </p>
           </SectionWrapper>
         </div>
      </div>

      {/* Articles Section */}
      <div className="container mx-auto px-6 py-24 border-b border-slate-200 dark:border-white/5">
        <SectionWrapper>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl  text-slate-900 dark:text-white">Latest Market Trends</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {articles.map((article, idx) => (
                <SectionWrapper key={article.id} delay={idx * 0.1}>
                  <Link to={`/insights/${article.id}`} className="group cursor-pointer block h-full">
                    <div className="overflow-hidden rounded-2xl mb-6 relative h-[300px] shadow-lg dark:shadow-none">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                        {article.category}
                      </div>
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-white/40 text-xs uppercase tracking-widest mb-3">
                      {article.date} • {article.readTime}
                    </div>
                    <h3 className="text-2xl  text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-3">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 dark:text-white/60 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </Link>
                </SectionWrapper>
              ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Video Gallery Section */}
      <div className="bg-slate-50 dark:bg-luxury-charcoal py-24 relative overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-6 relative z-10">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="text-brand-600 dark:text-brand-400 uppercase tracking-widest text-sm block mb-4 font-semibold">Multimedia</span>
              <h2 className="text-4xl  text-slate-900 dark:text-white">Exclusive Video Content</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, idx) => (
                // @ts-ignore: Suppressing strict type check for standard motion props
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedVideo(video.videoId)}
                >
                  <ThreeDCard className="w-full h-[320px] cursor-pointer group">
                    <div className="relative h-full w-full rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-black">
                      {/* Thumbnail */}
                      <img 
                        src={video.image} 
                        alt={video.title} 
                        className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-70 dark:group-hover:opacity-60 transition-opacity duration-500"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                          <Icons.Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>

                      {/* Metadata Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-12">
                        <h3 className="text-lg  text-white mb-2 line-clamp-1 group-hover:text-brand-400 transition-colors">{video.title}</h3>
                        <div className="flex items-center justify-between text-xs text-white/60">
                           <span className="flex items-center gap-1"><Icons.Clock className="w-3 h-3" /> {video.duration}</span>
                           <span className="flex items-center gap-1"><Icons.Eye className="w-3 h-3" /> {video.views}</span>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 border-2 border-brand-500/0 group-hover:border-brand-500/50 rounded-xl transition-colors duration-500 pointer-events-none"></div>
                    </div>
                  </ThreeDCard>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
               <a 
                 href="https://www.youtube.com/@invest_dubai_ramesh" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block text-brand-600 dark:text-brand-400 hover:text-slate-900 dark:hover:text-white uppercase tracking-widest text-xs border-b border-brand-500/30 hover:border-slate-900 dark:hover:border-white pb-1 transition-all"
               >
                 Visit Our YouTube Channel
               </a>
            </div>
          </SectionWrapper>
        </div>
      </div>
      
      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedVideo(null); }}
                className="absolute top-4 right-4 z-50 text-white hover:text-brand-500 transition-colors bg-black/50 p-2 rounded-full"
              >
                <Icons.X className="w-6 h-6" />
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <ContactSection />
    </main>
  );
};

export default InsightsPage;