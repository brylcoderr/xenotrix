'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FolderCheck, Users, Globe } from 'lucide-react';

const WhyXenotrix = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    projects: 0,
    customers: 0,
    countries: 0,
  });

  useEffect(() => {
    const targets = {
      projects: 150,
      customers: 120,
      countries: 15,
    };

    if (inView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounts({
          projects: Math.floor(targets.projects * progress),
          customers: Math.floor(targets.customers * progress),
          countries: Math.floor(targets.countries * progress),
        });

        if (step >= steps) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const stats = [
    {
      icon: <FolderCheck className="w-10 h-10" />,
      count: counts.projects,
      label: 'Successful Projects',
      color: 'brand-primary',
    },
    {
      icon: <Users className="w-10 h-10" />,
      count: counts.customers,
      label: 'Elite Partners',
      color: 'fuchsia-500',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      count: counts.countries,
      label: 'Global Node Reach',
      color: 'violet-400',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-bg-deep relative overflow-hidden font-sans border-y border-white/5">
      {/* Particle Background Effect - Violet Calibrated */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="tag">Operational Metrics</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-[0.85]">
            Trusted by <br /><span className="text-brand-primary animate-gradient">Global Enterprise.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group lg:px-12"
            >
              <div className="text-center p-12 rounded-5xl border border-white/5 bg-white/2 backdrop-blur-3xl group-hover:bg-white/4 group-hover:border-brand-primary/20 transition-all duration-700">
                {/* Icon */}
                <div className={`text-${stat.color} mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100`}>
                  {stat.icon}
                </div>

                {/* Count */}
                <div className="mb-4">
                  <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                    {stat.count}+
                  </span>
                </div>

                {/* Label */}
                <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-4">
                  {stat.label}
                </p>
                
                <div className="text-[10px] text-text-dim/40 font-bold italic tracking-widest uppercase">Verified Deployment</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 max-w-2xl mx-auto p-10 rounded-4xl border border-white/10 bg-bg-dark/80 backdrop-blur-3xl shadow-2xl relative group"
        >
           <div className="absolute -top-3 left-10 px-4 py-1 bg-brand-primary text-bg-dark text-[8px] font-black uppercase tracking-[0.4em] rounded-full">System_Manifest</div>
           
           <div className="flex flex-col gap-3 font-mono text-[11px] tracking-tight">
             <div className="flex gap-4">
               <span className="text-brand-primary opacity-40">01</span>
               <span className="text-text-dim">const achievements = &#123;</span>
             </div>
             <div className="flex gap-4 ml-6">
               <span className="text-brand-primary opacity-40">02</span>
               <span className="text-text-dim">projects: <span className="text-brand-primary">{counts.projects}+</span>,</span>
             </div>
             <div className="flex gap-4 ml-6">
               <span className="text-brand-primary opacity-40">03</span>
               <span className="text-text-dim">partners: <span className="text-fuchsia-400">{counts.customers}+</span>,</span>
             </div>
             <div className="flex gap-4 ml-6">
               <span className="text-brand-primary opacity-40">04</span>
               <span className="text-text-dim">reach: <span className="text-violet-500">&apos;GLOBAL_{counts.countries}&apos;</span>,</span>
             </div>
             <div className="flex gap-4 ml-6">
               <span className="text-brand-primary opacity-40">05</span>
               <span className="text-text-dim">uptime: <span className="text-brand-primary">&apos;99.99%&apos;</span></span>
             </div>
             <div className="flex gap-4">
               <span className="text-brand-primary opacity-40">06</span>
               <span className="text-text-dim">&#125;;</span>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyXenotrix;
