import React, { useState, useEffect } from 'react';
import { Icons } from './ui/Icons';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Resize (Close menu on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock Body Scroll when Menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Ensure navbar background is solid on non-home pages if not scrolled
  const isHome = location.pathname === '/';
  
  // Dynamic background classes based on theme and scroll state
  const getNavBackground = () => {
    if (isOpen) {
      return 'bg-transparent py-3 md:py-4';
    }

    if (scrolled || !isHome) {
      // Updated backdrop color to match new luxury black
      return 'bg-white/90 dark:bg-luxury-black/95 backdrop-blur-md py-2 md:py-3 border-b border-black/5 dark:border-white/10 shadow-lg dark:shadow-none';
    }
    return 'bg-gradient-to-b from-luxury-black/90 to-transparent py-4 md:py-6';
  };

  const navBackground = getNavBackground();
  
  // Text color logic
  const textColorClass = (!scrolled && isHome && !isOpen) 
    ? 'text-white hover:text-brand-300' 
    : 'text-slate-800 dark:text-white hover:text-brand-500 dark:hover:text-brand-300';
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}>
      <div className="container mx-auto px-4 lg:px-6 relative flex justify-between items-center">
        
        {/* Desktop Layout - Left Links */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 w-1/2">
          <Link to="/" className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${textColorClass}`}>Home</Link>
          <Link to="/about" className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${textColorClass}`}>About Us</Link>
          <Link to="/services" className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${textColorClass}`}>Services Offered</Link>
          <Link to="/projects" className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${textColorClass}`}>Projects</Link>
        </div>

        {/* Desktop Layout - Centered Logo */}
        <Link to="/" className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group flex-col items-center justify-center">
          <img 
            src="/logo/logo.png" 
            alt="Ridhira Realty" 
            className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Layout - Right Links & Icons */}
        <div className="hidden lg:flex items-center justify-end space-x-4 xl:space-x-8 w-1/2">
          {/* Insights Hub Dropdown */}
          <div className="relative group">
            <Link to="/insights" className={`flex items-center text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors py-4 ${textColorClass}`}>
              Insights Hub
              <Icons.ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white dark:bg-luxury-charcoal/95 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-2xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2">
                <Link to="/insights" className="block px-6 py-3 text-xs text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 hover:text-brand-500 dark:hover:text-brand-400 transition-colors uppercase tracking-wider">
                  Video Gallery
                </Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${textColorClass}`}>Contact Us</Link>
          
          <div className={`flex items-center gap-3 xl:gap-6 pl-3 xl:pl-4 border-l ${(!scrolled && isHome && !isOpen) ? 'border-white/20' : 'border-black/10 dark:border-white/20'}`}>
            <a href="tel:+971561705995" className="flex items-center text-brand-500 dark:text-brand-400 hover:text-brand-700 dark:hover:text-white transition-colors text-[10px] xl:text-[11px] font-bold tracking-wider whitespace-nowrap">
              <Icons.Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
              +971 56 170 5995
            </a>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${(!scrolled && isHome && !isOpen) ? 'text-white hover:bg-white/10' : 'text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10'}`}
            >
              {theme === 'light' ? <Icons.Moon className="w-4 h-4" /> : <Icons.Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Header Layout */}
        <div className="lg:hidden flex justify-between w-full items-center z-50 relative">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
             <img src="/logo/logo.png" alt="Ridhira Realty" className="h-10 w-auto object-contain" />
          </Link>

          <div className="flex items-center gap-4">
             <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors ${(!scrolled && isHome && !isOpen) ? 'text-white' : 'text-slate-800 dark:text-white'}`}
            >
              {theme === 'light' ? <Icons.Moon className="w-5 h-5" /> : <Icons.Sun className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 focus:outline-none transition-colors ${(!scrolled && isHome && !isOpen) ? 'text-white' : 'text-slate-800 dark:text-white'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/98 dark:bg-luxury-black/98 backdrop-blur-xl z-40 flex flex-col pt-24 items-center transition-all duration-500 overflow-y-auto ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible pointer-events-none'}`}
      >
        <div className="flex flex-col items-center space-y-6 p-8 text-center w-full min-h-full">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl  text-slate-900 dark:text-white hover:text-brand-500 transition-colors">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl  text-slate-900 dark:text-white hover:text-brand-500 transition-colors">About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-xl  text-slate-900 dark:text-white hover:text-brand-500 transition-colors">Services Offered</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-xl  text-slate-900 dark:text-white hover:text-brand-500 transition-colors">Projects</Link>
          
          {/* Mobile Insights Dropdown */}
          <div className="w-full flex flex-col items-center">
            <button 
              onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)}
              className="flex items-center text-xl  text-slate-900 dark:text-white hover:text-brand-500 transition-colors"
            >
              Insights Hub <Icons.ChevronDown className={`ml-2 w-5 h-5 transition-transform ${mobileInsightsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-4 items-center ${mobileInsightsOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <Link to="/insights" onClick={() => setIsOpen(false)} className="text-sm text-slate-600 dark:text-white/60 hover:text-brand-500 dark:hover:text-brand-400 uppercase tracking-widest">Market Trends</Link>
              <Link to="/insights" onClick={() => setIsOpen(false)} className="text-sm text-slate-600 dark:text-white/60 hover:text-brand-500 dark:hover:text-brand-400 uppercase tracking-widest">Video Gallery</Link>
            </div>
          </div>

          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl  text-slate-900 dark:text-white hover:text-brand-500 transition-colors">Contact Us</Link>
          
          <div className="flex gap-8 mt-auto mb-8 border-t border-slate-200 dark:border-white/10 pt-8 w-full justify-center">
            <a href="tel:+971561705995" className="flex items-center text-brand-500 dark:text-brand-400 hover:text-brand-700 dark:hover:text-white transition-colors text-lg ">
              <Icons.Phone className="w-5 h-5 mr-2" />
              +971 56 170 5995
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;