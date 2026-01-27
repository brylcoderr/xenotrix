'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FolderCheck, Users, Globe } from 'lucide-react';

const WhyXenotrix = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    projects: 0,
    customers: 0,
    countries: 0,
  });

  const targets = {
    projects: 150,
    customers: 120,
    countries: 15,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounts({
          projects: Math.floor(targets.projects * progress),
          customers: Math.floor(targets.customers * progress),
          countries: Math.floor(targets.countries * progress),
        });

        if (step >= steps) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView, targets.projects, targets.customers, targets.countries]);

  const stats = [
    {
      icon: <FolderCheck className="w-12 h-12" />,
      count: counts.projects,
      label: 'Successful Projects',
      color: 'primary',
    },
    {
      icon: <Users className="w-12 h-12" />,
      count: counts.customers,
      label: 'Happy Customers',
      color: 'secondary',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      count: counts.countries,
      label: 'Countries',
      color: 'accent',
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-bg-deep relative overflow-hidden">
      {/* Particle Background Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-text-muted mb-4">
            {/* ===== WHY BRANDS LOVE XENOTRIX ===== */}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold">
            Trusted by <span className="text-gradient">Businesses Worldwide</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="card-code text-center p-8">
                {/* Icon */}
                <div className={`text-${stat.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Count */}
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-mono font-bold text-gradient">
                    {stat.count}+
                  </span>
                </div>

                {/* Label */}
                <p className="text-text-muted font-mono text-sm">
                  {stat.label}
                </p>

                {/* Connection Lines */}
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary opacity-30" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto terminal p-6"
        >
          <p className="terminal-line font-mono text-sm">
            const achievements = &#123;
          </p>
          <p className="terminal-line font-mono text-sm ml-4">
            projects: <span className="text-primary">{counts.projects}+</span>,
          </p>
          <p className="terminal-line font-mono text-sm ml-4">
            customers: <span className="text-secondary">{counts.customers}+</span>,
          </p>
          <p className="terminal-line font-mono text-sm ml-4">
            countries: <span className="text-accent">{counts.countries}+</span>,
          </p>
          <p className="terminal-line font-mono text-sm ml-4">
            satisfaction: <span className="text-primary">&apos;100%&apos;</span>
          </p>
          <p className="terminal-line font-mono text-sm">
            &#125;;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyXenotrix;
