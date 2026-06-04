const HOSTS = [
  {
    name: "Matt Carolan",
    role: "Co-host & Co-founder",
    initial: "M",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/matthewcarolan/" },
      { label: "Instagram", href: "https://www.instagram.com/themattcarolan/" },
    ],
  },
  {
    name: "Bibi Souza",
    role: "Co-host & Co-founder",
    initial: "B",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bibschan/" },
      { label: "Instagram", href: "https://www.instagram.com/bibisouza_yvr/" },
      { label: "X", href: "https://x.com/Bibi05089848" },
    ],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-vamos-navy">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vamos-yellow mb-4">
            The Show ✦
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            About Vamos!
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-lg text-white/40 leading-relaxed">
            A video podcast where Matt &amp; Bibi sit down with builders, leaders, and
            visionaries shaping the future of technology. From open source to AI,
            from startup war stories to the next frontier of the web — genuine
            conversations with people doing the work.
          </p>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vamos-yellow text-center mb-10">
          Your Hosts ✦
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {HOSTS.map((host) => (
            <div
              key={host.name}
              className="rounded-2xl border border-white/5 bg-vamos-navy-light p-8 text-center hover:border-vamos-yellow/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-vamos-yellow/10 border border-vamos-yellow/20 flex items-center justify-center mx-auto mb-5 text-vamos-yellow text-xl font-bold group-hover:bg-vamos-yellow/20 transition-colors duration-300">
                {host.initial}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{host.name}</h3>
              <p className="text-sm text-white/35 mb-5">{host.role}</p>
              <div className="flex justify-center gap-1 text-xs text-white/25 flex-wrap">
                {host.links.map((link, i) => (
                  <span key={link.label} className="flex items-center gap-1">
                    {i > 0 && <span className="text-white/10">·</span>}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-vamos-yellow transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
