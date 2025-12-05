
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Button, SparklesCore, Menu, MenuItem, ProductItem, HoveredLink } from './ui';
import { Menu as MenuIcon, X, Sun, Moon, ChevronDown, Mail, ArrowRight, Twitter, Linkedin, Instagram, LogIn } from 'lucide-react';
import { cn } from '../components/ui';
import { LUXURY_IMAGES } from '../constants/images';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
  theme: string;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath, theme, onToggleTheme }) => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      {/* Desktop Navbar (Refactored for Responsiveness) */}
      <div className="hidden lg:flex fixed top-4 inset-x-0 z-50 justify-center pointer-events-none">
        <div className="w-full max-w-7xl px-6 flex items-center justify-between relative">
            
            {/* Logo */}
            <div className="pointer-events-auto flex items-center gap-1 cursor-pointer" onClick={() => handleNav('/')}>
                <div className="flex items-baseline font-bold tracking-tighter text-2xl select-none">
                    <span className="text-slate-900 dark:text-white">LE</span>
                    <span className="text-4xl mx-0.5 bg-clip-text text-transparent bg-gradient-to-tr from-violet-600 to-indigo-500">X</span>
                    <span className="text-slate-900 dark:text-white">ON</span>
                    <sup className="text-sm ml-1 text-slate-500 dark:text-slate-400 self-start mt-2">IT</sup>
                </div>
            </div>
            
            {/* Centered Menu */}
            <div className="pointer-events-auto absolute left-1/2 top-0 -translate-x-1/2">
                <Menu setActive={setActive}>
                    <div onClick={() => handleNav('/')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Home</div>
                    
                    <MenuItem setActive={setActive} active={active} item="Services">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4 min-w-[550px]">
                            <ProductItem
                                title="For IT Providers"
                                href="/services/it-providers"
                                src={LUXURY_IMAGES[0]}
                                description="Scale your MSP business with AI employees."
                                onClick={() => handleNav('/services/it-providers')}
                            />
                            <ProductItem
                                title="AI Project Manager"
                                href="/services/ai-project-manager"
                                src={LUXURY_IMAGES[1]}
                                description="Stop babysitting tickets. Let AI manage workflow."
                                onClick={() => handleNav('/services/ai-project-manager')}
                            />
                            <ProductItem
                                title="AI Chatbots"
                                href="/services/ai-chat"
                                src={LUXURY_IMAGES[2]}
                                description="24/7 Customer support agents."
                                onClick={() => handleNav('/services/ai-chat')}
                            />
                             <div className="flex flex-col space-y-2 justify-center">
                                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">More Solutions</h4>
                                <HoveredLink onClick={() => handleNav('/services')} href="/services">All Services</HoveredLink>
                                <HoveredLink onClick={() => handleNav('/services/ai-workflows')} href="/services/ai-workflows">Automation Workflows</HoveredLink>
                                <HoveredLink onClick={() => handleNav('/services/ai-dashboards')} href="/services/ai-dashboards">AI Dashboards</HoveredLink>
                                <HoveredLink onClick={() => handleNav('/services/ai-email')} href="/services/ai-email">Email Assistant</HoveredLink>
                            </div>
                        </div>
                    </MenuItem>

                    <div onClick={() => handleNav('/offers')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Offers</div>
                    <div onClick={() => handleNav('/pricing')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Pricing</div>
                    <div onClick={() => handleNav('/blog')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Blog</div>
                    <div onClick={() => handleNav('/about')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">About</div>
                    <div onClick={() => handleNav('/contact')} onMouseEnter={() => setActive(null)} className="cursor-pointer text-black dark:text-white hover:opacity-90 px-2 lg:px-4 py-1 text-sm font-medium">Contact</div>
                </Menu>
            </div>

            {/* Right Actions */}
            <div className="pointer-events-auto flex gap-4 items-center">
                <button 
                    onClick={() => handleNav('/login')} 
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white transition-colors hidden xl:block"
                >
                    Login
                </button>
                <button
                  onClick={onToggleTheme}
                  className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>
        </div>
      </div>

      {/* Mobile Navbar (Hamburger) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 transition-all">
          <div className="flex items-center gap-2" onClick={() => handleNav('/')}>
             <div className="flex items-baseline font-bold tracking-tighter text-xl select-none">
                <span className="text-slate-900 dark:text-white">LE</span>
                <span className="text-2xl mx-0.5 bg-clip-text text-transparent bg-gradient-to-tr from-violet-600 to-indigo-500">X</span>
                <span className="text-slate-900 dark:text-white">ON</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={onToggleTheme} className="text-slate-900 dark:text-white">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 dark:text-white">
                {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
             </button>
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-20 px-6 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.path} className="flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 py-3">
                  <button
                    onClick={() => item.children ? toggleDropdown(item.label) : handleNav(item.path)}
                    className={`text-left text-lg font-medium ${
                      currentPath === item.path || (item.children && currentPath.startsWith(item.path))
                        ? 'text-violet-600 dark:text-violet-400' 
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.children && (
                    <button onClick={() => toggleDropdown(item.label)} className="p-2">
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''} text-slate-500`} 
                      />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="flex flex-col gap-2 pl-4 bg-slate-50 dark:bg-white/5 rounded-lg my-2 p-2">
                    {item.children.map((child) => (
                      <button
                        key={child.path}
                        onClick={() => handleNav(child.path)}
                        className="text-left py-2 text-base text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-2">
               <button onClick={() => handleNav('/login')} className="w-full text-left py-3 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 border-b border-slate-100 dark:border-white/5 mb-4">
                  Login
               </button>
               <Button className="w-full" variant="accent" onClick={() => handleNav('/contact')}>
                  Book Consultation
               </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const Footer = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  return (
    <footer className="relative bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-white/10 pt-20 pb-10 transition-colors duration-300 overflow-hidden">
      {/* Aceternity Sparkles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#a78bfa" // Violet-400 ish
        />
        {/* Mask to fade sparkles at the top */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-baseline font-bold tracking-tighter text-xl select-none">
                <span className="text-slate-900 dark:text-white">LE</span>
                <span className="text-2xl mx-0.5 bg-clip-text text-transparent bg-gradient-to-tr from-violet-600 to-indigo-500">X</span>
                <span className="text-slate-900 dark:text-white">ON</span>
                <sup className="text-xs ml-0.5 text-slate-500 dark:text-slate-400">IT</sup>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Empowering businesses with next-generation AI automation and web development solutions.
            </p>
            <div className="flex gap-4 pt-2">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-violet-600 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Partners', 'Blog'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => item === 'Blog' ? onNavigate('/blog') : onNavigate('/about')} 
                    className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 text-sm transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['AI Chatbots', 'Web Development', 'Automation', 'For IT Providers'].map((item) => (
                <li key={item}>
                  <button onClick={() => item === 'For IT Providers' ? onNavigate('/services/it-providers') : onNavigate('/services')} className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 text-sm transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                <Mail size={16} className="text-violet-500" />
                <span>hr@lexonit.com</span>
              </li>
              <li>
                <Button variant="outline" size="sm" className="w-full" onClick={() => onNavigate('/contact')}>
                  Get a Quote <ArrowRight size={14} className="ml-2" />
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 LexonIT. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-violet-600 dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-violet-600 dark:hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
