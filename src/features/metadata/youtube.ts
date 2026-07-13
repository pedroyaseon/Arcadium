const youtubeIdPattern = /^[A-Za-z0-9_-]{11}$/;

export const isValidYoutubeVideoId = (externalId: string) => youtubeIdPattern.test(externalId);

export const youtubeEmbedUrl = (externalId: string): string | undefined =>
  isValidYoutubeVideoId(externalId)
    ? `https://www.youtube-nocookie.com/embed/${externalId}?rel=0&modestbranding=1`
    : undefined;

export const youtubeThumbnailUrl = (externalId: string): string | undefined =>
  isValidYoutubeVideoId(externalId)
    ? `https://img.youtube.com/vi/${externalId}/mqdefault.jpg`
    : undefined;
