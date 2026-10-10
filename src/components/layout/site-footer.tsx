import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigationItems } from "@/config/navigation";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#0c291c] text-white/70 py-12 sm:py-16 px-4 sm:px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-8 sm:gap-12">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4B36A] to-[#ffdf9b] text-[#123D2A] font-bold flex-shrink-0 flex items-center justify-center text-sm shadow-sm">
              ஸ்ரீ
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif-tamil text-lg sm:text-xl text-white font-medium truncate">
                {siteConfig.fullName}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/50 font-sans truncate">
                கரூர் · தமிழ்நாடு · மகளிர் முன்னேற்ற வழிகாட்டி மையம்
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs uppercase tracking-wider">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors py-1"
            >
              Instagram
            </a>
          </nav>
        </div>

        {/* Regulatory Financial Disclaimer */}
        <div className="text-[11px] sm:text-xs text-white/50 leading-relaxed max-w-4xl font-light">
          <strong>முக்கிய அறிவிப்பு:</strong> {siteConfig.fullName} என்பது பெண்களுக்குத் தேவையான கடன் வாய்ப்புகள், அரசு மானியங்கள் மற்றும் சுயஉதவிக் குழுக்கள் குறித்த விழிப்புணர்வை ஏற்படுத்தும் ஒரு வழிகாட்டுதல் அமைப்பாகும். நாங்கள் நேரடி வங்கி அல்லது கடன் வழங்கும் நிதி நிறுவனம் அல்ல. கடன் அனுமதி மற்றும் வட்டி விகிதங்கள் சம்பந்தப்பட்ட நிறுவனங்களின் வழிகாட்டுதல்களுக்கு உட்பட்டவை.
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-white/40 tracking-wider font-light pt-2 border-t border-white/5 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors py-1">
              தனியுரிமைக் கொள்கை (Privacy)
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors py-1">
              விதிமுறைகள் (Terms)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
