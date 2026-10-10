"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  Compass,
  Eye,
  PhoneCall,
  Heart,
} from "lucide-react";

const reasons = [
  {
    icon: MessageSquareText,
    title: "தமிழில் எளிய விளக்கம்",
    description: "கடன் விதிமுறைகள் மற்றும் நடைமுறைகள் அனைத்தும் உங்களுக்குப் புரியும் எளிய தமிழில் விளக்கப்படும்.",
  },
  {
    icon: Compass,
    title: "தேவைக்கேற்ற வழிகாட்டுதல்",
    description: "உங்கள் தற்போதைய நிலை மற்றும் தொழில் தேவையைக் கண்டறிந்து மிகவும் பொருத்தமான வாய்ப்புகளைப் பரிந்துரைக்கிறோம்.",
  },
  {
    icon: Eye,
    title: "முழுமையான வெளிப்படைத்தன்மை",
    description: "எந்தவொரு மறைமுகக் கட்டணங்களும் இன்றி, வங்கி மற்றும் அரசின் நிபந்தனைகள் முன்கூட்டியே தெளிவாகத் தெரிவிக்கப்படும்.",
  },
  {
    icon: PhoneCall,
    title: "நேரடி வாட்ஸ்அப் உதவி",
    description: "நீண்ட காத்திருப்புகள் இன்றி, வாட்ஸ்அப் அல்லது தொலைபேசி மூலம் உடனடியாக ஆலோசனை பெறலாம்.",
  },
  {
    icon: Heart,
    title: "பெண்களின் தற்சார்பு வளர்ச்சி",
    description: "ஒவ்வொரு பெண்ணும் பொருளாதார சுதந்திரம் பெற்று, குடும்பத்தையும் சமூகத்தையும் உயர்த்த உறுதுணையாக இருக்கிறோம்.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#fcfaf5] py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-stone-200/60">
      <div className="max-w-[1240px] mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-px w-6 bg-[#D4B36A]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#25533d] font-semibold">
              எங்கள் சேவை நெறிகள்
            </span>
          </div>
          <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-[30px] text-[#002617] font-medium leading-[1.3] tracking-tight mb-2.5 sm:mb-3">
            உங்களுக்கு ஏற்ற வழிகாட்டுதலைத் தேர்ந்தெடுங்கள்
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-stone-600 font-light">
            நம்பகமான அணுகுமுறை மற்றும் வெளிப்படையான தகவல்கள் மூலம் பெண்கள் சரியான நிதி முடிவுகளை எடுக்க உதவுகிறோம்.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="bg-white/95 p-5 sm:p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E5F0E7] text-[#0a5232] flex items-center justify-center mb-4 sm:mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-tamil text-base sm:text-lg text-[#002617] font-medium mb-1.5 sm:mb-2">
                  {reason.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
