import type { Metadata } from "next";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { getArticleBySlug } from "@/data/articles";

const article = getArticleBySlug("testosterona-petropolis");

export const metadata: Metadata = {
  title: article?.metaTitle ? { absolute: article.metaTitle } : undefined,
  description: article?.description,
  alternates: {
    canonical: "/testosterona-petropolis"
  },
  openGraph: {
    title: article?.metaTitle,
    description: article?.description,
    url: "/testosterona-petropolis",
    type: "article",
    images: article ? [article.coverImage] : undefined
  }
};

export default function TestosteroneArticlePage() {
  if (!article) {
    return null;
  }

  return <ArticleTemplate article={article} />;
}
