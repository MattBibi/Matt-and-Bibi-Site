import { MetadataRoute } from "next";
import { getAllEpisodes } from "@/lib/api";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const episodes = getAllEpisodes();

  const episodeUrls = episodes
    .filter((ep) => !ep.comingSoon)
    .map((episode) => ({
      url: `${SITE_URL}/episodes/${episode.slug}`,
      lastModified: new Date(episode.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...episodeUrls,
  ];
}
