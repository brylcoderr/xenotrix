'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark pt-12 pb-8 border-t border-white/5 font-sans">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src="/images/logo.png" 
                  alt="XenotriX" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase italic">XenotriX</span>
            </Link>
            <p className="text-text-dim text-base leading-relaxed mb-8 opacity-70">
              A premier digital engineering agency dedicated to building high-performance solutions for the modern enterprise.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/company/xenotrixofficial" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:bg-brand-primary hover:text-bg-dark transition-all transform hover:scale-110"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Expertise</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-xs text-text-dim hover:text-white transition-colors">Digital Strategy</Link></li>
              <li><Link href="#services" className="text-xs text-text-dim hover:text-white transition-colors">Web Engineering</Link></li>
              <li><Link href="#services" className="text-xs text-text-dim hover:text-white transition-colors">Mobile Solutions</Link></li>
              <li><Link href="#services" className="text-xs text-text-dim hover:text-white transition-colors">AI & Data</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-xs text-text-dim hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="#work" className="text-xs text-text-dim hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#process" className="text-xs text-text-dim hover:text-white transition-colors">Our Method</Link></li>
              <li><Link href="#contact" className="text-xs text-text-dim hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="https://cal.com/brylcodes/15min" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-primary hover:text-white transition-colors font-bold">Schedule Meet</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Headquarters</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-brand-primary mt-0.5 shrink-0" />
                <p className="text-xs text-text-dim leading-relaxed">Sector 62, Noida, Uttar Pradesh 201309, India</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-brand-primary shrink-0" />
                <p className="text-xs text-text-dim">sk@xenotrix.com</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-brand-primary shrink-0" />
                <p className="text-xs text-text-dim">+91-95576-60208</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-[10px] font-medium uppercase tracking-widest opacity-40">
            © {currentYear} XenotriX Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-medium uppercase tracking-widest opacity-40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
