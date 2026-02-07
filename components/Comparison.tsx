import { Shield, Zap, TrendingUp, BarChart } from 'lucide-react';

const Comparison = () => {
  return (
    <section className="py-16 md:py-32 relative bg-surface/20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="tag">Strategic Edge</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white leading-[0.85]">
            The <span className="text-brand-primary">Advantage</span> of <br />
            Elite Partnership.
          </h2>
          <p className="text-xl text-text-dim leading-relaxed">
             We outperform traditional agencies by focusing on high-performance infrastructure and precision digital engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Comparison Cards */}
          <div className="space-y-4">
             <div className="premium-card p-10 bg-white/1 border-white/5">
                <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-10 pb-4 border-b border-white/5">Traditional Agencies</h3>
                <div className="space-y-8">
                   <div className="flex gap-4 opacity-50">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-[10px] font-black">×</div>
                      <p className="font-bold text-sm">Generic off-the-shelf software solutions</p>
                   </div>
                   <div className="flex gap-4 opacity-50">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-[10px] font-black">×</div>
                      <p className="font-bold text-sm">Inconsistent delivery & scaling bottlenecks</p>
                   </div>
                   <div className="flex gap-4 opacity-50">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-[10px] font-black">×</div>
                      <p className="font-bold text-sm">Vulnerable non-optimized infrastructure</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="space-y-4">
             <div className="premium-card p-10 border-brand-primary/30 bg-brand-primary/5">
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
                   <h3 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">XenotriX Engineering</h3>
                   <span className="text-[9px] font-black py-1 px-3 bg-brand-primary text-bg-dark rounded-full">GOLD STANDARD</span>
                </div>
                <div className="space-y-8">
                   <div className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-[10px] font-black">✓</div>
                      <p className="font-bold text-sm">Architecturally hardened custom software</p>
                   </div>
                   <div className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-[10px] font-black">✓</div>
                      <p className="font-bold text-sm">High-performance auto-scaling frameworks</p>
                   </div>
                   <div className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-[10px] font-black">✓</div>
                      <p className="font-bold text-sm">Enterprise-grade security & compliance</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-white/10">
           {[
             { icon: <Zap size={20} />, label: "Performance", val: "400% Faster" },
             { icon: <Shield size={20} />, label: "Security", val: "Zero Critical" },
             { icon: <TrendingUp size={20} />, label: "Uptime", val: "99.99% Guaranteed" },
             { icon: <BarChart size={20} />, label: "ROI", val: "12X Average" }
           ].map((stat, i) => (
             <div key={i} className="text-center group">
                <div className="mb-4 text-brand-primary flex justify-center group-hover:scale-125 transition-all duration-500 opacity-60 group-hover:opacity-100">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-1 tracking-tighter">{stat.val}</div>
                <div className="text-[9px] uppercase font-black text-text-dim tracking-[0.3em]">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
