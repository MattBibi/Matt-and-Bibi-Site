import { Episode } from "@/interfaces/episode";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const episodesDirectory = join(process.cwd(), "_episodes");

export function getEpisodeSlugs() {
  return fs.readdirSync(episodesDirectory);
}

export function getEpisodeBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(episodesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Episode;
}

export function getAllEpisodes(): Episode[] {
  const slugs = getEpisodeSlugs();
  return slugs
    .map((slug) => getEpisodeBySlug(slug))
    .sort((a, b) => (a.episodeNumber > b.episodeNumber ? -1 : 1));
}
