import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe, FaWhatsapp } from 'react-icons/fa';
import Button from '../components/ui/Button';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.products'), href: '#products' },
    { name: t('navbar.other_products'), href: '#other-products' },
    { name: t('navbar.gallery'), href: '#gallery' },
    { name: t('navbar.distributor'), href: '#distributor' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[var(--zIndex-sticky)] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] tracking-wider text-[var(--color-primary)]">
            TIK TOK
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="text-[var(--color-text)] hover:text-[var(--color-secondary)] font-medium text-sm transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-sm font-semibold uppercase hover:text-[var(--color-secondary)] transition-colors"
          >
            <FaGlobe className="mr-2" />
            {i18n.language === 'en' ? 'EN' : 'FR'}
          </button>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm" icon={<FaWhatsapp />}>
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden text-[var(--color-primary)] text-2xl"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[var(--zIndex-modal)] bg-[var(--color-background)] flex flex-col"
          >
            <div className="flex justify-between items-center p-5 border-b border-[var(--color-border)]">
              <span className="text-2xl font-bold font-['Playfair_Display'] text-[var(--color-primary)]">
                TIK TOK
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-[var(--color-primary)]"
                aria-label="Close Menu"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-[var(--color-text)] border-b border-[var(--color-border)] pb-2"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="mt-8 flex flex-col gap-4">
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center text-lg font-semibold uppercase"
                >
                  <FaGlobe className="mr-2" />
                  Language: {i18n.language === 'en' ? 'English' : 'Français'}
                </button>
                
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full">
                    Contact on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
