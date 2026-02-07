'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div>
            <div className="tech-label">Get In Touch</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Let&apos;s Build Your <br />
              <span className="text-brand-primary">Next Project</span>.
            </h2>
            <p className="text-xl text-text-dim leading-relaxed mb-16 max-w-xl">
              Ready to deploy your next high-stakes digital product? Our engineering team is standing by to audit your requirements.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-1">Direct_Mail</p>
                  <p className="text-lg font-bold">sk@xenotrix.com</p>
                </div>
              </div>

              <a 
                href="https://cal.com/brylcodes/15min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-1">Live_Session</p>
                  <p className="text-lg font-bold group-hover:text-brand-primary transition-colors">Schedule a Tech Audit</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-text-dim uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-lg font-bold">Noida, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-panel p-10 md:p-12"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-text-dim uppercase tracking-widest">Full_Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-primary/50 transition-all text-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-text-dim uppercase tracking-widest">Email_Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-primary/50 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono text-text-dim uppercase tracking-widest">Select_Package</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-primary/50 transition-all text-sm appearance-none">
                  <option className="bg-bg-dark">MVP Launch</option>
                  <option className="bg-bg-dark">Enterprise Scale</option>
                  <option className="bg-bg-dark">AI Custom Ops</option>
                  <option className="bg-bg-dark">Other / Consult</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono text-text-dim uppercase tracking-widest">Project_Brief</label>
                <textarea 
                  rows={5} 
                  placeholder="Describe your technical requirements..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-primary/50 transition-all text-sm resize-none"
                />
              </div>

              <button className="btn-tech w-full flex items-center justify-center gap-3 group">
                Send Transmission
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
