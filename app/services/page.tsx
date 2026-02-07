import type { Metadata } from 'next';
import ServicesPageContent from '@/components/pages/ServicesPage';

export const metadata: Metadata = {
  title: "Precision Engineering Services | XenotriX",
  description: "Explore our specialized digital engineering capabilities, including global infrastructure development, AI architecture, and high-performance mobile units.",
  openGraph: {
    title: "Precision Engineering Services | XenotriX",
    description: "Explore our specialized digital engineering capabilities: Infrastructure, Intelligence, and Optimization.",
  }
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
