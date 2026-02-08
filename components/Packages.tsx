'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Zap, Target, Cpu, Activity, Lock } from 'lucide-react';
import Link from 'next/link';

const Packages = () => {
  const plans = [
    {
      name: "Strategic Sprint",
      tagline: "High-intensity validation",
      price: "Initiation",
      icon: <Target className="text-violet-500" size={24} />,
      features: [
        "Rapid Strategic Prototyping",
        "Technical Architecture Audit",
        "Market Logic Verification",
        "High-Fidelity Interface Design",
        "Deployment Roadmap Blueprint"
      ],
      color: "from-violet-500/10 to-fuchsia-500/10"
    },
    {
      name: "Elite Squad Ops",
      tagline: "Mission-critical product teams",
      price: "Retainer",
      popular: true,
      icon: <Zap className="text-bg-dark" size={24} />,
      features: [
        "Dedicated Engineering Squad",
        "Architectural Oversight Protocol",
        "Enterprise-Grade Resilience",
        "Security Hardening Active",
        "Continuous Optimization Loops"
      ],
      color: "from-violet-600/20 to-fuchsia-700/20"
    },
    {
      name: "Core Transformation",
      tagline: "Legacy modernizations & AI scaling",
      price: "Enterprise",
      icon: <ShieldCheck className="text-violet-500" size={24} />,
      features: [
        "Core Ecosystem Modernization",
        "Neural Pipeline Orchestration",
        "SOC2 / Compliance Hardening",
        "24/7 Production Stability",
        "Global Scale Management"
      ],
      color: "from-violet-600/10 to-fuchsia-600/10"
    }
  ];

  return (
    <section id="packages" className="py-16 md:py-24 bg-bg-dark relative overflow-hidden">
      {/* Decorative Structural Engine */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[150px] -mr-96 -mt-96 opacity-30" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] -ml-64 -mb-32 opacity-20" />
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="tag justify-center!">Engagement Structures</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.85] text-white">
            Engineered <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-violet-600 animate-gradient">Engagement Models.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-dim leading-tight font-medium opacity-80 max-w-2xl mx-auto">
             Select the operational protocol that aligns with your organization&apos;s architectural scale and mission-critical objectives.
          </p>
        </div>

        <div className="relative">
          {/* Mobile View: Swipeable Carousel */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-8 px-4 -mx-4">
              {plans.map((plan, i) => (
                <div key={i} className="min-w-[85vw] snap-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`premium-card p-8 flex flex-col relative group transition-all duration-700 min-h-[640px] border-white/5 hover:border-brand-primary/30 h-full ${
                      plan.popular ? 'shadow-2xl shadow-brand-primary/10 bg-white/3' : 'bg-white/2'
                    }`}
                  >
                    {/* Internal Dynamic Aura */}
                    <div className={`absolute inset-0 bg-linear-to-br ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                    
                    {plan.popular && (
                      <div className="absolute top-4 right-4 py-1.5 px-4 rounded-full bg-linear-to-r from-brand-primary to-violet-600 text-[8px] font-black uppercase tracking-[0.3em] text-bg-dark shadow-2xl flex items-center gap-2">
                        <Activity size={8} className="animate-pulse" />
                        Primary Protocol
                      </div>
                    )}
                    
                    <div className="relative z-10 mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-2xl transition-all duration-700 ${
                        plan.popular 
                          ? 'bg-brand-primary text-bg-dark' 
                          : 'bg-white/5 border border-white/10 text-white'
                      }`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 tracking-tighter text-white">{plan.name}</h3>
                      <div className="flex items-center gap-2 opacity-60">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        <p className="text-[8px] text-text-dim font-black uppercase tracking-[0.2em]">{plan.tagline}</p>
                      </div>
                    </div>

                    <div className="relative z-10 mb-8 pt-6 border-t border-white/5">
                      <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-4xl font-black tracking-tighter text-white uppercase">{plan.price}</div>
                      </div>
                      <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-brand-primary font-black opacity-60">
                        <Cpu size={10} />
                        Evaluation Basis : 0.01
                      </div>
                    </div>

                    <div className="relative z-10 space-y-4 mb-8 flex-1">
                      {plan.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="mt-1 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
                            <Check size={8} />
                          </div>
                          <span className="text-xs text-text-dim font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="relative z-10 mt-auto">
                      <Link 
                        href="#contact" 
                        className={`w-full py-4 rounded-xl font-black text-[8px] tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-2 ${
                          plan.popular 
                            ? 'bg-white text-bg-dark' 
                            : 'bg-white/5 text-white border border-white/10'
                        }`}
                      >
                        <Lock size={10} className="opacity-40" />
                        Initiate Bridge
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {plans.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
              ))}
            </div>
          </div>

          {/* Desktop View: Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8 relative">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`premium-card p-10 flex flex-col relative group transition-all duration-700 min-h-[700px] border-white/5 hover:border-brand-primary/30 ${
                  plan.popular ? 'shadow-2xl shadow-brand-primary/10 scale-105 z-20' : 'bg-white/2 hover:bg-white/3'
                }`}
              >
                {/* Internal Dynamic Aura */}
                <div className={`absolute inset-0 bg-linear-to-br ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 py-2 px-6 rounded-full bg-linear-to-r from-brand-primary to-violet-600 text-[10px] font-black uppercase tracking-[0.4em] text-bg-dark shadow-2xl flex items-center gap-3">
                    <Activity size={10} className="animate-pulse" />
                    Primary Protocol
                  </div>
                )}
                
                <div className="relative z-10 mb-10">
                  <div className={`w-16 h-16 rounded-4xl flex items-center justify-center mb-10 shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 ${
                    plan.popular 
                      ? 'bg-brand-primary text-bg-dark' 
                      : 'bg-white/5 border border-white/10 text-white'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 tracking-tighter text-white group-hover:text-brand-primary transition-colors">{plan.name}</h3>
                  <div className="flex items-center gap-2 opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <p className="text-[10px] text-text-dim font-black uppercase tracking-[0.2em]">{plan.tagline}</p>
                  </div>
                </div>

                <div className="relative z-10 mb-12 pt-10 border-t border-white/5">
                  <div className="flex items-baseline gap-2 mb-3">
                    <div className="text-5xl font-black tracking-tighter text-white group-hover:text-brand-primary transition-colors uppercase">{plan.price}</div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-brand-primary font-black opacity-60 group-hover:opacity-100 transition-opacity">
                    <Cpu size={10} />
                    Evaluation Basis : 0.01
                  </div>
                </div>

                <div className="relative z-10 space-y-6 mb-12 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-4 group/item cursor-default">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover/item:bg-brand-primary group-hover/item:text-bg-dark group-hover/item:border-brand-primary transition-all duration-500">
                        <Check size={10} />
                      </div>
                      <span className="text-sm text-text-dim font-medium group-hover/item:text-white transition-colors leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="relative z-10">
                  <Link 
                    href="#contact" 
                    className={`w-full py-5 rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-3 group/btn ${
                      plan.popular 
                        ? 'bg-white text-bg-dark hover:bg-brand-primary hover:text-bg-dark' 
                        : 'bg-white/5 text-white hover:bg-white hover:text-bg-dark border border-white/10'
                    }`}
                  >
                    <Lock size={12} className="opacity-40" />
                    Initiate Bridge
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Security Disclaimer */}
        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-4 py-3 px-6 rounded-full border border-white/5 bg-white/1 backdrop-blur-3xl text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white/60 transition-colors cursor-default">
              <ShieldCheck size={12} className="text-brand-primary" />
              All Engagements Governed by Security Protocols v2.6.
           </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
