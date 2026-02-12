import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, language, setLanguage } = useLanguage();

  const WHATSAPP_URL = "https://wa.me/573502715323";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollSpy Logic
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -35% 0px" } // Adjust viewport triggers
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navLinks = [
    { name: t.nav.home, href: '#home', id: 'home' },
    { name: t.nav.services, href: '#services', id: 'services' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.about, href: '#about', id: 'about' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'glass border-b border-slate-800/50 py-3 md:py-4 shadow-2xl shadow-black/50' 
            : 'bg-transparent border-transparent py-6 md:py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            
            {/* Animated JSR Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleScrollToSection(e, '#home')}
              className="group flex items-center cursor-pointer select-none relative z-50"
            >
              <div className="flex items-center gap-2">
                <img 
                  src="/assets/logo.svg" 
                  alt="JSR Logo" 
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-110 brightness-0 invert"
                />
                <div className="hidden md:flex max-w-0 overflow-hidden group-hover:max-w-[300px] transition-all duration-500 ease-out items-center">
                  <span className="text-lg font-medium text-jsr-gray whitespace-nowrap pl-3 border-l border-slate-700 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Juan Sebastian Rojas
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.id}>
                      <a 
                        href={link.href}
                        onClick={(e) => handleScrollToSection(e, link.href)} 
                        className={`text-sm font-medium uppercase tracking-widest transition-all duration-300 relative group py-2 ${
                          isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-px bg-jsr-accent transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                        {/* Active Glow Effect */}
                        {isActive && <span className="absolute inset-0 bg-jsr-accent/10 blur-lg rounded-full"></span>}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center gap-6 pl-6 border-l border-slate-800">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold tracking-widest group"
                >
                  <Globe className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                  <span>{language === 'en' ? 'ES' : 'EN'}</span>
                </button>

                <a 
                  href={WHATSAPP_URL} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-white text-jsr-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-jsr-accent transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/10 hover:shadow-jsr-accent/20"
                >
                  {t.nav.cta}
                </a>
              </div>
            </nav>

            {/* Modern Mobile Hamburger */}
            <button 
              className="md:hidden relative z-50 w-10 h-10 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6">
                <span 
                  className={`block h-0.5 bg-white mb-1.5 transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-jsr-accent' : ''
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 bg-white mb-1.5 transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 bg-white transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-jsr-accent' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Cinematic Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-jsr-dark/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-jsr-accent/10 via-transparent to-transparent pointer-events-none"></div>
        
        <nav className="relative z-10 w-full px-8">
          <ul className="flex flex-col gap-6 items-center">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <li 
                  key={link.id} 
                  className={`transform transition-all duration-500 ${
                    isMobileMenuOpen 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  <a 
                    href={link.href} 
                    className={`text-4xl md:text-5xl font-heading font-light hover:text-white hover:font-bold transition-all duration-300 block text-center ${
                      isActive ? 'text-white font-bold' : 'text-slate-300'
                    }`}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                  >
                    {link.name}
                    {isActive && <div className="h-1 w-12 bg-jsr-accent mx-auto mt-2 rounded-full"></div>}
                  </a>
                </li>
              );
            })}
          </ul>

          <div 
            className={`mt-12 flex flex-col items-center gap-6 transform transition-all duration-500 ${
               isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-12 h-px bg-slate-800"></div>
            
            <button 
              onClick={() => { toggleLanguage(); }}
              className="text-sm font-bold tracking-widest text-jsr-accent uppercase"
            >
              Change to {language === 'en' ? 'Español' : 'English'}
            </button>

            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 bg-jsr-accent text-jsr-dark rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-jsr-accent/20"
            >
              {t.nav.cta}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;