'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NextImage from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-dvh flex items-center pt-24 overflow-hidden bg-[#020408]">
      {/* Immersive Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <NextImage 
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" 
          alt="Technical Network" 
          fill
          className="object-cover opacity-20 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg-dark via-bg-dark/80 to-bg-dark" />
        <div className="absolute inset-0 bg-linear-to-r from-bg-dark via-transparent to-bg-dark/40" />
      </div>

      {/* Decorative Light Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center">
          {/* Main Title & CTA Core */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-px bg-brand-primary" />
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.4em] text-brand-primary uppercase">
                System Status: Operational
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10"
            >
              Engineering <br />
              The <span className="text-brand-primary italic">Future</span> <br />
              Of <span className="text-white">Precision</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-text-dim leading-relaxed mb-12 max-w-xl font-light"
            >
              Deploying high-performance infrastructure and elite user experiences for the world&apos;s most ambitious technology companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <Link href="/#contact" className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-black text-sm tracking-widest hover:bg-brand-primary/80 transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] transform hover:-translate-y-1 block">
                START_PROJECT
              </Link>
              <Link href="/work" className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-sm tracking-widest hover:bg-white/10 transition-all transform hover:-translate-y-1 block">
                VIEW_ARCHIVE
              </Link>
            </motion.div>

            {/* Micro Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-20 flex gap-12 items-center"
            >
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-brand-primary tracking-widest uppercase opacity-60">Success Rate</p>
                <p className="text-2xl font-bold">100%</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-brand-primary tracking-widest uppercase opacity-60">Avg Velocity</p>
                <p className="text-2xl font-bold">4.2x</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Futuristic Terminal UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="glass-panel p-1 group relative">
               <div className="absolute -inset-0.5 bg-brand-primary/20 blur opacity-0 group-hover:opacity-100 transition duration-700" />
               <div className="bg-bg-dark/80 backdrop-blur-3xl rounded-[22px] p-8 md:p-10 font-mono text-xs md:text-sm leading-relaxed border border-white/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/30" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/30" />
                    </div>
                    <div className="text-[10px] text-text-dim/60 font-bold tracking-widest">
                      XENT_CORE_LOG v4.2
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <span className="text-brand-primary shrink-0">$</span>
                      <p className="text-white/40">Initializing precision_engine...</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-brand-primary shrink-0">$</span>
                      <p className="text-white/40">Deploying global_infrastructure...</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-white/20 shrink-0">&gt;&gt;</span>
                      <p className="text-brand-primary font-bold">SUCCESS::PRODUCTION_READY</p>
                    </div>
                    
                    <div className="pt-6 border-t border-white/5 mt-6">
                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                             <p className="text-[9px] text-text-dim mb-1">LATENCY</p>
                             <p className="text-lg font-black text-white">0.02ms</p>
                          </div>
                          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                             <p className="text-[9px] text-text-dim mb-1">STABILITY</p>
                             <p className="text-lg font-black text-white">99.99%</p>
                          </div>
                       </div>
                    </div>

                    <div className="pt-10 flex flex-col gap-2">
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ width: ["0%", "100%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="h-full bg-brand-primary shadow-[0_0_10px_#4f46e5]"
                          />
                       </div>
                       <p className="text-[9px] text-text-dim text-right font-bold tracking-[0.2em]">TRANSMITTING_DATA</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Decorative Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-6 glass-panel px-8 py-6 border-brand-primary/20 backdrop-blur-2xl shadow-2xl z-20"
            >
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-brand-primary tracking-widest font-black">ELITE_TIER</p>
                    <p className="text-xs text-white/60">System Synchronized</p>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
