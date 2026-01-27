'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Process from '@/components/Process';
import { motion } from 'framer-motion';

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white">
      <Navigation />
      
      <div className="pt-32">
        <div className="section-container pb-24 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="tech-label">Operational Framework</div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 md:mb-10 tracking-tighter">Engineered <br />Delivery.</h1>
            <p className="text-lg md:text-xl text-text-dim leading-relaxed font-medium">
              Our pipeline is optimized for speed without sacrificing engineering integrity. We follow a strict architectural protocol that ensures every shipment is battle-tested.
            </p>
          </motion.div>
        </div>
        
        <Process />
      </div>

      <Footer />
    </main>
  );
}
