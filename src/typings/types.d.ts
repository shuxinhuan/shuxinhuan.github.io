interface MATERIALS {
  Paper?: string;
  [key]?: string;
}

declare const paperCategories = ['va', 'vis+ai', 'story', 'transform', 'art', 'literacy', 'selected', 'others'] as const
type paperCategory = typeof paperCategories[number]

declare const tagCategories = ['Human-AI Interaction', 'Storytelling', 'Trustworthy AI', 'Visual Analytics', 'Data Transformation', 'Vis Authoring', 'Animation', 'Data Art', 'Education', 'Sports', 'Digital Humanities', 'Emotion', 'AI4VIS', 'VIS4AI', 'Visual Metaphors', 'AI/Data Literacy', 'Creativity'] as const
type tagCategory = typeof tagCategories[number]

interface PAPER {
  category: paperCategory[];
  tags: tagCategory[];
  thumb: string;
  title: string;
  authorsB: string;
  authorsA: string;
  type: "Journal" | "Conference" | "Other";
  year: number;
  abbr: string;
  full: string;
  honor: string;
  materials: MATERIALS;
}

export {
  MATERIALS,
  paperCategory,
  tagCategory,
  PAPER,
}