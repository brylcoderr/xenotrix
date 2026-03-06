'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Rocket, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      icon: <Search size={22} />,
      title: "Strategy & Planning",
      shortDesc: "Deep-dive audit & blueprinting.",
      fullDesc: "We perform a deep-dive audit of your business ecosystem to blueprint a path for scalable dominance. We analyze every technical friction point to ensure clinical execution.",
      features: ["Business Logic Audit", "Market Positioning", "Growth Roadmap"],
      color: "from-violet-500/20 to-fuchsia-600/20"
    },
    {
      id: "02",
      icon: <PenTool size={22} />,
      title: "Design & Development",
      shortDesc: "High-fidelity execution.",
      fullDesc: "Design meeting performance. We construct high-fidelity frameworks optimized for speed, security, and elite user experience using next-generation stack protocols.",
      features: ["Architecture Design", "Custom UI/UX", "Next.js Engineering"],
      color: "from-fuchsia-500/20 to-violet-700/20"
    },
    {
      id: "03",
      icon: <Cpu size={22} />,
      title: "Automation Setup",
      shortDesc: "AI & System integration.",
      fullDesc: "We integrate mission-critical AI chatbots and automated lead systems into your existing stack with clinical precision, ensuring 24/7 business operations.",
      features: ["AI Chatbot Tuning", "WhatsApp Automation", "Lead Flow Setup"],
      color: "from-violet-600/20 to-fuchsia-700/20"
    },
    {
      id: "04",
      icon: <Rocket size={22} />,
      title: "Launch & Optimization",
      shortDesc: "Zero-friction scaling.",
      fullDesc: "Clinical deployment and continuous optimization. We monitor global performance and conversion yield to ensure your digital ecosystem remains at peak dominance.",
      features: ["CI/CD Deployment", "Conversion Audit", "Lighthouse Tuning"],
      color: "border-violet-400/20 bg-violet-400/5"
    }
  ];

  return (
    <section id="process" className="py-12 bg-bg-dark relative overflow-hidden">
      {/* Cinematic Grid Base */}
      <div className="absolute inset-0 bg-grid-white/[0.02] mask-[radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-primary/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[0.9] text-white">
            Our Proven <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/20">Success Process.</span>
          </h2>
          <p className="text-sm md:text-base text-text-dim leading-relaxed max-w-xl font-medium opacity-60">
            A clear and efficient step-by-step approach to building high-quality digital products that grow your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch min-h-[600px]">
          {/* Phase Selector Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(i)}
                className={`group relative p-6 rounded-[2rem] text-left transition-all duration-500 overflow-hidden ${activeStep === i
                  ? 'bg-white/5 border-white/10 shadow-2xl scale-[1.02]'
                  : 'bg-transparent border-transparent opacity-40 hover:opacity-100'
                  } border`}
              >
                {/* Active Indicator Line */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-brand-primary transition-transform duration-500 ${activeStep === i ? 'scale-y-100' : 'scale-y-0'
                  }`} />

                <div className="flex items-center gap-6 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeStep === i ? 'bg-brand-primary text-white scale-110' : 'bg-white/5 text-white/40'
                    }`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-primary mb-1">Step 0{step.id}</div>
                    <div className="text-lg font-bold text-white tracking-tight">{step.title}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mission Control Display */}
          <div className="lg:col-span-8 relative">
            <div className="h-full rounded-5xl border border-white/10 bg-white/2 backdrop-blur-3xl p-10 lg:p-16 overflow-hidden relative group">
              {/* Internal Dynamic Glow */}
              <motion.div
                key={`glow-${activeStep}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`absolute inset-0 bg-linear-to-br ${steps[activeStep].color} opacity-[0.03]`}
              />

              {/* Industrial Schematic Accents */}
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <div className="text-[120px] font-black leading-none text-white select-none tracking-tighter">
                  0{steps[activeStep].id}
                </div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1"
                  >
                    <div className="flex items-center gap-4 mb-10">
                      <div className="px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-[9px] font-black text-brand-primary uppercase tracking-[0.3em]">
                        Current Focus
                      </div>
                      <div className="flex-1 h-px bg-white/5" />
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-8">
                      {steps[activeStep].title}
                    </h3>

                    <p className="text-lg md:text-2xl text-text-dim leading-relaxed mb-12 font-medium italic opacity-80">
                      &quot;{steps[activeStep].fullDesc}&quot;
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mt-auto">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-8 flex items-center gap-3">
                          <Cpu size={14} /> Key Deliverables
                        </div>
                        <div className="space-y-4">
                          {steps[activeStep].features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 group/item">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover/item:bg-brand-primary group-hover/item:scale-150 transition-all" />
                              <span className="text-[11px] font-black text-white/50 uppercase tracking-widest group-hover/item:text-white transition-colors">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="p-6 rounded-3xl bg-white/3 border border-white/5 hover:border-brand-primary/40 transition-all flex items-center gap-4 group/card">
                          <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary transition-transform group-hover/card:scale-110">
                            <ShieldCheck size={20} />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-white uppercase tracking-widest mb-0.5">Quality Assurance</div>
                            <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest">Always Verified</div>
                          </div>
                        </div>
                        <div className="p-6 rounded-3xl bg-white/3 border border-white/5 hover:border-brand-primary/40 transition-all flex items-center gap-4 group/card">
                          <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-500 transition-transform group-hover/card:scale-110">
                            <Zap size={20} />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-white uppercase tracking-widest mb-0.5">Fast Delivery</div>
                            <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest">optimized Speed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
