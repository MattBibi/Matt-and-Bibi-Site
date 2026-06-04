const WISHLIST = [
  {
    name: "Matt Wood",
    role: "Chief AI & Technology Officer, AWS",
    linkedin: "https://www.linkedin.com/in/themza/",
  },
  {
    name: "Anna Baird",
    role: "ex-COO, Google",
    linkedin: "https://www.linkedin.com/in/bairdanna",
  },
];

export function GreenroomSection() {
  return (
    <section id="greenroom" className="py-24 bg-vamos-navy">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vamos-yellow mb-4">
            The Greenroom ✦
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Who&apos;s Next?
          </h2>
          <p className="text-white/35 mt-4 text-sm max-w-sm mx-auto">
            Tell us who you want to see on Vamos! We read every submission.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Submission form */}
          <div className="rounded-2xl border border-white/5 bg-vamos-navy-light p-8 mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-vamos-yellow mb-6">
              Suggest a Guest
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-2">
                  Name
                </label>
                <div className="w-full bg-vamos-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-white/20 italic">
                  e.g. Kelsey Hightower
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-2">
                  Company / Role
                </label>
                <div className="w-full bg-vamos-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-white/20 italic">
                  e.g. Google, Developer Advocate
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-2">
                  Social / Profile Link
                </label>
                <div className="w-full bg-vamos-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-white/20 italic">
                  So we know we&apos;re talking about the right person
                </div>
              </div>
            </div>
            <a
              href="mailto:hello@vamostechtalks.com?subject=Guest%20Suggestion"
              className="inline-flex items-center gap-2 bg-vamos-yellow text-vamos-navy font-bold text-xs uppercase tracking-[0.15em] px-6 py-3 rounded-full hover:bg-vamos-yellow-dark transition-all duration-200 hover:scale-105"
            >
              Add to the Wishlist
            </a>
            <p className="text-[10px] text-white/20 mt-4">
              Submissions go straight to Matt &amp; Bibi — we read every one.
            </p>
          </div>

          {/* Wishlist board */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-4">
              The Wishlist
            </p>
            <div className="space-y-3">
              {WISHLIST.map((entry, i) => (
                <a
                  key={i}
                  href={entry.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 rounded-2xl border border-white/5 bg-vamos-navy-light px-6 py-5 hover:border-vamos-yellow/20 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-vamos-yellow/10 border border-vamos-yellow/20 flex items-center justify-center text-vamos-yellow font-bold text-sm flex-shrink-0 group-hover:bg-vamos-yellow/20 transition-colors duration-300">
                    {entry.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">{entry.name}</p>
                    <p className="text-white/35 text-xs mt-0.5">{entry.role}</p>
                  </div>
                  <span className="text-white/20 text-xs group-hover:text-vamos-yellow transition-colors duration-150">
                    LinkedIn →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
