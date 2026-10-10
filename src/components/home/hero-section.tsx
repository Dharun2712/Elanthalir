"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85dvh] sm:min-h-[90dvh] lg:min-h-[95dvh] w-full overflow-hidden bg-[#123D2A] text-white flex flex-col justify-between">
      {/* Edge-to-edge Background Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="தமிழ்நாடு மகளிர் குழுவினர் ஆலோசனை செய்யும் காட்சி"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-[0.85]"
          sizes="100vw"
        />
        {/* Dark Forest Green Translucent Cinematic Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123D2A]/95 via-[#123D2A]/80 to-[#123D2A]/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A]/90 via-transparent to-[#123D2A]/40 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-16 flex flex-col justify-center py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl flex flex-col items-start"
        >
          {/* Subtle Editorial Label */}
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="h-px w-6 sm:w-8 bg-[#D4B36A]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#ffdf9b] font-medium">
              பெண்களின் முன்னேற்றத்திற்காக
            </span>
          </div>

          {/* Main Headline (Scaled down for refined elegance) */}
          <h1 className="font-serif-tamil text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-white font-medium leading-[1.24] sm:leading-[1.2] tracking-tight mb-4 sm:mb-6">
            உங்கள் கனவுகள்.<br />
            உங்கள் முயற்சி.<br />
            <span className="text-[#ffdf9b] font-normal italic">உங்கள் வளர்ச்சி.</span>
          </h1>

          {/* Supporting Editorial Text */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-white/85 leading-relaxed font-light max-w-lg mb-6 sm:mb-8">
            பெண்களின் தன்னம்பிக்கைக்கும் தொழில் வளர்ச்சிக்கும், அடுத்தகட்ட நிதி வாய்ப்புகளை அறிந்துகொள்ளும் நம்பிக்கையான தொடக்கம்.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0a5232] text-white rounded-full border border-[#D4B36A]/70 hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs sm:text-sm tracking-wider font-semibold shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 min-h-[48px]"
            >
              <span>மகளிர் கடன் பற்றி விசாரிக்க</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>

            <Link
              href="/about"
              className="text-white/85 hover:text-white text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-1.5 transition-colors group py-2"
            >
              <span>எங்கள் நோக்கத்தை அறியுங்கள்</span>
              <span className="text-[#D4B36A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Sub-bar */}
      <div className="relative z-20 w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-16 pb-6 sm:pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white/70 border-t border-white/10 pt-4 text-[11px] sm:text-xs font-light tracking-wider sm:tracking-widest gap-2 sm:gap-0">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4B36A] flex-shrink-0" />
          <span>கரூர் · தமிழ்நாடு · மகளிர் அறக்கட்டளை</span>
        </div>

        <a
          href="#about-intro"
          className="hidden sm:flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span>கீழே தொடரவும்</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
