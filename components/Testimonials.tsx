'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      content: "XenotriX architecture is a masterpiece of efficiency. Their team's deep understanding of system design helped us deploy a highly scalable platform that far exceeds our performance benchmarks.",
      author: "Rob Gudipudi",
      role: "CTO, Ensaar Global",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      content: "Integrating XenotriX into our core workflow was a game-changer. They transformed our vision into a robust, high-performance ecosystem. Their technical precision is unparalleled.",
      author: "Desmond Leong",
      role: "CEO, Genesiv",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      content: "The XenotriX team delivered an exceptional interface that feels alive. Their ability to translate complex logic into a seamless, performant user experience is why they are our premier digital partner.",
      author: "Steve Conman",
      role: "Product Manager, Fluid",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      content: "XenotriX builds with absolute integrity. Every implementation is stable, well-tested, and optimized for maximum uptime, making our deployment cycles incredibly smooth.",
      author: "Ritika Nihara",
      role: "QA Engineer, Genesiv",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      content: "XenotriX transformed our legacy infrastructure into a high-performance ecosystem. Their engineering expertise is unparalleled in the industry.",
      author: "Michael Chen",
      role: "CTO, Global Finance Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      content: "The level of precision and strategic depth they brought to our AI initiative was game-changing. Truly a premier digital partner.",
      author: "Sarah Jenkins",
      role: "VP Innovation, MedTech Group",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      content: "Seamless deployment and incredible attention to detail. Our leads increased by 12X within the first quarter of shifting to their OS.",
      author: "David Rodriguez",
      role: "CEO, V-Properties",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <section className="py-16 md:py-32 relative bg-bg-dark overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="tag mb-4">Client Reviews</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.85] text-white">
              Voices of <span className="text-brand-primary">Success.</span>
            </h2>
          </div>
          
          <div className="flex gap-4 justify-center md:justify-end">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-brand-primary/50 transition-all active:scale-90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-brand-primary/50 transition-all active:scale-90"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          className="relative px-4 md:px-0"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="flex gap-8 transition-transform duration-500 ease-in-out">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              >
                {[0, 1, 2].map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length;
                  const testimonial = testimonials[index];
                  // Hide extra cards on smaller screens
                  const visibilityClass = offset === 1 ? 'hidden md:block' : offset === 2 ? 'hidden lg:block' : 'block';
                  
                  return (
                    <div
                      key={`${index}-${offset}`}
                      className={`premium-card p-10 relative group ${visibilityClass}`}
                    >
                      <div className="absolute top-10 right-10 text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-brand-primary/10">
                        <Quote size={80} />
                      </div>
                      
                      <div className="flex mb-6 gap-0.5">
                         {[...Array(5)].map((_, j) => (
                           <Star key={j} size={12} className="text-brand-primary fill-brand-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                         ))}
                      </div>

                      <p className="text-lg text-white font-medium italic relative z-10 mb-10 leading-relaxed opacity-90">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-brand-primary/40 transition-colors">
                          <Image 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-white tracking-tight">{testimonial.author}</h4>
                          <p className="text-[10px] text-brand-primary uppercase tracking-[0.3em] font-black">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-2 justify-center mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  currentIndex === i ? 'w-8 bg-brand-primary' : 'bg-white/10 hover:bg-white/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

