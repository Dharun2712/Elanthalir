"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";

const galleryImages = [
  {
    src: "/images/gallery/tailoring.jpg",
    alt: "தையல் பணியில் ஈடுபடும் பெண்கள்",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery/food-business.jpg",
    alt: "உணவுத் தொழில் நடத்தும் பெண் தொழிலதிபர்",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/women-entrepreneurs/entrepreneur-1.jpg",
    alt: "சிறு வணிகம் நடத்தும் பெண் தொழிலதிபர்",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/self-help-groups/shg-meeting.jpg",
    alt: "சுயஉதவிக் குழு கூட்டத்தில் பெண்கள்",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/handicrafts.jpg",
    alt: "கைவினைப் பொருட்கள் செய்யும் பெண்கள்",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/community/community-group.jpg",
    alt: "ஒன்றிணைந்த பெண்கள் குழு",
    span: "col-span-2 row-span-1",
  },
];

export default function ImageGallery() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-pale)" }}>
      <div className="section-container">
        <SectionHeading
          title="தன்னம்பிக்கையுடன் வளர்கிறார்கள் — பெண்களின் முன்னேற்றப் பாதை!"
          subtitle="பெண்கள் தொழில், கைவினை, உணவு சேவை மற்றும் பல துறைகளில் தங்கள் திறமையை வெளிப்படுத்துகிறார்கள்."
        />

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`img-container ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(18,61,42,0.7) 0%, transparent 60%)",
                }}
              >
                <p className="text-white text-xs font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: scrollable grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {galleryImages.slice(0, 6).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="img-container"
              style={{ aspectRatio: index === 0 || index === 5 ? "16/10" : "4/3" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="50vw"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <p
          className="text-center text-xs mt-6 italic"
          style={{ color: "var(--color-muted-light)" }}
        >
          * இவை விளக்கப்படங்கள் ஆகும். நிறுவனத்தின் உண்மையான பயனாளிகளின்
          படங்கள் கிடைக்கும்போது மாற்றப்படும்.
        </p>
      </div>
    </section>
  );
}
