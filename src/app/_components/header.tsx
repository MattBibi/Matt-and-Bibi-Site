import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-vamos-navy sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/assets/Vamos-Logo.png"
            alt="Vamos! Tech Talks logo"
            width={96}
            height={96}
            className="rounded-full transition-transform duration-200 group-hover:scale-105"
          />
          <div className="leading-tight">
            <span className="block text-vamos-yellow font-bold text-lg tracking-tight">
              Vamos!
            </span>
            <span className="block text-white text-xs tracking-widest uppercase opacity-80">
              Tech Talks
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-white/80 hover:text-vamos-yellow transition-colors duration-150"
          >
            Episodes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
