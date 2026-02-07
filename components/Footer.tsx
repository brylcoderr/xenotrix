'use client';

import { Github, Linkedin, Twitter, MessageCircle, Terminal, ShieldCheck, Cpu } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-32 bg-bg-dark border-t border-white/5">
      <div className="section-container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 mb-32">
          <div className="lg:col-span-1">
             <div className="flex items-center gap-4 mb-10">
                 <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <ShieldCheck size={20} fill="currentColor" fillOpacity={0.1} />
                 </div>
                 <span className="text-2xl font-black tracking-tighter">XENOTRIX</span>
             </div>
             <p className="text-base text-text-dim leading-relaxed mb-10">
               A performance-led digital engineering agency. We architect elite digital experiences for high-growth global teams.
             </p>
             <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/brylcoderr" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/xenotrixofficial" },
                  { Icon: Twitter, href: "https://twitter.com/brylcodes" },
                  { Icon: MessageCircle, href: "mailto:sk@xenotrix.com" }
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-text-dim hover:text-white hover:bg-brand-primary transition-all duration-500">
                    <Icon size={20} />
                  </a>
                ))}
             </div>
          </div>

          <div>
             <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-10">Engineering</h4>
             <ul className="space-y-5 text-sm font-medium text-text-dim">
                <li><Link href="/services" className="hover:text-brand-primary transition-colors flex items-center gap-3"><span className="w-4 h-px bg-white/5" />Product Design</Link></li>
                <li><Link href="/services" className="hover:text-brand-primary transition-colors flex items-center gap-3"><span className="w-4 h-px bg-white/5" />Scalable Ops</Link></li>
                <li><Link href="/services" className="hover:text-brand-primary transition-colors flex items-center gap-3"><span className="w-4 h-px bg-white/5" />AI Architecture</Link></li>
                <li><Link href="/services" className="hover:text-brand-primary transition-colors flex items-center gap-3"><span className="w-4 h-px bg-white/5" />Custom Logic</Link></li>
             </ul>
          </div>

          <div>
             <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-10">Company</h4>
             <ul className="space-y-5 text-sm font-medium text-text-dim">
                <li><Link href="/about" className="hover:text-brand-primary transition-colors flex items-center gap-3"><span className="w-4 h-px bg-white/5" />Manifesto</Link></li>
                <li><Link href="/work" className="hover:text-brand-primary transition-colors flex items-center gap-3"><span className="w-4 h-px bg-white/5" />Case Studies</Link></li>
                <li><Link href="/about" className="hover:text-brand-primary transition-colors flex items-center gap-3"><span className="w-4 h-px bg-white/5" />Careers</Link></li>
                <li><Link href="/#contact" className="hover:text-brand-primary transition-colors flex items-center gap-3"><span className="w-4 h-px bg-white/5" />Contact</Link></li>
             </ul>
          </div>

          <div className="glass-panel p-8 border-brand-primary/10">
             <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-primary font-bold mb-8">System Status</h4>
             <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-pulse" />
                <p className="text-xs font-mono font-bold tracking-tight text-white uppercase italic">All Nodes Active</p>
             </div>
             
             <div className="space-y-6">
                <div>
                   <p className="text-[10px] font-mono text-text-dim leading-none mb-2 uppercase flex items-center gap-2">
                     <Terminal size={10} className="text-brand-primary" />
                     Global_Uptime
                   </p>
                   <p className="text-2xl font-black tracking-tighter text-white">99.992%</p>
                </div>
                <div>
                   <p className="text-[10px] font-mono text-text-dim leading-none mb-2 uppercase flex items-center gap-2">
                     <Cpu size={10} className="text-brand-primary" />
                     Deployments
                   </p>
                   <p className="text-2xl font-black tracking-tighter text-white">V4.2.0_STABLE</p>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col gap-2">
              <p className="text-[10px] font-mono text-text-dim uppercase tracking-[0.3em]">
                © {currentYear} XENOTRIX_SYSTEMS. ALL RIGHTS RESERVED.
              </p>
              <p className="text-[9px] font-mono text-white/20 tracking-widest uppercase">
                LATENCY::OPTIMIZED | ENCRYPTION::ACTIVE
              </p>
           </div>
           <div className="flex gap-10 text-[10px] font-mono text-text-dim uppercase tracking-[0.3em]">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy_Protocol</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms_of_Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
