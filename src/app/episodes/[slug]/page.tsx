import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllEpisodes, getEpisodeBySlug } from "@/lib/api";
import { PODCAST_NAME, SITE_URL } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { VideoEmbed } from "@/app/_components/video-embed";
import DateFormatter from "@/app/_components/date-formatter";
import Link from "next/link";
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from "@/lib/youtube";

export default async function EpisodePage(props: Params) {
  const params = await props.params;
  const episode = getEpisodeBySlug(params.slug);

  if (!episode) {
    return notFound();
  }

  const content = await markdownToHtml(episode.content || "");
  const embedUrl = getYouTubeEmbedUrl(episode.videoUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    episodeNumber: episode.episodeNumber,
    description: episode.description,
    datePublished: episode.date,
    url: `${SITE_URL}/episodes/${episode.slug}`,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: PODCAST_NAME,
      url: SITE_URL,
    },
    ...(episode.videoUrl && {
      video: {
        "@type": "VideoObject",
        name: episode.title,
        description: episode.description,
        embedUrl: embedUrl,
        thumbnailUrl:
          episode.thumbnail || getYouTubeThumbnail(episode.videoUrl),
      },
    }),
  };

  return (
    <main>
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mb-8 mt-8">
          <Link
            href="/"
            className="text-sm font-medium hover:underline text-vamos-yellow"
          >
            ← All Episodes
          </Link>
        </div>
        <article className="mb-32">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-vamos-yellow mb-2">
              {episode.comingSoon ? "Coming Soon · " : ""}Ep.{" "}
              {episode.episodeNumber}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
              {episode.title}
            </h1>
            <div className="text-lg text-neutral-500 dark:text-slate-400 mb-4">
              <DateFormatter dateString={episode.date} />
            </div>
            {episode.tags && episode.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {episode.tags.map((tag) => (
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
          {episode.comingSoon ? (
            <div className="mb-10 w-full aspect-video bg-vamos-navy dark:bg-slate-800 flex flex-col items-center justify-center gap-4 rounded-lg border border-vamos-navy-light">
              <span className="text-5xl">🎙️</span>
              <p className="text-2xl font-bold text-vamos-yellow">
                Episode dropping soon
              </p>
              <p className="text-neutral-400 dark:text-slate-400 text-sm">
                Subscribe on YouTube so you don&apos;t miss it
              </p>
            </div>
          ) : (
            <div className="mb-10">
              <VideoEmbed videoUrl={embedUrl} title={episode.title} />
            </div>
          )}
          {content && (
            <>
              <h2 className="text-3xl font-bold mb-6 max-w-2xl mx-auto">
                {episode.comingSoon ? "Sneak Peek" : "Show Notes"}
              </h2>
              <PostBody content={content} />
            </>
          )}
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const episode = getEpisodeBySlug(params.slug);

  if (!episode) {
    return notFound();
  }

  const thumbnail =
    episode.thumbnail || getYouTubeThumbnail(episode.videoUrl) || undefined;

  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      type: "video.episode",
      title: episode.title,
      description: episode.description,
      url: `${SITE_URL}/episodes/${episode.slug}`,
      siteName: PODCAST_NAME,
      ...(thumbnail && {
        images: [{ url: thumbnail, width: 1280, height: 720, alt: episode.title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description: episode.description,
      ...(thumbnail && { images: [thumbnail] }),
    },
  };
}

export async function generateStaticParams() {
  const episodes = getAllEpisodes();

  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}
