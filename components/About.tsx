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

        <div className="grid grid-cols-3 gap-2 md:gap-8">
          {[
            { label: "FOUNDED", value: "2019" },
            { label: "DEPLOYMENTS", value: "150+" },
            { label: "EFFICIENCY", value: "≈ 400%" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 md:p-8 glass-panel border-none bg-white/2"
            >
              <p className="text-[8px] md:text-[10px] font-mono text-brand-primary uppercase tracking-widest mb-1 md:mb-3">{stat.label}</p>
              <p className="text-xl md:text-5xl font-black tracking-tighter">{stat.value}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
