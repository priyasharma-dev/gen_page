export function normalize(query) {
  if (!query) return "";

  return query
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, ""); // removes symbols
}