'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="tech-label mx-auto justify-center">Agency Manifesto</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Built for those who <span className="text-brand-primary italic">demand</span> technical perfection.
          </h2>
          <p className="text-xl text-text-dim leading-relaxed">
            XenotriX isn&apos;t just a development shop. We are a technical partner for ambitious teams, providing the engineering depth required to disrupt markets and scale systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {[
            { label: "FOUNDED", value: "2019" },
            { label: "DEPLOYMENTS", value: "150+" },
            { label: "EFFICIENCY", value: "≈ 400%" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 md:p-12 glass-panel border-white/5 bg-white/2 hover:bg-white/4 transition-colors duration-500"
            >
              <p className="text-[10px] font-mono text-brand-primary uppercase tracking-[0.3em] mb-4">{stat.label}</p>
              <p className="text-5xl font-black tracking-tighter text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
