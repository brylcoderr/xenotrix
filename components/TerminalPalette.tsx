'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Folder, Mail, Hash, Command } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    { name: 'Portfolio', icon: <Folder size={14} />, href: '#work', category: 'General' },
    { name: 'Our Expertise', icon: <Globe size={14} />, href: '#services', category: 'General' },
    { name: 'Our Methodology', icon: <Hash size={14} />, href: '#process', category: 'General' },
    { name: 'Contact Us', icon: <Mail size={14} />, href: '#contact', category: 'General' },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  const navigate = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-1000 flex items-start justify-center pt-[15vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-bg-dark/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-xl bg-surface/90 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10"
          >
            <div className="flex items-center gap-4 px-5 py-3.5 border-b border-white/5">
              <Search size={18} className="text-white/30" />
              <input 
                autoFocus
                type="text" 
                placeholder="Search navigation or commands..."
                className="flex-1 bg-transparent text-white text-base outline-none placeholder:text-white/20 font-sans"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded border border-white/10 text-[9px] text-white/40 font-bold uppercase">
                ESC
              </div>
            </div>

            <div className="p-2 max-h-[50vh] overflow-y-auto">
              {filteredCommands.length > 0 ? (
                <div className="py-2">
                  <div className="px-4 py-2 text-[9px] font-bold text-white/20 uppercase tracking-widest">Suggestions</div>
                  {filteredCommands.map((cmd) => (
                    <button
                      key={cmd.name}
                      onClick={() => navigate(cmd.href)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-white/20 group-hover:text-brand-primary transition-colors">
                          {cmd.icon}
                        </div>
                        <span className="text-sm text-white/70 group-hover:text-white font-medium transition-colors">{cmd.name}</span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                         <ChevronRight size={12} className="text-white/20" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center text-sm">
                  <p className="text-text-dim">No results found for &ldquo;<span className="text-white">{query}</span>&rdquo;</p>
                </div>
              )}
            </div>

            <div className="px-5 py-3.5 bg-white/2 border-t border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-4 text-[9px] text-white/20 font-bold tracking-widest uppercase">
                  <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded border border-white/10">
                     <Command size={9} /> K
                  </div>
                  <span>to close</span>
               </div>
               <div className="text-[9px] text-white/10 font-bold italic tracking-widest uppercase">XenotriX Command Suite</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ChevronRight = ({ size, className }: { size: number, className: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default CommandPalette;
