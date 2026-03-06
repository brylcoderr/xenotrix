import Hero from '@/components/Hero';
import PartnerLogos from '@/components/PartnerLogos';
import Solutions from '@/components/Solutions';
import Services from '@/components/Services';
import Process from '@/components/Process';
import LeadMagnet from '@/components/LeadMagnet';
import Packages from '@/components/Packages';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import Comparison from '@/components/Comparison';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />

      <PartnerLogos />

      <Solutions />

      <Services />

      <Process />

      <LeadMagnet />

      <Packages />

      <About />

      <Projects />

      <Testimonials />

      <Comparison />

      <Contact />
    </main>
  );
}
