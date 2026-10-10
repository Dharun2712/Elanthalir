"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/whatsapp";

export default function MobileActionBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-[#FFFDF7]/95 backdrop-blur-md border-t border-stone-200 px-3 pt-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      style={{
        paddingBottom: "max(0.625rem, env(safe-area-inset-bottom, 0.625rem))",
      }}
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={getPhoneUrl()}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full text-xs uppercase tracking-wider font-semibold border border-[#123D2A] text-[#123D2A] bg-transparent active:bg-stone-100 transition-colors min-h-[44px]"
          aria-label="தொலைபேசியில் அழைக்கவும்"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>அழைக்க</span>
        </a>

        <a
          href={getWhatsAppUrl("general")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-[#0a5232] border border-[#D4B36A] active:bg-[#0c291c] shadow-sm transition-colors min-h-[44px]"
          aria-label="வாட்ஸ்அப்பில் செய்தி அனுப்பவும்"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>வாட்ஸ்அப்</span>
        </a>
      </div>
    </div>
  );
}
