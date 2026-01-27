'use client';

import { ShieldX, ShieldCheck } from 'lucide-react';

const Comparison = () => {
  return (
    <section className="py-24 bg-surface/10">
      <div className="section-container">
        <div className="text-center mb-20">
          <div className="tech-label mx-auto justify-center">Performance Audit</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical <span className="text-brand-primary italic">Optimization</span> Benchmark</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-1 border border-white/8 rounded-2xl overflow-hidden bg-white/4">
          {/* Legacy Column */}
          <div className="bg-bg-dark/40 p-8 md:p-12">
             <div className="flex items-center gap-3 mb-10 text-red-400">
                <ShieldX size={24} />
                <h3 className="text-2xl font-bold tracking-tight">The Legacy Approach</h3>
             </div>
             
             <ul className="space-y-8">
                {[
                  "Complex, entangled tech debt.",
                  "Slow development cycles (Months).",
                  "Fragmented scaling logic.",
                  "Reactive maintenance fixes.",
                  "High long-term operational costs."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-text-dim">
                     <span className="font-mono text-[10px] text-red-400/50 mt-1">0{i+1}_</span>
                     <p className="text-sm md:text-base">{item}</p>
                  </li>
                ))}
             </ul>
          </div>

          {/* XenotriX Column */}
          <div className="bg-brand-primary/2 p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[60px] rounded-full" />
             
             <div className="flex items-center gap-3 mb-10 text-brand-primary">
                <ShieldCheck size={24} />
                <h3 className="text-2xl font-bold tracking-tight">The XenotriX Engine</h3>
             </div>
             
             <ul className="space-y-8">
                {[
                  "Clean, modular logic & SOLID principles.",
                  "Rapid iteration & MVP deployment (Weeks).",
                  "Auto-scaling cloud architecture.",
                  "Proactive monitoring & 99.9% Uptime.",
                  "Optimized ROI through efficient builds."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-white">
                     <span className="font-mono text-[10px] text-brand-primary mt-1">0{i+1}_</span>
                     <p className="text-sm md:text-base font-medium">{item}</p>
                  </li>
                ))}
             </ul>

             <div className="mt-16 pt-8 border-t border-brand-primary/10">
                <div className="flex justify-between items-center bg-brand-primary/10 p-4 rounded-lg">
                   <p className="font-mono text-xs text-brand-primary">BENCHMARK_RESULT</p>
                   <p className="font-bold text-brand-primary">+380% Efficiency</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
