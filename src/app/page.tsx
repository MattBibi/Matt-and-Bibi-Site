import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllEpisodes } from "@/lib/api";

export default function Index() {
  const allEpisodes = getAllEpisodes();

  const featuredEpisode =
    allEpisodes.find((ep) => !ep.comingSoon) || allEpisodes[0];
  const remainingEpisodes = allEpisodes.filter((ep) => ep !== featuredEpisode);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={featuredEpisode.title}
          episodeNumber={featuredEpisode.episodeNumber}
          date={featuredEpisode.date}
          description={featuredEpisode.description}
          videoUrl={featuredEpisode.videoUrl}
          thumbnail={featuredEpisode.thumbnail}
          slug={featuredEpisode.slug}
          tags={featuredEpisode.tags}
          comingSoon={featuredEpisode.comingSoon}
        />
        {remainingEpisodes.length > 0 && (
          <MoreStories episodes={remainingEpisodes} />
        )}
      </Container>
    </main>
  );
}
