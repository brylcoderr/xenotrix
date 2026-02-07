import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Terms of Service | XenotriX",
  description: "Our engineered service level agreements (SLA) and intellectual property protocols. Transparent terms for elite engineering partnerships.",
};

export default function TermsPage() {
  const terms = [
    { title: "Service Level Agreement (SLA)", content: "We guarantee 99.9% uptime for all managed deployments in our Enterprise-tier packages. Critical response times are within 60 minutes." },
    { title: "Intellectual Property", content: "Clients retain full ownership of all custom logic and application code developed during the deployment cycle upon final payment." },
    { title: "Liability Node", content: "XenotriX is not liable for infrastructure failures caused by third-party cloud providers beyond the scope of our architectural mitigations." }
  ];

  return (
    <main className="min-h-screen bg-bg-dark text-white">
      <Navigation />
      
      <div className="pt-40 pb-32">
        <div className="section-container max-w-4xl">
           <div className="tech-label">Policy Engine</div>
            <h1 className="text-4xl md:text-7xl font-black mb-12 md:mb-16 tracking-tighter">Terms of <br />Service.</h1>
           
           <div className="space-y-16">
              {terms.map((term, i) => (
                <div key={i} className="border-t border-white/5 pt-10">
                   <p className="font-mono text-xs text-brand-primary uppercase tracking-[0.4em] mb-6">CLAUSE_ALPHA_{i + 1}</p>
                   <h2 className="text-2xl font-bold mb-6 italic">{term.title}</h2>
                   <p className="text-lg text-text-dim leading-relaxed font-light">
                      {term.content}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
