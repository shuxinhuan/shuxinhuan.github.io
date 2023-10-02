interface MATERIALS {
  Paper?: string;
  Video?: string;
  Homepage?: string;
  Github?: stirng;
  Appendix?: string;
  Demo?: string;
}

declare const paperCategories = ['va', 'ai4vis', 'tool', 'story'] as const
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