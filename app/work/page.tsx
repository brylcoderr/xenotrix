 'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import { motion } from 'framer-motion';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white">
      <Navigation />
      
      <div className="pt-32">
        <div className="section-container pb-20 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="tech-label">Portfolio Archive</div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Selected <br />Deployments.</h1>
            <p className="text-lg md:text-xl text-text-dim max-w-2xl leading-relaxed font-medium">
              Explore our full history of mission-critical engineering. From fintech infrastructure to AI-native products, we build for high-stakes environments.
            </p>
          </motion.div>
        </div>
        
        <Projects />
      </div>

      <Footer />
    </main>
  );
}
