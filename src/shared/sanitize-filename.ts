interface SanitizeOptions {
  appendTimestamp?: boolean;
  isFolder?: boolean;
}

const INVALID_CHARS = /[<>:"/\\|?*]/g;
const RESERVED_NAMES = new Set([
  "CON",
  "PRN",
  "AUX",
  "NUL",
  "COM1",
  "COM2",
  "COM3",
  "COM4",
  "COM5",
  "COM6",
  "COM7",
  "COM8",
  "COM9",
  "LPT1",
  "LPT2",
  "LPT3",
  "LPT4",
  "LPT5",
  "LPT6",
  "LPT7",
  "LPT8",
  "LPT9",
]);

export function sanitizeWindowsName(
  name: string,
  options: SanitizeOptions = { isFolder: true }
): string | null {
  if (!name.trim()) {
    return null;
  }

  let sanitized = name
    .replace(INVALID_CHARS, "_")
    .trim()
    .replace(/[. ]+$/, "");

  if (RESERVED_NAMES.has(sanitized.toUpperCase())) {
    sanitized += "_safe";
  }

  if (options.appendTimestamp) {
    const timestamp = Date.now();
    sanitized = options.isFolder
      ? `${sanitized}_${timestamp}`
      : sanitized.replace(/(\.[^.]+)?$/, `_${timestamp}$1`);
  }

  return sanitized;
}
