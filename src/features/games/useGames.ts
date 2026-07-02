import { useEffect, useState } from "react";
import { gamesService, type GameQuery } from "@/features/games/games.service";
import type { Game } from "@/types/domain";

export function useGames(query: GameQuery = {}) {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { search, platform, favoritesOnly } = query;

  useEffect(() => {
    let isActive = true;
    setIsLoading(true);

    void gamesService.list({ search, platform, favoritesOnly }).then((result) => {
      if (isActive) {
        setGames(result);
        setIsLoading(false);
      }
    });

    return () => {
      isActive = false;
    };
  }, [favoritesOnly, platform, search]);

  return { games, isLoading };
}
