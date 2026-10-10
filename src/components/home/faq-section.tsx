"use client";

import SectionHeading from "@/components/shared/section-heading";
import FAQAccordion from "@/components/shared/faq-accordion";
import { homeFaqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--color-pale)" }}>
      <div className="section-container">
        <SectionHeading
          title="அடிக்கடி கேட்கப்படும் கேள்விகள்"
          subtitle="மகளிர் கடன் மற்றும் எங்கள் சேவைகள் குறித்த பொதுவான கேள்விகளுக்கான பதில்கள்."
        />
        <FAQAccordion items={homeFaqs} />
      </div>
    </section>
  );
}
