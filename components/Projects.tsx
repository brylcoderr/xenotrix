'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck, Sparkles, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      title: "FinTech Infrastructure Modernization",
      client: "Ensaar Global",
      category: "Critical Systems",
      slug: "finscale-platform",
      description: "A complete architectural overhaul of core banking systems to support ultra-low latency transaction processing and multi-region resilience.",
      image: "/images/finscale_hero.png",
      tags: ["High-Availability", "Cloud Native", "FinSec"],
      results: "99.999% Uptime Protocol",
      impact: "Zero Critical Failures",
      icon: <ShieldCheck className="text-emerald-400" size={18} />
    },
    {
      title: "AutoQuery Engine Deployment",
      client: "Global SaaS Entity",
      category: "Edge Analytics",
      slug: "autoquery-engine",
      description: "AI-native knowledge retrieval and automated response engine for high-volume enterprise support environments with mission-critical speed.",
      image: "/images/autoquery_hero.png",
      tags: ["AI-Native", "Real-Time", "Support"],
      results: "72% Automation Rate",
      impact: "Zero Human Latency",
      icon: <Target className="text-teal-400" size={18} />
    },
    {
      title: "Katachi Creative Ecosystem",
      client: "AgroCorp International",
      category: "Platform Design",
      slug: "katachi-studio",
      description: "Highly dynamic, non-traditional architectural layout with a slim codebase engineered for extreme flexibility and performance.",
      image: "/images/Katachi_r1_c1_processed_by_imagy.png",
      tags: ["Custom UI", "Flex-Grid", "Edge"],
      results: "60% Leaner Payload",
      impact: "$14M Annual Savings",
      icon: <Sparkles className="text-emerald-400" size={18} />
    },
    {
      title: "Omni-SaaS Command Center",
      client: "Federal Security Wing",
      category: "Data Visualization",
      slug: "saas-dashboard",
      description: "Enterprise-grade data visualization platform for complex states, featuring optimized state management and sub-50ms data latency.",
      image: "/images/Dashboards (1).png",
      tags: ["Zero-Trust", "Data-Vis", "Infra"],
      results: "99/100 Core Vitals",
      impact: "National Compliance",
      icon: <ShieldCheck className="text-emerald-500" size={18} />
    },
    {
      title: "Global Real Estate Orchestration",
      client: "V-Properties",
      category: "Geographic Data",
      slug: "realestate-portal",
      description: "Advanced spatial data portal for enterprise listings using hardware-accelerated rendering for zero input lag across 5,000+ nodes.",
      image: "/images/Real estate_r1_c1_processed_by_imagy.png",
      tags: ["Spatial Data", "PostGIS", "Edge"],
      results: "12X Conversion Yield",
      impact: "Global Deployment",
      icon: <Target className="text-emerald-400" size={18} />
    },
    {
      title: "Skipper SaaS Landing Protocol",
      client: "NexGen Power",
      category: "Headless E-Com",
      slug: "saas-landing",
      description: "High-conversion architecture with sub-second delivery, utilizing optimized asset management and seamless Vercel Edge orchestration.",
      image: "/images/Skipper_r1_c1_processed_by_imagy.png",
      tags: ["SEO-Native", "Edge-Delivery", "UI"],
      results: "0.6s Global LCP",
      impact: "Sub-Station Autonomy",
      icon: <Sparkles className="text-emerald-500" size={18} />
    },
    {
      title: "Healthcare Data Nexus Protocol",
      client: "Biocore Research",
      category: "Mobile Security",
      slug: "medinode-mobile",
      description: "Mission-critical patient management suite with zero-knowledge E2EE and real-time vital telemetry for high-speed medical research.",
      image: "/images/medinode_hero.png",
      tags: ["HIPAA-Compliant", "E2EE", "Telemetry"],
      results: "99.99% Sync Rate",
      impact: "Accelerated Research",
      icon: <Target className="text-teal-400" size={18} />
    },
    {
      title: "Universal E-Commerce Architecture",
      client: "Astra Retail",
      category: "Cloud Retail",
      slug: "ecommerce-platform",
      description: "Re-engineering a global retail ecosystem to support massive concurrent volume with zero latency during peak flash-sales events.",
      image: "/images/ecommerce_hero.png",
      tags: ["Serverless", "Scaling", "Retail"],
      results: "Zero-Downtime Peak",
      impact: "Record Q4 Revenue",
      icon: <ShieldCheck className="text-emerald-400" size={18} />
    },
    {
      title: "OmniHealth Dental Ecosystem",
      client: "Global Dental Clinic",
      category: "Medical Platforms",
      slug: "healthcare-platform",
      description: "Specialized ecosystem for medical practitioner workflows and automated patient acquisition channels with real-time scheduling synchronization.",
      image: "/images/Healthcare_r1_c1_processed_by_imagy.png",
      tags: ["Medical-Tech", "Scheduling", "Workflow"],
      results: "85% Staff Efficiency",
      impact: "15k+ Active Portals",
      icon: <Target className="text-emerald-400" size={18} />
    },
    {
      title: "PulseFlow Fitness Protocol",
      client: "Health & Wellness Startup",
      category: "Community Ops",
      slug: "fitness-platform",
      description: "Community-centric orchestration platform focusing on real-time class scheduling and high-fidelity mobile-native micro-interactions.",
      image: "/images/Fitness_r1_c1_processed_by_imagy.png",
      tags: ["Real-Time", "Mobile-Native", "Community"],
      results: "3.5x Engagement",
      impact: "18% DAU Floor",
      icon: <Sparkles className="text-emerald-400" size={18} />
    },
    {
      title: "AI Technical Landing Interface",
      client: "AI Tech Corp",
      category: "Value Engineering",
      slug: "ai-landing-page",
      description: "Complex technical value proposition architecture explained through high-fidelity interactive UI and precision asset optimization.",
      image: "/images/Pointer_r1_c1_processed_by_imagy.png",
      tags: ["Interactive", "Technical SEO", "AI"],
      results: "+120% Conversion",
      impact: "Production Ready",
      icon: <Target className="text-teal-400" size={18} />
    },
    {
      title: "Photography Studio Banner",
      client: "Professional Studio",
      category: "Visual Performance",
      slug: "photography-banner",
      description: "High-resolution portfolio architecture with perfect core web vitals and specialized lazy-loading asset orchestration.",
      image: "/images/PhotoGraphy_r1_c1_processed_by_imagy.png",
      tags: ["Asset-Optimized", "Portfolio", "Lighthouse"],
      results: "100/100 Lighthouse",
      impact: "SEO Perfection",
      icon: <Sparkles className="text-emerald-400" size={18} />
    }
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % cases.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + cases.length) % cases.length);

  return (
    <section id="work" className="py-16 md:py-24 bg-bg-dark overflow-hidden relative">
       {/* Background structural typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-white/1 select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap leading-none">
        Architecting
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="tag">Signature Missions</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[0.9] text-white">
              Elite Case <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-400 to-emerald-600 animate-gradient">Studies.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-dim leading-relaxed font-medium">
               A track record of absolute clinical execution in high-stakes digital environments.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-bg-dark transition-all duration-500 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-bg-dark transition-all duration-500 group"
            >
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Project Content */}
              <div className="lg:col-span-12 xl:col-span-5 order-2 xl:order-1">
                <div className="space-y-10">
                  <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">{cases[currentIndex].client}</span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{cases[currentIndex].category}</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-[0.9] text-white">
                    {cases[currentIndex].title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-text-dim leading-relaxed font-medium">
                    {cases[currentIndex].description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 lg:gap-5">
                    <div className="p-4 lg:p-6 bg-linear-to-br from-white/3 to-white/1 rounded-2xl lg:rounded-4xl border border-white/5 relative overflow-hidden group/box">
                       <div className="absolute top-0 right-0 p-3 lg:p-4 opacity-10 group-hover/box:opacity-20 transition-opacity">
                          {cases[currentIndex].icon}
                       </div>
                       <span className="text-[7px] lg:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] lg:tracking-[0.3em] mb-1 lg:mb-2 block">Performance Yield</span>
                       <div className="text-sm lg:text-xl font-black text-white tracking-tight">{cases[currentIndex].results}</div>
                    </div>
                    <div className="p-4 lg:p-6 bg-linear-to-br from-white/3 to-white/1 rounded-2xl lg:rounded-4xl border border-white/5 relative overflow-hidden group/box">
                       <span className="text-[7px] lg:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] lg:tracking-[0.3em] mb-1 lg:mb-2 block">Business Impact</span>
                       <div className="text-sm lg:text-xl font-black text-white tracking-tight">{cases[currentIndex].impact}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2 text-[10px] font-black tracking-widest uppercase opacity-40">
                    {cases[currentIndex].tags.map(tag => (
                      <span key={tag} className="flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-brand-primary" />
                         {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/work/${cases[currentIndex].slug}`} 
                    className="inline-flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:text-brand-primary transition-all group pt-6"
                  >
                    View Operational Data
                    <ExternalLink size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-brand-primary" />
                  </Link>
                </div>
              </div>

              {/* Project Image */}
              <div className="lg:col-span-12 xl:col-span-7 order-1 xl:order-2">
                <div className="relative aspect-16/10 w-full rounded-[2.5rem] overflow-hidden shadow-[0_50px_120px_-30px_rgba(0,0,0,0.6)] group border border-white/10">
                  <Image 
                    src={cases[currentIndex].image}
                    alt={cases[currentIndex].title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                   {/* Cinematic Overlays */}
                  <div className="absolute inset-0 bg-linear-to-br from-bg-dark/40 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
