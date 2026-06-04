export function Intro() {
  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-5 bg-vamos-navy overflow-hidden">
      <span className="absolute top-10 left-10 text-vamos-yellow/15 text-2xl pointer-events-none select-none">✦</span>
      <span className="absolute top-10 right-10 text-vamos-yellow/15 text-2xl pointer-events-none select-none">✦</span>
      <span className="absolute bottom-16 left-10 text-vamos-yellow/15 text-2xl pointer-events-none select-none">✦</span>
      <span className="absolute bottom-16 right-10 text-vamos-yellow/15 text-2xl pointer-events-none select-none">✦</span>

      <div className="flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
        <span className="animate-blink inline-block w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Now Streaming</span>
      </div>

      <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-6 text-white">
        <span className="text-vamos-yellow">Vamos!</span>
        <br />
        Tech Talks
      </h1>

      <p className="text-base md:text-lg text-white/35 max-w-md mb-12 leading-relaxed">
        A video podcast with Matt &amp; Bibi exploring technology,
        open source, and the future of the web.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="#episodes"
          className="inline-flex items-center justify-center gap-2 bg-vamos-yellow text-vamos-navy font-bold text-xs uppercase tracking-[0.15em] px-7 py-3.5 rounded-full hover:bg-vamos-yellow-dark transition-all duration-200 hover:scale-105"
        >
          Watch Episodes
        </a>
        <a
          href="#listen"
          className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 font-bold text-xs uppercase tracking-[0.15em] px-7 py-3.5 rounded-full hover:border-vamos-yellow/40 hover:text-vamos-yellow transition-all duration-200"
        >
          Subscribe
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/15 text-xs tracking-widest uppercase animate-bounce select-none">
        ↓
      </div>
    </section>
  );
}
