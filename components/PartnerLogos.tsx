'use client';

import { motion } from 'framer-motion';

const PartnerLogos = () => {
  const partners = [
    "AWS_PARTNER", "MICROSOFT_CLOUDS", "REDISH_CORE", "DOCKER_ELITE", "TERRA_SYS", "POSTGRE_SQL"
  ];

  return (
    <section className="py-12 border-y border-white/4 bg-surface/10">
      <div className="section-container">
        <div className="flex flex-wrap justify-between items-center gap-x-12 gap-y-8">
           <p className="text-[10px] font-mono font-bold text-text-dim uppercase tracking-[0.3em] w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
             Infrastructure Partners
           </p>
           
            <div className="flex flex-wrap justify-center md:justify-end flex-1 gap-x-12 gap-y-8 items-center opacity-40">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="font-mono text-[11px] font-black tracking-[0.2em] text-white/80 hover:text-brand-primary transition-all duration-300 cursor-default uppercase"
                >
                  {partner.replace('_', ' ')}
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
