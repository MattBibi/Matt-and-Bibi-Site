import Link from "next/link";
import Image from "next/image";
import DateFormatter from "./date-formatter";
import { getYouTubeThumbnail } from "@/lib/youtube";

type Props = {
  title: string;
  episodeNumber: number;
  date: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  slug: string;
  tags: string[];
  comingSoon?: boolean;
};

export function PostPreview({
  title,
  episodeNumber,
  date,
  description,
  videoUrl,
  thumbnail,
  slug,
  tags,
  comingSoon,
}: Props) {
  const thumbSrc = thumbnail || getYouTubeThumbnail(videoUrl);

  return (
    <div className="rounded-2xl border border-white/5 bg-vamos-navy-light overflow-hidden group hover:border-vamos-yellow/20 hover:-translate-y-1 transition-all duration-300">
      <Link href={`/episodes/${slug}`} className="relative block aspect-video overflow-hidden">
        {thumbSrc ? (
          <Image
            src={thumbSrc}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-vamos-navy flex items-center justify-center">
            <span className="text-white/20 text-4xl">▶</span>
          </div>
        )}
        {comingSoon ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span className="bg-vamos-yellow text-vamos-navy text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              Coming Soon
            </span>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="bg-black/60 text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center pl-1 backdrop-blur-sm">
              ▶
            </span>
          </div>
        )}
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vamos-yellow">
            {comingSoon ? "Coming Soon · " : ""}Ep. {episodeNumber}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 leading-snug">
          <Link
            href={`/episodes/${slug}`}
            className="hover:text-vamos-yellow transition-colors duration-150"
          >
            {title}
          </Link>
        </h3>
        <div className="text-xs text-white/30 mb-3">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-sm text-white/45 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-vamos-yellow/10 text-vamos-yellow border border-vamos-yellow/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
