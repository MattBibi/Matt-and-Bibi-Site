import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-vamos-navy/95 backdrop-blur-sm sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-screen-xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/assets/Vamos-Logo.png"
            alt="Vamos! Tech Talks logo"
            width={36}
            height={36}
            className="rounded-full transition-transform duration-200 group-hover:scale-105"
          />
          <div className="leading-tight">
            <span className="block text-vamos-yellow font-bold text-sm tracking-tight">Vamos!</span>
            <span className="block text-white/40 text-[10px] tracking-[0.2em] uppercase">Tech Talks</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[10px] font-bold uppercase tracking-[0.15em]">
          <a href="#about" className="text-white/40 hover:text-vamos-yellow transition-colors duration-150">About</a>
          <a href="#episodes" className="text-white/40 hover:text-vamos-yellow transition-colors duration-150">Episodes</a>
          <a href="#guests" className="text-white/40 hover:text-vamos-yellow transition-colors duration-150">Guests</a>
          <a href="#greenroom" className="text-white/40 hover:text-vamos-yellow transition-colors duration-150">Greenroom</a>
          <a href="#listen" className="text-white/40 hover:text-vamos-yellow transition-colors duration-150">Listen</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
