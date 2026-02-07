'use client';

import { motion } from 'framer-motion';
import { AppWindow, Smartphone, Cpu, Cloud, ShieldCheck, BarChart, ChevronRight, Target, Activity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <AppWindow size={28} />,
      title: "Enterprise Web Systems",
      desc: "We construct robust, high-availability web ecosystems using next-generation architectural patterns for mission-critical performance.",
      metrics: "Load Time: < 0.8s",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: <Smartphone size={28} />,
      title: "Native Mobile Infrastructure",
      desc: "Engineered for elite user engagement. We build seamless, high-performance mobile products that dominate their market sector.",
      metrics: "Crash-Free Rate: 99.9%",
      color: "from-teal-500/20 to-emerald-600/20"
    },
    {
      icon: <Cpu size={28} />,
      title: "Advanced AI & Neural Logic",
      desc: "Deployment of custom LLM pipelines and predictive neural networks to automate complex operations and unlock strategic foresight.",
      metrics: "Inference Latency: < 20ms",
      color: "from-emerald-600/20 to-green-500/20"
    },
    {
      icon: <Cloud size={28} />,
      title: "Elastic Cloud Orchestration",
      desc: "Multi-region cloud infrastructure designed for absolute resilience, zero-downtime scaling, and global edge delivery.",
      metrics: "Availability: 99.99%",
      color: "from-green-500/20 to-teal-400/20"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Hardened Cyber Security",
      desc: "Clinical security audits and architectural hardening to ensure your digital ecosystem remains impenetrable and compliant.",
      metrics: "Threat Level: Neutralized",
      color: "from-teal-400/20 to-emerald-500/20"
    },
    {
      icon: <BarChart size={28} />,
      title: "Strategic Growth Engineering",
      desc: "Data-driven optimization protocols that leverage advanced analytics to scale your engagement and compound business value.",
      metrics: "Avg ROI Yield: 12X",
      color: "from-emerald-500/20 to-indigo-500/20"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 relative bg-bg-dark overflow-hidden">
      {/* Cinematic Background Engine */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[150px] opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-end mb-24">
          <div className="lg:col-span-8">
            <span className="tag">Our Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.85] text-white">
              Hardened <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-400 to-emerald-600 animate-gradient">Digital Solutions.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-dim leading-tight max-w-xl font-medium opacity-80">
              We provide the architectural foundation for the world&apos;s most ambitious digital products, engineered for absolute scale and reliability.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="relative group">
               <div className="absolute inset-0 bg-brand-primary/20 rounded-4xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-20" />
               <div className="relative flex items-center gap-6 p-6 rounded-4xl bg-white/2 border border-white/10 backdrop-blur-3xl">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <Activity size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-1">Status: Active</div>
                    <div className="text-base font-bold text-white tracking-tight">System_Ready_v2.0</div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Mobile Carousel View */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-8 px-4 -mx-4">
              {services.map((service, i) => (
                <div key={i} className="min-w-[85vw] snap-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="premium-card p-8 group relative overflow-hidden flex flex-col min-h-[460px] cursor-default border-white/5 hover:border-brand-primary/20 transition-all duration-700 h-full"
                  >
                    <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                    <div className="relative z-10 flex-1">
                      <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 shadow-2xl group-hover:bg-brand-primary group-hover:text-bg-dark transition-all duration-700">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 tracking-tighter text-white group-hover:text-brand-primary transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-base text-text-dim leading-snug font-medium mb-8 group-hover:text-white/80 transition-colors duration-500">
                        {service.desc}
                      </p>
                    </div>
                    <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                       <div>
                          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40 mb-2 flex items-center gap-2">
                             <Target size={12} />
                             Operational Yield
                          </div>
                          <div className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                             {service.metrics}
                          </div>
                       </div>
                       <div className="w-10 h-10 rounded-full bg-white/2 border border-white/5 flex items-center justify-center text-white/10">
                          <ChevronRight size={20} />
                       </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {services.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
              ))}
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="premium-card p-10 group relative overflow-hidden flex flex-col min-h-[420px] cursor-default border-white/5 hover:border-brand-primary/20 transition-all duration-700"
              >
                {/* Dynamic Aura Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/2 rounded-full blur-3xl group-hover:bg-brand-primary/5 transition-colors duration-700" />
                
                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 rounded-4xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-10 shadow-2xl group-hover:bg-brand-primary group-hover:text-bg-dark group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-2xl font-bold mb-4 tracking-tighter text-white group-hover:text-brand-primary transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-text-dim leading-snug font-medium mb-10 group-hover:text-white/80 transition-colors duration-500">
                    {service.desc}
                  </p>
                </div>
  
                <div className="relative z-10 pt-8 border-t border-white/5 flex items-center justify-between">
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary/40 mb-2 flex items-center gap-2">
                         <Target size={12} />
                         Operational Yield
                      </div>
                      <div className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-primary transition-colors">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                         {service.metrics}
                      </div>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-white/2 border border-white/5 flex items-center justify-center text-white/10 group-hover:text-brand-primary group-hover:border-brand-primary/50 group-hover:bg-brand-primary/10 transition-all duration-500">
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
