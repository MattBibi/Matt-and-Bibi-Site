export function getYouTubeThumbnail(videoUrl: string): string {
  const videoId = extractYouTubeId(videoUrl);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
  return "";
}

export function getYouTubeEmbedUrl(videoUrl: string): string {
  if (videoUrl.includes("/embed/")) return videoUrl;
  const videoId = extractYouTubeId(videoUrl);
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return videoUrl;
}

function extractYouTubeId(videoUrl: string): string | null {
  const embedMatch = videoUrl.match(/youtube\.com\/embed\/([^?&/]+)/);
  const shortMatch = videoUrl.match(/youtu\.be\/([^?&/]+)/);
  const watchMatch = videoUrl.match(/[?&]v=([^?&/]+)/);
  return embedMatch?.[1] ?? shortMatch?.[1] ?? watchMatch?.[1] ?? null;
}
