import type { AppSettings } from "@/features/settings/settings.types";

let settings: AppSettings = {
  theme: "dark",
  language: "pt-BR",
  minimizeToTray: false,
  checkForUpdates: true,
  emulatorPaths: {
    PS2: "C:/Emulators/PCSX2/pcsx2-qt.exe",
  },
};

export const settingsService = {
  async get(): Promise<AppSettings> {
    return structuredClone(settings);
  },

  async update(patch: Partial<AppSettings>): Promise<AppSettings> {
    settings = {
      ...settings,
      ...patch,
      emulatorPaths: {
        ...settings.emulatorPaths,
        ...patch.emulatorPaths,
      },
    };

    return structuredClone(settings);
  },
};
