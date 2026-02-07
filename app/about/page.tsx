import type { Metadata } from 'next';
import AboutPageContent from '@/components/pages/AboutPage';

export const metadata: Metadata = {
  title: "About XenotriX - Our Engineering Manifesto",
  description: "Learn about XenotriX, a performance-led digital engineering agency. We architect elite digital experiences for high-growth global teams with precision and scale.",
  openGraph: {
    title: "About XenotriX - Our Engineering Manifesto",
    description: "Learn about XenotriX, a performance-led digital engineering agency architecting elite digital experiences.",
  }
};

export default function AboutPage() {
  return <AboutPageContent />;
}
