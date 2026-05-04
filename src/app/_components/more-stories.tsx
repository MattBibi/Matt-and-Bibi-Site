import { Episode } from "@/interfaces/episode";
import { PostPreview } from "./post-preview";

type Props = {
  episodes: Episode[];
};

export function MoreStories({ episodes }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        All Episodes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {episodes.map((episode) => (
          <PostPreview
            key={episode.slug}
            title={episode.title}
            episodeNumber={episode.episodeNumber}
            date={episode.date}
            description={episode.description}
            videoUrl={episode.videoUrl}
            thumbnail={episode.thumbnail}
            slug={episode.slug}
            tags={episode.tags}
          />
        ))}
      </div>
    </section>
  );
}
