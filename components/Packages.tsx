'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Shield, Zap, Globe, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Packages = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to the popular middle one

  const plans = [
    {
      name: "MVP_LAUNCH",
      price: "$4,900",
      duration: "4 Weeks",
      desc: "Ideal for startups needing a high-performance prototype to secure funding or validate market-fit.",
      features: [
        "Native Mobile or Web App",
        "Cloud Infrastructure Setup",
        "Core Feature Engineering",
        "Basic SEO Optimization",
        "2 Weeks Post-Launch Support"
      ],
      icon: <Zap size={24} />,
      popular: false
    },
    {
      name: "ENTERPRISE_SCALE",
      price: "$12,500",
      duration: "8-12 Weeks",
      desc: "Comprehensive engineering for established businesses looking to migrate or scale their digital infrastructure.",
      features: [
        "Modular Architecture",
        "Advanced AI Integration",
        "Enterprise Security",
        "Automated CI/CD",
        "99.9% Uptime SLA",
        "Dedicated Engineer"
      ],
      icon: <Globe size={24} />,
      popular: true
    },
    {
      name: "AI_CUSTOM_OPS",
      price: "CUSTOM",
      duration: "Variable",
      desc: "Specialized boutique solutions focusing on LLM architecture, robotic process automation, and vector intelligence.",
      features: [
        "LLM Fine-tuning",
        "Vector DB Integration",
        "Workflow Automation",
        "Data Intelligence",
        "Private Node Deploy",
        "On-Premise Capability"
      ],
      icon: <Shield size={24} />,
      popular: false
    }
  ];

  const nextPlan = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  const prevPlan = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <section id="packages" className="py-24 md:py-32 relative bg-white/2 overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="tech-label mx-auto justify-center">Deployment Tiers</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">Engineering <span className="text-brand-primary">Packages</span>.</h2>
          <p className="text-text-dim text-base md:text-lg">Transparent pricing for elite engineering. Choose the plan that fits your mission parameters.</p>
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={`glass-panel p-8 flex flex-col relative overflow-visible ${plans[currentIndex].popular ? 'border-brand-primary/40 shadow-[0_0_40px_rgba(79,70,229,0.1)]' : ''}`}
            >
              {plans[currentIndex].popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-primary text-white text-[10px] font-bold font-mono px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg">
                  MOST_DEPLOYED
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${plans[currentIndex].popular ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white/5 text-brand-primary border-white/10'}`}>
                  {plans[currentIndex].icon}
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-mono text-text-dim mb-1 uppercase tracking-widest">{plans[currentIndex].duration}</p>
                  <p className="text-xl font-black tracking-tighter">{plans[currentIndex].price}</p>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3 font-mono tracking-tight">{plans[currentIndex].name}</h3>
              <p className="text-xs text-text-dim leading-relaxed mb-8 min-h-[4rem]">
                {plans[currentIndex].desc}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10 flex-1">
                {plans[currentIndex].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check size={14} className="text-brand-primary mt-0.5 shrink-0" />
                    <span className="text-[10px] font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/#contact"
                className={`w-full py-4 rounded-xl font-bold font-mono text-[10px] text-center transition-all duration-500 ${plans[currentIndex].popular ? 'bg-white text-bg-dark hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'bg-white/5 border border-white/10 hover:border-white/30'}`}
              >
                INITIALIZE_PROJECT
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8 px-4">
             <button onClick={prevPlan} className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-brand-primary">
                <ArrowLeft size={20} />
             </button>
             <div className="flex gap-2">
                {plans.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-brand-primary' : 'w-2 bg-white/10'}`} />
                ))}
             </div>
             <button onClick={nextPlan} className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-brand-primary">
                <ArrowRight size={20} />
             </button>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 md:gap-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass-panel p-10 flex flex-col relative overflow-visible ${plan.popular ? 'border-brand-primary/40 shadow-[0_0_40px_rgba(79,70,229,0.1)]' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-primary text-white text-[10px] font-bold font-mono px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg">
                  MOST_DEPLOYED
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${plan.popular ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white/5 text-brand-primary border-white/10'}`}>
                  {plan.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-text-dim mb-1 uppercase tracking-widest">{plan.duration}</p>
                  <p className="text-2xl font-black tracking-tighter">{plan.price}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 font-mono tracking-tight">{plan.name}</h3>
              <p className="text-sm text-text-dim leading-relaxed mb-10 min-h-[4rem]">
                {plan.desc}
              </p>

              <div className="grid grid-cols-1 gap-y-3 mb-12 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={14} className="text-brand-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/#contact"
                className={`w-full py-5 rounded-2xl font-bold font-mono text-sm text-center transition-all duration-500 ${plan.popular ? 'bg-white text-bg-dark hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'bg-white/5 border border-white/10 hover:border-white/30'}`}
              >
                INITIALIZE_PROJECT
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
