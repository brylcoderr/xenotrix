import type { Metadata } from 'next';
import WorkPageContent from '@/components/pages/WorkPage';

export const metadata: Metadata = {
  title: "Case Studies & Portfolio | XenotriX",
  description: "Explore our history of mission-critical engineering. From fintech infrastructure to AI-native products, view our selected deployments and successful case studies.",
  openGraph: {
    title: "Case Studies & Portfolio | XenotriX",
    description: "View our portfolio of selected high-performance digital deployments.",
  }
};

export default function WorkPage() {
  return <WorkPageContent />;
}
