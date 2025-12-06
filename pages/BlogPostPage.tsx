import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogService } from '../services/blogService';
import { BlogPost } from '../types';
import { Icons } from '../components/ui/Icons';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Skeleton } from '../components/ui/Skeleton';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  // Parallax Hero
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      if (id) {
        const data = await blogService.getPostById(id);
        if (data) setPost(data);
        
        const all = await blogService.getAllPosts();
        setRelatedPosts(all.filter(p => p.id !== id).slice(0, 3));
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
         <Skeleton className="h-[60vh] w-full rounded-none mb-12" />
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
               <Skeleton className="h-8 w-3/4" />
               <Skeleton className="h-4 w-full" />
               <Skeleton className="h-4 w-full" />
               <Skeleton className="h-4 w-full" />
               <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="lg:col-span-1 space-y-8">
               <Skeleton className="h-64 w-full" />
               <Skeleton className="h-32 w-full" />
            </div>
         </div>
      </main>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-luxury-black text-slate-900 dark:text-white">
        <SEO title="Article Not Found" />
        <h2 className="text-3xl  mb-4">Article Not Found</h2>
        <Link to="/insights" className="text-brand-500 hover:underline">Return to Insights Hub</Link>
      </div>
    );
  }

  return (
    <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        image={post.image}
      />
      
      {/* Hero Image */}
      <div ref={heroRef} className="relative h-[60vh] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
          <div className="container mx-auto">
            <SectionWrapper>
              <span className="bg-brand-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest inline-block mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl  text-white mb-6 leading-tight max-w-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/80 text-sm font-light tracking-wide items-center">
                <span className="flex items-center gap-2"><Icons.Users className="w-4 h-4" /> {post.author}</span>
                <span className="w-px h-4 bg-white/30"></span>
                <span className="flex items-center gap-2"><Icons.Clock className="w-4 h-4" /> {post.date}</span>
                <span className="w-px h-4 bg-white/30"></span>
                <span>{post.readTime}</span>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <SectionWrapper>
              <article className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings: prose-headings:text-brand-900 dark:prose-headings:text-white
                prose-a:text-brand-600 dark:prose-a:text-brand-400
                prose-li:marker:text-brand-500
                prose-img:rounded-xl">
                
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <div className="mt-12 p-8 bg-slate-50 dark:bg-luxury-charcoal rounded-xl border-l-4 border-brand-500">
                  <h3 className="text-xl  text-slate-900 dark:text-white mb-2">Ready to invest in Dubai?</h3>
                  <p className="text-slate-600 dark:text-white/70 mb-4">
                    Contact Ridhira Realty today for personalized guidance and access to exclusive off-plan opportunities.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-xs hover:text-slate-900 dark:hover:text-white transition-colors">
                    Get in Touch <Icons.ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </SectionWrapper>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            
            {/* Author Box */}
            <SectionWrapper delay={0.2}>
              <div className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/5">
                <h3 className=" text-xl text-slate-900 dark:text-white mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-200 dark:bg-brand-900 rounded-full flex items-center justify-center">
                    <span className=" font-bold text-brand-800 dark:text-brand-200 text-lg">RR</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{post.author}</p>
                    <p className="text-xs text-slate-500 dark:text-white/50 uppercase tracking-widest">Real Estate Analyst</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed">
                  Specializing in luxury property market analysis and investment strategies within the UAE region.
                </p>
              </div>
            </SectionWrapper>

            {/* Related Posts */}
            <SectionWrapper delay={0.3}>
              <div>
                <h3 className=" text-xl text-slate-900 dark:text-white mb-6">More Insights</h3>
                <div className="space-y-6">
                  {relatedPosts.map(rel => (
                    <Link to={`/insights/${rel.id}`} key={rel.id} className="group block">
                      <div className="h-40 overflow-hidden rounded-lg mb-3 relative">
                        <img src={rel.image} alt={rel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <span className="text-xs text-brand-600 dark:text-brand-400 uppercase tracking-widest font-bold">{rel.category}</span>
                      <h4 className=" text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mt-1">
                        {rel.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </SectionWrapper>

          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;