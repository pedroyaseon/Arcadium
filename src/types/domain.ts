export type Platform = "PS2" | "PS3";

export interface Game {
  id: string;
  title: string;
  platform: Platform;
  filePath: string;
  fileName: string;
  fileExtension: string;
  coverUrl?: string;
  coverLocalPath?: string;
  description?: string;
  releaseYear?: number;
  genre?: string;
  region?: string;
  serial?: string;
  lastPlayedAt?: string;
  playtimeSeconds: number;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Emulator {
  id: string;
  name: string;
  platform: Platform;
  executablePath?: string;
  defaultArgs?: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LibraryFolder {
  id: string;
  platform: Platform;
  folderPath: string;
  recursiveScan: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LaunchProfile {
  id: string;
  gameId: string;
  emulatorId: string;
  fullscreen: boolean;
  customArgs?: string;
  resolutionPreset?: string;
  controllerProfile?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PlaySession {
  id: string;
  gameId: string;
  emulatorId: string;
  startedAt: string;
  endedAt?: string;
  durationSeconds?: number;
  exitCode?: number;
}
