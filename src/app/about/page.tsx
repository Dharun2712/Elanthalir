import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Heart, Users, Target, CheckCircle, MapPin, Sparkles } from "lucide-react";
import Breadcrumb from "@/components/shared/breadcrumb";
import SectionHeading from "@/components/shared/section-heading";
import { createMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "எங்களைப் பற்றி | ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை கரூர்",
  description:
    "ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை — கரூரில் பெண்களின் பொருளாதார வளர்ச்சி, மகளிர் கடன்கள் மற்றும் சுயஉதவிக் குழுக்களுக்கான நம்பிக்கையான வழிகாட்டி மையம்.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumb items={[{ label: "எங்களைப் பற்றி" }]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#E5F0E7]/60 to-[#FFFDF7] py-16 md:py-20 border-b border-stone-200/60">
        <div className="section-container text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs font-semibold uppercase bg-white text-[#25533d] border border-stone-200 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4B36A]" />
            <span>கரூர் மகளிர் முன்னேற்ற மையம்</span>
          </div>
          <h1 className="font-serif-tamil text-3xl sm:text-5xl lg:text-5xl font-medium text-[#002617] leading-tight">
            பெண்களின் கனவுகளுக்கு சிறகுகள் தரும் நம்பிக்கையான துணை
          </h1>
          <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed font-light">
            {siteConfig.fullName} — பெண்களின் உழைப்பை மதித்து, பொருளாதார ரீதியாக அவர்கள் சுயமாக காலூன்ற வழிவகுக்கும் தோழமை இயக்கம்.
          </p>
        </div>
      </section>

      {/* Main Narrative & Story Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-[#D4B36A]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#25533d] font-semibold">
                  எங்கள் தோற்றம் மற்றும் இலக்கு
                </span>
              </div>
              <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-3xl text-[#002617] font-medium leading-snug">
                ஒவ்வொரு பெண்ணிடமும் ஒளிந்திருக்கும் தொழில் திறனை வெளிக்கொணர்வதே எங்கள் பணி
              </h2>
              <p className="text-stone-700 leading-relaxed font-light text-sm sm:text-base">
                கிராமப்புற மற்றும் நகர்ப்புறப் பெண்கள் பொருளாதார ரீதியாக முன்னேறும்போது குடும்பமும், ஒட்டுமொத்த சமுதாயமும் உயர்கிறது. ஆனால், பல நேரங்களில் சரியான தகவல்கள், தெளிவான நிதி வழிகாட்டுதல் மற்றும் கடன் திட்டங்கள் குறித்த புரிதல் இல்லாததால் பலரது கனவுகள் தடைபடுகின்றன.
              </p>
              <p className="text-stone-700 leading-relaxed font-light text-base">
                இந்த இடைவெளியை நிரப்பவே <strong>{siteConfig.fullName}</strong> கரூரில் செயல்பட்டு வருகிறது. கடன் வாய்ப்புகள், சுயஉதவிக் குழு நிதித் தேவைகள், எளிய ஆவணப்படுத்துதல் மற்றும் சிறு தொழில் தொடங்குவதற்கான ஆலோசனைகளை எளிய தமிழில் வழங்குகிறோம்.
              </p>

              <div className="flex items-center gap-3.5 p-5 rounded-2xl bg-[#fcfaf5] border border-stone-200">
                <MapPin className="w-5 h-5 text-[#25533d] flex-shrink-0" />
                <p className="text-sm font-medium text-stone-800">
                  முதன்மை சேவை மையம்: <strong>{siteConfig.location}</strong> — மகளிர் சுய முன்னேற்றத்தை முதன்மையாகக் கொண்டு இயங்குகிறோம்.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 aspect-[4/3]">
                <Image
                  src="/images/women-entrepreneurs/confidence.jpg"
                  alt="தன்னம்பிக்கையுடன் செயல்படும் மகளிர்"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-padding bg-[#fcfaf5] border-y border-stone-200/60">
        <div className="section-container space-y-12">
          <SectionHeading
            badge="நோக்கமும் தொலைநோக்கும்"
            title="எங்கள் வழிகாட்டும் கொள்கைகள்"
            description="பெண்கள் சுதந்திரமாகவும் கௌரவமாகவும் வாழ்வதற்கான சமூகம் படைப்பதே எங்கள் இலக்கு."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E5F0E7] flex items-center justify-center text-[#0a5232]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif-tamil text-2xl text-[#002617] font-medium">எங்கள் நோக்கம் (Mission)</h3>
              <p className="text-stone-600 leading-relaxed font-light text-sm sm:text-base">
                பெண்களுக்குப் பொருத்தமான கடன் திட்டங்கள், சுயதொழில் தொடங்குவதற்கான ஆலோசனைகள் மற்றும் சுயஉதவிக் குழுக்களின் வளர்ச்சிக்கான நிதி வழிகாட்டல்களை வெளிப்படையாகவும் நம்பிக்கையுடனும் கொண்டு சேர்ப்பது.
              </p>
              <ul className="space-y-2.5 pt-2 text-sm text-stone-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#228B57] flex-shrink-0" />
                  <span>நேர்மையான மற்றும் தெளிவான தகவல்கள்</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#228B57] flex-shrink-0" />
                  <span>எளிமையான தமிழில் புரியும்படி வழிகாட்டுதல்</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#228B57] flex-shrink-0" />
                  <span>பெண்களின் முன்னேற்றத்தில் தனி கவனம்</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-stone-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-tamil text-2xl text-[#002617] font-medium">எங்கள் தொலைநோக்கு (Vision)</h3>
              <p className="text-stone-600 leading-relaxed font-light text-sm sm:text-base">
                கரூர் மற்றும் சுற்றியுள்ள பகுதிகளில் உள்ள ஒவ்வொரு பெண்ணும் பொருளாதார சுதந்திரம் பெற்று, தன்னம்பிக்கை மிக்க பெண் தொழில்முனைவோராக திகழும் ஒரு தன்னிறைவு பெற்ற சமூகத்தை உருவாக்குவது.
              </p>
              <ul className="space-y-2.5 pt-2 text-sm text-stone-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D4B36A] flex-shrink-0" />
                  <span>சுயஉதவிக் குழுக்களின் பொருளாதார வளர்ச்சி</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D4B36A] flex-shrink-0" />
                  <span>சிறு தொழில்களை விரிவாக்கும் நிதி வாய்ப்புகள்</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D4B36A] flex-shrink-0" />
                  <span>தலைமுறை தாண்டிய குடும்ப நிதி உறுதிப்பாடு</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="section-padding bg-white">
        <div className="section-container space-y-12">
          <SectionHeading
            badge="சேவை தூண்கள்"
            title="நாங்கள் எவ்வாறு பெண்களோடு இணைந்து செயல்படுகிறோம்?"
            description="வழிகாட்டுதல் முதல் தொழில் விரிவாக்கம் வரை உறுதுணையாக இருக்கிறோம்."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "பொருளாதார சுதந்திரம்",
                desc: "பெண்கள் சுயசார்புடன் தங்கள் குடும்ப நிதி நிலையை உயர்த்த ஆதரவு அளிக்கிறோம்.",
              },
              {
                icon: Users,
                title: "சுயஉதவிக் குழுக்கள்",
                desc: "ஒன்றிணைந்து செயல்படும் மகளிர் குழுக்களின் கடன் வாய்ப்புகளை ஒருங்கிணைக்கிறோம்.",
              },
              {
                icon: Sparkles,
                title: "சிறு தொழில் வளர்ச்சி",
                desc: "தையல், கைவினை, உணவுப் பொருட்கள் போன்ற வாழ்வாதாரத் தொழில்களை மேம்படுத்துகிறோம்.",
              },
              {
                icon: CheckCircle,
                title: "நம்பகமான அணுகுமுறை",
                desc: "தேவையற்ற குழப்பங்கள் இன்றி, சரியான ஆவணங்கள் மற்றும் நிபந்தனைகளை விளக்குகிறோம்.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fcfaf5] border border-stone-200/80 hover:border-[#D4B36A] transition-all hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-white text-[#0a5232] flex items-center justify-center shadow-sm mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-tamil text-lg text-[#002617] font-medium mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#123D2A] text-white text-center">
        <div className="section-container max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif-tamil text-xl sm:text-2xl lg:text-3xl font-medium text-white">
            எங்களுடன் இணைந்து உங்கள் தொழிலைத் தொடங்குங்கள்!
          </h2>
          <p className="text-white/80 text-xs sm:text-sm md:text-base font-light">
            எங்கள் குழு உங்களுக்கு வழிகாட்டக் காத்திருக்கிறது. உங்கள் சந்தேகங்களை வாட்ஸ்அப்பில் கேட்டுத் தெரிந்துகொள்ளுங்கள்.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#0a5232] text-white rounded-full border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all shadow-xl inline-flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>வாட்ஸ்அப்பில் தொடர்புகொள்ள</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              <span>தொடர்பு பக்கம் செல்ல</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
