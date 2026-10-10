"use client";

import { motion } from "framer-motion";
import { HandCoins, Users, Store, Sparkles } from "lucide-react";
import { serviceHighlights } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import SectionHeading from "@/components/shared/section-heading";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HandCoins,
  Users,
  Store,
  Sparkles,
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: "var(--color-ivory)" }}>
      <div className="section-container">
        <SectionHeading
          title="எங்கள் சேவைகள்"
          subtitle="பெண்களின் வளர்ச்சிக்கான பல்வேறு வாய்ப்புகள் குறித்து அறிந்துகொள்ளுங்கள்."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceHighlights.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.a
                key={service.id}
                href={getWhatsAppUrl(service.whatsappKey)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-6 text-center group cursor-pointer"
                aria-label={`${service.title} - வாட்ஸ்அப்பில் விசாரிக்க`}
              >
                <div
                  className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: "var(--color-sage)",
                    color: "var(--color-brand)",
                  }}
                >
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3
                  className="font-bold text-sm mb-2 leading-snug"
                  style={{ color: "var(--color-forest)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {service.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
