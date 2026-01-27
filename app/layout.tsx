import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XenotriX - Web, Mobile & AI Development Excellence",
  description: "XenotriX specializes in building websites, mobile apps, and AI solutions that connect with your ideal customers and accelerate online growth. Expert web development, mobile app development, and AI integration services.",
  keywords: "web development, mobile app development, AI solutions, Next.js, React, Flutter, chatbot development, SEO, AEO, GEO, digital agency, web design, UI/UX design",
  authors: [{ name: "XenotriX" }],
  creator: "XenotriX",
  publisher: "XenotriX",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://xenotrix.com/",
    title: "XenotriX - Web, Mobile & AI Development Excellence",
    description: "Innovative web, mobile, and AI-powered applications that empower businesses to thrive in the digital era. Transform your ideas into intelligent digital experiences.",
    siteName: "XenotriX",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "XenotriX - Web, Mobile & AI Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XenotriX - Web, Mobile & AI Development Excellence",
    description: "Innovative web, mobile, and AI-powered applications that empower businesses to thrive in the digital era.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://xenotrix.com/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0a0a0a",
  viewport: "width=device-width, initial-scale=1",
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
        "@type": "Organization",
        "@id": "https://xenotrix.com/#organization",
        "name": "XenotriX",
        "url": "https://xenotrix.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://xenotrix.com/logo.png"
        },
        "description": "We're a team of web, mobile, brand and design experts using AI to build growth-driven solutions for businesses across the globe.",
        "telephone": "+91-95576-60208",
        "email": "contact@xenotrix.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://www.linkedin.com/company/xenotrix",
          "https://www.instagram.com/xenotrix",
          "https://www.facebook.com/xenotrix",
          "https://www.reddit.com/r/xenotrix"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://xenotrix.com/#website",
        "url": "https://xenotrix.com",
        "name": "XenotriX",
        "publisher": {
          "@id": "https://xenotrix.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://xenotrix.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Web Development",
        "provider": {
          "@id": "https://xenotrix.com/#organization"
        },
        "areaServed": "Worldwide",
        "description": "Professional web application development using Next.js, React, Laravel, and modern frameworks."
      },
      {
        "@type": "Service",
        "serviceType": "Mobile App Development",
        "provider": {
          "@id": "https://xenotrix.com/#organization"
        },
        "areaServed": "Worldwide",
        "description": "Custom mobile app development using Flutter and React Native for iOS and Android."
      },
      {
        "@type": "Service",
        "serviceType": "AI Solutions",
        "provider": {
          "@id": "https://xenotrix.com/#organization"
        },
        "areaServed": "Worldwide",
        "description": "AI-powered chatbots, OpenAI integration, and n8n automation solutions for businesses."
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "SoftwareApplication",
            "position": 1,
            "name": "Web Apps Development",
            "description": "Design and development of modern, responsive web applications"
          },
          {
            "@type": "SoftwareApplication",
            "position": 2,
            "name": "Mobile Apps Development",
            "description": "UI/UX design and development of native and cross-platform mobile applications"
          },
          {
            "@type": "SoftwareApplication",
            "position": 3,
            "name": "AI Solutions",
            "description": "Chatbot development, OpenAI integration, and n8n workflow automation"
          }
        ]
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
