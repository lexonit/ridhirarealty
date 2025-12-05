import React, { useEffect, useState, useRef } from 'react';
import ContactSection from '../components/ContactSection';
import { Icons } from '../components/ui/Icons';
import SectionWrapper from '../components/ui/SectionWrapper';
import { contactService } from '../services/contactService';
import { HeroSectionData, FeatureItem } from '../types';
import { Skeleton } from '../components/ui/Skeleton';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';
import { FlipWords } from '../components/ui/flip-words';

const ContactPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState<HeroSectionData | null>(null);
  const [contactInfo, setContactInfo] = useState<FeatureItem[]>([]);

  // Parallax Hero
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [hero, info] = await Promise.all([
        contactService.getHeroData(),
        contactService.getContactInfo()
      ]);
      setHeroData(hero);
      setContactInfo(info);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success message shown
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  if (loading || !heroData) {
    return (
      <main className="bg-white dark:bg-luxury-black min-h-screen">
         <Skeleton className="h-[60vh] w-full rounded-none" />
         <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
         </div>
      </main>
    );
  }

  return (
    <main className="bg-white dark:bg-luxury-black min-h-screen transition-colors duration-300">
      <SEO 
        title="Contact Us - Free Real Estate Consultation" 
        description="Get in touch with Ridhira Realty for personalized investment advice, property viewings, or to list your property."
      />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `url('/home/pexels-nextvoyage-1470405.jpg')`,
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
             <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
               <FlipWords 
                 words={["Get In Touch", "Let's Connect", "Reach Out", "Contact Us"]} 
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

      {/* Info Grid */}
      <div className="container mx-auto px-6 py-24">
         <SectionWrapper>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-luxury-charcoal p-8 rounded-xl border border-slate-200 dark:border-white/5 text-center group hover:border-brand-500/50 transition-all shadow-md dark:shadow-none">
                   <div className="w-12 h-12 bg-brand-100 dark:bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                     {info.icon && <info.icon className="w-5 h-5 text-brand-600 dark:text-brand-500" />}
                   </div>
                   <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">{info.title}</h3>
                   <p className="text-slate-600 dark:text-white/60" dangerouslySetInnerHTML={{ __html: info.description || '' }}></p>
                </div>
              ))}
           </div>
         </SectionWrapper>
      </div>
      
      {/* Contact Form Section */}
      <SectionWrapper className="container mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Form Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-brand-600 dark:text-brand-400 uppercase tracking-widest text-xs font-semibold block mb-4">Get In Touch</span>
            <h2 className="text-4xl font-serif text-slate-900 dark:text-white mb-6">Send Us a Message</h2>
            <p className="text-slate-600 dark:text-white/60 mb-8 leading-relaxed">
              Whether you're looking to invest in off-plan properties or need advice on your current portfolio, our team is here to assist you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 rounded-lg p-4 outline-none focus:border-brand-500 transition-colors text-slate-900 dark:text-white" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 rounded-lg p-4 outline-none focus:border-brand-500 transition-colors text-slate-900 dark:text-white" 
                    placeholder="+971 50 000 0000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 rounded-lg p-4 outline-none focus:border-brand-500 transition-colors text-slate-900 dark:text-white" 
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 rounded-lg p-4 outline-none focus:border-brand-500 transition-colors text-slate-900 dark:text-white cursor-pointer"
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="Investment">Investment Opportunities</option>
                  <option value="Buying">Buying a Property</option>
                  <option value="Selling">Selling a Property</option>
                  <option value="Consultation">General Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/40">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-luxury-charcoal border border-slate-200 dark:border-white/10 rounded-lg p-4 outline-none focus:border-brand-500 transition-colors text-slate-900 dark:text-white resize-none" 
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full bg-brand-600 text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-700 transition-all shadow-lg flex items-center justify-center gap-2 ${formStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}`}
              >
                {formStatus === 'submitting' ? (
                  <>Processing...</>
                ) : formStatus === 'success' ? (
                  <><Icons.CheckCircle className="w-5 h-5" /> Message Sent Successfully</>
                ) : (
                  <>Send Message <Icons.ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>

          {/* Visual Side */}
          <div className="w-full lg:w-1/2 h-full min-h-[500px] relative rounded-2xl overflow-hidden shadow-2xl group hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=2070&auto=format&fit=crop" 
              alt="Dubai Office" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-900/60 mix-blend-multiply" />
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <Icons.MessageSquare className="w-12 h-12 mb-6 text-brand-400" />
              <h3 className="text-3xl font-serif mb-4">Prefer WhatsApp?</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Chat directly with our senior property consultants for instant updates on new launches and availability.
              </p>
              <a 
                href="https://wa.me/971561705995" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white hover:text-brand-900 transition-all font-bold uppercase tracking-wider text-sm"
              >
                <Icons.Phone className="w-4 h-4" /> Start Chat
              </a>
            </div>
          </div>

        </div>
      </SectionWrapper>
      
      {/* Map Section */}
      <SectionWrapper className="container mx-auto px-6 pb-24">
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative group">
          {/* Using a Google Maps Embed iframe */}
          <iframe 
            width="100%" 
            height="100%" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Biz%20Space%20Business%20Center%2C%20Deira%2C%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0}
            className="grayscale group-hover:grayscale-0 transition-all duration-700"
            title="Office Location"
          ></iframe>
          
          <div className="absolute bottom-6 left-6 bg-white dark:bg-luxury-black/90 backdrop-blur-md p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-lg max-w-xs hidden md:block">
            <h4 className="font-serif text-slate-900 dark:text-white text-lg mb-2">Visit Our Office</h4>
            <p className="text-xs text-slate-500 dark:text-white/60 mb-4 leading-relaxed">
              Located in the heart of Deira, providing easy access for all our international and local clients.
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Biz+Space+Business+Center,+Deira,+Dubai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </SectionWrapper>

      <ContactSection />
    </main>
  );
};

export default ContactPage;