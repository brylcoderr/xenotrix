import type { Metadata } from 'next';
import ProcessPageContent from '@/components/pages/ProcessPage';

export const metadata: Metadata = {
  title: "Our Engineering Process | XenotriX",
  description: "Learn about our operational framework and engineered delivery process. We follow a strict architectural protocol to ensure every shipment is battle-tested and mission-critical.",
  openGraph: {
    title: "Our Engineering Process | XenotriX",
    description: "Battle-tested architectural protocols and engineered delivery frameworks.",
  }
};

export default function ProcessPage() {
  return <ProcessPageContent />;
}
