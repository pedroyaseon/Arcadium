import type { EmulatorAdapter, LaunchPreview } from "@/features/emulators/emulator-adapter";
import type { Emulator, Game, LaunchProfile } from "@/types/domain";

export class Pcsx2Adapter implements EmulatorAdapter {
  readonly platform = "PS2" as const;
  readonly displayName = "PCSX2";

  supports(game: Game) {
    return (
      game.platform === this.platform &&
      [".iso", ".chd", ".bin", ".cue"].includes(game.fileExtension)
    );
  }

  buildLaunchPreview(emulator: Emulator, game: Game, profile?: LaunchProfile): LaunchPreview {
    const executable = emulator.executablePath ?? "PCSX2 não configurado";
    const args = [
      ...(emulator.defaultArgs?.split(" ").filter(Boolean) ?? []),
      ...(profile?.fullscreen ? ["--fullscreen"] : []),
      ...(profile?.customArgs?.split(" ").filter(Boolean) ?? []),
      game.filePath,
    ];

    return {
      executable,
      args,
      warning: emulator.executablePath ? undefined : "Configure o caminho do PCSX2 antes de jogar.",
    };
  }
}
