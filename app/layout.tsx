import type { Metadata } from "next";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatbotUI from '@/components/ChatbotUI';

export const metadata: Metadata = {
  metadataBase: new URL('https://xenotrix.com'),
  title: "XenotriX - Premium Digital Engineering & AI Solutions",
  description: "XenotriX is a leading digital engineering agency specializing in high-performance web applications, mobile infrastructure, and advanced AI integration.",
  keywords: ["digital agency", "web development", "AI solutions", "software engineering"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xenotrix.com/",
    title: "XenotriX - Premium Digital Engineering & AI Solutions",
    description: "Building the next generation of digital infrastructure and AI-driven experiences.",
    siteName: "XenotriX",
    images: [{ url: "/images/hero_visual.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth selection:bg-brand-primary/30 selection:text-white text-text-main">
        <Navigation />
        {children}
        <Footer />
        <ChatbotUI />
      </body>
    </html>
  );
}
