import type { Game, Platform } from "@/types/domain";

export interface MetadataSuggestion {
  title: string;
  platform: Platform;
  releaseYear?: number;
  genre?: string;
  confidence: number;
}

export const metadataService = {
  async suggest(game: Pick<Game, "fileName" | "platform">): Promise<MetadataSuggestion> {
    const title = game.fileName.replace(/\.(iso|chd|bin|cue|pkg)$/i, "").replace(/[._-]+/g, " ");

    return {
      title,
      platform: game.platform,
      confidence: 0.72,
    };
  },
};
