import Breadcrumb from "@/components/shared/breadcrumb";
import { createMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { ShieldAlert } from "lucide-react";

export const metadata = createMetadata({
  title: "விதிமுறைகள் & நிபந்தனைகள் | ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை",
  description: "ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளையின் இணையதள விதிமுறைகள் மற்றும் நிபந்தனைகள் (Terms and Conditions).",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumb items={[{ label: "விதிமுறைகள் & நிபந்தனைகள்" }]} />

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto space-y-8">
          <div className="space-y-3 border-b border-stone-200/80 pb-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#D4B36A]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#25533d] font-semibold">
                சட்ட வழிகாட்டுதல்
              </span>
            </div>
            <h1 className="font-serif-tamil text-3xl sm:text-4xl font-medium text-[#002617]">
              விதிமுறைகள் & நிபந்தனைகள் (Terms & Conditions)
            </h1>
            <p className="text-stone-500 text-xs uppercase tracking-wider font-sans">
              கடைசியாகப் புதுப்பிக்கப்பட்டது: {new Date().toLocaleDateString("ta-IN")}
            </p>
          </div>

          {/* Prominent Legal Disclaimer */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-950 flex items-start gap-3.5">
            <ShieldAlert className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-sm leading-relaxed">
              <strong>முக்கிய நிதிசார் அறிவிப்பு (Financial Disclaimer):</strong> {siteConfig.fullName} என்பது பெண்களுக்கு வழிகாட்டுதல், ஆவண ஆலோசனை மற்றும் சமூக விழிப்புணர்வை வழங்கும் அறக்கட்டளை அமைப்பாகும். நாங்கள் நேரடி வங்கி அல்லது NBFC நிதி நிறுவனம் அல்ல. கடன் ஒப்புதல், வட்டி விகிதம் மற்றும் திருப்பிச் செலுத்தும் விதிகள் அனைத்தும் சம்பந்தப்பட்ட கடன் வழங்கும் நிறுவனங்களின் வழிகாட்டுதல்களுக்கு உட்பட்டவை.
            </div>
          </div>

          <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base font-light">
            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">1. இணையதள பயன்பாட்டு விதிமுறைகள்</h2>
              <p>
                இந்த இணையதளத்தைப் பார்வையிடுவதன் மூலமும், எங்கள் தகவல்களைப் பயன்படுத்துவதன் மூலமும், நீங்கள் இந்த விதிமுறைகள் மற்றும் நிபந்தனைகளுக்குக் கட்டுப்பட ஒப்புக்கொள்கிறீர்கள்.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">2. சேவைகளின் தன்மை</h2>
              <p>
                எங்கள் நோக்கம் பெண்களுக்கு அவர்களின் சுயதொழில் மற்றும் வாழ்வாதாரத்தை உயர்த்தும் நோக்கில், கிடைக்கக்கூடிய கடன் வாய்ப்புகள், தகுதிகள் மற்றும் ஆவணங்கள் குறித்த விழிப்புணர்வை ஏற்படுத்துவதாகும். இணையதளத்தில் உள்ள தகவல்கள் பொதுவான வழிகாட்டுதலுக்காக மட்டுமே வழங்கப்பட்டுள்ளன.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">3. கடன் ஒப்புதல் உத்தரவாதமின்மை</h2>
              <p>
                எங்களிடம் விசாரணை மேற்கொள்வது அல்லது ஆவண வழிகாட்டுதல் பெறுவது எந்தவொரு கடன் அனுமதிக்கான உத்தரவாதமாகாது (No Guarantee of Loan Approval). கடன் அனுமதி முற்றிலும் விண்ணப்பதாரரின் தகுதி, கடன் வரலாறு (CIBIL/Credit Score), மற்றும் கடன் வழங்கும் நிறுவனத்தின் சரிபார்ப்பைப் பொறுத்தது.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">4. தவறான தகவல்களைத் தவிர்த்தல்</h2>
              <p>
                விண்ணப்பதாரர்கள் வழங்கும் தகவல்கள் மற்றும் ஆவணங்கள் அனைத்தும் உண்மைத்தன்மை வாய்ந்தவையாக இருக்க வேண்டும். தவறான அல்லது போலி ஆவணங்களைச் சமர்ப்பிப்பதால் ஏற்படும் எந்தவொரு சட்டரீதியான விளைவுகளுக்கும் விண்ணப்பதாரரே பொறுப்பாவார்.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">5. அறிவுசார் சொத்துரிமை (Intellectual Property)</h2>
              <p>
                இந்த இணையதளத்தில் உள்ள அனைத்து உரை உள்ளடக்கங்கள், லோகோ, வடிவமைப்பு மற்றும் புகைப்படங்கள் ஆகியவை ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளைக்கு சொந்தமானது. அனுமதியின்றி மறுஉருவாக்கம் செய்ய அனுமதியில்லை.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif-tamil text-xl font-medium text-[#002617]">6. சட்ட அதிகார வரம்பு</h2>
              <p>
                இந்த விதிமுறைகள் மற்றும் நிபந்தனைகள் இந்திய சட்டங்களுக்கு உட்பட்டவை மற்றும் கரூர், தமிழ்நாடு நீதிமன்றங்களின் அதிகார வரம்பிற்குட்பட்டவை.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
