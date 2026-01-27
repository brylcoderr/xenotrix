import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PartnerLogos from '@/components/PartnerLogos';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Packages from '@/components/Packages';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import Comparison from '@/components/Comparison';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-brand-primary/30 selection:text-white">
      {/* Visual Overlays for Vibe */}
      <div className="scanline" />
      <div className="noise-overlay" />
      
      <Navigation />
      
      <Hero />
      
      <PartnerLogos />

      <Services />

      <Process />
      
      <Packages />
      
      <About />
      
      <Projects layout="carousel" />

      <Testimonials />
      
      <Comparison />
      
      <Contact />
      
      <Footer />
    </main>
  );
}
