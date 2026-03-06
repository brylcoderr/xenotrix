'use client';

import { servicesData } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Target, Cpu, Activity, LayoutGrid, HelpCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServiceContent({ slug }: { slug: string }) {
    const service = servicesData[slug as keyof typeof servicesData];

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-bg-dark min-h-screen text-text-main overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:py-48 relative overflow-hidden">
                <div className="absolute left-1/2 -translate-x-1/2 w-[1500px] h-[500px] bg-brand-primary/10 rounded-full blur-[180px] opacity-20 -top-96" />
                <div className="section-container relative z-10">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="tag mb-8"
                        >
                            Enterprise Solutions — {service.title}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.85] text-white"
                        >
                            {service.heroTitle.split(' ').map((word, i) => (
                                <span key={i} className={i % 2 === 1 ? 'text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-white to-brand-primary' : ''}>
                                    {word}{' '}
                                </span>
                            ))}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-text-dim max-w-2xl leading-relaxed mb-12 opacity-80"
                        >
                            {service.heroDesc}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <Link href="#contact" className="inline-flex items-center gap-4 py-5 px-12 rounded-2xl bg-white text-brand-primary font-black text-[14px] tracking-[0.3em] uppercase hover:bg-brand-primary hover:text-white transition-all shadow-2xl shadow-brand-primary/20 group">
                                Get Your {service.title}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits & Features Grid */}
            <section className="py-24 bg-white/2 border-y border-white/5 relative">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-bold mb-10 tracking-tight text-white flex items-center gap-4">
                                <Target className="text-brand-primary" /> Core Benefits
                            </h2>
                            <div className="space-y-6">
                                {service.benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-1">
                                            <Check size={14} className="text-brand-primary" />
                                        </div>
                                        <p className="text-lg font-bold text-text-dim group-hover:text-white transition-colors capitalize">{benefit}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-10 tracking-tight text-white flex items-center gap-4">
                                <LayoutGrid className="text-brand-primary" /> Features Included
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {service.features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/20 transition-all"
                                    >
                                        <Activity size={20} className="text-brand-primary mb-4" />
                                        <h3 className="text-base font-bold text-white mb-2">{feature}</h3>
                                        <div className="text-[10px] uppercase font-black tracking-widest text-text-dim">Module Active</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases - Dark Theme */}
            <section className="py-24 relative overflow-hidden">
                <div className="section-container">
                    <div className="mb-16 text-center">
                        <span className="tag justify-center!">Sector Specialization</span>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white uppercase italic">Optimal Use Cases.</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {service.useCases.map((useCase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-4xl bg-white/1 border border-white/5 text-center group hover:bg-brand-primary/5 hover:border-brand-primary/20 transition-all"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">{useCase}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deployment Process */}
            <section className="py-24 bg-white/2 border-y border-white/5 overflow-hidden">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="tag">Lifecycle Management</span>
                            <h2 className="text-5xl font-black tracking-tighter text-white uppercase italic">The Deployment Cycle.</h2>
                        </div>
                        <div className="px-6 py-3 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-[12px] font-black text-brand-primary uppercase tracking-[0.2em] animate-pulse">
                            System_Phase_Active
                        </div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-12 relative">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block" />
                        {service.process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative z-10"
                            >
                                <div className="w-16 h-16 rounded-full bg-bg-dark border border-white/10 flex items-center justify-center text-2xl font-black text-brand-primary mb-8 shadow-2xl mx-auto">
                                    0{i + 1}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">{step}</h3>
                                    <p className="text-xs text-text-dim font-medium uppercase tracking-[0.2em]">Execution Phase</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="section-container max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="tag justify-center!">Support Protocol</span>
                        <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        {service.faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-4xl bg-white/2 border border-white/5"
                            >
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
                                    <HelpCircle className="text-brand-primary shrink-0" size={20} />
                                    {faq.q}
                                </h3>
                                <p className="text-text-dim text-lg font-medium opacity-80 leading-relaxed ml-9">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 relative">
                <div className="section-container">
                    <div className="premium-card p-12 md:p-24 text-center relative overflow-hidden border-brand-primary/20 bg-brand-primary/5">
                        <div className="absolute inset-0 bg-linear-to-br from-brand-primary/10 to-transparent opacity-30" />
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white uppercase italic">
                                Initiate Your <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-white to-brand-primary animate-gradient">{service.title} Protocol.</span>
                            </h2>
                            <Link href="#contact" className="inline-flex items-center gap-4 py-6 px-16 rounded-3xl bg-white text-brand-primary font-black text-[16px] tracking-[0.4em] uppercase hover:bg-brand-primary hover:text-white transition-all shadow-3xl group">
                                Book Protocol Session
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
