"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/faqs";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto w-full">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="card transition-colors"
            style={{
              borderColor: isOpen ? "var(--color-brand)" : "var(--color-border-light)",
            }}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-start justify-between gap-3 p-4 sm:p-5 text-left cursor-pointer min-h-[48px]"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              <span className="font-semibold text-sm sm:text-base leading-snug sm:leading-relaxed text-[#002617]">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0 mt-0.5"
              >
                <ChevronDown className="w-5 h-5 text-[#0a5232]" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm md:text-base leading-relaxed text-stone-600 font-light">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
