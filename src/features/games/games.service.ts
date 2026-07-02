import { mockGames } from "@/features/games/games.mock";
import type { Game, Platform } from "@/types/domain";

export interface GameQuery {
  search?: string;
  platform?: Platform | "ALL";
  favoritesOnly?: boolean;
}

const wait = (milliseconds = 180) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));

export const gamesService = {
  async list(query: GameQuery = {}): Promise<Game[]> {
    await wait();
    const normalizedSearch = query.search?.trim().toLocaleLowerCase("pt-BR") ?? "";

    return mockGames.filter((game) => {
      const matchesSearch =
        !normalizedSearch ||
        game.title.toLocaleLowerCase("pt-BR").includes(normalizedSearch) ||
        game.genre?.toLocaleLowerCase("pt-BR").includes(normalizedSearch);
      const matchesPlatform =
        !query.platform || query.platform === "ALL" || game.platform === query.platform;
      const matchesFavorite = !query.favoritesOnly || game.isFavorite;

      return matchesSearch && matchesPlatform && matchesFavorite;
    });
  },

  async getById(id: string): Promise<Game | undefined> {
    await wait(100);
    return mockGames.find((game) => game.id === id);
  },
};
