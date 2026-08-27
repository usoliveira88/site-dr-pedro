import type { Metadata } from "next";
import { ArticlesFilter, type ArticleCardData } from "@/components/ArticlesFilter";
import { Container } from "@/components/Container";
import { articles, getArticleReadingTime } from "@/data/articles";

export const metadata: Metadata = {
  title: { absolute: "Artigos | Dr. Pedro Machado" },
  description:
    "Conteúdos sobre emagrecimento estético, sobrepeso e obesidade, saúde hormonal, composição corporal, check-up e acompanhamento médico com o Dr. Pedro Machado em Petrópolis.",
  alternates: {
    canonical: "/artigos"
  }
};

export default function ArticlesPage() {
  const articleCards: ArticleCardData[] = articles.map((article) => ({
    slug: article.slug,
    path: article.path,
    title: article.title,
    excerpt: article.excerpt,
    coverImage: article.coverImage,
    coverAlt: article.coverAlt,
    author: article.author,
    datePublished: article.datePublished,
    readingTime: getArticleReadingTime(article),
    primaryCategory: article.primaryCategory,
    categories: article.categories
  }));

  return (
    <>
      <section className="relative overflow-hidden bg-deep py-14 text-white sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(185,147,90,0.18),transparent_28%),radial-gradient(circle_at_92%_18%,rgba(168,191,163,0.14),transparent_30%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full border border-white/10" />
        <Container>
          <div className="relative max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-gold/35 bg-white/[0.08] px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Biblioteca editorial
            </p>
            <h1 className="text-[2.65rem] font-semibold leading-[1.08] sm:text-[3.35rem] lg:text-[3.75rem]">Artigos educativos</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              Informações sobre emagrecimento estético, sobrepeso e obesidade, saúde hormonal, composição corporal, check-up e acompanhamento médico em Petrópolis.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-linen py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Categorias</p>
            <h2 className="text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Encontre conteúdos por tema</h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              Use os filtros para navegar pelos artigos publicados e conectar cada conteúdo aos principais acompanhamentos do site.
            </p>
          </div>
          <ArticlesFilter articles={articleCards} />
        </Container>
      </section>
    </>
  );
}
