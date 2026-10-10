import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Scissors,
  Utensils,
  Palette,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/shared/breadcrumb";
import SectionHeading from "@/components/shared/section-heading";
import { createMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "மகளிர் சிறு தொழில் வளர்ச்சி | பெண் தொழில்முனைவோர் வழிகாட்டுதல் | கரூர்",
  description:
    "கரூரில் பெண்கள் சுயதொழில் தொடங்குவதற்கும், சிறு தொழில்களை விரிவாக்குவதற்கும் நிதி ஆலோசனை, எளிய வழிகாட்டுதல் மற்றும் தொழில் கடன் வாய்ப்புகள்.",
  path: "/business-development",
});

const businessCategories = [
  {
    title: "தையல் & ஆடை வடிவமைப்பு",
    desc: "தையல் இயந்திரம் வாங்குதல், எம்ப்ராய்டரி யூனிட் அமைத்தல், ஆயத்த ஆடைகள் தயாரித்தல் மற்றும் பொட்டிக் அமைத்தல்.",
    image: "/images/gallery/tailoring.jpg",
    icon: Scissors,
  },
  {
    title: "உணவு & தின்பண்டங்கள் தயாரிப்பு",
    desc: "பாரம்பரிய தின்பண்டங்கள், வீட்டு மசாலா பொடிகள், இட்லி-தோசை மாவு தயாரிப்பு மற்றும் சிற்றுண்டி கடைகள்.",
    image: "/images/gallery/food-business.jpg",
    icon: Utensils,
  },
  {
    title: "கைவினை & சணல் பொருட்கள்",
    desc: "சுற்றுச்சூழல் நட்பு சணல் பைகள், கைவினை பொம்மைகள், கூடை பின்னுதல் மற்றும் அலங்காரப் பொருட்கள் உருவாக்கம்.",
    image: "/images/gallery/handicrafts.jpg",
    icon: Palette,
  },
  {
    title: "மளிகை & சில்லறை வணிகம்",
    desc: "கிராமப்புற மளிகைக் கடைகள், சிறு அங்காடிகள், காய்கறி-பழ வியாபாரம் மற்றும் பால் விநியோகம்.",
    image: "/images/women-entrepreneurs/entrepreneur-1.jpg",
    icon: ShoppingBag,
  },
];

export default function BusinessDevelopmentPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumb items={[{ label: "தொழில் வளர்ச்சி" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E5F0E7]/60 to-[#FFFDF7] py-16 md:py-20 border-b border-stone-200/60">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase bg-white text-[#25533d] border border-stone-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B36A]" />
                <span>பெண் தொழில்முனைவோர் எழுச்சி</span>
              </div>
              <h1 className="font-serif-tamil text-3xl sm:text-5xl font-medium text-[#002617] leading-tight">
                உங்கள் திறமைக்கு மதிப்பு தரும் சிறு தொழில் வழிகாட்டுதல்
              </h1>
              <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                வீட்டிலிருந்தே செய்யும் தொழிலாக இருந்தாலும், விரிவுபடுத்த நினைக்கும் சிறு வணிகமாக இருந்தாலும் — மூலதனத் தேவைகள் மற்றும் வளர்ச்சித் திட்டங்களுக்குத் தெளிவான வழிகாட்டுதல் தருகிறோம்.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("smallBusiness")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#0a5232] text-white rounded-full border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center gap-2.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>தொழில் கடன் பற்றி வாட்ஸ்அப்பில் பேச</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-[4/3]">
                <Image
                  src="/images/women-entrepreneurs/confidence.jpg"
                  alt="தன்னம்பிக்கையுடன் செயல்படும் பெண் தொழில்முனைவோர்"
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

      {/* Popular Business Clusters */}
      <section className="section-padding bg-white">
        <div className="section-container space-y-12">
          <SectionHeading
            badge="தொழில் வாய்ப்புகள்"
            title="பெண்கள் வெற்றிகரமாக நடத்தக்கூடிய சிறு தொழில்கள்"
            description="உள்ளூர் தேவையை அறிந்து மகளிர் சுலபமாகத் தொடங்கக்கூடிய தொழில்களுக்கான நிதி ஆலோசனை."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessCategories.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 relative min-h-[200px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                </div>
                <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#E5F0E7] flex items-center justify-center text-[#0a5232] mb-2">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-tamil text-xl font-medium text-[#002617]">{item.title}</h3>
                    <p className="font-sans text-stone-600 text-sm leading-relaxed font-light">{item.desc}</p>
                  </div>
                  <div className="pt-4">
                    <a
                      href={getWhatsAppUrl("smallBusiness")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#002617] hover:text-[#176B45] transition-colors"
                    >
                      <span>இத்தொழிலுக்கு கடன் விசாரிக்க</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we guide entrepreneurs */}
      <section className="section-padding bg-[#fcfaf5] border-y border-stone-200/60">
        <div className="section-container space-y-12">
          <SectionHeading
            badge="முன்னேற்றப் பாதை"
            title="தொழிலை உயர்த்த நாங்கள் எவ்வாறு உதவுகிறோம்?"
            description="கருத்துருவாக்கம் முதல் மூலதன ஏற்பாடு வரை உடனிருக்கும் வழிகாட்டி."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
              <span className="font-serif-tamil text-4xl text-[#D4B36A] font-light">01</span>
              <h3 className="font-serif-tamil text-lg font-medium text-[#002617]">தேவை மதிப்பீடு</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed font-light">
                இயந்திரங்கள், மூலப்பொருட்கள் அல்லது பணிபுரியும் மூலதனத்திற்கு (Working Capital) எவ்வளவு நிதி தேவை என்பதைத் துல்லியமாக மதிப்பிடுதல்.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
              <span className="font-serif-tamil text-4xl text-[#D4B36A] font-light">02</span>
              <h3 className="font-serif-tamil text-lg font-medium text-[#002617]">பொருத்தமான கடன் திட்டம் தேர்வு</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed font-light">
                அரசு மானியத் திட்டங்கள், வங்கி சிறு வணிகக் கடன்கள் மற்றும் மகளிர் சிறப்புத் திட்டங்களில் உங்கள் தொழிலுக்கு ஏற்றதைத் தேர்ந்தெடுத்தல்.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
              <span className="font-serif-tamil text-4xl text-[#D4B36A] font-light">03</span>
              <h3 className="font-serif-tamil text-lg font-medium text-[#002617]">ஆவண ஒருங்கிணைப்பு</h3>
              <p className="font-sans text-stone-600 text-sm leading-relaxed font-light">
                வணிக விவரங்கள், ஆதார், பான், மற்றும் தேவையான அனுமதிகளைச் சரியாக ஒழுங்குபடுத்தி விண்ணப்பிக்க உதவுதல்.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#123D2A] text-white text-center">
        <div className="section-container max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-3xl font-medium text-white">
            உங்கள் தொழில் கனவை நிஜமாக்க வாட்ஸ்அப்பில் உரையாடுங்கள்!
          </h2>
          <p className="text-white/80 text-xs sm:text-sm md:text-base font-light">
            கரூரில் தொழில் புரியும் அனைத்துப் பெண்களுக்கும் எளிய முறையில் நிதி ஆலோசனைகள் வழங்க நாங்கள் எப்போதும் தயாராக இருக்கிறோம்.
          </p>
          <div className="pt-4">
            <a
              href={getWhatsAppUrl("smallBusiness")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#0a5232] text-white rounded-full border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{siteConfig.phoneDisplay} — சிறு தொழில் கடன் அறிய</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
