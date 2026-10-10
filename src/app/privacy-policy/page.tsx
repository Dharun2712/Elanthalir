import Breadcrumb from "@/components/shared/breadcrumb";
import { createMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "தனியுரிமைக் கொள்கை | ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை",
  description: "ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளையின் தனியுரிமைக் கொள்கை (Privacy Policy). உங்கள் தகவல்கள் மற்றும் பாதுகாப்பு.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumb items={[{ label: "தனியுரிமைக் கொள்கை" }]} />

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto space-y-8">
          <div className="space-y-3 border-b border-stone-200/80 pb-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#D4B36A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#25533d] font-semibold">
                பாதுகாப்பு & வெளிப்படைத்தன்மை
              </span>
            </div>
            <h1 className="font-serif-tamil text-3xl sm:text-4xl font-medium text-[#002617]">
              தனியுரிமைக் கொள்கை (Privacy Policy)
            </h1>
            <p className="text-stone-500 text-xs uppercase tracking-wider font-sans">
              கடைசியாகப் புதுப்பிக்கப்பட்டது: {new Date().toLocaleDateString("ta-IN")}
            </p>
          </div>

          <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base font-light">
            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">1. அறிமுகம்</h2>
              <p>
                <strong>{siteConfig.fullName}</strong> (&ldquo;நாங்கள்&rdquo;, &ldquo;எங்கள் அமைப்பு&rdquo;) எங்கள் இணையதளத்தைப் பார்வையிடும் மற்றும் சேவைகளைப் பயன்படுத்தும் பயனர்களின் தனியுரிமையை மிகவும் மதிக்கிறது. நீங்கள் எங்களுக்கு வழங்கும் தகவல்கள் எவ்வாறு சேகரிக்கப்பட்டு, பயன்படுத்தப்படுகிறது என்பதை இக்கொள்கை விளக்குகிறது.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">2. நாங்கள் சேகரிக்கும் தகவல்கள்</h2>
              <p>
                எங்கள் இணையதளத்தில் உள்ள தொடர்பு படிவம் அல்லது வாட்ஸ்அப் இணைப்பு மூலம் நீங்கள் நேரடியாக எங்களைத் தொடர்பு கொள்ளும்போது மட்டுமே தகவல்கள் சேகரிக்கப்படுகின்றன:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>உங்கள் பெயர்</li>
                <li>தொலைபேசி / வாட்ஸ்அப் எண்</li>
                <li>உங்கள் வசிப்பிடம் அல்லது பகுதி</li>
                <li>நீங்கள் கேட்கும் சேவை அல்லது கடன் விசாரணை விவரம்</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">3. தகவல்களின் பயன்பாடு</h2>
              <p>சேகரிக்கப்பட்ட தகவல்கள் பின்வரும் நோக்கங்களுக்காக மட்டுமே பயன்படுத்தப்படுகின்றன:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>உங்கள் கடன் அல்லது வழிகாட்டுதல் விசாரணைக்கு பதிலளிக்க.</li>
                <li>பொருத்தமான நிதி திட்டங்கள் மற்றும் ஆவண வழிகாட்டல்களைப் பகிர்ந்து கொள்ள.</li>
                <li>எங்கள் சேவைத் தரத்தை மேம்படுத்த.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">4. தகவல் பாதுகாப்பு மற்றும் பகிர்வு</h2>
              <p>
                நாங்கள் உங்கள் தனிப்பட்ட தகவல்களை எந்தவொரு வணிக நோக்கத்திற்காகவும் விற்பனை செய்ய மாட்டோம், வாடகைக்கு விடமாட்டோம் அல்லது பிற மூன்றாம் தரப்பினருடன் பகிர மாட்டோம். உங்கள் வெளிப்படையான ஒப்புதல் இன்றி அல்லது சட்டப்பூர்வ தேவைகள் அன்றி தகவல்கள் ரகசியமாகப் பாதுகாக்கப்படும்.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">5. வாட்ஸ்அப் மற்றும் மூன்றாம் தரப்பு இணைப்புகள்</h2>
              <p>
                எங்கள் இணையதளம் வாட்ஸ்அப் (Meta) மற்றும் இன்ஸ்டாகிராம் ஆகியவற்றிற்கான இணைப்புகளைக் கொண்டுள்ளது. நீங்கள் அந்த சேவைகளைப் பயன்படுத்தும்போது, அவற்றின் தனியுரிமைக் கொள்கைகள் பொருந்தும்.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">6. தொடர்புகொள்ள</h2>
              <p>
                இக்கொள்கை குறித்து ஏதேனும் சந்தேகங்கள் இருந்தால், எங்களை தொலைபேசி அல்லது வாட்ஸ்அப் மூலம் தொடர்புகொள்ளலாம்: <strong>{siteConfig.phoneDisplay}</strong>, {siteConfig.location}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
