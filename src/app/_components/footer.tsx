import Container from "@/app/_components/container";
import Image from "next/image";

type HostLinks = {
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  email?: string;
};

function HostColumn({ name, links }: { name: string; links: HostLinks }) {
  return (
    <div className="text-center">
      <h4 className="font-semibold text-xs uppercase tracking-widest text-vamos-yellow mb-3">
        {name}
      </h4>
      <ul className="space-y-2 text-sm">
        {links.linkedin && (
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-vamos-yellow transition-colors duration-150"
            >
              LinkedIn
            </a>
          </li>
        )}
        {links.instagram && (
          <li>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-vamos-yellow transition-colors duration-150"
            >
              Instagram
            </a>
          </li>
        )}
        {links.twitter && (
          <li>
            <a
              href={links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-vamos-yellow transition-colors duration-150"
            >
              Twitter / X
            </a>
          </li>
        )}
        {links.email && (
          <li>
            <a
              href={`mailto:${links.email}`}
              className="text-white/70 hover:text-vamos-yellow transition-colors duration-150"
            >
              Email
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-vamos-navy border-t border-vamos-navy-light">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center justify-between gap-12">
          <HostColumn
            name="Matt"
            links={{
              linkedin: "https://www.linkedin.com/in/matthewcarolan/",
              instagram: "https://www.instagram.com/themattcarolan/",
            }}
          />
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/Vamos-Logo.png"
              alt="Vamos! Tech Talks logo"
              width={256}
              height={256}
              className="rounded-full"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-vamos-yellow tracking-tight">
                Vamos! Tech Talks
              </h3>
              <p className="text-white/60 text-sm mt-0.5">
                with Matt &amp; Bibi
              </p>
            </div>
          </div>
          <HostColumn
            name="Bibi"
            links={{
              linkedin: "https://www.linkedin.com/in/bibschan/",
              instagram: "https://www.instagram.com/bibisouza_yvr/",
              twitter: "https://x.com/Bibi05089848",
            }}
          />
        </div>
        <div className="border-t border-vamos-navy-light py-4 text-center text-white/30 text-xs">
          © {new Date().getFullYear()} Vamos! Tech Talks
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
