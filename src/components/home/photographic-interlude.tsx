"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function PhotographicInterlude() {
  return (
    <section className="w-full py-20 sm:py-28 lg:py-40 relative overflow-hidden bg-[#002617] text-white">
      {/* Immersive Photographic Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/community/community-group.jpg"
          alt="தமிழ்நாடு மகளிர் குழுவினர் ஆலோசனை"
          fill
          className="object-cover object-center brightness-[0.7]"
          sizes="100vw"
        />
        {/* Dark Forest Green 85% Overlay */}
        <div className="absolute inset-0 bg-[#123D2A]/85 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        <div className="w-8 h-px bg-[#D4B36A] mb-6 sm:mb-8" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif-tamil text-xl sm:text-2xl lg:text-[32px] text-white leading-snug sm:leading-[1.35] font-normal max-w-2xl mb-7 sm:mb-9 px-2"
        >
          &ldquo;தன்னம்பிக்கையுடன் தொடங்குங்கள்.<br />
          வளர்ச்சிக்கான வழியை அறிந்துகொள்ளுங்கள்.&rdquo;
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full sm:w-auto"
        >
          <a
            href={getWhatsAppUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 sm:px-9 py-3.5 sm:py-4 bg-white text-[#002617] rounded-full hover:bg-[#ffdf9b] hover:text-[#0c291c] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl inline-flex items-center justify-center w-full sm:w-auto min-h-[48px]"
          >
            எங்களுடன் பேசுங்கள்
          </a>
        </motion.div>
      </div>
    </section>
  );
}
