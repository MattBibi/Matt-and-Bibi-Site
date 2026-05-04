import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllEpisodes, getEpisodeBySlug } from "@/lib/api";
import { PODCAST_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { VideoEmbed } from "@/app/_components/video-embed";
import DateFormatter from "@/app/_components/date-formatter";
import Link from "next/link";
import { getYouTubeEmbedUrl } from "@/lib/youtube";

export default async function EpisodePage(props: Params) {
  const params = await props.params;
  const episode = getEpisodeBySlug(params.slug);

  if (!episode) {
    return notFound();
  }

  const content = await markdownToHtml(episode.content || "");
  const embedUrl = getYouTubeEmbedUrl(episode.videoUrl);

  return (
    <main>
      <Container>
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
              Ep. {episode.episodeNumber}
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
          <div className="mb-10">
            <VideoEmbed videoUrl={embedUrl} title={episode.title} />
          </div>
          {content && (
            <>
              <h2 className="text-3xl font-bold mb-6 max-w-2xl mx-auto">
                Show Notes
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

  return {
    title: `${episode.title} | ${PODCAST_NAME}`,
    description: episode.description,
  };
}

export async function generateStaticParams() {
  const episodes = getAllEpisodes();

  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}
