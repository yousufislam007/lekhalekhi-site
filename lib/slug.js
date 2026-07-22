// বাংলা/ইংরেজি টাইটেল থেকে slug বানানোর সহজ ফাংশন
export function slugify(title) {
  const base = title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\u0980-\u09FF\w-]+/g, '') // বাংলা ইউনিকোড রেঞ্জ + word chars + hyphen রাখা হচ্ছে
    .replace(/-+/g, '-');
  const random = Math.random().toString(36).slice(2, 7);
  return `${base}-${random}`;
}

export const CATEGORY_PATHS = {
  golpo: "chuto-golpo",
  kobita: "kobita",
  uponnash: "uponnash",
};

export const CATEGORY_LABELS = {
  golpo: "ছোট গল্প",
  kobita: "কবিতা",
  uponnash: "উপন্যাস",
};