import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  FileCheck,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Breadcrumb from "@/components/shared/breadcrumb";
import SectionHeading from "@/components/shared/section-heading";
import FAQAccordion from "@/components/shared/faq-accordion";
import { createMetadata } from "@/config/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { loanCategories, processSteps } from "@/data/services";

export const metadata = createMetadata({
  title: "மகளிர் கடன்கள் வழிகாட்டுதல் | கரூர் மகளிர் கடன் திட்டங்கள் | ஸ்ரீ இளந்தளிர்",
  description:
    "கரூரில் பெண்களுக்கான கடன் வாய்ப்புகள், மகளிர் சுயஉதவிக் குழு கடன்கள், சிறு தொழில் தொடங்குவதற்கான நிதி வழிகாட்டுதல் மற்றும் தேவையான ஆவணங்கள் விவரங்கள்.",
  path: "/womens-loans",
});

const loanFaqs = [
  {
    id: "wl-1",
    question: "மகளிர் கடனுக்கு யார் விண்ணப்பிக்கலாம்?",
    answer:
      "சுயதொழில் தொடங்க விரும்பும் பெண்கள், தற்போது தொழில் நடத்தி வரும் மகளிர் மற்றும் பதிவு பெற்ற சுயஉதவிக் குழு உறுப்பினர்கள் கடன் திட்டங்களுக்கு விண்ணப்பிக்கலாம். தகுதி குறிப்பிட்ட கடன் திட்டம் மற்றும் வங்கி/நிறுவனத்தின் வழிகாட்டுதலைப் பொறுத்தது.",
  },
  {
    id: "wl-2",
    question: "கடன் பெற என்னென்ன ஆவணங்கள் தேவைப்படும்?",
    answer:
      "பொதுவாக ஆதார் அட்டை, வாக்காளர் அட்டை அல்லது குடும்ப அட்டை, பாஸ்போர்ட் அளவு புகைப்படங்கள், வங்கி கணக்கு புத்தகம், மற்றும் தொழில் சார்ந்த விவரங்கள் தேவைப்படலாம். குழு கடன்களுக்கு குழு தீர்மானம் மற்றும் சேமிப்பு விவரங்கள் தேவைப்படலாம்.",
  },
  {
    id: "wl-3",
    question: "வட்டி விகிதம் மற்றும் திருப்பிச் செலுத்தும் காலம் என்ன?",
    answer:
      "வட்டி விகிதம் மற்றும் தவணைக்காலம் நீங்கள் தேர்வு செய்யும் கடன் வழங்கும் நிறுவனம் (வங்கிகள் அல்லது அரசு சாரா நிதி நிறுவனங்கள்) மற்றும் திட்டத்தின் வகையைப் பொறுத்து மாறுபடும். நாங்கள் உங்களுக்கு முழுமையான வெளிப்படைத்தன்மையுடன் ஆலோசனை வழங்குவோம்.",
  },
  {
    id: "wl-4",
    question: "ஸ்ரீ இளந்தளிர் நேரடியாக கடன் வழங்குகிறதா?",
    answer:
      "ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை பெண்களுக்கு சரியான கடன் வாய்ப்புகளை அடையாளம் காணவும், தேவையான ஆவணங்களைத் தயார் செய்யவும், வழிகாட்டவும் செயல்படும் தோழமை அமைப்பாகும். கடன் அனுமதி என்பது நிதி வழங்கும் நிறுவனங்களின் சரிபார்ப்புக்கு உட்பட்டது.",
  },
];

export default function WomensLoansPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumb items={[{ label: "மகளிர் கடன்கள்" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E5F0E7]/60 to-[#FFFDF7] py-16 md:py-20 border-b border-stone-200/60">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase bg-white text-[#25533d] border border-stone-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B36A]" />
                <span>கடன் ஆலோசனை & வழிகாட்டுதல் மையம்</span>
              </div>
              <h1 className="font-serif-tamil text-3xl sm:text-5xl font-medium text-[#002617] leading-tight">
                பெண்களின் தொழில் வளர்ச்சிக்கு ஏற்ற மகளிர் கடன் வழிகாட்டுதல்
              </h1>
              <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                சுயஉதவிக் குழுக்கள், சிறு வணிகங்கள் மற்றும் சுயதொழில் புரியும் பெண்களுக்கான பொருத்தமான கடன் திட்டங்கள், எளிய நடைமுறைகள் மற்றும் தேவையான ஆவணங்கள் குறித்த தெளிவான விவரங்களை அறியுங்கள்.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#0a5232] text-white rounded-full border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center gap-2.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>கடன் விவரங்களை வாட்ஸ்அப்பில் அறிய</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-[4/3]">
                <Image
                  src="/images/hero/hero-main.jpg"
                  alt="மகளிர் தொழில் முன்னேற்றம்"
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

      {/* Transparent Disclaimer Box */}
      <section className="bg-amber-50/70 border-b border-amber-200/60 py-4">
        <div className="section-container">
          <div className="flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>முக்கிய வெளிப்படைத்தன்மை குறிப்பு:</strong> கடன் ஒப்புதல், வட்டி விகிதம், கால அளவு மற்றும் கட்டணங்கள் ஆகியவை உரிய கடன் வழங்கும் நிறுவனத்தின் விதிமுறைகள் மற்றும் தனிநபர் தகுதி சரிபார்ப்பைப் பொறுத்தது. ஸ்ரீ இளந்தளிர் வழிகாட்டுதலையும் தகவல்களையும் மட்டுமே வழங்குகிறது; எந்தவொரு தவறான வாக்குறுதிகளையும் அளிக்காது.
            </div>
          </div>
        </div>
      </section>

      {/* Loan Enquiry Categories */}
      <section className="section-padding bg-white">
        <div className="section-container space-y-12">
          <SectionHeading
            badge="பிரிவுகள்"
            title="கிடைக்கக்கூடிய கடன் விசாரணை பிரிவுகள்"
            description="உங்கள் தொழில் மற்றும் தேவைகளுக்கு ஏற்ப சரியான வகையைத் தேர்ந்தெடுத்து வாட்ஸ்அப்பில் பேசுங்கள்."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E5F0E7] text-[#0a5232] mb-4">
                    <span>நேரடி வழிகாட்டுதல்</span>
                  </div>
                  <h3 className="font-serif-tamil text-2xl font-medium text-[#002617] mb-3">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-stone-600 mb-6 leading-relaxed font-light text-sm sm:text-base">
                    {cat.description}
                  </p>
                  <div className="space-y-2.5 mb-8">
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      முக்கிய அம்சங்கள்:
                    </p>
                    {cat.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#228B57] flex-shrink-0 mt-1" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(cat.whatsappKey as any)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#fcfaf5] text-[#002617] rounded-full border border-stone-300 hover:border-[#D4B36A] hover:bg-[#E5F0E7] text-xs uppercase tracking-wider font-semibold transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#0a5232]" />
                  <span>{cat.title} பற்றி விசாரிக்க</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicative Document Checklist & Eligibility */}
      <section className="section-padding bg-[#fcfaf5] border-y border-stone-200/60">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Eligibility */}
            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#E5F0E7] flex items-center justify-center text-[#0a5232]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="font-serif-tamil text-2xl font-medium text-[#002617]">
                பொதுவான தகுதி வழிகாட்டுதல்
              </h2>
              <p className="text-xs text-stone-500">
                *திட்டத்தைப் பொறுத்து மாறுபடலாம் — உத்தேச வழிகாட்டுதல் மட்டுமே
              </p>
              <ul className="space-y-3.5 text-stone-700 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#228B57] flex-shrink-0 mt-0.5" />
                  <span><strong>வயது வரம்பு:</strong> பொதுவாக 18 வயது முதல் 58 வயது வரை உள்ள பெண்கள்.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#228B57] flex-shrink-0 mt-0.5" />
                  <span><strong>வசிப்பிடம்:</strong> கரூர் மற்றும் சுற்றியுள்ள மாவட்டங்களில் நிலையான வசிப்பிடம் கொண்டிருக்க வேண்டும்.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#228B57] flex-shrink-0 mt-0.5" />
                  <span><strong>தொழில் ஆர்வம்:</strong> சுயதொழில் செய்ய ஆர்வம் அல்லது ஏற்கனவே செயல்படும் சிறு வணிகம்.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#228B57] flex-shrink-0 mt-0.5" />
                  <span><strong>குழு உறுப்பினர்கள்:</strong> சுயஉதவிக் குழுக்களில் சீரான சேமிப்பு மற்றும் கூட்டப் பழக்கம் இருப்பது நலம்.</span>
                </li>
              </ul>
            </div>

            {/* Document Checklist */}
            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <FileCheck className="w-6 h-6" />
              </div>
              <h2 className="font-serif-tamil text-2xl font-medium text-[#002617]">
                தேவைப்படக்கூடிய மாதிரி ஆவணங்கள்
              </h2>
              <p className="text-xs text-stone-500">
                *தயாராக வைத்திருக்க வேண்டிய உத்தேச ஆவணங்களின் பட்டியல்
              </p>
              <ul className="space-y-3.5 text-stone-700 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D4B36A] flex-shrink-0 mt-0.5" />
                  <span><strong>அடையாளச் சான்று:</strong> ஆதார் அட்டை / வாக்காளர் அடையாள அட்டை.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D4B36A] flex-shrink-0 mt-0.5" />
                  <span><strong>முகவரிச் சான்று:</strong> குடும்ப அட்டை (Ration Card) அல்லது மின்சார ரசீது.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D4B36A] flex-shrink-0 mt-0.5" />
                  <span><strong>வங்கி கணக்கு:</strong> விண்ணப்பதாரர் பெயரில் உள்ள சேமிப்புக் கணக்கு பாஸ்புக் நகல்.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D4B36A] flex-shrink-0 mt-0.5" />
                  <span><strong>புகைப்படங்கள்:</strong> அண்மையில் எடுக்கப்பட்ட பாஸ்போர்ட் அளவு புகைப்படங்கள்.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step Process */}
      <section className="section-padding bg-white">
        <div className="section-container space-y-12">
          <SectionHeading
            badge="செயல்முறை"
            title="கடன் வழிகாட்டுதலைப் பெறும் 4 எளிய படிகள்"
            description="நேரடியாக வாட்ஸ்அப் மூலம் தொடங்கி உங்கள் இலக்கை அடையுங்கள்."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-2xl bg-[#fcfaf5] border border-stone-200/80 relative"
              >
                <div className="font-serif-tamil text-4xl text-[#D4B36A] font-light mb-4">
                  0{step.step}
                </div>
                <h3 className="font-serif-tamil text-lg text-[#002617] font-medium mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-stone-600 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-[#fcfaf5] border-t border-stone-200/60">
        <div className="section-container max-w-4xl mx-auto space-y-10">
          <SectionHeading
            badge="கேள்வி-பதில்கள்"
            title="மகளிர் கடன்கள் குறித்து அடிக்கடி கேட்கப்படும் கேள்விகள்"
          />
          <FAQAccordion items={loanFaqs} />
        </div>
      </section>

      {/* Final WhatsApp CTA */}
      <section className="py-24 bg-[#123D2A] text-white text-center">
        <div className="section-container max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-3xl font-medium text-white">
            உங்களுக்கு ஏற்ற கடன் வாய்ப்பை அறிந்துகொள்ள தயாரா?
          </h2>
          <p className="text-white/80 text-xs sm:text-sm md:text-base font-light">
            எங்கள் பிரதிநிதிகளிடம் வாட்ஸ்அப்பில் பேசுங்கள். உங்கள் கேள்விகளுக்கு பொறுமையாகவும் விரிவாகவும் பதிலளிப்போம்.
          </p>
          <div className="pt-4">
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0a5232] text-white rounded-full border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>உடனே வாட்ஸ்அப்பில் பேச</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
