'use client';

import { motion } from 'framer-motion';
import { Globe, TrendingUp, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Solutions = () => {
    const solutions = [
        {
            title: "Build Your Website",
            category: "Website & Automation",
            desc: "Digital infrastructure optimized for maximum conversion and business automation.",
            icon: <Globe size={32} />,
            link: "#services",
            color: "from-brand-primary/20 to-brand-secondary/20",
            features: ["Website Design", "E-commerce", "AI Chatbots"]
        },
        {
            title: "Grow Your Audience",
            category: "Marketing & Growth",
            desc: "Strategic content and social management to scale your brand reach and engagement.",
            icon: <TrendingUp size={32} />,
            link: "#services",
            color: "from-brand-secondary/20 to-brand-primary/20",
            features: ["Social Media", "Video Editing", "Graphic Design"]
        },
        {
            title: "Generate Leads",
            category: "Lead Generation Systems",
            desc: "Automated systems designed to capture and convert high-intent prospects 24/7.",
            icon: <Target size={32} />,
            link: "#services",
            color: "from-brand-primary/20 to-brand-secondary/40",
            features: ["Landing Pages", "WhatsApp Marketing", "Lead Magnets"]
        }
    ];

    return (
        <section id="solutions" className="py-12 bg-bg-dark relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] opacity-20" />

            <div className="section-container relative z-10">
                <div className="text-center mb-16">
                    <span className="tag justify-center!">Our Ecosystem</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white leading-[0.85]">
                        Complete Digital <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-white to-brand-secondary animate-gradient">Growth Solutions.</span>
                    </h2>
                    <p className="text-lg text-text-dim leading-relaxed max-w-2xl mx-auto font-medium opacity-80">
                        We don&apos;t just build websites; we engineer end-to-end growth engines that automate your lead flow and scale your brand presence.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="premium-card p-8 group relative flex flex-col min-h-[400px] border-white/5 hover:border-brand-primary/20"
                        >
                            <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

                            <div className="relative z-10 flex-1">
                                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-primary transition-colors">
                                    {item.title}
                                </h3>

                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-4">
                                    {item.category}
                                </div>

                                <p className="text-base text-text-dim leading-snug mb-8">
                                    {item.desc}
                                </p>

                                <div className="space-y-2 mb-8">
                                    {item.features.map((feat, j) => (
                                        <div key={j} className="flex items-center gap-2 text-xs text-white/60 font-medium">
                                            <div className="w-1 h-1 rounded-full bg-brand-primary" />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10">
                                <Link
                                    href={item.link}
                                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-brand-primary transition-colors group/link"
                                >
                                    Explore Services
                                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
