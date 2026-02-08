'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ShieldAlert, Cpu, Lock } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-bg-dark text-white overflow-hidden flex flex-col selection:bg-brand-primary/30 font-mono relative">
      {/* Technical Background Engine */}
      <div className="absolute inset-0 bg-grid-white/[0.02] mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] opacity-20" />
      
      <div className="flex-1 relative flex items-center justify-center pt-20">
        <div className="section-container relative z-10 w-full px-6">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-4 mb-10 px-6 py-2 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-3xl"
            >
               <ShieldAlert className="text-brand-primary animate-pulse" size={14} />
               <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-primary">Status::404_NODE_NOT_FOUND</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-white uppercase">
              GRID_BREAK
            </h1>
            
            <p className="text-base md:text-xl text-text-dim mb-12 leading-relaxed max-w-sm mx-auto italic opacity-80">
              The requested operational node has been purged or relocated outside our secure architectural perimeter.
            </p>

            <div className="w-full max-w-sm mx-auto group">
              <Link 
                href="/" 
                className="relative flex items-center justify-center gap-4 bg-white text-bg-dark hover:bg-brand-primary transition-all duration-700 py-6 rounded-2xl font-black text-[10px] tracking-[0.4em] uppercase shadow-2xl hover:shadow-brand-primary/40 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  <Home size={14} />
                  Return to Command Center
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-brand-primary to-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </Link>
            </div>

            {/* Technical Metadata Footer */}
            <div className="mt-24 pt-8 border-t border-white/5 w-full flex justify-between items-center opacity-30">
               <div className="flex items-center gap-3 text-[9px] font-black tracking-widest uppercase">
                  <Lock size={10} className="text-brand-primary" />
                  E2EE_PATH_FAILED
               </div>
               <div className="flex items-center gap-3 text-[9px] font-black tracking-widest uppercase">
                  <Cpu size={10} className="text-fuchsia-400" />
                  COORDINATE_RES_0.0.1
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
