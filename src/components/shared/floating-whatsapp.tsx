"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
        >
          <a
            href={getWhatsAppUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp மூலம் தொடர்பு கொள்ள"
            className="group flex items-center gap-2.5 px-5 py-3.5 bg-[#0a5232] text-white rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] border border-[#D4B36A]/60 hover:bg-[#D4B36A] hover:text-[#0c291c] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" fill="currentColor" strokeWidth={0} />
            <span className="text-xs uppercase tracking-wider font-semibold hidden sm:inline">
              வாட்ஸ்அப் உதவி
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
