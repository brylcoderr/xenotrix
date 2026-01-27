'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag, Code, ArrowUpRight, BarChart3, AlertCircle, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectProps {
  layout?: 'list' | 'carousel';
}

const Projects = ({ layout = 'list' }: ProjectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      id: "healthcare-platform",
      title: "OmniHealth Dental",
      client: "Global Dental Clinic",
      tech: ["Next.js", "Strapi", "Prisma", "AWS"],
      impact: "Specialized ecosystem for medical practitioner workflows and patient acquisition.",
      problem: "Legacy dental clinics suffered from archaic scheduling protocols, leading to lost hours and high patient churn.",
      solution: "Deployed a high-speed Next.js frontend with automated patient re-engagement algorithms and a real-time availability engine.",
      metrics: [
        { label: "Efficiency", value: "+85%", icon: <BarChart3 size={14} /> },
        { label: "No-Show", value: "-40%", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Live",
      demoUrl: "https://demos.xenotrix.com/healthcare",
      image: "/images/Healthcare_r1_c1_processed_by_imagy.png"
    },
    {
      id: "saas-dashboard",
      title: "Saas Dashboard",
      client: "Enterprise SaaS",
      tech: ["TypeScript", "React", "Next.js"],
      impact: "Enterprise-grade data visualization platform for complex states.",
      problem: "Enterprise users often struggle with sluggish data visualization tools that fail to handle complex state, leading to decision-making bottlenecks.",
      solution: "Engineered a high-performance dashboard with optimized state management and real-time data visualization using Next.js and specialized charting libraries.",
      metrics: [
        { label: "Performance", value: "99/100", icon: <BarChart3 size={14} /> },
        { label: "Data Latency", value: "<50ms", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Production",
      demoUrl: "https://brylcodes-saas-dashboard.vercel.app/",
      image: "/images/Dashboards (1).png"
    },
    {
      id: "saas-landing",
      title: "Saas Landing",
      client: "SaaS Startup",
      tech: ["TypeScript", "React", "Next.js"],
      impact: "High-conversion landing page with sub-second load times.",
      problem: "Generic landing pages suffered from high bounce rates (70%+) due to slow mobile load times and fractured user journeys.",
      solution: "Designed and developed a performance-first landing page with optimized asset delivery and seamless animations to reduce bounce rates.",
      metrics: [
        { label: "Bounce Rate", value: "-45%", icon: <BarChart3 size={14} /> },
        { label: "Load Time", value: "0.6s", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Live",
      demoUrl: "https://skiper-landing.vercel.app/",
      image: "/images/Skipper_r1_c1_processed_by_imagy.png"
    },
    {
      id: "ai-landing-page",
      title: "AI Landing Page",
      client: "AI Tech Corp",
      tech: ["TypeScript", "React", "Next.js"],
      impact: "Complex technical value proposition explained through interactive UI.",
      problem: "AI startups struggle to explain complex value propositions to non-technical users, leading to low signup rates and high marketing costs.",
      solution: "Implemented an interactive, visually rich landing page that simplifies complex AI concepts through intuitive UX and micro-animations.",
      metrics: [
        { label: "Signups", value: "+120%", icon: <BarChart3 size={14} /> },
        { label: "User Session", value: "3.5m", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Production",
      demoUrl: "https://pointer-landing-template.vercel.app/",
      image: "/images/Pointer_r1_c1_processed_by_imagy.png"
    },
    {
      id: "photography-banner",
      title: "Photography Banner",
      client: "Professional Studio",
      tech: ["TypeScript", "React", "Next.js"],
      impact: "SEO-optimized high-resolution portfolio with perfect vitals.",
      problem: "High-resolution portfolios often fail to pass Google’s Core Web Vitals, negatively impacting SEO and user perception of professional quality.",
      solution: "Leveraged Next.js Image optimization and lazy loading strategies to deliver a visually stunning, high-res portfolio without sacrificing performance.",
      metrics: [
        { label: "SEO Score", value: "100/100", icon: <BarChart3 size={14} /> },
        { label: "Core Vitals", value: "Passed", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Deployed",
      demoUrl: "https://photography-banner.vercel.app/",
      image: "/images/PhotoGraphy_r1_c1_processed_by_imagy.png"
    },
    {
      id: "katachi-studio",
      title: "Katachi Studio",
      client: "Creative Agency",
      tech: ["TypeScript", "React", "Next.js"],
      impact: "Highly dynamic, non-traditional layout with a slim codebase.",
      problem: "Creative agencies require non-traditional, highly dynamic layouts that often fight against standard CSS frameworks, resulting in bloated codebases.",
      solution: "Created a custom, lightweight design system that allows for extreme flexibility and dynamic layouts while maintaining a minimal bundle size.",
      metrics: [
        { label: "Bundle Size", value: "-60%", icon: <BarChart3 size={14} /> },
        { label: "FPS", value: "60+", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Live",
      demoUrl: "https://katachi-studio-bice.vercel.app/",
      image: "/images/Katachi_r1_c1_processed_by_imagy.png"
    },
    {
      id: "finscale-platform",
      title: "FinScale Platform",
      client: "Capital One Partner",
      tech: ["Next.js", "Redis Graph", "PostgreSQL", "Kafka"],
      impact: "A high-performance real-time auditing and financial monitoring infrastructure.",
      problem: "The legacy system was monolithic, causing substantial delays during high-volume trading hours and critical compliance failures.",
      solution: "Architected an event-driven microservices ecosystem using Kafka and Redis, with a Next.js dashboard for sub-second rendering.",
      metrics: [
        { label: "Latency", value: "< 30ms", icon: <ArrowUpRight size={14} /> },
        { label: "Throughput", value: "250k/s", icon: <BarChart3 size={14} /> }
      ],
      status: "Live",
      demoUrl: "",
      image: "/images/finscale_hero.png"
    },
    {
      id: "medinode-mobile",
      title: "MediNode Mobile",
      client: "HealthLink Inc",
      tech: ["React Native", "Go", "AWS", "WebRTC"],
      impact: "Mission-critical patient management and communication suite with E2EE.",
      problem: "Doctors lacked real-time access to patient vitals, and existing communications were not fully HIPAA compliant.",
      solution: "Developed a native-performance mobile suite with a custom synchronization engine and zero-knowledge end-to-end encryption.",
      metrics: [
        { label: "Reliability", value: "99.99%", icon: <ArrowUpRight size={14} /> },
        { label: "Nodes", value: "1,200+", icon: <BarChart3 size={14} /> }
      ],
      status: "Deployed",
      demoUrl: "",
      image: "/images/medinode_hero.png"
    },
    {
      id: "autoquery-engine",
      title: "AutoQuery Engine",
      client: "Enterprise SaaS",
      tech: ["Python", "Pinecone", "GPT-4", "FastAPI"],
      impact: "AI-native knowledge retrieval and automated response engine.",
      problem: "Support teams were drowned in tickets, and customer churn was rising due to long response times for technical queries.",
      solution: "Built a Retrieval-Augmented Generation (RAG) pipeline with Pinecone and GPT-4 for sub-second accurate responses.",
      metrics: [
        { label: "Resolution", value: "72%", icon: <BarChart3 size={14} /> },
        { label: "Resp. Time", value: "< 5s", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Active",
      demoUrl: "",
      image: "/images/autoquery_hero.png"
    },
    {
      id: "ecommerce-platform",
      title: "VentureStore Elite",
      client: "Boutique Retail Group",
      tech: ["Shopify Headless", "React", "Node.js", "Vercel Edge"],
      impact: "High-performance headless e-commerce architecture designed for sub-second load times.",
      problem: "Standard Shopify themes failed to maintain sub-second LCP during viral sales drops, hurting conversions.",
      solution: "Decoupled the storefront using React and Vercel Edge with ISR for instant product updates and zero-latency checkout.",
      metrics: [
        { label: "Conversion", value: "+22%", icon: <BarChart3 size={14} /> },
        { label: "Load Time", value: "0.8s", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Production",
      demoUrl: "https://demos.xenotrix.com/ecommerce",
      image: "/images/ecommerce_hero.png"
    },
    {
      id: "fitness-platform",
      title: "PulseFlow Fitness",
      client: "Health & Wellness Startup",
      tech: ["Supabase", "React Native", "Tailwind", "Stripe"],
      impact: "Community-centric fitness platform focusing on real-time class orchestration.",
      problem: "Traditional fitness apps had high friction in community engagement, leading to low daily active user retention.",
      solution: "Engineered a realtime event-bus using Supabase and a high-fidelity interface with mobile-native micro-interactions.",
      metrics: [
        { label: "Retention", value: "+18%", icon: <BarChart3 size={14} /> },
        { label: "Onboarding", value: "< 2min", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Growth",
      demoUrl: "https://demos.xenotrix.com/fitness",
      image: "/images/Fitness_r1_c1_processed_by_imagy.png"
    },
    {
      id: "realestate-portal",
      title: "Horizon Realty Hub",
      client: "Prime Real Estate Group",
      tech: ["Mapbox GL", "PostGIS", "Next.js", "Python"],
      impact: "Advanced spatial data portal for enterprise real estate listings.",
      problem: "Real estate search portals often struggle with geographic latency, causing users to exit during map rendering.",
      solution: "Implemented a PostGIS spatial database for vector-tile generation and Mapbox GL for hardware-accelerated rendering.",
      metrics: [
        { label: "Inquiries", value: "+45%", icon: <BarChart3 size={14} /> },
        { label: "Map Latency", value: "-70%", icon: <ArrowUpRight size={14} /> }
      ],
      status: "Live",
      demoUrl: "https://demos.xenotrix.com/real-estate",
      image: "/images/Real estate_r1_c1_processed_by_imagy.png"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  if (layout === 'carousel') {
    return (
      <section id="work" className="py-24 md:py-32 bg-surface/10 border-y border-white/5 overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="tech-label">Selected Deployments</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8">Engineering <span className="text-brand-primary">Case Studies</span>.</h2>
              <p className="text-text-dim text-lg md:text-xl leading-relaxed">
                A mission-critical gallery of our high-stakes technical shipments.
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevProject}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300 bg-white/5"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextProject}
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300 bg-white/5"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass-panel p-1"
              >
                <div className="bg-bg-dark rounded-3xl p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-8 md:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 font-mono text-[10px] text-brand-primary mb-6 md:mb-8">
                      <span className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">CASE_{cases[currentIndex].id.toUpperCase().replace('-', '_')}</span>
                      <span className="text-text-dim">{"// "} {cases[currentIndex].status}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-black mb-6 md:mb-8">
                      {cases[currentIndex].title}
                    </h3>

                    {/* Project Image in Carousel */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10 group/img">
                       <Image 
                         src={cases[currentIndex].image} 
                         alt={cases[currentIndex].title}
                         fill
                         className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                       />
                       <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                       <div className="space-y-2 md:space-y-3">
                          <div className="flex items-center gap-2 text-red-400 font-mono text-[10px] uppercase tracking-widest">
                             <AlertCircle size={14} />
                             Challenge
                          </div>
                          <p className="text-text-dim text-xs md:text-sm leading-relaxed italic">
                             &quot;{cases[currentIndex].problem}&quot;
                          </p>
                       </div>
                       <div className="space-y-2 md:space-y-3">
                          <div className="flex items-center gap-2 text-brand-primary font-mono text-[10px] uppercase tracking-widest">
                             <Lightbulb size={14} />
                             Execution
                          </div>
                          <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                             {cases[currentIndex].solution}
                          </p>
                       </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cases[currentIndex].tech.map((t) => (
                        <span key={t} className="flex items-center gap-2 text-[9px] md:text-[10px] font-mono font-bold text-white/40 bg-white/5 border border-white/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full uppercase tracking-tighter">
                          <Code size={10} className="text-brand-primary" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-72 flex flex-col justify-between items-start lg:items-end gap-8 pt-4">
                     <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full">
                        {cases[currentIndex].metrics.map((metric, mi) => (
                          <div key={mi} className="bg-white/5 border border-white/5 p-4 md:p-5 rounded-xl w-full">
                             <div className="flex items-center gap-2 text-brand-primary font-mono text-[8px] md:text-[9px] uppercase tracking-widest mb-1">
                               {metric.icon}
                               {metric.label}
                             </div>
                             <div className="text-xl md:text-2xl font-black text-white">{metric.value}</div>
                          </div>
                        ))}
                     </div>

                     <div className="flex items-center gap-4 md:gap-6 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-none border-white/5 pt-6 lg:pt-0">
                        {cases[currentIndex].demoUrl && (
                          <a 
                            href={cases[currentIndex].demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-mono text-brand-primary flex items-center gap-2 hover:underline uppercase tracking-widest"
                          >
                            Demo <ExternalLink size={12} />
                          </a>
                        )}
                        <Link 
                          href={`/work/${cases[currentIndex].id}`}
                          className="w-12 h-12 rounded-xl md:rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-500 group/btn shadow-lg"
                        >
                           <ArrowUpRight size={20} />
                        </Link>
                     </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center gap-1.5 md:gap-2 mt-10 md:mt-12">
               {cases.map((_, i) => (
                 <div 
                   key={i} 
                   onClick={() => setCurrentIndex(i)}
                   className={`h-1 cursor-pointer transition-all duration-500 rounded-full ${i === currentIndex ? 'w-8 md:w-12 bg-brand-primary' : 'w-3 md:w-4 bg-white/10 hover:bg-white/20'}`}
                 />
               ))}
            </div>
          </div>

          <div className="mt-16 md:mt-20 flex justify-center">
              <Link 
                href="/work"
                className="text-[10px] md:text-xs font-mono font-bold text-text-dim hover:text-brand-primary transition-all flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 border border-white/5 rounded-full hover:border-brand-primary/20"
              >
                 <Tag size={14} />
                 EXPLORE_FULL_ARCHIVE_v4
              </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-24 bg-surface/20">
      <div className="section-container">
        <div className="space-y-6">
          {cases.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-1 group hover:border-brand-primary/30 transition-all duration-700"
            >
              <div className="bg-bg-dark p-6 md:p-12 flex flex-col md:flex-row justify-between gap-12 rounded-lg overflow-hidden">
                <div className="max-w-xl flex-1">
                  <div className="flex items-center gap-3 font-mono text-xs text-brand-primary mb-6">
                    <span className="px-2 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">CASE_STUDY_{i + 1}</span>
                    <span className="text-text-dim">{"// "} {project.status}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-6 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <p className="text-text-dim text-base md:text-lg leading-relaxed mb-8">
                    {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                        <Code size={12} className="text-brand-primary" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-72 lg:w-96 flex flex-col justify-between items-end gap-8">
                   <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 group/thumb">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover/thumb:grayscale-0 transition-all duration-500 group-hover/thumb:scale-105"
                      />
                   </div>
                   <div className="flex flex-col items-end w-full">
                      <Link 
                        href={`/work/${project.id}`}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-bg-dark transition-all duration-300 mb-6"
                      >
                         <ExternalLink size={18} />
                      </Link>
                      <div className="text-right">
                         <p className="text-[9px] md:text-[10px] font-mono text-text-dim uppercase tracking-widest mb-1">CLIENT</p>
                         <p className="font-bold text-xs md:text-sm tracking-tight">{project.client}</p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
