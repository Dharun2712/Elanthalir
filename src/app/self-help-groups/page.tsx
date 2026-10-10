import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Users,
  CheckCircle2,
  Coins,
  ShieldCheck,
  Building,
} from "lucide-react";
import Breadcrumb from "@/components/shared/breadcrumb";
import SectionHeading from "@/components/shared/section-heading";
import FAQAccordion from "@/components/shared/faq-accordion";
import { createMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "சுயஉதவிக் குழுக்கள் வழிகாட்டுதல் | SHG Loans Karur | ஸ்ரீ இளந்தளிர்",
  description:
    "கரூரில் மகளிர் சுயஉதவிக் குழுக்களுக்கான நிதி ஆதரவு, குழு கடன் வாய்ப்புகள், சேமிப்பு வழிகாட்டுதல் மற்றும் தேவையான ஆவண விவரங்கள்.",
  path: "/self-help-groups",
});

const shgFaqs = [
  {
    id: "shg-1",
    question: "சுயஉதவிக் குழு கடன் பெற குழுவில் எத்தனை உறுப்பினர்கள் இருக்க வேண்டும்?",
    answer:
      "வழக்கமாக ஒரு மகளிர் சுயஉதவிக் குழுவில் 10 முதல் 20 உறுப்பினர்கள் வரை இருப்பார்கள். வங்கி மற்றும் அரசுத் திட்டங்களின் விதிமுறைகளின்படி குறைந்தபட்ச மற்றும் அதிகபட்ச எண்ணிக்கை மாறுபடலாம்.",
  },
  {
    id: "shg-2",
    question: "புதிதாகத் தொடங்கப்பட்ட குழுவுக்கு கடன் கிடைக்குமா?",
    answer:
      "பொதுவாக, குழு தொடங்கி குறிப்பிட்ட மாதங்கள் தொடர்ச்சியாக சேமிப்பு மற்றும் உள்கடன் வழங்கி செயல்பட்ட பிறகு வங்கிக் கடன் இணைப்பு (Bank Linkage) வாய்ப்புகள் எளிதாக அமையும். புதிய குழுக்களுக்கான வழிகாட்டுதலையும் நாங்கள் வழங்குகிறோம்.",
  },
  {
    id: "shg-3",
    question: "குழு கடன் பெறுவதற்கு தீர்மானம் அவசியமா?",
    answer:
      "ஆம், குழு உறுப்பினர்கள் அனைவரும் கூடி கடன் பெறுவது மற்றும் திருப்பிச் செலுத்துவது குறித்து ஒருமித்த தீர்மானம் நிறைவேற்றுவது மிகவும் அவசியமான நடைமுறையாகும்.",
  },
  {
    id: "shg-4",
    question: "ஸ்ரீ இளந்தளிர் குழுக்களுக்கு என்னென்ன உதவிகளைச் செய்கிறது?",
    answer:
      "ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை குழுக்களுக்குத் தேவையான நிதித் திட்டங்களை அடையாளம் காணுதல், ஆவணங்களைச் சரியாகத் தயார் செய்தல், வங்கிகள் மற்றும் நிதி நிறுவனங்களுடன் ஒருங்கிணைத்து வழிகாட்டுதல் போன்ற பணிகளைச் செய்கிறது.",
  },
];

export default function SelfHelpGroupsPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumb items={[{ label: "சுயஉதவிக் குழுக்கள்" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E5F0E7]/60 to-[#FFFDF7] py-16 md:py-20 border-b border-stone-200/60">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase bg-white text-[#25533d] border border-stone-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B36A]" />
                <span>ஒன்றிணைந்த பெண்கள் — உயர்ந்திடும் கனவுகள்</span>
              </div>
              <h1 className="font-serif-tamil text-3xl sm:text-5xl font-medium text-[#002617] leading-tight">
                மகளிர் சுயஉதவிக் குழுக்களின் பொருளாதார எழுச்சிக்கு வழிகாட்டி
              </h1>
              <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                ஒன்றிணைந்து சேமிக்கும் பெண்களின் ஆற்றல் அளப்பரியது. கரூரில் உள்ள சுயஉதவிக் குழுக்கள் தங்கள் கூட்டுத் தொழில்களையும் கடன் வாய்ப்புகளையும் பெருக்க நாங்கள் துணை நிற்கிறோம்.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("shgLoan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#0a5232] text-white rounded-full border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center gap-2.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>குழு கடன் குறித்து வாட்ஸ்அப்பில் பேச</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-[4/3]">
                <Image
                  src="/images/self-help-groups/shg-meeting.jpg"
                  alt="சுயஉதவிக் குழு மகளிர் ஆலோசனை கூட்டம்"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidance Cards */}
      <section className="section-padding bg-white">
        <div className="section-container space-y-12">
          <SectionHeading
            badge="குழு வாய்ப்புகள்"
            title="சுயஉதவிக் குழுக்களுக்கான முதன்மை சேவைகள்"
            description="குழுவின் தொடக்க நிலை முதல் வணிக விரிவாக்கம் வரை விரிவான வழிகாட்டுதல்."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#fcfaf5] border border-stone-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F0E7] flex items-center justify-center text-[#0a5232]">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="font-serif-tamil text-xl text-[#002617] font-medium">வங்கி கடன் இணைப்பு ஆலோசனை</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed font-light">
                சேமிப்பு கணக்கு பராமரிப்பு, தொடர் சேமிப்பு முறைகள் மற்றும் அரசு/வங்கி கடன் திட்டங்களை எவ்வாறு பெறுவது என்பது பற்றிய முழு விளக்கம்.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fcfaf5] border border-stone-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif-tamil text-xl text-[#002617] font-medium">கூட்டுத் தொழில் வழிகாட்டுதல்</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed font-light">
                குழுவாக இணைந்து மசாலா தயாரிப்பு, தையல் கூடம், சணல் பொருட்கள் அல்லது உணவுத் தொழில் தொடங்குவதற்கான ஆலோசனைகள்.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fcfaf5] border border-stone-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F0E7] flex items-center justify-center text-[#0a5232]">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-serif-tamil text-xl text-[#002617] font-medium">ஆவணப்படுத்துதல் & பதிவு</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed font-light">
                குழு தீர்மானப் புத்தகம், வரவு-செலவு பதிவேடு மற்றும் உறுப்பினர் விவரங்களை முறையாகப் பராமரிக்க எளிய உதவி.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prepare checklist before contacting */}
      <section className="section-padding bg-[#fcfaf5] border-y border-stone-200/60">
        <div className="section-container">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#25533d]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4B36A]" />
                  <span>எங்களைத் தொடர்புகொள்வதற்கு முன்</span>
                </div>
                <h2 className="font-serif-tamil text-2xl sm:text-3xl text-[#002617] font-medium">
                  சுயஉதவிக் குழுக்கள் தயார் செய்து வைத்திருக்க வேண்டிய விவரங்கள்
                </h2>
                <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                  எங்களை வாட்ஸ்அப்பில் தொடர்புகொள்ளும் போது பின்வரும் விவரங்கள் தயாராக இருந்தால் மிக விரைவாகவும் துல்லியமாகவும் உங்களுக்கு உதவ முடியும்:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "சுயஉதவிக் குழுவின் பெயர் மற்றும் தொடங்கிய மாதம்/ஆண்டு",
                    "மொத்த பெண் உறுப்பினர்களின் எண்ணிக்கை (எ.கா. 12 அல்லது 15 நபர்கள்)",
                    "குழு தலைவி மற்றும் செயலாளரின் பெயர் & தொலைபேசி எண்கள்",
                    "குழு சேமிப்புக் கணக்கு விவரங்கள் (வங்கி பெயர் & கிளை)",
                    "எதிர்பார்க்கப்படும் கடன் தொகை மற்றும் பயன்பாட்டு நோக்கம்",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#228B57] flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#E5F0E7]/60 p-7 sm:p-9 rounded-2xl border border-emerald-900/10 text-center space-y-4">
                <ShieldCheck className="w-12 h-12 text-[#0a5232] mx-auto" />
                <h3 className="font-serif-tamil font-medium text-xl text-[#002617]">
                  உங்கள் குழுவின் அடுத்தகட்ட வளர்ச்சிக்கு வாட்ஸ்அப் செய்தி அனுப்புங்கள்
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light">
                  குழு உறுப்பினர்கள் அனைவரும் பயனடையும் சிறந்த வழிகாட்டுதலைப் பெற இப்போதே தொடங்குங்கள்.
                </p>
                <a
                  href={getWhatsAppUrl("shgLoan")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0a5232] text-white rounded-full border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all inline-block w-full shadow-sm"
                >
                  <span>குழு விவரங்களை அனுப்ப</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto space-y-10">
          <SectionHeading
            badge="கேள்விகள்"
            title="சுயஉதவிக் குழுக்கள் தொடர்பான சந்தேகங்கள்"
          />
          <FAQAccordion items={shgFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#123D2A] text-white text-center">
        <div className="section-container max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-3xl font-medium text-white">
            உங்கள் மகளிர் சுயஉதவிக் குழுவை பலப்படுத்த வாருங்கள்!
          </h2>
          <p className="text-white/80 text-xs sm:text-sm md:text-base font-light">
            கரூரில் உள்ள உங்கள் சுயஉதவிக் குழுவின் வளர்ச்சிக்கான வாய்ப்புகளை உடனே அறிந்துகொள்ளுங்கள்.
          </p>
          <div className="pt-4">
            <a
              href={getWhatsAppUrl("shgLoan")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0a5232] text-white rounded-full border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{siteConfig.phoneDisplay} — குழு ஆலோசனை பெற</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
