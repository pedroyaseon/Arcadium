import type { EmulatorAdapter, LaunchPreview } from "@/features/emulators/emulator-adapter";
import type { Emulator, Game } from "@/types/domain";

export class Rpcs3Adapter implements EmulatorAdapter {
  readonly platform = "PS3" as const;
  readonly displayName = "RPCS3";

  supports(game: Game) {
    return game.platform === this.platform;
  }

  buildLaunchPreview(emulator: Emulator, game: Game): LaunchPreview {
    return {
      executable: emulator.executablePath ?? "RPCS3 não configurado",
      args: [game.filePath],
      warning: "Suporte a PS3 está planejado para uma versão futura.",
    };
  }
}
