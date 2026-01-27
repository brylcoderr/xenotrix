'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import { motion } from 'framer-motion';
import { Globe, Cpu, Lock } from 'lucide-react';

export default function ServicesPage() {
  const capabilities = [
    {
      icon: <Globe size={24} />,
      title: "Global Infrastructure",
      desc: "Distributed cloud systems, multi-region failover, and edge-computing architectures that ensure 99.99% uptime for global teams."
    },
    {
      icon: <Cpu size={24} />,
      title: "AI & Intelligence",
      desc: "Native integration of Large Language Models (LLMs), custom RAG pipelines, and automated vector-database logic."
    },
    {
      icon: <Lock size={24} />,
      title: "Security Protocols",
      desc: "Enterprise-grade hardening, Zero-Knowledge encryption, and strict HIPAA/GDPR compliance engineering."
    }
  ];

  return (
    <main className="min-h-screen bg-bg-dark text-white">
      <Navigation />
      
      <div className="pt-32">
        <div className="section-container pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="tech-label">Our Capabilities</div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 md:mb-10 tracking-tighter">Technical <br />Specialization.</h1>
            <p className="text-lg md:text-xl text-text-dim leading-relaxed font-medium">
              We operate at the intersection of high-performance engineering and strategic digital architecture. Our team deploys the code that powers industry leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24">
             {capabilities.map((cap, i) => (
                <div key={i} className="glass-panel p-8 md:p-10 border-white/5 bg-white/1 transition-all duration-500 hover:border-brand-primary/20">
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-6 md:mb-8">
                      {cap.icon}
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{cap.title}</h3>
                   <p className="text-text-dim text-xs md:text-sm leading-relaxed">{cap.desc}</p>
                </div>
             ))}
          </div>
        </div>
        
        <Services />

        <div className="section-container py-24 md:py-32 border-t border-white/5">
           <div className="glass-panel p-10 md:p-20 bg-brand-primary/5 border-brand-primary/20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
              <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-[1.1]">Need a custom <br /><span className="text-brand-primary">Engineering Audit?</span></h2>
                  <p className="text-base md:text-lg text-text-dim leading-relaxed font-medium">
                     We provide deep-dive technical reviews for existing infrastructures to identify bottlenecks and security vulnerabilities.
                  </p>
              </div>
              <button className="btn-tech whitespace-nowrap">INITIATE_AUDIT_v4</button>
           </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
