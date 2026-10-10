"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/whatsapp";

export default function FinalCTASection() {
  return (
    <section id="contact" className="w-full bg-[#123D2A] text-white py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative ambient subtle glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #228B57 0%, transparent 70%)" }}
      />

      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <span className="h-px w-6 bg-[#D4B36A]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#ffdf9b] font-semibold">
              நேரடி உரையாடல்
            </span>
          </div>

          <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-[32px] text-white font-medium leading-[1.3] tracking-tight mb-3 sm:mb-4">
            உங்கள் அடுத்த முயற்சியைப் பற்றி பேசுவோம்.
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light max-w-lg">
            உங்கள் தேவையைப் பகிருங்கள். கிடைக்கக்கூடிய வாய்ப்புகள் மற்றும் அடுத்தகட்ட வழிமுறைகளைத் தெளிவாக அறிந்துகொள்ளுங்கள்.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-start gap-4 sm:gap-6 shrink-0 w-full lg:w-auto"
        >
          {/* Prominent WhatsApp CTA */}
          <a
            href={getWhatsAppUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0a5232] text-white rounded-full border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>வாட்ஸ்அப்பில் தொடர்புகொள்ள</span>
            <span className="text-[#D4B36A] group-hover:text-[#0c291c] text-base">↗</span>
          </a>

          {/* Direct Call Display */}
          <div className="flex items-center gap-3 sm:gap-4 text-white/85 pl-1 sm:pl-2 flex-wrap">
            <a
              href={getPhoneUrl()}
              className="hover:text-[#ffdf9b] transition-colors font-sans text-sm sm:text-base tracking-wider flex items-center gap-2 min-h-[40px]"
            >
              <Phone className="w-4 h-4 text-[#D4B36A]" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-white/40">·</span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4B36A]" />
              {siteConfig.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
