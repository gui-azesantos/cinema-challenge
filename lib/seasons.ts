export type Season = "outono" | "inverno" | "primavera" | "verão";

export const seasonColors: Record<Season, { bg: string; accent: string; soft: string; tag: string }> = {
  outono:   { bg: "#140a00", accent: "#c4622d", soft: "#6a3010", tag: "#2d1000" },
  inverno:  { bg: "#000a1a", accent: "#4a8fd4", soft: "#1a3d7a", tag: "#001030" },
  primavera:{ bg: "#001408", accent: "#3dc47a", soft: "#1a6a3d", tag: "#002d10" },
  verão:    { bg: "#141000", accent: "#c4a02d", soft: "#6a5a10", tag: "#2d2000" },
};

export const seasonLabels: Record<Season, string> = {
  outono:    "🍂 Outono",
  inverno:   "❄️ Inverno",
  primavera: "🌸 Primavera",
  verão:     "☀️ Verão",
};

export function monthLabel(month: string, year: string): string {
  const short = month.slice(0, 3).toUpperCase();
  const yr = year.slice(2);
  return `${short} '${yr}`;
}
