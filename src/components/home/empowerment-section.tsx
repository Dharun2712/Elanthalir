"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EmpowermentSection() {
  return (
    <section id="about-intro" className="w-full bg-[#fcfaf5] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-stone-200/60">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
        {/* Left Narrative Column (6 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <span className="h-px w-6 bg-[#D4B36A]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#25533d] font-semibold">
              எங்கள் நோக்கம்
            </span>
          </div>

          <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-[30px] text-[#002617] font-medium leading-[1.3] tracking-tight mb-4 sm:mb-5">
            ஒரு பெண்ணின் வளர்ச்சி, <br />
            பல கனவுகளின் தொடக்கம்.
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed font-light max-w-xl mb-5 sm:mb-6">
            சொந்தமாக ஒரு தொழிலை உருவாக்க வேண்டும் என்ற கனவிலிருந்து, ஏற்கனவே உள்ள தொழிலை வளர்க்கும் முயற்சி வரை — பெண்கள் தங்களுக்கான வாய்ப்புகளை அறிந்துகொள்ள எளிய வழிகாட்டுதலை வழங்குவதே எங்கள் அறக்கட்டளையின் முதன்மைப் பணியாகும்.
          </p>

          {/* Mission Highlight with Subtle Gold Border Accent */}
          <div className="pl-4 sm:pl-5 border-l-2 border-[#D4B36A] py-2 sm:py-2.5 bg-stone-100/60 rounded-r-xl max-w-lg">
            <p className="font-serif-tamil italic text-stone-900 text-xs sm:text-sm md:text-base leading-relaxed">
              &ldquo;சரியான தகவல் மற்றும் கண்ணியமான வழிகாட்டுதல் மூலம் ஒவ்வொரு பெண்ணும் பொருளாதார தற்சார்பை அடைய முடியும்.&rdquo;
            </p>
            <span className="block mt-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 font-medium">
              — ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை
            </span>
          </div>
        </motion.div>

        {/* Right Editorial Portrait (6 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6 relative w-full"
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 shadow-xl border border-stone-200">
            <Image
              src="/images/women-entrepreneurs/confidence.jpg"
              alt="கரூரில் செயல்படும் பெண் தொழில்முனைவோர்"
              fill
              className="object-cover object-center grayscale-[8%] hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs text-stone-500 tracking-wider uppercase font-medium gap-1 sm:gap-0">
            <span>சுயதொழில் சாதனையாளர்</span>
            <span>கரூர் கிராமப்புற களப்பணி</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
