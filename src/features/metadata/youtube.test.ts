import { describe, expect, it } from "vitest";
import {
  isValidYoutubeVideoId,
  youtubeEmbedUrl,
  youtubeThumbnailUrl,
} from "@/features/metadata/youtube";

describe("YouTube media boundaries", () => {
  it("accepts the fixed YouTube video ID format", () => {
    expect(isValidYoutubeVideoId("pdZQ98mWeto")).toBe(true);
    expect(isValidYoutubeVideoId("abc_DEF-123")).toBe(true);
  });

  it("rejects URLs and injectable values", () => {
    expect(isValidYoutubeVideoId("https://example.com")).toBe(false);
    expect(isValidYoutubeVideoId('abc" onload=')).toBe(false);
    expect(youtubeEmbedUrl("../../malicious")).toBeUndefined();
  });

  it("only builds URLs for trusted YouTube hosts", () => {
    expect(youtubeEmbedUrl("pdZQ98mWeto")).toBe(
      "https://www.youtube-nocookie.com/embed/pdZQ98mWeto?rel=0&modestbranding=1",
    );
    expect(youtubeThumbnailUrl("pdZQ98mWeto")).toBe(
      "https://img.youtube.com/vi/pdZQ98mWeto/mqdefault.jpg",
    );
  });
});
