"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function LoanCategoriesSection() {
  return (
    <section id="loans" className="w-full bg-[#E5F0E7] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1240px] mx-auto flex flex-col">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-px w-6 bg-[#25533d]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#25533d] font-semibold">
              மகளிர் கடன் வாய்ப்புகள்
            </span>
          </div>
          <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-[30px] text-[#002617] font-medium leading-[1.3] tracking-tight mb-2.5 sm:mb-3">
            உங்கள் அடுத்த முயற்சிக்கு என்ன வாய்ப்பு இருக்கிறது?
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed font-light">
            நாங்கள் கடன் வழங்கும் நிதி நிறுவனம் அல்ல; அரசு மற்றும் வங்கி அங்கீகாரம் பெற்ற கடன் திட்டங்களை அறிந்துகொள்ளும் ஆலோசனை மற்றும் வழிகாட்டல் மட்டுமே.
          </p>
        </div>

        {/* 3 Horizontal Asymmetrical Image-led Panels */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {/* Panel 1: Photo Left, Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center bg-white/85 backdrop-blur-sm p-5 sm:p-8 lg:p-12 rounded-2xl border border-emerald-950/5 hover:border-emerald-950/20 shadow-sm transition-all duration-300"
          >
            <div className="lg:col-span-6 aspect-[16/10] overflow-hidden rounded-xl bg-stone-200 relative w-full">
              <Image
                src="/images/self-help-groups/shg-meeting.jpg"
                alt="சுயஉதவிக் குழுக்கள் கலந்துரையாடல்"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#25533d] font-semibold mb-2 sm:mb-3">
                01 · கூட்டுப் பொறுப்பு
              </span>
              <h3 className="font-serif-tamil text-lg sm:text-xl lg:text-2xl text-[#002617] font-medium mb-2 sm:mb-3">
                சுயஉதவிக் குழுக்கள்
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed font-light mb-5 sm:mb-6">
                குழுவாகச் செயல்படும் பெண்களுக்கான கடன் வாய்ப்புகள் குறித்து விசாரியுங்கள். முறைப்படுத்தப்பட்ட சேமிப்பு மற்றும் குறைந்த வட்டி திட்டங்களுக்கான தெளிவான வழிகாட்டல்.
              </p>
              <a
                href={getWhatsAppUrl("shgLoan")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#002617] hover:text-[#176B45] group transition-colors min-h-[44px]"
              >
                <span className="border-b border-[#002617] group-hover:border-[#176B45] pb-0.5">
                  விவரங்கள் அறிய (வாட்ஸ்அப்)
                </span>
                <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>

          {/* Panel 2: Responsive Alternating Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center bg-white/85 backdrop-blur-sm p-5 sm:p-8 lg:p-12 rounded-2xl border border-emerald-950/5 hover:border-emerald-950/20 shadow-sm transition-all duration-300"
          >
            {/* On mobile, show image first, then text for visual clarity */}
            <div className="lg:col-span-6 order-1 lg:order-2 aspect-[16/10] overflow-hidden rounded-xl bg-stone-200 relative w-full">
              <Image
                src="/images/women-entrepreneurs/entrepreneur-1.jpg"
                alt="பெண் தொழில்முனைவோர் சிறு தொழில் வளர்ச்சி"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start lg:pr-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#25533d] font-semibold mb-2 sm:mb-3">
                02 · விரிவாக்கம்
              </span>
              <h3 className="font-serif-tamil text-lg sm:text-xl lg:text-2xl text-[#002617] font-medium mb-2 sm:mb-3">
                சிறு தொழில் வளர்ச்சி
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed font-light mb-5 sm:mb-6">
                உங்கள் தொழிலை வளர்ப்பதற்கான கிடைக்கக்கூடிய நிதி வாய்ப்புகளை அறிந்துகொள்ளுங்கள். தையல், மளிகை மற்றும் உள்ளூர் உற்பத்திகளுக்கான பிரத்யேக ஆலோசனைகள்.
              </p>
              <a
                href={getWhatsAppUrl("smallBusiness")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#002617] hover:text-[#176B45] group transition-colors min-h-[44px]"
              >
                <span className="border-b border-[#002617] group-hover:border-[#176B45] pb-0.5">
                  விவரங்கள் அறிய (வாட்ஸ்அப்)
                </span>
                <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>

          {/* Panel 3: Photo Left, Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center bg-white/85 backdrop-blur-sm p-5 sm:p-8 lg:p-12 rounded-2xl border border-emerald-950/5 hover:border-emerald-950/20 shadow-sm transition-all duration-300"
          >
            <div className="lg:col-span-6 aspect-[16/10] overflow-hidden rounded-xl bg-stone-200 relative w-full">
              <Image
                src="/images/gallery/handicrafts.jpg"
                alt="கைவினைப் பொருட்கள் மற்றும் சுயதொழில் தயாரிப்பு"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#25533d] font-semibold mb-2 sm:mb-3">
                03 · புதிய தொடக்கம்
              </span>
              <h3 className="font-serif-tamil text-lg sm:text-xl lg:text-2xl text-[#002617] font-medium mb-2 sm:mb-3">
                சுயதொழில் தொடக்கம்
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed font-light mb-5 sm:mb-6">
                புதிய முயற்சியைத் தொடங்குவதற்கான வழிகாட்டுதலைப் பெறுங்கள். முதல் முதலீடு, தேவையான ஆவணங்கள் மற்றும் வங்கி நடைமுறைகளைத் தெளிவாகப் புரிந்து கொள்ளுங்கள்.
              </p>
              <a
                href={getWhatsAppUrl("selfEmployment")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#002617] hover:text-[#176B45] group transition-colors min-h-[44px]"
              >
                <span className="border-b border-[#002617] group-hover:border-[#176B45] pb-0.5">
                  விவரங்கள் அறிய (வாட்ஸ்அப்)
                </span>
                <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
