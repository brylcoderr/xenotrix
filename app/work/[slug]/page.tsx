'use client';

import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const caseData = {
  "finscale-platform": {
    title: "FinScale Platform",
    client: "Capital One Partner",
    status: "SYSTEMS_ONLINE",
    tech: ["Next.js", "Redis Graph", "PostgreSQL", "Kafka"],
    description: "A high-performance real-time auditing and financial monitoring infrastructure built for zero-latency operations.",
    problem: "The legacy system was monolithic, causing substantial delays during high-volume trading hours. Latency spikes of up to 15 seconds led to critical compliance failures and manual data reconciliation costs exceeding $2M annually.",
    solution: "We architected an event-driven microservices ecosystem using Kafka for message queuing and a multi-layer Redis caching strategy. The frontend was rebuilt with Next.js for sub-second dashboard rendering and real-time data streaming.",
    metrics: [
      { label: "Global Latency", value: "< 30ms", desc: "99.8% reduction from legacy" },
      { label: "Data Throughput", value: "250k event/s", desc: "Stable during peak trading" },
      { label: "Manual Errors", value: "-94%", desc: "Automated reconciliation logic" }
    ],
    stack: [
      { category: "Frontend", tech: "Next.js 16, Tailwind, Framer Motion" },
      { category: "Backend", tech: "Golang, Node.js Microservices" },
      { category: "Infrastructure", tech: "AWS EKS, Redis, Managed Kafka" }
    ],
    image: "/images/finscale_hero.png",
    demoUrl: ""
  },
  "medinode-mobile": {
    title: "MediNode Mobile",
    client: "HealthLink Inc",
    status: "DEPLOYED_STABLE",
    tech: ["React Native", "Go", "AWS", "WebRTC"],
    description: "Mission-critical patient management and communication suite with end-to-end encryption and real-time telemetry.",
    problem: "Doctors lacked real-time access to patient vitals during hospital rounds. Intermittent Wi-Fi signals caused data loss in 15% of sync attempts, and existing communications were not fully HIPAA compliant.",
    solution: "Developed a native-performance mobile suite using React Native with a custom C++ synchronization engine. Implemented zero-knowledge E2EE for all medical data and real-time vital telemetry via high-speed WebRTC channels.",
    metrics: [
      { label: "Sync Reliability", value: "99.99%", desc: "Zero data loss during outages" },
      { label: "Response Time", value: "-34%", desc: "Faster emergency interventions" },
      { label: "Active Nodes", value: "1,200+", desc: "Concurrent hospital devices" }
    ],
    stack: [
      { category: "Mobile", tech: "React Native, JSI, Reanimated" },
      { category: "Cloud", tech: "AWS Fargate, DynamoDB, S3" },
      { category: "Encryption", tech: "Libsodium, Signal Protocol" }
    ],
    image: "/images/medinode_hero.png",
    demoUrl: ""
  },
  "autoquery-engine": {
    title: "AutoQuery Engine",
    client: "Enterprise SaaS",
    status: "SCALING_ACTIVE",
    tech: ["Python", "Pinecone", "GPT-4", "FastAPI"],
    description: "AI-native knowledge retrieval and automated response engine for high-volume enterprise support environments.",
    problem: "Support teams were drowned in 10k+ daily tickets, 60% of which required manual lookup in scattered documentation. Customer churn was rising due to 4-hour average response times for technical queries.",
    solution: "Built a Retrieval-Augmented Generation (RAG) pipeline. We vectorized 50k+ internal documents into Pinecone and developed a proprietary context-ranking algorithm that feeds the most relevant data into GPT-4 for sub-second accurate responses.",
    metrics: [
      { label: "Resolution Rate", value: "72%", desc: "Fully automated without agents" },
      { label: "Avg Response", value: "< 5s", desc: "Down from 4 hours average" },
      { label: "Cost Savings", value: "40%", desc: "Operational support overhead" }
    ],
    stack: [
      { category: "AI/ML", tech: "OpenAI API, LangChain, Pinecone" },
      { category: "Backend", tech: "FastAPI, Docker, Google Cloud" },
      { category: "Database", tech: "MongoDB, Redis" }
    ],
    image: "/images/autoquery_hero.png",
    demoUrl: ""
  },
  "healthcare-platform": {
    title: "OmniHealth Dental",
    client: "Global Dental Clinic",
    status: "DEPLOYED_ACTIVE",
    tech: ["Next.js", "Strapi", "Prisma", "AWS"],
    description: "Specialized ecosystem for medical practitioner workflows and patient acquisition channels.",
    problem: "Legacy dental clinics suffered from archaic scheduling protocols, leading to 12+ lost hours weekly and high patient churn due to friction in automated communications.",
    solution: "We deployed a high-speed Next.js frontend with automated patient re-engagement algorithms. Integrated a real-time availability engine that syncs directly with clinical back-office systems.",
    metrics: [
      { label: "Staff Efficiency", value: "+85%", desc: "Manual booking time saved" },
      { label: "No-Show Rate", value: "-40%", desc: "Automated SMS engagement" },
      { label: "Monthly Users", value: "15k+", desc: "Active patient portals" }
    ],
    stack: [
      { category: "Frontend", tech: "Next.js, Tailwind CSS, Framer Motion" },
      { category: "CMS", tech: "Strapi Headless CMS" },
      { category: "DB", tech: "PostgreSQL with Prisma ORM" }
    ],
    image: "/images/Healthcare_r1_c1_processed_by_imagy.png",
    demoUrl: ""
  },
  "ecommerce-platform": {
    title: "VentureStore Elite",
    client: "Boutique Retail Group",
    status: "SCALE_READY",
    tech: ["Shopify Headless", "React", "Node.js", "Vercel Edge"],
    description: "High-performance headless e-commerce architecture designed for sub-second load times and global distribution.",
    problem: "Standard Shopify themes were failing to maintain sub-second LCP (Largest Contentful Paint) during viral sales drops, causing a 20% drop in conversion from mobile users.",
    solution: "Decoupled the storefront from Shopify's liquid engine. Implemented a custom React frontend on Vercel Edge with ISR (Incremental Static Regeneration) for instant product updates and zero-latency checkout.",
    metrics: [
      { label: "Conversion Lift", value: "22%", desc: "Due to speed and UX gravity" },
      { label: "Page Load", value: "0.8s", desc: "Globally distributed content" },
      { label: "Uptime", value: "99.99%", desc: "Edge-resilient architecture" }
    ],
    stack: [
      { category: "Engine", tech: "Shopify Buy SDK (Headless)" },
      { category: "Frontend", tech: "React, GSAP Animations" },
      { category: "Deployment", tech: "Vercel Edge Functions" }
    ],
    image: "/images/ecommerce_hero.png",
    demoUrl: ""
  },
  "fitness-platform": {
    title: "PulseFlow Fitness",
    client: "Health & Wellness Startup",
    status: "GROWTH_OPS",
    tech: ["Supabase", "React Native", "Tailwind", "Stripe"],
    description: "Community-centric fitness platform focusing on real-time class orchestration and seamless trainer onboarding.",
    problem: "Traditional fitness apps had high friction in community engagement and real-time class booking, leading to low daily active user (DAU) retention.",
    solution: "Engineered a realtime event-bus using Supabase for instant class updates. Developed a high-fidelity Tailwind interface that prioritizes mobile-native micro-interactions to drive habitual usage.",
    metrics: [
      { label: "DAU Retention", value: "+18%", desc: "Month-over-month growth" },
      { label: "Interaction", value: "3.5x", desc: "User engagement per session" },
      { label: "Onboarding", value: "< 2min", desc: "Automated trainer verification" }
    ],
    stack: [
      { category: "Realtime", tech: "Supabase Websockets" },
      { category: "Mobile", tech: "React Native Expo" },
      { category: "Payment", tech: "Stripe Connect Integration" }
    ],
    image: "/images/Fitness_r1_c1_processed_by_imagy.png",
    demoUrl: ""
  },
  "realestate-portal": {
    title: "Horizon Realty Hub",
    client: "Prime Real Estate Group",
    status: "SYSTEM_LIVE",
    tech: ["Mapbox GL", "PostGIS", "Next.js", "Python"],
    description: "Advanced spatial data portal for enterprise real estate listings and agent-management systems.",
    problem: "Real estate search portals often struggle with geographic latency. The client's portal had slow map rendering which caused users to exit before seeing localized property ROI data.",
    solution: "Implemented a PostGIS spatial database for vector-tile generation. Integrated Mapbox GL for hardware-accelerated rendering of 5,000+ localized listing nodes with zero input lag.",
    metrics: [
      { label: "Geographic Lead", value: "+45%", desc: "Increase in localized inquiries" },
      { label: "Map Latency", value: "-70%", desc: "Sub-second listing clusters" },
      { label: "Agent Efficiency", value: "+30%", desc: "Automated CRM lead routing" }
    ],
    stack: [
      { category: "Geo", tech: "Mapbox GL JS, PostGIS" },
      { category: "DB", tech: "Managed PostgreSQL" },
      { category: "API", tech: "Python/FastAPI Service layer" }
    ],
    image: "/images/Real estate_r1_c1_processed_by_imagy.png",
    demoUrl: ""
  },
  "saas-dashboard": {
    title: "Saas Dashboard",
    client: "Enterprise SaaS",
    status: "SYSTEM_LIVE",
    tech: ["TypeScript", "React", "Next.js"],
    description: "Enterprise-grade data visualization platform for complex states.",
    problem: "Enterprise users often struggle with sluggish data visualization tools that fail to handle complex state, leading to decision-making bottlenecks.",
    solution: "Engineered a high-performance dashboard with optimized state management and real-time data visualization using Next.js and specialized charting libraries.",
    metrics: [
      { label: "Performance", value: "99/100", desc: "Optimized state management" },
      { label: "Data Latency", value: "<50ms", desc: "Real-time updates" }
    ],
    stack: [
      { category: "Frontend", tech: "Next.js, TypeScript" },
      { category: "Visualization", tech: "Recharts, D3.js" },
      { category: "Deployment", tech: "Vercel" }
    ],
    image: "/images/Dashboards (1).png",
    demoUrl: ""
  },
  "saas-landing": {
    title: "Saas Landing",
    client: "SaaS Startup",
    status: "LIVE_STABLE",
    tech: ["TypeScript", "React", "Next.js"],
    description: "High-conversion landing page with sub-second load times.",
    problem: "Generic landing pages suffered from high bounce rates due to slow mobile load times and fractured user journeys.",
    solution: "Designed and developed a performance-first landing page with optimized asset delivery and seamless animations.",
    metrics: [
      { label: "Bounce Rate", value: "-45%", desc: "Better user engagement" },
      { label: "Load Time", value: "0.6s", desc: "Sub-second delivery" }
    ],
    stack: [
      { category: "Frontend", tech: "Next.js, Framer Motion" },
      { category: "Optimization", tech: "Vercel Edge, ISR" },
      { category: "Design", tech: "Tailwind CSS" }
    ],
    image: "/images/Skipper_r1_c1_processed_by_imagy.png",
    demoUrl: ""
  },
  "ai-landing-page": {
    title: "AI Landing Page",
    client: "AI Tech Corp",
    status: "PRODUCTION_READY",
    tech: ["TypeScript", "React", "Next.js"],
    description: "Complex technical value proposition explained through interactive UI.",
    problem: "AI startups struggle to explain complex value propositions to non-technical users.",
    solution: "Implemented an interactive, visually rich landing page that simplifies complex AI concepts through intuitive UX.",
    metrics: [
      { label: "Signups", value: "+120%", desc: "Increased conversion" },
      { label: "User Session", value: "3.5m", desc: "Higher engagement" }
    ],
    stack: [
      { category: "Frontend", tech: "Next.js, React" },
      { category: "Interactions", tech: "Three.js, Framer Motion" },
      { category: "Analytics", tech: "Posthog, Mixpanel" }
    ],
    image: "/images/Pointer_r1_c1_processed_by_imagy.png",
    demoUrl: ""
  },
  "photography-banner": {
    title: "Photography Banner",
    client: "Professional Studio",
    status: "DEPLOYED",
    tech: ["TypeScript", "React", "Next.js"],
    description: "SEO-optimized high-resolution portfolio with perfect vitals.",
    problem: "High-resolution portfolios often fail to pass Google’s Core Web Vitals.",
    solution: "Leveraged Next.js Image optimization and lazy loading strategies to deliver a visually stunning, high-res portfolio.",
    metrics: [
      { label: "SEO Score", value: "100/100", desc: "Google Lighthouse perfect" },
      { label: "Core Vitals", value: "Passed", desc: "Fastest performance" }
    ],
    stack: [
      { category: "Engine", tech: "Next.js 15" },
      { category: "Images", tech: "Next Image, Cloudinary" },
      { category: "Hosting", tech: "Vercel" }
    ],
    image: "/images/PhotoGraphy_r1_c1_processed_by_imagy.png",
    demoUrl: ""
  },
  "katachi-studio": {
    title: "Katachi Studio",
    client: "Creative Agency",
    status: "LIVE",
    tech: ["TypeScript", "React", "Next.js"],
    description: "Highly dynamic, non-traditional layout with a slim codebase.",
    problem: "Creative agencies require non-traditional, highly dynamic layouts that often fight against standard CSS frameworks.",
    solution: "Created a custom, lightweight design system that allows for extreme flexibility and dynamic layouts.",
    metrics: [
      { label: "Bundle Size", value: "-60%", desc: "Lean production build" },
      { label: "FPS", value: "60+", desc: "Smooth animations" }
    ],
    stack: [
      { category: "CSS", tech: "Custom Theme UI" },
      { category: "Logic", tech: "React Server Components" },
      { category: "Performance", tech: "Edge Cached" }
    ],
    image: "/images/Katachi_r1_c1_processed_by_imagy.png",
    demoUrl: ""
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = caseData[slug as keyof typeof caseData];

  if (!data) return <div className="min-h-screen bg-bg-dark flex items-center justify-center font-mono">404_METADATA_NOT_FOUND</div>;

  return (
    <main className="min-h-screen bg-bg-dark text-white selection:bg-brand-primary/30">
      
      
      <div className="pt-32 pb-24">
        <div className="section-container">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-text-dim hover:text-brand-primary transition-colors mb-16">
            <ArrowLeft size={14} />
            BACK_TO_TERMINAL
          </Link>

          <header className="max-w-4xl mb-24">
            <div className="tech-label">{data.client}</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10">
              {data.title}
            </h1>
            <p className="text-2xl text-text-dim leading-relaxed font-medium mb-12">
              {data.description}
            </p>
          </header>

          {/* Hero Image */}
          <div className="relative aspect-21/9 w-full rounded-3xl overflow-hidden mb-24 border border-white/10 glass-panel p-1">
             <Image 
               src={data.image} 
               alt={data.title}
               fill
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 via-transparent to-transparent opacity-60" />
          </div>

          <div className="grid lg:grid-cols-3 gap-16 mb-24">
             <div className="lg:col-span-2 space-y-20">
                <section>
                   <h2 className="tech-label">01 // THE CHALLENGE</h2>
                   <p className="text-xl text-white/90 leading-relaxed font-light">
                      {data.problem}
                   </p>
                </section>

                <section>
                   <h2 className="tech-label">02 // THE EXECUTION</h2>
                   <p className="text-xl text-white/90 leading-relaxed font-light">
                      {data.solution}
                   </p>
                </section>

                <section>
                   <h2 className="tech-label">03 // TECHNICAL ARCHITECTURE</h2>
                   <div className="grid sm:grid-cols-3 gap-6">
                      {data.stack.map((item, i) => (
                        <div key={i} className="glass-panel p-6 border-white/5 bg-white/2">
                           <p className="font-mono text-[10px] text-brand-primary uppercase tracking-widest mb-3">{item.category}</p>
                           <p className="text-sm font-bold text-white/80">{item.tech}</p>
                        </div>
                      ))}
                   </div>
                </section>
             </div>

             <aside className="space-y-6">
                <div className="glass-panel p-8 border-brand-primary/20 bg-brand-primary/5">
                   <h3 className="font-mono text-xs font-bold text-brand-primary uppercase tracking-widest mb-8">Performance Metrics</h3>
                   <div className="space-y-10">
                      {data.metrics.map((m, i) => (
                        <div key={i}>
                           <p className="text-text-dim text-[10px] font-mono uppercase mb-2">{m.label}</p>
                           <p className="text-4xl font-black text-white mb-1 tracking-tighter">{m.value}</p>
                           <p className="text-[10px] font-mono text-brand-primary/60 italic">{m.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="glass-panel p-8">
                   <p className="font-mono text-[10px] text-text-dim uppercase tracking-widest mb-4">DEPLOYMENT_STATUS</p>
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="font-bold text-sm tracking-tight">{data.status}</p>
                   </div>
                </div>
             </aside>
          </div>
        </div>
      </div>

    </main>
  );
}
