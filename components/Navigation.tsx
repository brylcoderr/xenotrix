'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#services' },
    { name: 'Missions', href: '#work' },
    { name: 'Heritage', href: '#about' },
    { name: 'Methodology', href: '#process' },
    { name: 'Solutions', href: '#packages' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-bg-dark/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          
          {/* Brand Engine - Professional Identity */}
          <Link href="/" className="flex items-center gap-4 group">
             <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src="/images/logo.png" 
                  alt="XenotriX" 
                  fill
                  className="object-contain"
                />
             </div>
             <div className="flex flex-col">
               <span className="text-lg font-bold tracking-tight text-white leading-none uppercase">XenotriX</span>
               <span className="text-[7px] font-black tracking-[0.4em] text-brand-primary uppercase leading-none mt-1">Digital Engineering</span>
             </div>
          </Link>

          {/* Core Navigation - Professional Density */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-[0.2em] transition-all relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Operational CTA - Modern Professional */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-brand-primary text-bg-dark text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-bg-dark transition-all transform hover:scale-105 shadow-lg shadow-brand-primary/20"
            >
              Initiate Project
            </Link>
          </div>

          {/* Mobile Access */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Modern Mobile Interface */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-0 bg-bg-dark border-b border-white/10 z-100 lg:hidden p-8 pt-24 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold text-white hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 rounded-xl bg-brand-primary text-bg-dark text-center font-black uppercase tracking-widest text-xs"
              >
                Contact Us
              </Link>
            </div>
            
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navigation;
