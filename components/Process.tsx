'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, ChevronRight, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      icon: <Search size={22} />,
      title: "Strategic Discovery",
      shortDesc: "Deep-dive audit & blueprinting.",
      fullDesc: "Our architects perform a deep-dive audit of your business ecosystem to blueprint a path for scalable dominance. We analyze every technical friction point to ensure clinical execution.",
      features: ["Business Logic Audit", "Market Positioning", "Technical Feasibility"],
      color: "from-violet-500/20 to-fuchsia-600/20"
    },
    {
      id: "02",
      icon: <PenTool size={22} />,
      title: "Precision Engineering",
      shortDesc: "High-fidelity development.",
      fullDesc: "Design meeting performance. We construct high-fidelity frameworks optimized for speed, security, and elite user experience using next-generation stack protocols.",
      features: ["Architecture Design", "Security Hardening", "UI/UX Orchestration"],
      color: "from-fuchsia-500/20 to-violet-700/20"
    },
    {
      id: "03",
      icon: <Rocket size={22} />,
      title: "Seamless Integration",
      shortDesc: "Zero-friction deployment.",
      fullDesc: "Zero-friction deployment. We integrate mission-critical solutions into your existing stack with clinical precision, ensuring uninterrupted business operations.",
      features: ["CI/CD Pipeline Setup", "Zero-Downtime Migration", "Infrastructure Tuning"],
      color: "border-violet-400/20 bg-violet-400/5"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-bg-dark relative overflow-hidden">
      {/* Cinematic Background Engine */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 opacity-30" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[120px] -ml-64 -mb-32 opacity-20" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:hidden">
          <span className="tag">Our Methodology</span>
          <h2 className="text-4xl font-bold tracking-tighter mb-4 leading-[0.85] text-white">
            Architectural <span className="text-brand-primary">Excellence.</span>
          </h2>
          <p className="text-base text-text-dim leading-snug opacity-80 max-w-sm">
            A high-performance workflow for mission-critical digital scaling.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Static Header Column - Desktop Only */}
          <div className="hidden lg:col-span-5 lg:block sticky top-32">
            <span className="tag">Our Methodology</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.85] text-white">
              The Lifecycle of <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-violet-600 animate-gradient">The Lifecycle of <br /> Architectural Excellence.</span>
            </h2>
            <p className="text-lg text-text-dim leading-tight mb-10 font-medium opacity-80 max-w-md">
              A condensed, high-performance workflow designed for mission-critical digital scaling.
            </p>

            {/* Step Selection - Interactive Navigation */}
            <div className="space-y-3">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`w-full flex items-center gap-5 p-5 rounded-4xl transition-all duration-500 border group ${
                    activeStep === i 
                    ? 'bg-white/5 border-white/10 shadow-2xl shadow-brand-primary/10' 
                    : 'bg-transparent border-transparent opacity-40 hover:opacity-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeStep === i 
                    ? `bg-linear-to-r ${step.color.replace('/20', '')} text-bg-dark scale-110 shadow-lg` 
                    : 'bg-white/5 text-white/40'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-0.5">Phase {step.id}</div>
                    <div className="text-base font-bold text-white tracking-tight">{step.title}</div>
                  </div>
                  <ChevronRight 
                    size={16} 
                    className={`ml-auto transition-transform duration-500 ${activeStep === i ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Display - Mobile Carousel Integrated */}
          <div className="lg:col-span-7 w-full">
            {/* Mobile Phase Indicators */}
            <div className="flex lg:hidden justify-between gap-2 mb-8 bg-white/2 p-2 rounded-3xl border border-white/5">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`flex-1 flex flex-col items-center py-3 rounded-2xl transition-all duration-500 ${
                    activeStep === i ? 'bg-white/5 text-brand-primary' : 'text-white/20'
                  }`}
                >
                  <div className="mb-1">{step.icon}</div>
                  <div className="text-[8px] font-black uppercase tracking-widest">{step.id}</div>
                </button>
              ))}
            </div>

            <div className="relative min-h-[500px] p-8 lg:p-16 overflow-hidden group border border-white/5 rounded-5xl bg-white/3 backdrop-blur-3xl">
              {/* Dynamic Animated Background */}
              <motion.div 
                key={`bg-${activeStep}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className={`absolute inset-0 bg-linear-to-br ${steps[activeStep].color} opacity-[0.08]`} 
              />
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-4 mb-6">
                     <span className="text-6xl md:text-[100px] font-black text-white/5 leading-none tracking-tighter select-none">
                       {steps[activeStep].id}
                     </span>
                     <div className="flex-1 h-px bg-white/5" />
                     <div className="px-5 py-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-[10px] font-black text-brand-primary uppercase tracking-widest animate-pulse">
                       System_Phase_Live
                     </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                    {steps[activeStep].title}
                  </h3>

                  <p className="text-base md:text-xl text-white leading-relaxed mb-10 font-medium italic opacity-90">
                    &quot;{steps[activeStep].fullDesc}&quot;
                  </p>

                  <div className="grid md:grid-cols-2 gap-10 mt-auto">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-6 flex items-center gap-2">
                        <Cpu size={12} /> Core Protocols
                      </div>
                      <div className="space-y-4">
                        {steps[activeStep].features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 group/item">
                            <div className="w-1 h-1 rounded-full bg-brand-primary group-hover/item:scale-150 transition-transform" />
                            <span className="text-[10px] font-black text-white uppercase tracking-widest group-hover/item:text-brand-primary transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                       <div className="p-5 rounded-3xl bg-white/4 border border-white/10 hover:border-brand-primary/40 transition-all group/card">
                          <ShieldCheck className="text-brand-primary mb-2 transition-transform group-hover/card:scale-110" size={18} />
                          <div className="text-[8px] font-black text-white uppercase tracking-widest">Arch Audit</div>
                       </div>
                       <div className="p-5 rounded-3xl bg-white/4 border border-white/10 hover:border-brand-primary/40 transition-all group/card">
                          <Zap className="text-fuchsia-400 mb-2 transition-transform group-hover/card:scale-110" size={18} />
                          <div className="text-[8px] font-black text-white uppercase tracking-widest">Efficiency</div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="flex lg:hidden justify-between mt-8">
               <button 
                 onClick={() => setActiveStep(prev => (prev - 1 + steps.length) % steps.length)}
                 className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-brand-primary transition-colors p-4"
               >
                 <ChevronRight className="rotate-180" size={14} /> Prev Phase
               </button>
               <button 
                 onClick={() => setActiveStep(prev => (prev + 1) % steps.length)}
                 className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-brand-primary transition-colors p-4"
               >
                 Next Phase <ChevronRight size={14} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
