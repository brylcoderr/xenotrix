'use client';

import { motion } from 'framer-motion';
import { Layers, Zap, Search, Shield } from 'lucide-react';

const HowWeThink = () => {
  const principles = [
    {
      icon: <Layers size={22} />,
      title: "Modular Architecture",
      desc: "We build systems as a collection of independent modules. This ensures agility, scalability, and easy maintenance as your business grows.",
      color: "border-brand-primary/20 bg-brand-primary/5"
    },
    {
      icon: <Zap size={22} />,
      title: "Performance First",
      desc: "Every millisecond counts. Our engineering focuses on optimized rendering, asset delivery, and backend efficiency for sub-second responses.",
      color: "border-brand-secondary/20 bg-brand-secondary/5"
    },
    {
      icon: <Search size={22} />,
      title: "Strategic Discovery",
      desc: "We don't code blind. Every project starts with deep technical discovery to align the right technology with your specific business goals.",
      color: "border-white/10 bg-white/5"
    },
    {
      icon: <Shield size={22} />,
      title: "Secure by Design",
      desc: "Security isn't a plugin. It's woven into every layer of our stack, from data encryption to edge-level protection and compliance.",
      color: "border-emerald-400/20 bg-emerald-400/5"
    }
  ];

  return (
    <section id="how-we-think" className="py-24 bg-surface/30 border-y border-white/4">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 sticky top-32 h-fit">
            <div className="tech-label">The Methodology</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-white leading-[0.85]">Our Philosophy <br /><span className="text-brand-primary">To Innovation.</span></h2>
            <p className="text-lg text-text-dim leading-relaxed mb-8 font-medium opacity-80">
              We approach digital production with a surgical mindset. Our methodology is refined over hundreds of deployments to ensure predictable, elite-level results.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary opacity-60">
                <div className="w-8 h-px bg-brand-primary" />
                Agile Sprints
              </div>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary opacity-60">
                <div className="w-8 h-px bg-brand-primary" />
                Continuos Integration
              </div>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary opacity-60">
                <div className="w-8 h-px bg-brand-primary" />
                Quality Assurance
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-10 rounded-4xl border ${p.color} hover:-translate-y-2 transition-all duration-700 group backdrop-blur-3xl`}
              >
                <div className="w-12 h-12 rounded-2xl bg-bg-dark flex items-center justify-center text-white mb-8 border border-white/10 group-hover:border-brand-primary/40 group-hover:text-brand-primary transition-all duration-500">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{p.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeThink;
