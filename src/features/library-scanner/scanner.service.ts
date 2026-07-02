import type { ScanRequest, ScanResult } from "@/features/library-scanner/scanner.types";

export const scannerService = {
  async preview(request: ScanRequest): Promise<ScanResult> {
    await new Promise<void>((resolve) => window.setTimeout(resolve, 900));

    return {
      request,
      files:
        request.platform === "PS2"
          ? [
              {
                path: `${request.folderPath}/Shadow of the Colossus.iso`,
                fileName: "Shadow of the Colossus.iso",
                extension: ".iso",
                platform: "PS2",
              },
              {
                path: `${request.folderPath}/Okami.chd`,
                fileName: "Okami.chd",
                extension: ".chd",
                platform: "PS2",
              },
            ]
          : [],
      ignoredCount: request.platform === "PS2" ? 3 : 0,
      durationMilliseconds: 842,
      mocked: true,
    };
  },
};
