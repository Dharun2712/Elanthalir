import { Phone, MessageCircle, Instagram, MapPin, ShieldCheck } from "lucide-react";
import Breadcrumb from "@/components/shared/breadcrumb";
import ContactForm from "@/components/shared/contact-form";
import { createMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "தொடர்புக்கு | ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை கரூர்",
  description:
    "ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளையைத் தொடர்புகொள்ள: தொலைபேசி / வாட்ஸ்அப் 95005 65775. கரூர், தமிழ்நாடு. மகளிர் கடன் மற்றும் வழிகாட்டுதல்.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumb items={[{ label: "தொடர்புக்கு" }]} />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#E5F0E7]/60 to-[#FFFDF7] py-16 md:py-20 border-b border-stone-200/60">
        <div className="section-container text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase bg-white text-[#25533d] border border-stone-200 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4B36A]" />
            <span>எங்களை நேரடியாகத் தொடர்புகொள்ளலாம்</span>
          </div>
          <h1 className="font-serif-tamil text-3xl sm:text-5xl font-medium text-[#002617] leading-tight">
            எங்களுடன் இணைந்திருங்கள் — நாங்கள் வழிகாட்டத் தயார்
          </h1>
          <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed font-light">
            மகளிர் கடன்கள், சுயஉதவிக் குழுக்கள் அல்லது சிறு தொழில் நிதி ஆலோசனைகள் பற்றி எப்போது வேண்டுமானாலும் வாட்ஸ்அப் அல்லது தொலைபேசி மூலம் விசாரிக்கலாம்.
          </p>
        </div>
      </section>

      {/* Contact Grid: Details + Interactive Form */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#D4B36A]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#25533d] font-semibold">
                    நேரடி விவரங்கள்
                  </span>
                </div>
                <h2 className="font-serif-tamil text-2xl sm:text-3xl font-medium text-[#002617]">
                  நேரடி தொடர்பு விவரங்கள்
                </h2>
                <p className="font-sans text-sm text-stone-600 leading-relaxed font-light">
                  எங்கள் குழு உங்கள் கேள்விகளுக்கு எளிய தமிழில் விரிவான விளக்கங்களை வழங்கும்.
                </p>
              </div>

              {/* Phone Card */}
              <a
                href={getPhoneUrl()}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#fcfaf5] border border-stone-200 hover:border-[#D4B36A] transition-all hover:shadow-md group block"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#0a5232] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#0a5232] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    தொலைபேசி அழைப்பு
                  </p>
                  <p className="font-sans text-lg font-bold text-[#002617]">
                    {siteConfig.phoneDisplay}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">நேரடியாகப் பேச அழுத்தவும்</p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={getWhatsAppUrl("contact")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#E5F0E7]/60 border border-emerald-300/60 hover:border-[#D4B36A] transition-all hover:shadow-md group block"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a5232] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0a5232] uppercase tracking-wider mb-1">
                    வாட்ஸ்அப் உதவி
                  </p>
                  <p className="font-sans text-lg font-bold text-[#002617]">
                    {siteConfig.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#0a5232] mt-1">வாட்ஸ்அப்பில் உடனடி அரட்டை தொடங்க</p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-[#D4B36A] transition-all hover:shadow-md group block"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    இன்ஸ்டாகிராம்
                  </p>
                  <p className="font-sans text-base font-bold text-stone-800">
                    {siteConfig.instagramHandle}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">எங்கள் பக்கத்தைப் பின்தொடர</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fcfaf5] border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-white text-[#0a5232] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    அமைவிடம்
                  </p>
                  <p className="font-sans text-base font-bold text-[#002617]">
                    {siteConfig.location}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    தமிழ்நாடு, இந்தியா
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>குறிப்பு:</strong> நாங்கள் எவ்வித முன்வைப்பு கட்டணமோ (No Upfront Charges) அல்லது தேவையற்ற இடைத்தரகு கட்டணங்களோ வசூலிப்பதில்லை.
                </span>
              </div>
            </div>

            {/* Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
