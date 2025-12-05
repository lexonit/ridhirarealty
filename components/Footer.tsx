import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './ui/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-luxury-black text-slate-800 dark:text-white pt-24 pb-12 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img src="/logo/logo.png" alt="Ridhira Realty" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed">
              Redefining the skyline of Dubai with architectural masterpieces. 
              We create spaces that inspire, endure, and elevate.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@invest_dubai_ramesh" target="_blank" rel="noopener noreferrer">
                <Icons.Youtube className="w-5 h-5 text-slate-500 dark:text-white/70 hover:text-red-600 dark:hover:text-red-500 cursor-pointer transition-colors" />
              </a>
              <Icons.Instagram className="w-5 h-5 text-slate-500 dark:text-white/70 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors" />
              <Icons.Linkedin className="w-5 h-5 text-slate-500 dark:text-white/70 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors" />
              <Icons.Mail className="w-5 h-5 text-slate-500 dark:text-white/70 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-slate-900 dark:text-white">Discovery</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/60">
              <li><Link to="/about" className="hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors">Our Story</Link></li>
              <li><Link to="/projects" className="hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors">Residences</Link></li>
              <li><Link to="/services" className="hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors">Lifestyle</Link></li>
              <li><Link to="/insights" className="hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Contact / Address */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-slate-900 dark:text-white">Our Address</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/60">
              <li className="flex items-start gap-2">
                <Icons.MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400 mt-1 shrink-0" /> 
                <span className="leading-relaxed">
                  Biz Space Business Center,<br/>
                  Deira, Dubai- UAE
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Icons.Phone className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" /> 
                <a href="tel:+971561705995" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  +971-561705995
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icons.Mail className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" /> 
                <a href="mailto:info@ridhirarealty.com" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  info@ridhirarealty.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-slate-900 dark:text-white">Newsletter</h4>
            <p className="text-slate-600 dark:text-white/50 text-xs mb-4">Subscribe for exclusive off-plan updates.</p>
            <div className="flex border-b border-slate-300 dark:border-white/20 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full text-sm placeholder-slate-400 dark:placeholder-white/30 text-slate-900 dark:text-white" />
              <button className="text-brand-600 dark:text-brand-400 uppercase text-xs tracking-widest hover:text-slate-900 dark:hover:text-white transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 dark:text-white/30">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>&copy; 2025 Lexonit.com. All rights reserved.</p>
            <span className="hidden md:block w-px h-3 bg-slate-300 dark:bg-white/20"></span>
            <p>Design and Develop by <a href="https://lexonit.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Lexonit.com</a></p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-brand-600 dark:hover:text-white cursor-pointer transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-brand-600 dark:hover:text-white cursor-pointer transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;