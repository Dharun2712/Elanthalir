"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isHeroMode = isHome && !isScrolled;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isHeroMode
          ? "bg-[#123D2A]/90 backdrop-blur-md text-white border-b border-white/10"
          : "bg-[#FFFDF7]/95 backdrop-blur-md text-stone-900 border-b border-stone-200/60 shadow-sm"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
          {/* Left: Brand Logo (Always full, never truncated) */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group select-none"
            aria-label="ஸ்ரீ இளந்தளிர் முகப்பு"
          >
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full shrink-0 flex items-center justify-center font-bold text-sm sm:text-base transition-transform duration-300 group-hover:scale-105 shadow-sm ${
                isHeroMode
                  ? "bg-gradient-to-tr from-[#D4B36A] to-[#ffdf9b] text-[#123D2A]"
                  : "bg-[#123D2A] text-[#FFFDF7]"
              }`}
            >
              ஸ்ரீ
            </div>
            <div className="flex flex-col shrink-0">
              <span
                className={`font-serif-tamil text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap leading-tight transition-colors ${
                  isHeroMode ? "text-white group-hover:text-[#ffdf9b]" : "text-[#123D2A] group-hover:text-[#176B45]"
                }`}
              >
                {siteConfig.name}
              </span>
              <span
                className={`text-[10px] uppercase tracking-wider font-sans whitespace-nowrap leading-tight ${
                  isHeroMode ? "text-white/70" : "text-stone-500"
                }`}
              >
                மகளிர் அறக்கட்டளை · கரூர்
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation (Single line, short catchy words, no wrap) */}
          <nav
            className="hidden lg:flex items-center gap-2 xl:gap-5 2xl:gap-7 shrink-0"
            aria-label="முதன்மை வழிசெலுத்தல்"
          >
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide whitespace-nowrap px-3 py-1.5 rounded-full transition-all duration-200 relative ${
                    isHeroMode
                      ? isActive
                        ? "text-[#ffdf9b] font-semibold bg-white/10"
                        : "text-white/85 hover:text-white hover:bg-white/5"
                      : isActive
                      ? "text-[#123D2A] font-semibold bg-[#E5F0E7]"
                      : "text-stone-700 hover:text-[#123D2A] hover:bg-stone-100/70"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#D4B36A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: WhatsApp CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 min-h-[40px] shrink-0 ${
                isHeroMode
                  ? "border border-white/40 text-white hover:border-[#D4B36A] hover:text-[#ffdf9b] hover:bg-white/5 shadow-sm"
                  : "bg-[#0a5232] text-white hover:bg-[#D4B36A] hover:text-[#0c291c] border border-[#D4B36A]/50 shadow-sm"
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>வாட்ஸ்அப் உதவி</span>
            </a>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 ${
                isHeroMode ? "text-white hover:bg-white/10" : "text-[#123D2A] hover:bg-stone-100"
              }`}
              aria-label={isMobileOpen ? "மெனுவை மூடு" : "மெனுவைத் திற"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden border-t bg-[#FFFDF7] text-stone-900 border-stone-200 max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
          >
            <nav className="section-container py-4 space-y-1" aria-label="மொபைல் வழிசெலுத்தல்">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                        isActive
                          ? "bg-[#E5F0E7] text-[#123D2A] font-semibold"
                          : "text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-3 mt-2 border-t border-stone-200 pb-2">
                <a
                  href={getWhatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full text-xs uppercase tracking-wider py-3.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>வாட்ஸ்அப்பில் விசாரிக்க</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
