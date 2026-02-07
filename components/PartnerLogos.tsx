'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PartnerLogos = () => {
  const partners = [
    { 
      name: "Microsoft Azure", 
      logo: "/images/partners/azure.svg" 
    },
    { 
      name: "Vercel Enterprise", 
      logo: "/images/partners/vercel.svg" 
    },
    { 
      name: "Supabase Global", 
      logo: "/images/partners/supabase.svg" 
    },
    { 
      name: "OpenAI Partners", 
      logo: "/images/partners/openai.svg" 
    },
    { 
      name: "Cloudflare Network", 
      logo: "/images/partners/cloudflare.svg" 
    },
    { 
      name: "Amazon Web Services", 
      logo: "/images/partners/aws.svg" 
    },
    { 
      name: "Google Cloud", 
      logo: "/images/partners/googlecloud.svg" 
    },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="bg-bg-dark border-y border-white/5 py-24 overflow-hidden relative">
      {/* Background Glow - Theme Adjusted */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
      
      <div className="section-container mb-16 flex flex-col items-center relative z-10">
        <span className="tag mb-6">Strategic Partnerships</span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white text-center uppercase">
          Trusted by Industry Leaders Worldwide
        </h3>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ 
                duration: 50, 
                ease: "linear", 
                repeat: Infinity 
              }}
              className="flex gap-20 md:gap-32 items-center whitespace-nowrap px-12"
            >
              {duplicatedPartners.map((partner, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-6 group opacity-20 hover:opacity-100 transition-all duration-1000 cursor-default grayscale hover:grayscale-0 scale-90 hover:scale-105"
                >
                  <div className="relative w-8 h-8 md:w-10 md:h-10">
                     <Image 
                       src={partner.logo} 
                       alt={partner.name}
                       fill
                       className="object-contain brightness-0 invert"
                     />
                  </div>
                  <span className="font-black text-[10px] md:text-xs tracking-[0.4em] text-white uppercase whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
        </div>
        
        {/* Fade gradients */}
        <div className="absolute inset-y-0 left-0 w-64 bg-linear-to-r from-bg-dark via-bg-dark/50 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-64 bg-linear-to-l from-bg-dark via-bg-dark/50 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
};

export default PartnerLogos;
