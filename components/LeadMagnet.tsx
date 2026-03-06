'use client';

import { motion } from 'framer-motion';
import { Target, ShieldCheck, ArrowRight, Activity as ActivityIcon } from 'lucide-react';
import Link from 'next/link';

const LeadMagnet = () => {
    return (
        <section id="audit" className="py-12 bg-bg-dark relative overflow-hidden">
            {/* Decorative Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/10 rounded-full blur-[150px] opacity-20" />

            <div className="section-container relative z-10">
                <div className="premium-card p-12 md:p-20 relative overflow-hidden border-white/5 hover:border-brand-primary/20 transition-all duration-700">
                    <div className="absolute top-0 right-0 w-full h-px bg-linear-to-r from-transparent via-brand-primary/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-primary/20 to-transparent" />

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative z-10">
                            <span className="tag mb-8 bg-brand-primary/10 text-brand-primary border-brand-primary/20">Free Opportunity Audit</span>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.85] text-white">
                                Get a Free <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-white to-brand-primary animate-gradient">Website & Marketing Audit.</span>
                            </h2>
                            <p className="text-xl text-text-dim leading-relaxed mb-12 font-medium opacity-80 max-w-xl">
                                Our architects will analyze your existing digital ecosystem and benchmark it against high-performance growth models.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Status</div>
                                        <div className="text-sm font-bold text-white tracking-tight leading-none overflow-hidden text-ellipsis whitespace-nowrap">Active Discovery</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Reliability</div>
                                        <div className="text-sm font-bold text-white tracking-tight leading-none overflow-hidden text-ellipsis whitespace-nowrap">99.9% Yield</div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-3 py-5 px-10 rounded-2xl bg-white text-brand-primary font-black text-[12px] tracking-[0.3em] uppercase hover:bg-brand-primary hover:text-white transition-all duration-500 shadow-2xl shadow-brand-primary/20 group/btn"
                            >
                                Book Free Consultation
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-primary/10 rounded-4xl blur-3xl opacity-20" />
                            <div className="relative p-10 rounded-4xl bg-white/3 border border-white/5 backdrop-blur-3xl space-y-8">
                                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                                    <div className="flex items-center gap-3">
                                        <ActivityIcon size={16} className="text-brand-primary animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Live Analysis Engine</span>
                                    </div>
                                    <span className="text-[8px] font-black py-1 px-3 bg-white text-brand-primary rounded-full">v2.4 READY</span>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] uppercase font-black tracking-widest text-text-dim">
                                            <span>Core Performance</span>
                                            <span>84%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-brand-primary"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '84%' }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] uppercase font-black tracking-widest text-text-dim">
                                            <span>Security Protocols</span>
                                            <span>92%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-linear-to-r from-brand-primary to-brand-secondary"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '92%' }}
                                                transition={{ duration: 1.5, delay: 0.7 }}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] uppercase font-black tracking-widest text-text-dim">
                                            <span>Conversion Yield</span>
                                            <span>38%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-fuchsia-500"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '38%' }}
                                                transition={{ duration: 1.5, delay: 0.9 }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
                                        <p className="text-[10px] font-bold text-white/80 leading-relaxed italic">
                                            &quot;Benchmark identification completed. System ready for optimization protocols.&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;
