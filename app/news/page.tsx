import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { newsArticles } from "@/data/news";
import { NewsCard } from "@/components/news/NewsCard";
import { CTASection } from "@/components/home/CTASection";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "News",
  description:
    "Updates, announcements and articles from Aussiz Education & Training.",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="container-app text-center">
          <Reveal>
            <h1 className="font-heading text-4xl font-bold text-navy sm:text-5xl">
              News &amp; Updates
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Announcements, intake updates and articles from Aussiz Education &amp; Training.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-app">
          {newsArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <Reveal className="mx-auto flex max-w-md flex-col items-center rounded-lg border border-dashed border-border bg-white px-8 py-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-navy">
                <Newspaper className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-heading text-lg font-bold text-navy">
                No Articles Published Yet
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We&apos;re preparing our first updates. Check back soon, or follow us on
                social media for the latest announcements.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
