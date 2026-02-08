'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Mail, Send, MapPin, Phone, ShieldCheck, Activity, Globe, Lock, Clock, CheckCircle2, Calendar, Coins } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/mqepnnod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-bg-dark overflow-hidden font-sans">
      {/* Cinematic Background Engine */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
      <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] opacity-20 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] opacity-20" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          
          {/* Communication Intelligence Column */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-12">
            <div>
              <span className="tag">Strategic Consultation Bridge</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.85] text-white">
                Initiate Your <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-violet-600 animate-gradient">Digital Breakthrough.</span>
              </h2>
              <p className="text-lg md:text-xl text-text-dim leading-snug font-medium opacity-80 max-w-lg">
                Our clinical engineering team is ready to architect your next mission-critical deployment. Secure your primary evaluation today.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                { icon: <Mail size={18} />, label: "Secure Gateway", value: "sk@xenotrix.com", sub: "Priority Response Active", href: "mailto:sk@xenotrix.com" },
                { icon: <Clock size={18} />, label: "Quick Meeting", value: "Schedule evaluation", sub: "15min Strategy Session", href: "https://cal.com/brylcodes/15min" },
                { icon: <Phone size={18} />, label: "Direct Line", value: "+91-95576-60208", sub: "International Protocol" },
                { icon: <MapPin size={18} />, label: "Mission Control", value: "Noida Sector-62, IN", sub: "Global Distribution Node" }
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href || "#"}
                  target={item.href?.startsWith('http') ? "_blank" : undefined}
                  className="flex items-center gap-5 p-5 rounded-3xl bg-white/3 border border-white/5 hover:border-brand-primary/30 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-brand-primary group-hover:text-bg-dark group-hover:scale-105 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-black text-brand-primary uppercase tracking-[0.4em] mb-1">{item.label}</div>
                    <div className="text-base font-bold text-white tracking-tight">{item.value}</div>
                  </div>
                  <div className="text-[9px] font-black text-white/20 uppercase tracking-widest hidden sm:block">
                    {item.sub}
                  </div>
                </Link>
              ))}
            </div>

            <div className="p-5 border border-white/5 rounded-3xl bg-white/1 flex items-center gap-4 group">
               <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Activity size={16} className="animate-pulse" />
               </div>
               <div className="flex flex-1 justify-between items-center">
                  <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">System Uptime: 99.9%</span>
                  <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-brand-primary animate-ping" />
                    Nodes_Online
                  </span>
               </div>
            </div>
          </div>

          {/* Inquiry Terminal Column */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="relative p-px bg-linear-to-br from-white/20 via-white/5 to-transparent rounded-5xl shadow-2xl">
              <div className="bg-bg-dark rounded-[2.4rem] overflow-hidden flex flex-col group min-h-[700px]">
                
                {/* Tactical Terminal Header */}
                <div className="bg-white/5 border-b border-white/5 px-8 md:px-12 py-6 flex items-center justify-between shrink-0">
                   <div className="flex items-center gap-6">
                      <div className="flex gap-2">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                         <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                         <div className="w-2.5 h-2.5 rounded-full bg-violet-500/20 border border-violet-500/40" />
                      </div>
                      <div className="h-4 w-px bg-white/10 hidden sm:block" />
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] hidden sm:block">
                        Terminal_ID::XNX-882
                      </div>
                   </div>
                   <div className="flex items-center gap-3 px-4 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20">
                      <div className={`w-1 h-1 rounded-full animate-pulse ${status === 'success' ? 'bg-brand-primary' : 'bg-violet-500'}`} />
                      <span className="text-[9px] font-black text-violet-500 uppercase tracking-widest">
                        {status === 'success' ? 'PROTOCOL_COMPLETE' : 'GATEWAY_READY'}
                      </span>
                   </div>
                </div>

                <div className="flex-1 relative overflow-hidden flex flex-col">
                  {/* Internal Cinematic Overlays */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] opacity-20 group-hover:scale-150 transition-transform duration-2000" />
                  
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 text-center z-10"
                      >
                         <div className="w-20 h-20 rounded-3xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary mb-8 shadow-2xl shadow-brand-primary/10">
                            <CheckCircle2 size={40} className="animate-pulse" />
                         </div>
                         <h3 className="text-4xl font-bold text-white tracking-tighter mb-4 leading-tight">Transmission <br /><span className="text-brand-primary">Received.</span></h3>
                         <p className="text-text-dim max-w-sm mb-10 font-medium">Your mission briefing has been successfully encrypted and logged. Our engineering leads will review the parameters and establish a bridge within 12-24 cycles.</p>
                         <button 
                          onClick={() => setStatus('idle')}
                          className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:bg-white hover:text-bg-dark transition-all"
                         >
                           Open New Terminal
                         </button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-8 md:p-12 lg:p-16"
                      >
                        <div className="mb-12 relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-2">Inquiry Terminal_v5.0</h3>
                            <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] opacity-80">Mission Critical Communication Protocol</p>
                        </div>
                        
                        <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2.5">
                              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">Commander Name</label>
                              <div className="relative group/input">
                                 <input 
                                  type="text" 
                                  name="name"
                                  required
                                  placeholder="IDENTIFY"
                                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white focus:border-brand-primary/40 focus:bg-white/10 outline-none transition-all placeholder:text-white/5 font-bold tracking-tight text-base"
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-brand-primary/40 transition-colors">
                                  <Lock size={16} />
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2.5">
                              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">Operational Email</label>
                              <div className="relative group/input">
                                 <input 
                                  type="email" 
                                  name="email"
                                  required
                                  placeholder="PROTOCOL_ADDRESS"
                                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white focus:border-brand-primary/40 focus:bg-white/10 outline-none transition-all placeholder:text-white/5 font-bold tracking-tight text-base"
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-brand-primary/40 transition-colors">
                                  <Globe size={16} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2.5">
                              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">Assigned Budget</label>
                              <div className="relative group/input">
                                 <select 
                                  name="budget"
                                  required
                                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white focus:border-brand-primary/40 focus:bg-white/10 outline-none transition-all font-bold tracking-tight text-base appearance-none cursor-pointer"
                                 >
                                    <option value="" className="bg-bg-dark text-white/40">CALIBRATE_BUDGET</option>
                                    <option value="under-5k" className="bg-bg-dark">Less than $5,000</option>
                                    <option value="5k-15k" className="bg-bg-dark">$5,000 - $15,000</option>
                                    <option value="15k-50k" className="bg-bg-dark">$15,000 - $50,000</option>
                                    <option value="50k-plus" className="bg-bg-dark">$50,000+</option>
                                 </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-brand-primary/40 transition-colors pointer-events-none">
                                  <Coins size={16} />
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2.5">
                              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">Launch Protocol Date</label>
                              <div className="relative group/input">
                                 <input 
                                  type="date" 
                                  name="startDate"
                                  required
                                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white focus:border-brand-primary/40 focus:bg-white/10 outline-none transition-all font-bold tracking-tight text-base dark:scheme-dark"
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within/input:text-brand-primary/40 transition-colors pointer-events-none">
                                  <Calendar size={16} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2.5">
                            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-2">Mission Briefing</label>
                            <textarea 
                              name="message"
                              required
                              rows={4} 
                              placeholder="DESCRIBE_OBJECTIVES_AND_CONSTRAINTS"
                              className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 text-white focus:border-brand-primary/40 focus:bg-white/10 outline-none transition-all placeholder:text-white/5 font-bold tracking-tight text-base resize-none"
                            />
                          </div>

                          <div className="pt-4">
                             <button 
                              type="submit" 
                              disabled={status === 'submitting'}
                              className="w-full relative group/btn overflow-hidden disabled:opacity-50"
                             >
                                <div className="absolute inset-0 bg-linear-to-r from-brand-primary to-violet-600 rounded-2xl" />
                                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 rounded-2xl" />
                                <div className="relative z-10 py-6 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-bg-dark group-hover/btn:text-bg-dark transition-colors">
                                  {status === 'submitting' ? 'Transmitting Data...' : 'Initiate Protocol'}
                                  <Send size={18} className={`${status === 'submitting' ? 'animate-ping' : 'group-hover/btn:-rotate-12'} transition-transform`} />
                                </div>
                             </button>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 opacity-40">
                             <div className="flex items-center gap-2">
                                <ShieldCheck size={12} className="text-brand-primary" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-white">Encrypted_Submission_Node</span>
                             </div>
                             {status === 'error' && (
                               <span className="text-[9px] font-black uppercase tracking-widest text-red-500">Node Error - Retry Required</span>
                             )}
                             <p className="text-[9px] font-black text-white uppercase tracking-[0.2em]">
                               Response Window: &lt; 24h
                             </p>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

