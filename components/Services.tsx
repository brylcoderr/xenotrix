'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Layout, Brain, Cpu, Globe, Rocket, Shield, Lock, ArrowRight } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Infrastructure",
      shortTitle: "Infra",
      items: [
        { icon: <Layout size={20} />, name: "Elite Web Apps", desc: "Next.js Performance Portals" },
        { icon: <Smartphone size={20} />, name: "Mobile Units", desc: "Cross-platform iOS/Android" },
        { icon: <Globe size={20} />, name: "Cloud Strategy", desc: "Multi-region AWS architectures" }
      ]
    },
    {
      title: "Intelligence",
      shortTitle: "AI/Data",
      items: [
        { icon: <Brain size={20} />, name: "AI Strategy", desc: "LLM & Vector automation" },
        { icon: <Cpu size={20} />, name: "Automation", desc: "Custom back-office logic" },
        { icon: <Lock size={20} />, name: "Security", desc: "Hardened infrastructure" }
      ]
    },
    {
      title: "Optimization",
      shortTitle: "Growth",
      items: [
        { icon: <Rocket size={20} />, name: "Visibility", desc: "Technical SEO/GEO optimization" },
        { icon: <Shield size={20} />, name: "Managed Ops", desc: "24/7 mission-critical monitoring" },
        { icon: <ArrowRight size={20} />, name: "Custom Ops", desc: "Bespoke unique engineering" }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <div className="tech-label">Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">Specialized <span className="text-brand-primary italic">Engineering</span> For Growth.</h2>
            <p className="text-lg md:text-xl text-text-dim leading-relaxed">
              We architect and deploy technical solutions that solve complex business logic with sub-second precision.
            </p>
          </div>
        </div>

        {/* Mobile Tabbed View */}
        <div className="lg:hidden mb-12">
           <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 mb-8">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 py-3 text-[10px] font-mono font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === i ? 'bg-brand-primary text-white shadow-lg' : 'text-white/40'}`}
                >
                  {cat.shortTitle}
                </button>
              ))}
           </div>

           <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="glass-panel p-8 min-h-[400px]"
              >
                 <h3 className="font-mono text-[10px] text-brand-primary font-bold mb-10 flex items-center gap-3">
                   <span className="w-6 h-px bg-brand-primary/30" />
                   {categories[activeTab].title}
                 </h3>
                 <div className="space-y-8">
                    {categories[activeTab].items.map((item, i) => (
                      <div key={i} className="group cursor-default">
                        <div className="flex items-center gap-4 mb-2">
                           <div className="text-brand-primary">
                             {item.icon}
                           </div>
                           <h4 className="font-bold text-lg">{item.name}</h4>
                        </div>
                        <p className="text-xs text-text-dim pl-9 leading-relaxed uppercase tracking-tighter opacity-70">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                 </div>
              </motion.div>
           </AnimatePresence>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-12 transition-all duration-500 hover:border-brand-primary/20"
            >
              <h3 className="font-mono text-[10px] text-brand-primary font-bold mb-12 flex items-center gap-3">
                <span className="w-6 h-px bg-brand-primary/30" />
                {cat.title}
              </h3>
              <div className="space-y-10">
                {cat.items.map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-center gap-5 mb-3">
                      <div className="text-brand-primary group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-xl">{item.name}</h4>
                    </div>
                    <p className="text-base text-text-dim pl-10 leading-relaxed uppercase tracking-tighter opacity-70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
