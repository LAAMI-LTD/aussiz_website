import type { NewsArticle } from "@/types";

// No verified news articles exist yet. Per project content rules, we do not
// fabricate articles to fill space — the /news pages render a proper empty
// state instead. Add real, verified articles here when available; the
// listing and detail pages require no further changes to pick them up.
export const newsArticles: NewsArticle[] = [];

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
