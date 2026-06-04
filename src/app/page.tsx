import { Intro } from "@/app/_components/intro";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { AboutSection } from "@/app/_components/about-section";
import { GuestsSection } from "@/app/_components/guests-section";
import { ListenSection } from "@/app/_components/listen-section";
import { GreenroomSection } from "@/app/_components/greenroom-section";
import { SectionDivider } from "@/app/_components/section-divider";
import { MarqueeBanner } from "@/app/_components/marquee-banner";
import { getAllEpisodes } from "@/lib/api";

const TICKER_TOPICS = [
  "open source ✦",
  "AI & agents ✦",
  "future of the web ✦",
  "developer tools ✦",
  "startup stories ✦",
  "tech leadership ✦",
  "web platform ✦",
  "building in public ✦",
  "open standards ✦",
  "devex & dx ✦",
];

const TICKER_VIBES = [
  "real talk ✦",
  "no slides ✦",
  "genuine convos ✦",
  "builders only ✦",
  "unfiltered ✦",
  "with Matt & Bibi ✦",
  "new episodes ✦",
  "deep dives ✦",
  "zero fluff ✦",
  "let's go ✦",
];

export default function Index() {
  const allEpisodes = getAllEpisodes();
  const featuredEpisode = allEpisodes.find((ep) => !ep.comingSoon) || allEpisodes[0];
  const remainingEpisodes = allEpisodes.filter((ep) => ep !== featuredEpisode);

  return (
    <main className="bg-vamos-navy">
      <Intro />

      <MarqueeBanner items={TICKER_TOPICS} direction="left" variant="dark" />

      <SectionDivider />

      <AboutSection />

      <SectionDivider />

      <section id="episodes" className="py-24 bg-vamos-navy">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vamos-yellow mb-4">
              Watch ✦
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Episodes
            </h2>
          </div>
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
        </div>
      </section>

      <MarqueeBanner items={TICKER_VIBES} direction="right" variant="yellow" />

      <SectionDivider />

      <GuestsSection />

      <SectionDivider />

      <GreenroomSection />

      <SectionDivider />

      <ListenSection />
    </main>
  );
}
