import type { Emulator, Game, LaunchProfile, Platform } from "@/types/domain";

export interface LaunchPreview {
  executable: string;
  args: string[];
  warning?: string;
}

export interface EmulatorAdapter {
  readonly platform: Platform;
  readonly displayName: string;
  supports(game: Game): boolean;
  buildLaunchPreview(emulator: Emulator, game: Game, profile?: LaunchProfile): LaunchPreview;
}
