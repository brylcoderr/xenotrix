'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col pt-24 md:pt-32 pb-8 overflow-hidden bg-bg-dark">
      {/* Cinematic Background Engine */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-bg-dark via-bg-dark/60 to-bg-dark z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-bg-dark via-transparent to-bg-dark z-10 opacity-60" />
        <Image 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
          alt="Global Digital Infrastructure"
          fill
          priority
          className="object-cover scale-110 opacity-50 brightness-75"
        />
        {/* Animated Light Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </motion.div>
      
      {/* Premium Content Architecture */}
      <div className="section-container relative z-20 flex-1 flex flex-col justify-center">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-12">
              <span className="tag mb-0!">Engineering Excellence</span>
              <div className="h-px w-12 bg-white/10" />
              <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                Enterprise Standard : 2026
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-tighter leading-[0.8] mb-14 text-white">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-400 to-emerald-600 animate-gradient">Future Systems.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-text-dim max-w-3xl mb-16 leading-tight font-medium opacity-80 italic">
              Deploying high-performance digital ecosystems for global organizations that demand absolute architectural integrity and scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <Link href="#contact" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 text-bg-dark">Initiate Partnership</span>
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform text-bg-dark" />
              </Link>
              <Link href="#work" className="btn-secondary group">
                <span className="opacity-60 group-hover:opacity-100 transition-opacity uppercase text-xs tracking-widest font-black">View Mission Archive</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-bg-dark transition-all">
                  <ChevronRight size={18} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badge / Stats - Integrated Flow */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-20"
      >
        <div className="section-container">
          <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="grid grid-cols-3 gap-4 md:gap-8 lg:flex lg:gap-24">
              {[
                { val: "150+", label: "Success Missions" },
                { val: "50+", label: "Global Entities" },
                { val: "99.9%", label: "Uptime Protocol" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-2xl md:text-5xl font-bold text-white tracking-tighter mb-2 group-hover:text-brand-primary transition-colors text-center lg:text-left">{stat.val}</div>
                  <div className="text-[7px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-text-dim font-black opacity-60 group-hover:opacity-100 transition-opacity text-center lg:text-left leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-5 bg-white/2 px-8 py-6 rounded-4xl border border-white/5 backdrop-blur-sm group hover:border-brand-primary/20 transition-all">
               <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-bg-dark transition-all duration-500">
                  <CheckCircle2 size={24} />
               </div>
               <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-black text-brand-primary mb-1">ISO 9001 : 2015</div>
                  <div className="text-sm font-bold text-white/40 group-hover:text-white/60 transition-colors">Elite Quality Certification</div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
