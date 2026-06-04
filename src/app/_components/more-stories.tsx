import { Episode } from "@/interfaces/episode";
import { PostPreview } from "./post-preview";

type Props = {
  episodes: Episode[];
};

export function MoreStories({ episodes }: Props) {
  return (
    <div className="mt-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-6">
        All Episodes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            comingSoon={episode.comingSoon}
          />
        ))}
      </div>
    </div>
  );
}
