'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Globe, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-bg-dark font-sans">
      {/* Structural Cinematic Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[140px] -mr-96 -mt-96 opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Visual Architecture Side */}
          <div className="lg:col-span-12 xl:col-span-6 relative">
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 relative z-10">
              <div className="col-span-2 lg:col-span-8">
                <div className="relative aspect-video lg:aspect-4/5 rounded-3xl lg:rounded-5xl overflow-hidden shadow-2xl group border border-white/5">
                  <Image 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Engineering Team"
                    fill
                    className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-2000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg-dark/95 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 right-8">
                     <div className="flex items-center gap-2 lg:gap-4 mb-1 lg:mb-3">
                        <div className="h-px w-6 lg:w-10 bg-brand-primary" />
                        <span className="text-[8px] lg:text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.4em] font-black text-brand-primary">Field_Log</span>
                     </div>
                     <h4 className="text-sm lg:text-xl font-bold text-white tracking-tight">Deployment Ops</h4>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-4 flex flex-col gap-4 md:gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 lg:p-8 rounded-3xl lg:rounded-[2.5rem] bg-linear-to-br from-brand-primary to-violet-700 shadow-2xl shadow-brand-primary/20 text-bg-dark text-center group"
                >
                   <div className="text-2xl lg:text-4xl font-black mb-0 lg:mb-1 tracking-tighter group-hover:scale-110 transition-transform duration-500">5+</div>
                   <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Elite Years</div>
                </motion.div>
                
                <div className="relative aspect-square rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 group">
                  <Image 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
                    alt="Strategic Leadership"
                    fill
                    className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
              </div>

              <div className="col-span-1 lg:hidden flex flex-col gap-4">
                <div className="p-4 rounded-3xl bg-white/2 border border-white/5 backdrop-blur-3xl flex items-center justify-center h-full">
                   <div className="text-center">
                      <Zap className="text-brand-primary mb-1 mx-auto" size={16} />
                      <div className="text-[8px] font-black text-white/40 uppercase tracking-widest leading-none">Speed Protocol Active</div>
                   </div>
                </div>
              </div>

              <div className="col-span-12">
                 <div className="p-10 rounded-5xl bg-white/2 border border-white/5 backdrop-blur-3xl relative overflow-hidden group hover:border-brand-primary/20 transition-all duration-700">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
                    <div className="grid grid-cols-3 gap-4 md:gap-8 text-center relative z-10">
                       <div className="space-y-2">
                          <div className="text-2xl md:text-4xl font-black text-white tracking-tighter">50+</div>
                          <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-text-dim font-black opacity-60 leading-tight">System Architects</div>
                       </div>
                       <div className="space-y-2">
                          <div className="text-2xl md:text-4xl font-black text-white tracking-tighter">14</div>
                          <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-text-dim font-black opacity-60 leading-tight">Global Honors</div>
                       </div>
                       <div className="space-y-2">
                          <div className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-none">Global</div>
                          <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-text-dim font-black opacity-60 leading-tight">Mission Reach</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Editorial Content Side */}
          <div className="lg:col-span-12 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="xl:pl-10"
            >
              <span className="tag">Our Philosophical Core</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.85] text-white">
                Engineering <br />
                The Protocol of <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-violet-600 animate-gradient">Digital Trust.</span>
              </h2>
              
              <p className="text-lg md:text-2xl text-text-dim leading-snug mb-10 font-medium opacity-80">
                XenotriX delivers high-integrity infrastructure for global organizations that demand absolute architectural transparency and elite scale.
              </p>
              
              <p className="text-base text-text-dim/60 leading-relaxed mb-12 max-w-xl italic">
                &ldquo;We believe that elite business growth is a direct byproduct of superior engineering logic. Our mandate is to eliminate technical debt and architect for the next decade.&rdquo;
              </p>

              <div className="grid sm:grid-cols-2 gap-10 mb-16">
                <div className="relative group cursor-default">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-bg-dark transition-all duration-700 shadow-xl group-hover:shadow-brand-primary/20">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1 tracking-tight">Excellence Mandate</h4>
                      <p className="text-xs text-text-dim font-medium leading-relaxed opacity-60">Rigorous adherence to ISO standards and verified quality protocols across every deployment.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group cursor-default">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-bg-dark transition-all duration-700 shadow-xl group-hover:shadow-fuchsia-500/20">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1 tracking-tight">Universal Grid</h4>
                      <p className="text-xs text-text-dim font-medium leading-relaxed opacity-60">Seamless orchestration of multi-region infrastructures designed for global market dominance.</p>
                    </div>
                  </div>
                </div>
              </div>

               <div className="flex flex-col sm:flex-row items-center gap-8 p-8 border border-white/5 rounded-[2.5rem] bg-linear-to-br from-white/3 to-transparent backdrop-blur-3xl group">
                 <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-bg-dark bg-surface shadow-2xl overflow-hidden relative group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                         <Image src={`https://i.pravatar.cc/150?u=${i+30}`} alt="Executive" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-bg-dark bg-brand-primary shadow-2xl flex items-center justify-center text-bg-dark text-[10px] font-black group-hover:scale-110 transition-transform duration-700">
                       +8
                    </div>
                 </div>
                 <div className="text-center sm:text-left">
                    <div className="text-sm font-black text-white tracking-[0.2em] uppercase mb-1 flex items-center justify-center sm:justify-start gap-2">
                       Leadership Council
                       <CheckCircle2 size={14} className="text-brand-primary" />
                    </div>
                    <div className="text-[10px] font-black text-brand-primary/60 uppercase tracking-[0.4em] flex items-center justify-center sm:justify-start gap-2">
                       <Shield size={10} />
                       Architectural Oversight Active
                    </div>
                 </div>
                 <Sparkles className="ml-auto text-white/5 group-hover:text-brand-primary/20 transition-colors hidden sm:block" size={40} />
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
