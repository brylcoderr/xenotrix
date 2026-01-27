'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    { label: "PRECISION", desc: "No room for error in mission-critical environments." },
    { label: "VELOCITY", desc: "Shipping state-of-the-art products at edge speed." },
    { label: "SCALE", desc: "Architectures designed for tomorrow's traffic." }
  ];

  return (
    <main className="min-h-screen bg-bg-dark text-white">
      <Navigation />
      
      <div className="pt-32">
        <div className="section-container pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="tech-label">The Agency</div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 md:mb-10 tracking-tighter">Engineers <br />At Our Core.</h1>
            <p className="text-xl md:text-2xl text-text-dim leading-relaxed font-medium">
              XenotriX was founded by engineers who believe that high-growth companies shouldn&apos;t be bottlenecked by legacy architecture.
            </p>
          </motion.div>

          {/* Stats / Culture */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-24 py-12 md:py-16 border-y border-white/5">
             {values.map((v, i) => (
                <div key={i}>
                   <p className="font-mono text-[10px] text-brand-primary tracking-[0.4em] mb-4 uppercase">{v.label}</p>
                   <p className="text-lg md:text-xl font-bold text-white/90">{v.desc}</p>
                </div>
             ))}
          </div>
        </div>
        
        <About />

        <div className="section-container py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
             <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 md:mb-8 tracking-tighter">Manifesto <br />v4.0.0</h2>
                <div className="space-y-6 text-lg md:text-xl text-text-dim leading-relaxed">
                   <p>
                      We don&apos;t believe in &quot;good enough&quot; deployments. In a world where sub-second latency determines market winners, we build for the extremes.
                   </p>
                   <p>
                      Every line of code we ship is an asset for your business. Every infrastructure we deploy is a fortress for your data.
                   </p>
                </div>
             </div>
             <div className="glass-panel p-1 border-white/10 bg-white/2 overflow-hidden rounded-[2.5rem]">
                <div className="bg-bg-dark p-8 md:p-12 font-mono text-[11px] md:text-sm leading-relaxed text-white/40">
                   <p><span className="text-brand-primary">class</span> <span className="text-white">XenotriX</span> &#123;</p>
                   <p className="pl-6"><span className="text-brand-primary">constructor</span>() &#123;</p>
                   <p className="pl-12">this.precision = <span className="text-brand-secondary">100</span>;</p>
                   <p className="pl-12">this.mission = <span className="text-brand-secondary">&quot;Unstoppable_Growth&quot;</span>;</p>
                   <p className="pl-6">&#125;</p>
                   <p className="pl-6">&nbsp;</p>
                   <p className="pl-6"><span className="text-brand-primary">async</span> ship(infrastructure) &#123;</p>
                   <p className="pl-12">await infrastructure.harden();</p>
                   <p className="pl-12">await infrastructure.scale();</p>
                   <p className="pl-12">return <span className="text-brand-primary">true</span>;</p>
                   <p className="pl-6">&#125;</p>
                   <p>&#125;</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
