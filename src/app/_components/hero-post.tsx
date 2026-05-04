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
};

export function HeroPost({
  title,
  episodeNumber,
  date,
  description,
  videoUrl,
  thumbnail,
  slug,
  tags,
}: Props) {
  const thumbSrc = thumbnail || getYouTubeThumbnail(videoUrl);

  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div className="mb-8 md:mb-0">
          <Link href={`/episodes/${slug}`} className="block relative group">
            {thumbSrc ? (
              <Image
                src={thumbSrc}
                alt={title}
                width={1280}
                height={720}
                className="w-full shadow-sm group-hover:shadow-lg transition-shadow duration-200"
              />
            ) : (
              <div className="w-full aspect-video bg-neutral-100 dark:bg-slate-700 flex items-center justify-center">
                <span className="text-neutral-400 dark:text-slate-500 text-6xl">▶</span>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="bg-black/60 text-white text-4xl w-16 h-16 rounded-full flex items-center justify-center pl-1">
                ▶
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-vamos-yellow mb-2">
            Latest Episode · Ep. {episodeNumber}
          </p>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/episodes/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg text-neutral-500 dark:text-slate-400">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-6">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full bg-vamos-yellow/10 text-vamos-navy dark:bg-vamos-yellow/20 dark:text-vamos-yellow border border-vamos-yellow/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
