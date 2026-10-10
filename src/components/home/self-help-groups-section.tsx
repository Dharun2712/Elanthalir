"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Users, FileText } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/shared/section-heading";

const prepareList = [
  "குழுவின் பெயர் மற்றும் உறுப்பினர் எண்ணிக்கை",
  "குழு செயல்படும் இடம் மற்றும் காலம்",
  "முன்னர் பெற்ற கடன் விவரங்கள் (ஏதேனும் இருந்தால்)",
  "தற்போதைய சேமிப்பு மற்றும் நிதி நிலை",
];

export default function SHGSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-sage)" }}>
      <div className="section-container">
        <SectionHeading
          title="ஒன்றிணைந்த பெண்கள் — உயர்ந்திடும் கனவுகள்!"
          subtitle="மகளிர் சுயஉதவிக் குழுக்களுக்கான கடன் வாய்ப்புகள், ஆதரவு மற்றும் வழிகாட்டுதல் குறித்து அறியுங்கள்."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--color-charcoal)" }}
            >
              மகளிர் சுயஉதவிக் குழுக்கள் பெண்களின் ஒற்றுமையையும் நிதி
              வலிமையையும் வளர்க்கின்றன. உங்கள் குழுவிற்கான கடன் வாய்ப்புகள்,
              தகுதி நிபந்தனைகள் மற்றும் தேவையான ஆவணங்கள் பற்றி எங்களிடம்
              விசாரியுங்கள்.
            </p>

            {/* Prepare list */}
            <div
              className="p-5 rounded-xl mb-6"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border-light)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <FileText
                  className="w-4 h-4"
                  style={{ color: "var(--color-brand)" }}
                />
                <h4
                  className="font-semibold text-sm"
                  style={{ color: "var(--color-forest)" }}
                >
                  தொடர்புகொள்ளும் முன் தயாராக வைத்திருக்கவேண்டியவை:
                </h4>
              </div>
              <ul className="space-y-2">
                {prepareList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--color-muted)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "var(--color-emerald)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl("shgLoan")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                id="shg-whatsapp-cta"
              >
                <MessageCircle className="w-4 h-4" />
                <span>குழு கடன் விசாரணை</span>
              </a>
              <a
                href="/self-help-groups"
                className="btn btn-secondary"
              >
                <Users className="w-4 h-4" />
                <span>மேலும் தகவல்கள்</span>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="/images/self-help-groups/shg-meeting.jpg"
                alt="சுயஉதவிக் குழு கூட்டத்தில் ஈடுபடும் பெண்கள்"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
