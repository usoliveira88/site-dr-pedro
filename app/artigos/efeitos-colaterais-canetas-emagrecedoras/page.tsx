import type { Metadata } from "next";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { getArticleBySlug } from "@/data/articles";

const article = getArticleBySlug("efeitos-colaterais-canetas-emagrecedoras");

export const metadata: Metadata = {
  title: article?.metaTitle ? { absolute: article.metaTitle } : undefined,
  description: article?.description,
  alternates: {
    canonical: "/artigos/efeitos-colaterais-canetas-emagrecedoras"
  },
  openGraph: {
    title: article?.metaTitle,
    description: article?.description,
    url: "/artigos/efeitos-colaterais-canetas-emagrecedoras",
    type: "article",
    images: article ? [article.coverImage] : undefined
  }
};

export default function WeightLossPensSideEffectsArticlePage() {
  if (!article) {
    return null;
  }

  return <ArticleTemplate article={article} />;
}
