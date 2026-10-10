import HeroSection from "@/components/home/hero-section";
import EmpowermentSection from "@/components/home/empowerment-section";
import LoanCategoriesSection from "@/components/home/loan-categories-section";
import PhotographicInterlude from "@/components/home/photographic-interlude";
import ProcessSection from "@/components/home/process-section";
import WhyChooseSection from "@/components/home/why-choose-section";
import FAQSection from "@/components/home/faq-section";
import FinalCTASection from "@/components/home/final-cta-section";
import { homeFaqs } from "@/data/faqs";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col w-full">
        <HeroSection />
        <EmpowermentSection />
        <LoanCategoriesSection />
        <PhotographicInterlude />
        <ProcessSection />
        <WhyChooseSection />
        <FAQSection />
        <FinalCTASection />
      </div>
    </>
  );
}
