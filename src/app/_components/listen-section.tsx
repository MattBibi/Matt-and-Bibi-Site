const PLATFORMS = [
  {
    name: "YouTube",
    description: "Watch full video episodes",
    href: "https://www.youtube.com/@vamostechtalks",
    available: true,
    icon: "▶",
  },
  {
    name: "Spotify",
    description: "Audio podcast — coming soon",
    href: null,
    available: false,
    icon: "♫",
  },
  {
    name: "Apple Podcasts",
    description: "Audio podcast — coming soon",
    href: null,
    available: false,
    icon: "🎙",
  },
];

export function ListenSection() {
  return (
    <section id="listen" className="py-24 bg-vamos-navy">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vamos-yellow mb-4">
            Tune In ✦
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Listen &amp; Watch
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 text-center transition-all duration-300 ${
                p.available
                  ? "border-vamos-yellow/20 bg-vamos-navy-light hover:border-vamos-yellow/40 hover:-translate-y-1"
                  : "border-white/5 bg-vamos-navy-light opacity-40"
              }`}
            >
              <div className="text-3xl mb-5">{p.icon}</div>
              <h3 className="font-bold text-white mb-2">{p.name}</h3>
              <p className="text-xs text-white/40 mb-6">{p.description}</p>
              {p.available && p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-bold uppercase tracking-widest text-vamos-yellow border border-vamos-yellow/30 px-5 py-2 rounded-full hover:bg-vamos-yellow/10 transition-colors duration-150"
                >
                  Watch Now
                </a>
              ) : (
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/20 border border-white/10 px-5 py-2 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
