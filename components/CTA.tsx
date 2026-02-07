'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Terminal, Clock } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background Visuals */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <NextImage 
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" 
          alt="" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg-dark/60" />
      </div>

      <div className="section-container relative z-10">
        <div className="glass-panel p-1 border-brand-primary/20 bg-brand-primary/2">
           <div className="bg-bg-dark p-12 md:p-24 rounded-lg flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-12 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
              >
                <Terminal size={32} />
              </motion.div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                Ready to <span className="text-brand-primary underline underline-offset-12">Ship?</span>
              </h2>
              
              <p className="text-text-dim text-xl max-w-2xl mb-12 leading-relaxed">
                Connect with our engineering team today to audit your current stack or plan your next mission-critical deployment.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center">
                  <Link 
                    href="https://cal.com/brylcodes/15min" 
                    target="_blank"
                    className="btn-primary group w-full sm:w-auto justify-center"
                  >
                     <Clock size={16} className="text-bg-dark" />
                     Initialize Call
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                 <button className="btn-tech-outline flex items-center justify-center gap-2 w-full sm:w-auto">
                    <MessageSquare size={18} />
                    Chat with Team
                 </button>
              </div>

              <div className="mt-16 flex items-center gap-8 text-xs font-mono text-text-dim">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   SLOTS AVAILABLE FOR Q1 2026
                </div>
                <div className="hidden sm:block h-4 w-px bg-white/10" />
                <div className="hidden sm:block">EST. RESPONSE: &lt; 2H</div>
              </div>
           </div>
        </div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/10 blur-[120px] rounded-full mx-auto" />
    </section>
  );
};

export default CTA;
