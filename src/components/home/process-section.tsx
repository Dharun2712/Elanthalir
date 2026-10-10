"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "தொடர்புகொள்ளுங்கள்",
      desc: "உங்கள் தேவையையும் தற்போதைய சூழ்நிலையையும் வாட்ஸ்அப் அல்லது நேரடி அழைப்பு மூலம் எங்களிடம் தெரிவியுங்கள்.",
    },
    {
      num: "02",
      title: "வாய்ப்புகளை அறியுங்கள்",
      desc: "சரியான கடன் வாய்ப்புகள், அரசு மானியங்கள் மற்றும் வங்கி நிபந்தனைகளைப் புரிந்துகொள்ளுங்கள்.",
    },
    {
      num: "03",
      title: "ஆவணங்களை உறுதிசெய்யுங்கள்",
      desc: "வங்கிகள் கோரும் தேவையான ஆவணங்கள் மற்றும் அடிப்படை தகுதி விவரங்களைச் சரிபாருங்கள்.",
    },
    {
      num: "04",
      title: "அடுத்தகட்ட நடவடிக்கை",
      desc: "உறுதிப்படுத்தப்பட்ட தெளிவான வழிமுறைகளின்படி நிதி நிறுவனங்களை அணுகி வழிகாட்டல் பெறுங்கள்.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFDF7] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-stone-200/60">
      <div className="max-w-[1240px] mx-auto flex flex-col">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-px w-6 bg-[#D4B36A]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#25533d] font-semibold">
              வழிகாட்டல் நெறிமுறை
            </span>
          </div>
          <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-[30px] text-[#002617] font-medium leading-[1.3] tracking-tight">
            தொடங்குவது எளிது
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-stone-600 font-light mt-2.5">
            சிக்கலற்ற நான்கு எளிய படிகள் மூலம் உங்கள் விருப்பமான இலக்கை நோக்கி முன்னேறுங்கள்.
          </p>
        </div>

        {/* 4-Step Grid with Hairline Dividers across mobile, tablet, and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`flex flex-col items-start relative pb-6 sm:pb-0 ${
                idx < 3 ? "border-b sm:border-b-0 border-stone-200/80" : ""
              } ${
                idx % 2 === 0 ? "sm:border-r border-stone-200/80 sm:pr-6" : ""
              } ${
                idx < 3 ? "lg:border-r lg:pr-8" : "lg:border-r-0"
              }`}
            >
              <span className="font-serif-tamil text-2xl sm:text-3xl lg:text-4xl text-[#D4B36A] font-light mb-2.5 sm:mb-3">
                {step.num}
              </span>
              <h3 className="font-serif-tamil text-base sm:text-lg text-[#002617] font-medium mb-1.5 sm:mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
