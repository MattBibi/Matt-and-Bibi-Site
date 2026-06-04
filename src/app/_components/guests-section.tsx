const GUESTS = [
  {
    name: "Matt Biilmann",
    role: "CEO & Co-founder, Netlify",
    industry: "AI & Web Dev",
    slug: "ep1-matt-biilmann",
  },
  {
    name: "Jason Mayes",
    role: "Developer Advocate, Google",
    industry: "Web AI",
    slug: "ep2-jason-mayes",
  },
  {
    name: "Announcing Soon",
    role: null,
    industry: "Stay Tuned",
    slug: null,
  },
];

export function GuestsSection() {
  return (
    <section id="guests" className="py-24 bg-vamos-navy">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vamos-yellow mb-4">
            The Lineup ✦
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Our Guests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {GUESTS.map((guest, i) => {
            const isTba = !guest.slug;
            const card = (
              <div
                className={`rounded-2xl border bg-vamos-navy-light p-8 text-center transition-all duration-300 ${
                  isTba
                    ? "border-white/5 opacity-50"
                    : "border-white/5 hover:border-vamos-yellow/20 hover:-translate-y-1 group cursor-pointer"
                }`}
              >
                <div className={`w-14 h-14 rounded-full border flex items-center justify-center mx-auto mb-5 text-lg font-bold transition-colors duration-300 ${
                  isTba
                    ? "bg-white/[0.03] border-white/10 text-white/15"
                    : "bg-vamos-yellow/10 border-vamos-yellow/20 text-vamos-yellow group-hover:bg-vamos-yellow/20"
                }`}>
                  {isTba ? "?" : guest.name[0]}
                </div>
                <span className="inline-block bg-vamos-yellow/10 text-vamos-yellow text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  {guest.industry}
                </span>
                <h3 className={`font-bold mb-1 ${isTba ? "text-white/20" : "text-white"}`}>
                  {guest.name}
                </h3>
                {guest.role && (
                  <p className="text-xs text-white/35">{guest.role}</p>
                )}
              </div>
            );

            return guest.slug ? (
              <a key={i} href={`/episodes/${guest.slug}`}>{card}</a>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
