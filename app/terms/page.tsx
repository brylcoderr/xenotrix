import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: "Terms of Service | XenotriX Engineering",
  description: "Read the Terms of Service for XenotriX. Our engineered service level agreements and intellectual property protocols for elite engineering partnerships.",
  openGraph: {
    title: "Terms of Service | XenotriX Engineering",
    description: "Legal documentation and guidelines for engaging with XenotriX services.",
  }
};

export default function TermsPage() {
  return <TermsClient />;
}
