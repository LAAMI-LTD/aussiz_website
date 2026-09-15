import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { newsArticles, getNewsArticleBySlug } from "@/data/news";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) notFound();

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-white py-14 md:py-20">
      <div className="container-app max-w-3xl">
        <Link
          href="/news"
          className="focus-ring inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-muted hover:text-orange"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to News
        </Link>

        <Badge variant="orange" className="mt-6">
          {article.category}
        </Badge>
        <h1 className="mt-4 font-heading text-3xl font-bold text-navy sm:text-4xl">
          {article.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </span>
          {article.author && (
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {article.author}
            </span>
          )}
        </div>

        {article.heroImage && (
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              sizes="(min-width: 1024px) 768px, 90vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-sm sm:prose-base mt-8 max-w-none text-muted">
          <p className="whitespace-pre-line leading-relaxed">{article.body}</p>
        </div>
      </div>
    </article>
  );
}
