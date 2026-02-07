import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://xenotrix.com'),
  title: {
    default: "XenotriX - Digital Engineering Agency | Web, Mobile & AI Solutions",
    template: "%s | XenotriX"
  },
  description: "XenotriX is an elite digital engineering agency specializing in high-performance web apps, mobile infrastructure, and advanced AI integration for global teams.",
  keywords: ["web development agency", "mobile app engineering", "AI integration services", "Next.js experts", "enterprise software architecture", "SaaS development"],
  authors: [{ name: "XenotriX Engineering Team", url: "https://xenotrix.com" }],
  creator: "XenotriX",
  publisher: "XenotriX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xenotrix.com/",
    title: "XenotriX - Elite Digital Engineering & AI Architecture",
    description: "Architecting mission-critical digital experiences. We build high-performance infrastructure and elite products for global growth.",
    siteName: "XenotriX",
    images: [
      {
        url: "/images/hero_visual.png",
        width: 1200,
        height: 630,
        alt: "XenotriX Engineering - Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XenotriX - Elite Digital Engineering Agency",
    description: "Deploying high-performance infrastructure and elite digital products for ambitious global teams.",
    creator: "@brylcodes",
    images: ["/images/hero_visual.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://xenotrix.com/",
  },
  icons: {
    icon: [
      { url: "/images/logo.png" },
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://xenotrix.com/#organization",
        "name": "XenotriX",
        "url": "https://xenotrix.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://xenotrix.com/images/logo.png"
        },
        "image": "https://xenotrix.com/images/hero_visual.png",
        "description": "High-performance digital engineering agency specializing in Web, Mobile, and AI solutions.",
        "telephone": "+91-95576-60208",
        "email": "sk@xenotrix.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Noida",
          "addressLocality": "Noida",
          "addressRegion": "UP",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.5355",
          "longitude": "77.3910"
        },
        "sameAs": [
          "https://www.linkedin.com/company/xenotrixofficial",
          "https://twitter.com/brylcodes"
        ],
        "priceRange": "$$$"
      },
      {
        "@type": "WebSite",
        "@id": "https://xenotrix.com/#website",
        "url": "https://xenotrix.com",
        "name": "XenotriX",
        "publisher": {
          "@id": "https://xenotrix.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
