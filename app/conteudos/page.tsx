import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { articles, getArticleReadingTime } from "@/data/articles";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Artigos educativos do Dr. Pedro Machado sobre saúde metabólica, saúde hormonal e acompanhamento médico em Petrópolis."
};

export default function ContentPage() {
  return (
    <>
      <Section className="bg-mist">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Conteúdos</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Artigos educativos</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            Informações sobre saúde metabólica, saúde hormonal, prevenção e acompanhamento médico individualizado em Petrópolis.
          </p>
        </div>
      </Section>

      <Section className="bg-linen">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={article.path}
              className="hover-ink-card group overflow-hidden rounded-[22px] border border-deep/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <Image src={article.coverImage} alt={article.coverAlt} width={1200} height={860} className="aspect-[16/10] w-full object-cover" />
              <div className="p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{article.category}</p>
                <h2 className="mt-4 text-xl font-semibold leading-tight text-ink">{article.title}</h2>
                <p className="hover-ink-muted mt-3 text-sm leading-7 text-graphite">{article.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-petrol">
                  <span>{article.local}</span>
                  <span className="text-gold">•</span>
                  <span>{getArticleReadingTime(article)} min de leitura</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
