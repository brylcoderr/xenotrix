'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Scale, ShieldCheck, Clock, FileText } from 'lucide-react';

const sections = [
    {
        id: "1",
        title: "1. Definitions",
        content: (
            <ul className="space-y-4 text-text-dim">
                <li><span className="text-white font-semibold">“XenotriX”</span>, “we”, “our”, or “us” refers to XenotriX and its representatives.</li>
                <li><span className="text-white font-semibold">“Client”</span>, “you”, or “your” refers to any individual or entity using our services.</li>
                <li><span className="text-white font-semibold">“Services”</span> refers to consulting, development, design, AI solutions, cloud services, and related offerings.</li>
                <li><span className="text-white font-semibold">“Deliverables”</span> refers to all work products provided to the client.</li>
            </ul>
        )
    },
    {
        id: "2",
        title: "2. Eligibility",
        content: (
            <div className="text-text-dim text-lg leading-relaxed">
                By using our services, you confirm that:
                <ul className="mt-4 space-y-2 list-disc list-inside">
                    <li>You are at least 18 years old</li>
                    <li>You have the authority to enter into a binding agreement</li>
                    <li>Information provided to us is accurate and complete</li>
                </ul>
            </div>
        )
    },
    {
        id: "3",
        title: "3. Scope of Services",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>XenotriX provides custom technology services including but not limited to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {[
                        "Software and web development",
                        "Mobile app development",
                        "AI and automation solutions",
                        "Cloud architecture and DevOps",
                        "Technical consulting"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mt-4 pt-4 border-t border-white/5 italic">
                    Specific deliverables, timelines, and costs are defined in written agreements, proposals, or contracts.
                </p>
            </div>
        )
    },
    {
        id: "4",
        title: "4. Client Responsibilities",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>Clients agree to:</p>
                <ul className="space-y-3 list-disc list-inside">
                    <li>Provide accurate requirements and necessary materials</li>
                    <li>Respond to communications in a timely manner</li>
                    <li>Review deliverables and provide feedback promptly</li>
                    <li>Obtain licenses for third-party assets unless otherwise agreed</li>
                    <li>Ensure content provided does not violate laws or third-party rights</li>
                </ul>
                <p className="mt-2 text-brand-primary/80 font-medium">Delays in client responses may impact project timelines.</p>
            </div>
        )
    },
    {
        id: "5",
        title: "5. Payments and Fees",
        content: (
            <ul className="space-y-3 text-text-dim list-disc list-inside">
                <li>Payment terms are specified in the project proposal or agreement</li>
                <li>Work may begin after receipt of initial payment or deposit</li>
                <li>Additional work outside the agreed scope will incur additional charges</li>
                <li>Late payments may result in project suspension</li>
                <li className="list-none text-white font-medium mt-4">All fees are non-transferable.</li>
            </ul>
        )
    },
    {
        id: "6",
        title: "6. Changes in Scope",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>Any modification to project requirements after approval may be treated as a <span className="text-white font-bold">change request</span>, which may:</p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Adjust costs</li>
                    <li>Extend timelines</li>
                    <li>Require a revised agreement</li>
                </ul>
                <p className="mt-4 pt-4 border-t border-white/5 opacity-80">
                    XenotriX reserves the right to decline substantial scope changes.
                </p>
            </div>
        )
    },
    {
        id: "7",
        title: "7. Intellectual Property Rights",
        content: (
            <ul className="space-y-3 text-text-dim list-disc list-inside">
                <li>Final deliverables become the client’s property upon full payment</li>
                <li>XenotriX retains ownership of pre-existing tools, code libraries, frameworks, and methodologies</li>
                <li>XenotriX may reuse general knowledge, skills, and non-confidential components</li>
                <li>XenotriX may showcase completed work in its portfolio unless restricted by NDA</li>
            </ul>
        )
    },
    {
        id: "8",
        title: "8. Confidentiality",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>Both parties agree to protect confidential information shared during the project, including business data, technical details, and proprietary materials.</p>
                <p>Confidential information will not be disclosed to third parties except:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>With written consent</li>
                    <li>To employees/contractors under confidentiality obligations</li>
                    <li>When required by law</li>
                </ul>
            </div>
        )
    },
    {
        id: "9",
        title: "9. Third-Party Services",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>Projects may involve third-party tools, platforms, or services (e.g., cloud providers, APIs, hosting).</p>
                <p>XenotriX is not responsible for:</p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Third-party outages or failures</li>
                    <li>Changes in pricing or policies</li>
                    <li>Security issues originating from external providers</li>
                </ul>
                <p className="text-white/80 font-medium">Clients are responsible for complying with third-party terms.</p>
            </div>
        )
    },
    {
        id: "10",
        title: "10. Warranties and Disclaimers",
        content: (
            <div className="space-y-4 text-text-dim">
                <p className="italic">Services are provided on an “as-is” basis unless otherwise stated in a written agreement.</p>
                <p>XenotriX does not guarantee:</p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Specific business results or revenue outcomes</li>
                    <li>Continuous or error-free operation</li>
                    <li>Compatibility with all future systems</li>
                    <li>Performance of third-party integrations</li>
                </ul>
            </div>
        )
    },
    {
        id: "11",
        title: "11. Limitation of Liability",
        content: (
            <div className="space-y-4 text-text-dim">
                <p className="font-medium text-white/90 underline decoration-brand-primary/30">To the maximum extent permitted by law:</p>
                <p>XenotriX shall not be liable for:</p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Indirect or consequential damages</li>
                    <li>Loss of profits, revenue, or data</li>
                    <li>Business interruption</li>
                    <li>Damages arising from third-party services</li>
                </ul>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 mt-4">
                    <p className="text-white text-sm">Total liability shall not exceed the amount paid for the specific services giving rise to the claim.</p>
                </div>
            </div>
        )
    },
    {
        id: "12",
        title: "12. Termination",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>Either party may terminate services under the conditions defined in the project agreement.</p>
                <p>Upon termination:</p>
                <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Client must pay for work completed up to the termination date</li>
                    <li>XenotriX will deliver completed portions of work</li>
                    <li>Access to systems or materials may be revoked until payment obligations are fulfilled</li>
                </ul>
            </div>
        )
    },
    {
        id: "13",
        title: "13. Suspension of Services",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>We reserve the right to suspend services if:</p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Payments are overdue</li>
                    <li>Terms are violated</li>
                    <li>Illegal or unethical activities are suspected</li>
                    <li>Client behavior is abusive or disruptive</li>
                </ul>
            </div>
        )
    },
    {
        id: "14",
        title: "14. Website Use Restrictions",
        content: (
            <div className="space-y-4 text-text-dim">
                <p>You agree not to:</p>
                <ul className="space-y-2 list-disc list-inside">
                    <li>Use the website for unlawful purposes</li>
                    <li>Attempt unauthorized access to systems</li>
                    <li>Copy or redistribute content without permission</li>
                    <li>Introduce malware or harmful code</li>
                </ul>
                <p className="mt-4 text-white/70">All website content is owned by XenotriX unless otherwise stated.</p>
            </div>
        )
    },
    {
        id: "15",
        title: "15. Indemnification",
        content: (
            <div className="text-text-dim">
                You agree to indemnify and hold XenotriX harmless from claims arising from:
                <ul className="mt-4 space-y-2 list-disc list-inside ml-4">
                    <li>Materials or content you provide</li>
                    <li>Violation of laws or third-party rights</li>
                    <li>Misuse of delivered solutions</li>
                    <li>Breach of these Terms</li>
                </ul>
            </div>
        )
    },
    {
        id: "16",
        title: "16. Force Majeure",
        content: (
            <p className="text-text-dim">
                XenotriX shall not be liable for delays or failure to perform due to circumstances beyond reasonable control, including natural disasters, internet outages, government actions, or other unforeseeable events.
            </p>
        )
    },
    {
        id: "17",
        title: "17. Modifications to Terms",
        content: (
            <p className="text-text-dim">
                We may update these Terms at any time. Updated versions will be posted on this page with the revised date. Continued use of our website or services constitutes acceptance of updated Terms.
            </p>
        )
    },
    {
        id: "18",
        title: "18. Governing Law",
        content: (
            <p className="text-text-dim">
                These Terms shall be governed by applicable laws of the jurisdiction in which XenotriX operates, unless otherwise specified in a written agreement.
            </p>
        )
    },
    {
        id: "19",
        title: "19. Contact Information",
        content: (
            <div className="p-6 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl space-y-4 mt-6">
                <p className="text-white font-bold mb-2">XenotriX</p>
                <div className="flex flex-col gap-2">
                    <a href="mailto:contact@xenotrix.com" className="text-brand-primary hover:text-white transition-colors flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        contact@xenotrix.com
                    </a>
                    <a href="https://xenotrix.com" className="text-brand-primary hover:text-white transition-colors flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        https://xenotrix.com
                    </a>
                </div>
            </div>
        )
    }
];

export default function TermsClient() {
    return (
        <div className="bg-bg-dark min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute top-40 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />

            <div className="section-container relative z-10">
                {/* Breadcrumbs */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <Link href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-text-dim hover:text-brand-primary transition-colors group">
                        <Home size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                        Home
                    </Link>
                    <ChevronRight size={12} className="text-white/20" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary">Terms of Service</span>
                </motion.div>

                {/* Header Section */}
                <div className="max-w-4xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="tag"
                    >
                        <ShieldCheck size={14} /> Legal Documentation
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-8"
                    >
                        Terms of <span className="text-brand-primary italic">Service</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center gap-6 mt-8 p-4 bg-white/2 border border-white/5 rounded-2xl w-fit"
                    >
                        <div className="flex items-center gap-2 text-text-dim text-xs font-medium">
                            <Clock size={14} className="text-brand-primary" />
                            <span>Last updated: February 27, 2026</span>
                        </div>
                    </motion.div>
                </div>

                {/* Content Structure */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Navigation Sidebar (Desktop) */}
                    <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-0">
                        <div className="absolute -left-4 top-0 bottom-0 w-px bg-white/5" />
                        <div className="space-y-1">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 pl-4">Table of Contents</h4>
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#section-${section.id}`}
                                    className="block px-4 py-3 text-[12px] font-bold text-text-dim hover:text-white uppercase tracking-[0.2em] transition-all relative group"
                                >
                                    <span className="opacity-40 tabular-nums mr-2 group-hover:opacity-100">{section.id.padStart(2, '0')}</span>
                                    {section.title.split('. ')[1]}
                                </a>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="premium-card p-8 md:p-12 lg:p-16"
                        >
                            <div className="space-y-16">
                                <div className="flex items-start gap-6 p-6 rounded-3xl bg-brand-primary/5 border border-brand-primary/10 mb-16">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center shrink-0">
                                        <FileText className="text-brand-primary" size={24} />
                                    </div>
                                    <p className="text-text-dim text-sm italic m-0">
                                        These Terms of Service (“Terms”) govern your access to and use of the XenotriX website and services. By accessing our website or engaging XenotriX for services, you agree to be bound by these Terms.
                                        <br /><br />
                                        <span className="text-white font-bold not-italic">If you do not agree, please do not use our website or services.</span>
                                    </p>
                                </div>

                                {sections.map((section) => (
                                    <section key={section.id} id={`section-${section.id}`} className="scroll-mt-32 group">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-brand-primary group-hover:bg-brand-primary group-hover:text-bg-dark transition-all duration-500">
                                                {section.id}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl m-0 tracking-tight group-hover:text-brand-primary transition-colors uppercase italic font-black">
                                                {section.title.split('. ')[1]}
                                            </h2>
                                        </div>
                                        <div className="pl-0 md:pl-12">
                                            {section.content}
                                        </div>
                                    </section>
                                ))}
                            </div>

                            {/* Final Affirmation */}
                            <div className="mt-24 pt-12 border-t border-white/5 text-center">
                                <Scale className="mx-auto text-brand-primary/40 mb-6" size={40} />
                                <p className="text-text-dim text-[10px] font-black uppercase tracking-[0.4em] max-w-xl mx-auto">
                                    By using our website or services, you acknowledge that you have read, understood, and agree to these Terms of Service.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
