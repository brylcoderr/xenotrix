'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const FloatingActions = () => {
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowSticky(true);
            } else {
                setShowSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Sticky CTA */}
            <AnimatePresence>
                {showSticky && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg"
                    >
                        <div className="p-4 rounded-3xl shadow-2xl shadow-brand-primary/40 flex items-center justify-between gap-4 border border-brand-primary/10 backdrop-blur-3xl bg-white/95">
                            <div className="flex items-center gap-3 pl-2">
                                <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                    <Zap size={20} className="animate-pulse" />
                                </div>
                                <div>
                                    <div className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-primary/60">Ready to scale?</div>
                                    <div className="text-sm font-bold text-gray-900 tracking-tight leading-none">Get Free Consultation</div>
                                </div>
                            </div>
                            <Link
                                href="#contact"
                                className="py-3.5 px-6 rounded-2xl bg-brand-primary text-white font-black text-[10px] tracking-[0.3em] uppercase hover:bg-brand-secondary transition-all flex items-center gap-2 group shadow-xl shadow-brand-primary/20"
                            >
                                Initiate
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating WhatsApp */}
            <motion.a
                href="https://wa.me/918679672283?text=Hi!%20I%20want%20to%20grow%20my%20business%20online."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 left-8 z-60 w-16 h-16 rounded-full bg-brand-primary text-white shadow-2xl shadow-brand-primary/40 flex items-center justify-center group"
            >
                <div className="absolute inset-0 bg-brand-primary rounded-full animate-ping opacity-20 group-hover:hidden" />
                <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.045c0 2.12.554 4.189 1.604 6.04l-1.705 6.226 6.368-1.67a11.81 11.81 0 005.776 1.514h.005c6.635 0 12.043-5.411 12.046-12.047 0-3.214-1.25-6.233-3.523-8.508z" />
                </svg>

                {/* Tooltip */}
                <div className="absolute bottom-full left-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-3xl text-gray-900 text-[10px] font-black uppercase tracking-[0.2em] py-3 px-6 rounded-2xl shadow-2xl whitespace-nowrap border border-black/5">
                        Chat with an expert
                        <div className="absolute top-full left-6 w-3 h-3 bg-white/95 rotate-45 -mt-1.5" />
                    </div>
                </div>
            </motion.a>
        </>
    );
};

export default FloatingActions;
