import type { Platform } from "@/types/domain";

export type ThemePreference = "dark" | "system";

export interface AppSettings {
  theme: ThemePreference;
  language: "pt-BR" | "en-US";
  minimizeToTray: boolean;
  checkForUpdates: boolean;
  emulatorPaths: Partial<Record<Platform, string>>;
}
