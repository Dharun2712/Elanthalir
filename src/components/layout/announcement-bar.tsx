export default function AnnouncementBar() {
  return (
    <div
      className="w-full py-2 px-4 text-center text-xs tracking-wider font-light bg-[#0c291c] text-white/90 border-b border-white/5"
      role="banner"
    >
      <div className="section-container flex items-center justify-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4B36A] shrink-0" />
        <span className="font-sans text-xs tracking-wider text-amber-100/90 font-normal">
          ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை · கரூர்
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4B36A] shrink-0" />
      </div>
    </div>
  );
}
