'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Portfolio', href: '/work' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-700 border-b ${
        isScrolled 
          ? 'py-4 bg-bg-dark/80 backdrop-blur-2xl border-white/5' 
          : 'py-8 bg-transparent border-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-11 h-11 rounded-2xl overflow-hidden bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-primary group-hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]">
            <Image 
              src="/images/logo.png" 
              alt="XenotriX Logo" 
              fill
              className="object-contain p-1.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter leading-none">XENOTRIX</span>
            <div className="flex items-center gap-2 mt-1.5">
               <span className="text-[10px] font-mono text-brand-primary tracking-[0.2em] leading-none uppercase">Agency</span>
               <div className="w-1 h-1 rounded-full bg-brand-primary/40" />
               <span className="text-[10px] font-mono text-white/40 tracking-widest leading-none uppercase italic">Engineering_v4</span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`text-xs font-mono font-bold tracking-[0.2em] transition-all duration-300 uppercase ${
                  pathname === item.href ? 'text-brand-primary' : 'text-white/60 hover:text-brand-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-px h-6 bg-white/5 mx-2" />
          <Link 
            href="/#contact"
            className="flex items-center gap-3 text-xs font-mono font-bold px-8 py-3.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white hover:text-bg-dark transition-all duration-500 shadow-xl"
          >
             <Lock size={14} className="opacity-50" />
             INIT_SESSION
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-[72px] bg-bg-dark/95 backdrop-blur-3xl z-900 lg:hidden"
          >
             <div className="section-container py-16 flex flex-col gap-10 h-full overflow-y-auto">
                {menuItems.map((item, idx) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl font-extrabold flex items-baseline gap-6 transition-colors ${
                      pathname === item.href ? 'text-brand-primary' : 'hover:text-brand-primary'
                    }`}
                  >
                    <span className="text-sm font-mono text-white/20 tracking-tighter">0{idx + 1}</span>
                    {item.name}
                  </Link>
                ))}
                <div className="mt-auto pb-24">
                   <Link 
                     href="/#contact"
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="block w-full py-6 rounded-2xl bg-white text-bg-dark text-center font-black font-mono text-lg tracking-widest uppercase"
                   >
                      INIT_SESSION
                   </Link>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
