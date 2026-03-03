import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: "Privacy Protocol | XenotriX Engineering",
  description: "XenotriX data protection and privacy standards. Built for compliance with GDPR, CCPA, and global data integrity protocols.",
  openGraph: {
    title: "Privacy Protocol | XenotriX Engineering",
    description: "Our engineered approach to data privacy and security.",
  }
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
