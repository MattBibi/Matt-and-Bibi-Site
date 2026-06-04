export function AnnouncementBanner() {
  return (
    <div className="bg-vamos-yellow text-vamos-navy w-full py-2 px-4 text-center text-[11px] font-bold uppercase tracking-[0.2em]">
      <a
        href="#episodes"
        className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity duration-150"
      >
        <span>✦</span>
        <span>Ep. 01 with Matt Biilmann is out now</span>
        <span className="underline underline-offset-2">Watch Now →</span>
        <span>✦</span>
      </a>
    </div>
  );
}
