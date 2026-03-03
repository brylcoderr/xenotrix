'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Shield, Lock, Eye, Users, Globe, Database, Smartphone } from 'lucide-react';

const sections = [
    {
        id: "1",
        title: "1. Information We Collect",
        content: (
            <div className="space-y-8 text-text-dim">
                <div>
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Smartphone size={18} className="text-brand-primary" />
                        Information You Provide Directly
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6 list-disc">
                        <li>Name & Contact info</li>
                        <li>Company & Job details</li>
                        <li>Project requirements</li>
                        <li>Billing information</li>
                        <li>Communications data</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Globe size={18} className="text-brand-primary" />
                        Information Collected Automatically
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6 list-disc">
                        <li>IP address & Device info</li>
                        <li>Browser type & OS</li>
                        <li>Usage data & Analytics</li>
                        <li>Regional location data</li>
                    </ul>
                </div>
                <div className="p-4 bg-white/2 border border-white/5 rounded-2xl">
                    <p className="text-sm italic">
                        <span className="text-brand-primary font-bold">Cookies:</span> We use tracking technologies to optimize performance and security. Manage these via your browser settings.
                    </p>
                </div>
            </div>
        )
    },
    {
        id: "2",
        title: "2. How We Use Your Information",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>We leverage personal data for high-stakes operational excellence:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "Strategic consultations",
                        "Service delivery management",
                        "Secure transaction processing",
                        "Resource optimization",
                        "Security & fraud prevention",
                        "Legal compliance"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 p-3 bg-white/2 border border-white/5 rounded-xl">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                            <span className="text-sm font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        id: "3",
        title: "3. Legal Basis (GDPR)",
        content: (
            <div className="text-text-dim">
                <p className="mb-4">For EEA residents, our processing operations are anchored in:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Explicit Consent", "Contractual Necessity", "Legal Obligation", "Legitimate Interest"].map((basis) => (
                        <div key={basis} className="px-4 py-2 bg-brand-primary/5 border border-brand-primary/10 rounded-lg text-xs font-mono text-brand-primary flex items-center justify-center">
                            {basis.toUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: "4",
        title: "4. How We Share Information",
        content: (
            <div className="space-y-4 text-text-dim leading-relaxed">
                <p className="text-white font-bold underline decoration-brand-primary/30 underline-offset-4">We do not sell your personal information.</p>
                <p>Data sharing is restricted to authorized entities:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Authorized personnel & contractors</li>
                    <li>Mission-critical service providers</li>
                    <li>Legal authorities (as mandated)</li>
                    <li>Professional architectural advisors</li>
                </ul>
            </div>
        )
    },
    {
        id: "5",
        title: "5. International Data Transfers",
        content: (
            <p className="text-text-dim leading-relaxed">
                Your information may be processed across global nodes. We implement rigid safeguards (SCCs) to ensure data integrity remains consistent with your local jurisdiction&apos;s standards.
            </p>
        )
    },
    {
        id: "6",
        title: "6. Data Retention",
        content: (
            <div className="p-6 bg-white/2 border border-white/5 rounded-3xl space-y-4">
                <div className="flex items-center gap-4 text-brand-primary">
                    <Database size={20} />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">Storage Protocol</span>
                </div>
                <p className="text-text-dim text-sm italic m-0">
                    Data is retained only for the duration of its functional utility or as dictated by regulatory compliance. Post-use, records are subjected to cryptographic erasure or irreversible anonymization.
                </p>
            </div>
        )
    },
    {
        id: "7",
        title: "7. Your Rights (GDPR)",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>EU/EEA citizens hold sovereign control over their data:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Right of Access",
                        "Right to Rectification",
                        "Erasure (Right to be Forgotten)",
                        "Processing Restriction",
                        "Data Portability",
                        "Consent Withdrawal"
                    ].map((right, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                            <ChevronRight size={14} className="text-brand-primary" />
                            {right}
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        id: "8",
        title: "8. Your Rights (CCPA)",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>California residents are granted specific transparency rights:</p>
                <ul className="space-y-2 list-disc list-inside ml-4 italic text-sm">
                    <li>Collection & Usage Disclosure</li>
                    <li>Deletion Requests</li>
                    <li>Third-party sharing transparency</li>
                    <li>Anti-discrimination protection</li>
                </ul>
            </div>
        )
    },
    {
        id: "9",
        title: "9. Data Security",
        content: (
            <div className="p-8 bg-brand-primary/5 border border-brand-primary/20 rounded-4xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center">
                        <Lock className="text-brand-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold m-0 uppercase italic tracking-tighter">Defense-in-Depth</h3>
                </div>
                <p className="text-text-dim text-sm leading-relaxed mb-0">
                    We implement enterprise-grade security including AES-256 encryption, rigid access controls, and audited secure hosting. While we maintain elite-tier defenses, absolute security of digital systems remains a probabilistic goal.
                </p>
            </div>
        )
    },
    {
        id: "10",
        title: "10. Third-Party Links",
        content: (
            <p className="text-text-dim italic">
                External domains linked from XenotriX operate under their own independent protocols. We bear no liability for their data handling methodologies.
            </p>
        )
    },
    {
        id: "11",
        title: "11. Children’s Privacy",
        content: (
            <p className="text-text-dim">
                Our infrastructure is strictly B2B/Enterprise focused and not directed towards individuals under 18. Any inadvertently collected data of minors is subjected to immediate purging.
            </p>
        )
    },
    {
        id: "12",
        title: "12. Marketing Communications",
        content: (
            <p className="text-text-dim">
                Client communications are strictly opt-in. You may terminate your subscription to our intelligence updates at any time via the provided cryptographically-signed unsubscribe links.
            </p>
        )
    },
    {
        id: "13",
        title: "13. Do Not Track",
        content: (
            <p className="text-text-dim opacity-60 italic text-xs">
                System response to &quot;Do Not Track&quot; signals is currently inactive pending a unified global standard.
            </p>
        )
    },
    {
        id: "14",
        title: "14. Policy Updates",
        content: (
            <p className="text-text-dim">
                These protocols are subject to periodic architectural review and updates. Your continued interaction with our systems constitutes a formal acknowledgment of the latest revision.
            </p>
        )
    },
    {
        id: "15",
        title: "15. Contact Protocol",
        content: (
            <div className="flex flex-col gap-4 mt-6">
                <h4 className="text-white font-bold m-0 italic">Data Privacy Officer</h4>
                <div className="flex flex-col gap-2">
                    <a href="mailto:contact@xenotrix.com" className="text-brand-primary font-mono text-sm hover:text-white transition-colors underline decoration-brand-primary/20 hover:decoration-white">
                        contact@xenotrix.com
                    </a>
                    <span className="text-xs text-text-dim uppercase tracking-widest">Noida HQ | India Node</span>
                </div>
            </div>
        )
    }
];

export default function PrivacyClient() {
    return (
        <main className="bg-bg-dark min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Dynamic Background Noise/Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[150px] pointer-events-none rounded-full" />

            <div className="section-container relative z-10">
                {/* Breadcrumb Engine */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 mb-16"
                >
                    <Link href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-text-dim hover:text-brand-primary transition-all group">
                        <Home size={14} className="group-hover:-translate-y-0.5" />
                        Base
                    </Link>
                    <ChevronRight size={12} className="text-white/20" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">Privacy Protocol</span>
                </motion.div>

                {/* Hero Section */}
                <div className="max-w-5xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 mb-10"
                    >
                        <Shield size={14} className="text-brand-primary" />
                        <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">Data Intelligence Security</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl mb-12 italic uppercase font-black"
                    >
                        Privacy <span className="text-brand-primary">Protocol.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-text-dim text-lg md:text-xl max-w-2xl font-light italic opacity-80 leading-relaxed mb-12"
                    >
                        XenotriX maintains elite-tier surveillance over your data integrity. Our protocols are engineered to exceed global standards including GDPR and CCPA.
                    </motion.p>

                    <div className="flex items-center gap-6 p-4 bg-white/2 border border-white/5 rounded-2xl w-fit">
                        <Eye size={16} className="text-brand-primary" />
                        <span className="text-[10px] font-black text-text-dim uppercase tracking-widest">Revision_2026.02.27</span>
                    </div>
                </div>

                {/* Content Matrix */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Index Sidebar */}
                    <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-8 pl-4 underline decoration-brand-primary/50 underline-offset-8">Protocol_Index</p>
                            {sections.map((sec) => (
                                <a
                                    key={sec.id}
                                    href={`#protocol-${sec.id}`}
                                    className="block px-4 py-3 text-[12px] font-bold text-text-dim hover:text-white hover:bg-white/5 rounded-xl border-l-2 border-transparent hover:border-brand-primary transition-all group"
                                >
                                    <span className="text-brand-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity">_</span>
                                    {sec.title.split('. ')[1]}
                                </a>
                            ))}
                        </div>
                    </aside>

                    {/* Core Data Area */}
                    <div className="lg:col-span-9">
                        <div className="premium-card p-1 md:p-1 overflow-hidden relative group">
                            {/* Inner container for actual content padding */}
                            <div className="bg-bg-dark/80 backdrop-blur-xl rounded-[calc(var(--radius-4xl)-4px)] p-8 md:p-16">

                                <div className="flex items-start gap-8 mb-24 p-8 rounded-4xl bg-brand-primary/5 border border-brand-primary/10">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="shrink-0"
                                    >
                                        <Users className="text-brand-primary" size={32} />
                                    </motion.div>
                                    <p className="text-text-dim text-sm md:text-base italic leading-loose m-0">
                                        This Privacy Policy explains how we collect, use, and safeguard your data across the XenotriX ecosystem. By engaging our services, you acknowledge our commitment to architectural data protection.
                                    </p>
                                </div>

                                <div className="space-y-24">
                                    {sections.map((section) => (
                                        <section
                                            key={section.id}
                                            id={`protocol-${section.id}`}
                                            className="scroll-mt-32 group/sec"
                                        >
                                            <div className="flex flex-col gap-6">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[10px] font-black text-brand-primary px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-md">
                                                        MOD_{section.id.padStart(2, '0')}
                                                    </span>
                                                    <h2 className="text-2xl md:text-4xl m-0 leading-none group-hover/sec:text-brand-primary transition-colors italic uppercase font-black">
                                                        {section.title.split('. ')[1]}
                                                    </h2>
                                                </div>
                                                <div className="pl-0 md:pl-20 border-l border-white/5 md:ml-6 py-2">
                                                    {section.content}
                                                </div>
                                            </div>
                                        </section>
                                    ))}
                                </div>

                                {/* Secure Seal */}
                                <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-white/2 border border-white/10 flex items-center justify-center mb-8 relative">
                                        <div className="absolute inset-0 rounded-full border border-brand-primary/20 animate-ping opacity-20" />
                                        <Shield className="text-brand-primary" size={32} />
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.6em] text-text-dim">
                                        Data_Integrity_Verified
                                    </p>
                                    <p className="text-[8px] mt-4 opacity-20 font-mono tracking-widest uppercase">
                                        XenotriX // Digital Engineering // 0x4294967295
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </main >
    );
}
