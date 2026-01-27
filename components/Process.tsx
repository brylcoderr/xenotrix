'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import NextImage from 'next/image';

const Process = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Discovery",
      desc: "Deep-dive technical audits to define the engineering roadmap and project core.",
      label: "01",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      protocol: "AUDIT_V4"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Strategy",
      desc: "Crafting technical specifications and the architectural blueprint.",
      label: "02",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      protocol: "BLUEPRINT_X"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Design",
      desc: "Visualizing the solution with a focus on elite UX and high-performance UI.",
      label: "03",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
      protocol: "UX_FLOW_PRO"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Development",
      desc: "Building the core engine and frontend with clean, modular patterns.",
      label: "04",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      protocol: "GIT_OPS_PRIMARY"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "QA & Hardening",
      desc: "Rigorous security audits and performance stress-testing.",
      label: "05",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      protocol: "STRESS_TEST_V2"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch",
      desc: "Zero-downtime global deployment to production environments.",
      label: "06",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
      protocol: "GLOBAL_SHIP"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "LTS Support",
      desc: "Long-term technical support and continuous system optimization.",
      label: "07",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      protocol: "LTS_STABLE"
    }
  ];

  const next = () => {
    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden bg-bg-dark">
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/2 blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="tech-label">Our Pipeline</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8">
              Systematic <span className="text-brand-primary">Shipment</span>.
            </h2>
            <p className="text-text-dim text-lg md:text-xl leading-relaxed">
              Our systematic approach ensures every deployment is optimized for stability, performance, and long-term business scale.
            </p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prev}
              disabled={currentIndex === 0}
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0 
                ? 'border-white/5 text-white/10' 
                : 'border-white/10 text-white hover:border-brand-primary hover:text-brand-primary cursor-pointer'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              disabled={currentIndex === steps.length - 1}
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                currentIndex === steps.length - 1 
                ? 'border-white/5 text-white/10' 
                : 'border-white/10 text-white hover:border-brand-primary hover:text-brand-primary cursor-pointer'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <motion.div 
            animate={{ x: `-${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 100 : 25)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="flex gap-4 md:gap-6"
          >
            {steps.map((step, index) => (
              <div 
                key={index}
                className="min-w-[75%] md:min-w-[calc(25%-18px)] shrink-0 flex flex-col"
              >
                <div className="glass-panel p-1.5 h-full flex flex-col group hover:border-brand-primary/40 transition-all duration-700">
                  <div className="relative h-40 w-full shrink-0 rounded-lg overflow-hidden mb-4 border border-white/5 bg-white/2">
                    <NextImage 
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                      sizes="(max-width: 768px) 75vw, (max-width: 1200px) 25vw, 300px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    <div className="absolute top-3 right-3 font-mono text-[9px] bg-bg-dark/80 backdrop-blur-md px-2 py-1 rounded-md border border-white/5 text-brand-primary z-10">
                       {step.protocol}
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex flex-col grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                        {step.icon}
                      </div>
                      <span className="font-mono text-[10px] font-bold text-white/20 tracking-widest">{step.label}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-text-dim text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                      {step.desc}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-[9px] font-mono font-bold tracking-widest text-brand-primary/60 group-hover:text-brand-primary transition-colors duration-500">
                       <span className="w-6 h-px bg-brand-primary/30 group-hover:w-10 transition-all duration-500" />
                       EXPLORE
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mt-16 w-full h-px bg-white/5 relative">
           <motion.div 
             animate={{ width: `${((currentIndex + 1) / steps.length) * 100}%` }}
             className="absolute top-0 left-0 h-full bg-brand-primary shadow-[0_0_15px_rgba(79,70,229,0.5)]"
           />
        </div>
      </div>
    </section>
  );
};

export default Process;
