"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  badge,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  const displayText = subtitle || description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}
    >
      {badge ? (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-px w-6 bg-[#D4B36A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#25533d] font-semibold">
            {badge}
          </span>
        </div>
      ) : (
        <div className={`mb-3 flex ${centered ? "justify-center" : "justify-start"}`}>
          <span className="h-px w-8 bg-[#D4B36A]" />
        </div>
      )}
      <h2
        className={`font-serif-tamil text-xl sm:text-2xl lg:text-[28px] font-medium leading-[1.3] tracking-tight ${
          light ? "text-white" : "text-[#002617]"
        }`}
      >
        {title}
      </h2>
      {displayText && (
        <p
          className={`font-sans mt-2.5 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed font-light ${
            light ? "text-white/80" : "text-stone-600"
          } ${centered ? "mx-auto" : ""}`}
        >
          {displayText}
        </p>
      )}
    </motion.div>
  );
}
