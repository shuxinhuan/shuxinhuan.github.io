interface MATERIALS {
  Paper?: string;
  [key]?: string;
}

declare const paperCategories = ['va', 'vis+ai', 'story', 'transform', 'art', 'literacy', 'selected', 'others'] as const
type paperCategory = typeof paperCategories[number]

interface PAPER {
  category: paperCategory[];
  thumb: string;
  title: string;
  authorsB: string;
  authorsA: string;
  type: "Journal" | "Other";
  year: number;
  abbr: string;
  full: string;
  honor: string;
  materials: MATERIALS;
}

export {
  MATERIALS,
  paperCategory,
  PAPER
}