 'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


export default function PrivacyPage() {
  const sections = [
    { title: "Data Collection", content: "We collect metadata required for the optimization of our engineering services. This includes technical configurations and operational logs required for mission-critical support." },
    { title: "Encryption Standard", content: "All client data at rest and in transit is protected by AES-256 encryption. We utilize hardware security modules (HSM) for key management." },
    { title: "Third Party Protocol", content: "Data is never shared with third-party providers unless explicitly required by the infrastructure deployment protocol (e.g., AWS, Azure, Google Cloud)." }
  ];

  return (
    <main className="min-h-screen bg-bg-dark text-white">
      <Navigation />
      
      <div className="pt-40 pb-32">
        <div className="section-container max-w-4xl">
           <div className="tech-label">Legal Protocol</div>
           <h1 className="text-4xl md:text-7xl font-black mb-12 md:mb-16 tracking-tighter">Privacy <br />Protocol.</h1>
           
           <div className="space-y-16">
              {sections.map((sec, i) => (
                <div key={i} className="border-t border-white/5 pt-10">
                   <p className="font-mono text-xs text-brand-primary uppercase tracking-[0.4em] mb-6">SECTION_0{i + 1}</p>
                   <h2 className="text-2xl font-bold mb-6 italic">{sec.title}</h2>
                   <p className="text-lg text-text-dim leading-relaxed font-light">
                      {sec.content}
                   </p>
                </div>
              ))}
           </div>

           <div className="mt-24 p-8 glass-panel border-brand-primary/20 bg-brand-primary/5 text-xs font-mono text-center">
              SYSTEM_AUTH_REQUIRED_FOR_SENSITIVE_AUDIT_LOGS
           </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
