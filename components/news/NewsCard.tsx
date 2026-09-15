import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import type { NewsArticle } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function NewsCard({ article }: { article: NewsArticle }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-lg">
      {article.heroImage && (
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-cover"
          />
        </div>
      )}
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <Badge variant="navy">{article.category}</Badge>
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <Calendar className="h-3.5 w-3.5" />
            {formattedDate}
          </span>
        </div>
        <h3 className="font-heading text-lg font-bold text-navy">{article.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
        <Link
          href={`/news/${article.slug}`}
          className="focus-ring mt-5 inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-orange transition-transform duration-300 hover:text-orange-light group-hover:translate-x-0.5"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
