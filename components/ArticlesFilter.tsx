"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type ArticleCardData = {
  slug: string;
  path: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  author: string;
  readingTime: number;
  primaryCategory: string;
  categories: string[];
};

export const articleCategories = [
  "Todos",
  "Emagrecimento",
  "Sobrepeso",
  "Obesidade",
  "Hipertrofia",
  "Reposição Hormonal Masculina",
  "Reposição Hormonal Feminina",
  "Check-up da Saúde"
];

export function ArticlesFilter({ articles }: { articles: ArticleCardData[] }) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "Todos") return articles;
    return articles.filter((article) => article.categories.includes(activeCategory));
  }, [activeCategory, articles]);

  return (
    <div>
      <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:overflow-visible sm:px-0">
        <div className="flex min-w-max gap-3 sm:min-w-0 sm:flex-wrap">
          {articleCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`focus-ring min-h-11 rounded-full border px-4 text-sm font-semibold transition duration-300 ${
                  isActive
                    ? "border-deep bg-deep text-white shadow-soft"
                    : "border-deep/10 bg-white text-graphite shadow-[0_10px_28px_rgba(2,37,61,0.06)] hover:-translate-y-0.5 hover:border-gold/60 hover:text-deep hover:shadow-soft"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={article.path}
              className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-deep/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-lift"
            >
              <div className="overflow-hidden bg-mist">
                <Image
                  src={article.coverImage}
                  alt={article.coverAlt}
                  width={1200}
                  height={860}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {article.categories.map((category) => (
                    <span
                      key={category}
                      className={`rounded-full border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] ${
                        category === article.primaryCategory
                          ? "border-gold/35 bg-sand text-deep"
                          : "border-deep/10 bg-pearl text-graphite"
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h2 className="mt-5 text-xl font-semibold leading-tight text-ink transition group-hover:text-deep">{article.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-graphite">{article.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-deep/10 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-petrol">
                  <span>{article.author}</span>
                  <span className="text-gold">•</span>
                  <span>{article.readingTime} min de leitura</span>
                </div>
                <span className="mt-5 inline-flex text-sm font-semibold text-deep transition group-hover:text-gold">
                  Ler artigo
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[24px] border border-deep/10 bg-white p-6 text-center shadow-soft sm:p-10">
          <p className="text-xl font-semibold text-ink">Nenhum artigo publicado nesta categoria ainda.</p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-graphite">
            Em breve, novos conteúdos serão adicionados a esta área.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("Todos")}
            className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center rounded-subtle border border-deep bg-deep px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-soft"
          >
            Ver todos os artigos
          </button>
        </div>
      )}
    </div>
  );
}
