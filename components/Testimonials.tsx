'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import NextImage from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const reviews = [
    {
      company: "Ensaar Global",
      role: "CEO",
      sector: "System Architecture",
      quote: "Xenotrix played a pivotal role in architecting Genesiv. Their deep understanding of full-stack scalability helped us deliver an elite platform ahead of schedule.",
      result: "99.9% Uptime",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      company: "Genesiv",
      role: "CTO",
      sector: "Cloud Infrastructure",
      quote: "Working with Xenotrix was a game-changer. They transformed our vision into a robust, user-friendly platform with unmatched technical precision.",
      result: "Global Scale",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      company: "Fluid",
      role: "Director of Product",
      sector: "Product Development",
      quote: "The team delivered an exceptional mobile application for Fluid. Their ability to translate complex requirements into smooth UX is remarkable.",
      result: "4.9★ Rating",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      company: "NexGen Systems",
      role: "Head of Engineering",
      sector: "Cybersecurity",
      quote: "Their knowledge of cloud-native infrastructure is second to none. They migrated our legacy systems with zero downtime and improved performance by 2x.",
      result: "Zero Breach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      company: "Solaris Tech",
      role: "Founder",
      sector: "FinTech Logic",
      quote: "XenotriX doesn't just write code; they think about the business logic. A true technical partner for any high-growth startup environment.",
      result: "Secure Ops",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1974&auto=format&fit=crop"
    },
    {
      company: "Orbit AI",
      role: "Lead Architect",
      sector: "ML Pipeline",
      quote: "I can attest to their commitment to quality. They build with the end-user in mind, delivering stable features that make the QA process seamless.",
      result: "AI Ready",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
    }
  ];


  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (reviews.length - 2));
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, reviews.length]);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-bg-dark border-y border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent_70%)] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="tech-label mb-6">Strategic Validation</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight">
               Proven <span className="text-brand-primary">Shipments</span>.
            </h2>
            <p className="text-text-dim text-lg leading-relaxed font-light">
              Engineering impact reports from global partners validating our technical rigor.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-xl border border-white/10 text-white hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % (reviews.length - 2))}
              className="w-12 h-12 rounded-xl border border-white/10 text-white hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: `-${currentIndex * (100 / (typeof window !== 'undefined' ? (window.innerWidth < 768 ? 1 : (window.innerWidth < 1024 ? 2 : 3)) : 3))}%` }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="flex -mx-2 md:-mx-3"
            >
              {reviews.map((rev, index) => (
                <div 
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 md:px-3 flex"
                >
                  <div className="glass-panel p-5 md:p-8 w-full flex flex-col relative border-white/5 bg-white/2 hover:bg-white/4 hover:border-brand-primary/30 transition-all duration-500 group">
                    {/* Corner Tag */}
                    <div className="absolute top-0 right-0 p-4">
                       <div className="flex gap-0.5">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} size={10} className="fill-brand-primary text-brand-primary shadow-glow-primary" />
                         ))}
                       </div>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                       <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0 group-hover:border-brand-primary/50 transition-colors duration-500">
                        <NextImage 
                          src={rev.image} 
                          alt={rev.company}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-base text-white tracking-tight truncate">{rev.company}</h4>
                        <div className="flex items-center gap-2">
                           <span className="text-[10px] font-mono text-brand-primary font-bold uppercase tracking-widest">{rev.role}</span>
                           <div className="w-1 h-1 rounded-full bg-white/10" />
                           <p className="text-[9px] font-mono text-text-dim uppercase tracking-widest truncate">{rev.sector}</p>
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-sm leading-relaxed text-white/70 font-medium italic mb-6 grow relative">
                      &quot;{rev.quote}&quot;
                    </blockquote>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[7px] font-mono text-text-dim uppercase tracking-tighter mb-0.5">Result Protocol</span>
                        <span className="text-[11px] font-bold text-white tracking-tight">{rev.result}</span>
                      </div>
                      <div className="w-6 h-6 rounded-md bg-brand-primary/10 flex items-center justify-center shrink-0">
                        <div className="w-1 h-1 rounded-full bg-brand-primary animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Global Progress */}
        <div className="mt-16 flex items-center gap-8">
          <div className="grow h-px bg-white/5 relative">
            <motion.div 
              animate={{ width: `${((currentIndex + 1) / (reviews.length - 2)) * 100}%` }}
              className="absolute top-0 left-0 h-full bg-brand-primary shadow-[0_0_10px_#4f46e5]"
            />
          </div>
          <div className="font-mono text-[10px] text-text-dim tracking-widest">
            LOG::{String(currentIndex + 1).padStart(2, '0')} / {String(reviews.length - 2).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
