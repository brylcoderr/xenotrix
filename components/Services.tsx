'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AppWindow, Smartphone, Cpu, Cloud, ShieldCheck, BarChart, ChevronRight, Target, Activity, PenTool } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: <AppWindow size={28} />,
      title: "Website Design",
      desc: "Beautiful, high-quality websites built to showcase your brand and convert visitors into customers.",
      features: ["Modern UI/UX Design", "Built with Next.js", "Optimized for Speed", "Fully Responsive"],
      color: "from-brand-primary/20 to-brand-secondary/20",
      link: "/services/website-design"
    },
    {
      icon: <Target size={28} />,
      title: "Landing Pages",
      desc: "Single pages designed with one goal in mind: getting you more leads and sales.",
      features: ["Custom Landing Pages", "Direct WhatsApp Links", "Mobile-Friendly", "Conversion Optimized"],
      color: "from-brand-secondary/20 to-brand-primary/20",
      link: "/services/landing-page-design"
    },
    {
      icon: <Activity size={28} />,
      title: "AI Business Chatbot",
      desc: "Custom AI assistants that talk to your customers 24/7 and help you book more meetings.",
      features: ["Always Available", "Fast Responses", "Collects Leads", "Smart Conversations"],
      color: "from-brand-primary/20 to-brand-secondary/40",
      link: "/services/ai-chatbot"
    },
    {
      icon: <Cpu size={28} />,
      title: "Booking Systems",
      desc: "Powerful booking tools that make it easy for your clients to schedule appointments with you.",
      features: ["Calendar Sync", "Instant Confirmation", "Auto Notifications", "Easy Scheduling"],
      color: "from-brand-secondary/40 to-brand-primary/20",
      link: "/services/booking-system"
    },
    {
      icon: <Cloud size={28} />,
      title: "E-commerce Shops",
      desc: "Online stores designed to help you sell your products to customers all over the world.",
      features: ["Secure Payments", "Inventory Management", "User Friendly", "Scaleable Platform"],
      color: "from-brand-primary/10 to-brand-secondary/30",
      link: "/services/ecommerce-setup"
    },
    {
      icon: <BarChart size={28} />,
      title: "Social Media Growth",
      desc: "Help your brand grow on social media with high-quality content and proven strategies.",
      features: ["Detailed Analytics", "Targeted Growth", "Content Strategy", "Proven Results"],
      color: "from-brand-secondary/10 to-brand-primary/30",
      link: "/services/social-media-management"
    },
    {
      icon: <Smartphone size={28} />,
      title: "Video Editing",
      desc: "Professional video editing for Reels, Shorts, and TikToks to make your content viral-ready.",
      features: ["Engaging Visuals", "Fluid Transitions", "Motion Graphics", "Viral Ready Content"],
      color: "from-brand-primary/10 to-brand-secondary/30",
      link: "/services/video-editing"
    },
    {
      icon: <PenTool size={28} />,
      title: "Graphic Design",
      desc: "Creative and professional designs for your social media and branding needs.",
      features: ["Modern Design", "High Quality Assets", "Consistent Branding", "Fast Turnaround"],
      color: "from-brand-secondary/10 to-brand-primary/30",
      link: "/services/graphic-design"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "WhatsApp Marketing",
      desc: "Generate more leads and sales through automated WhatsApp marketing campaigns.",
      features: ["Auto Lead Gen", "Automated Flows", "Customer Engagement", "High Conversion"],
      color: "from-brand-primary/10 to-brand-secondary/30",
      link: "/services/whatsapp-marketing"
    }
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="services" className="py-12 relative bg-bg-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/2 rounded-full blur-[150px] opacity-20" />

      <div className="section-container relative z-10 mb-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-6 block">Our Expertise</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.85] text-white">
            Professional <br />
            Digital <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-white to-brand-primary/40">Services.</span>
          </h2>
          <p className="text-sm md:text-lg text-text-dim leading-relaxed max-w-2xl font-medium opacity-60">
            High-quality digital services designed to help you grow your business and succeed online.
          </p>
        </div>
      </div>

      <div className="section-container relative">
        <div
          className="relative flex overflow-hidden group/marquee"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Infinite Scroll Container */}
          <motion.div
            className="flex gap-8 py-10"
            animate={{
              x: isPaused ? undefined : ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {[...services, ...services].map((service, i) => (
              <div key={i} className="w-[calc((100vw-48px)/1)] md:w-[calc((1200px-64px)/3)] shrink-0">
                <div className="relative group h-full">
                  {/* Glass Card Background */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-[2.5rem] -z-10" />
                  <div className="absolute inset-0 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 group-hover:border-brand-primary/40 transition-all duration-700 -z-10" />

                  <div className="p-10 flex flex-col min-h-[580px] h-full relative overflow-hidden rounded-[2.5rem]">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] group-hover:bg-brand-primary/20 transition-all duration-1000" />

                    <div className="relative z-10 flex justify-between items-center mb-16">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary shadow-2xl group-hover:scale-110 group-hover:shadow-brand-primary/20 transition-all duration-700">
                        {service.icon}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-white/20 tracking-[0.4em]">SERVICE</span>
                        <span className="text-[10px] font-black text-brand-primary/60 tracking-[0.2em]">0{(i % 9) + 1}</span>
                      </div>
                    </div>

                    <div className="relative z-10 flex-1">
                      <h3 className="text-2xl font-bold mb-5 tracking-tighter text-white group-hover:text-brand-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-text-dim leading-relaxed font-medium mb-12 opacity-70 group-hover:opacity-100 transition-opacity">
                        {service.desc}
                      </p>

                      <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 flex items-center gap-4">
                          <div className="h-px w-8 bg-white/10" />
                          What's Included
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          {service.features.slice(0, 3).map((feat, j) => (
                            <div key={j} className="flex items-center gap-4 group/feat p-3 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover/feat:bg-brand-primary transition-colors" />
                              <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 pt-10 mt-auto">
                      <Link
                        href={service.link}
                        className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-[10px] tracking-[0.4em] uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-brand-primary transition-all duration-500 group/btn"
                      >
                        Learn More
                        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* mobile gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-bg-dark to-transparent pointer-events-none z-10 md:hidden" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-bg-dark to-transparent pointer-events-none z-10 md:hidden" />
      </div>

      <div className="section-container mt-8 flex justify-center">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/2">
          <div className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-brand-primary animate-pulse'}`} />
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40">
            {isPaused ? 'Paused' : 'Auto Scrolling'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
