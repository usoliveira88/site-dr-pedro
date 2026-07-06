import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { doctor } from "@/data/site";
import type { Article, ArticleSection } from "@/data/articles";
import { getArticleReadingTime } from "@/data/articles";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(`${date}T12:00:00`));
}

export function ArticleTemplate({ article }: { article: Article }) {
  const readingTime = getArticleReadingTime(article);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.description,
    image: article.coverImage,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      "@type": "Person",
      name: article.author
    },
    medicalAudience: "Patient",
    about: article.category,
    publisher: {
      "@type": "MedicalBusiness",
      name: doctor.name,
      telephone: doctor.phone,
      address: doctor.location
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article>
        <section className="relative overflow-hidden bg-deep text-white">
          <div className="absolute inset-0 opacity-70">
            <div className="absolute -right-24 top-12 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute bottom-0 left-[8%] h-px w-2/3 bg-gradient-to-r from-gold/70 via-white/18 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_24%,rgba(185,147,90,0.2),transparent_30rem)]" />
          </div>
          <div className="relative mx-auto grid w-full max-w-[1240px] items-center gap-9 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.82fr] lg:px-8 lg:py-20">
            <div className="section-reveal max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{article.category}</p>
              <h1 className="text-[2.2rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.35rem]">
                {article.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">{article.excerpt}</p>
              <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/[0.85]">
                <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2">{article.author}</span>
                <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2">{article.crm}</span>
                <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2">{article.local}</span>
                <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2">{readingTime} min de leitura</span>
              </div>
            </div>
            <div className="section-reveal relative mx-auto w-full max-w-[31rem] lg:mr-0">
              <div className="overflow-hidden rounded-[28px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
                <Image
                  src={article.coverImage}
                  alt={article.coverAlt}
                  width={1200}
                  height={860}
                  priority
                  className="aspect-[1.16/1] w-full rounded-[22px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-linen py-10 sm:py-14">
          <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-5 sm:px-6 lg:grid-cols-[0.34fr_1fr] lg:px-8">
            <aside className="section-reveal lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[22px] border border-deep/10 bg-white p-5 shadow-soft">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{article.summaryTitle ?? "Sumário"}</p>
                <nav className="grid gap-2">
                  {article.sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className="rounded-subtle px-3 py-2 text-sm leading-6 text-graphite transition hover:bg-mist hover:text-deep">
                      {section.title}
                    </a>
                  ))}
                  <a href="#faq" className="rounded-subtle px-3 py-2 text-sm leading-6 text-graphite transition hover:bg-mist hover:text-deep">
                    Perguntas frequentes
                  </a>
                </nav>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="rounded-[28px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8 lg:p-10">
                <div className="mb-10 border-b border-deep/10 pb-6 text-sm leading-7 text-graphite">
                  <p>
                    Publicado por <strong className="text-ink">{article.author}</strong>, {article.crm}. Atualizado em {formatDate(article.datePublished)}.
                  </p>
                </div>
                <div className="grid gap-12">
                  {article.sections.map((section) => (
                    <ArticleSectionBlock key={section.id} section={section} />
                  ))}
                </div>
              </div>

              <section id="faq" className="mt-8 rounded-[28px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8 lg:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">FAQ</p>
                <h2 className="text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">{article.faqTitle ?? "Perguntas frequentes sobre testosterona"}</h2>
                <div className="mt-8">
                  <FAQ items={article.faq} />
                </div>
              </section>

              <section className="mt-8 rounded-[28px] border border-deep/10 bg-pearl p-5 shadow-soft sm:p-8 lg:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Leia também</p>
                <h2 className="text-[1.65rem] font-semibold leading-tight text-ink sm:text-3xl">Continue lendo no site</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {article.internalLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="hover-ink-card group rounded-subtle border border-deep/10 bg-white p-5 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                      <p className="text-sm font-semibold text-gold">{link.label}</p>
                      <p className="hover-ink-muted mt-3 text-sm leading-7 text-graphite">{link.text}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="bg-linen px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <div className="section-reveal mx-auto max-w-[1240px] overflow-hidden rounded-[30px] bg-deep p-6 text-white shadow-lift sm:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.42fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{article.finalCta?.eyebrow ?? "Avaliação médica"}</p>
                <h2 className="text-[1.85rem] font-semibold leading-tight sm:text-4xl">{article.finalCta?.title ?? "Quer investigar sintomas com segurança?"}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                  {article.finalCta?.text ?? "Fale com a equipe para verificar disponibilidade de consulta com o Dr. Pedro Machado em Petrópolis."}
                </p>
              </div>
              <ButtonLink href={article.finalCta?.href ?? doctor.whatsappUrl} className="min-h-14 w-full bg-gold px-7 text-deep hover:bg-white lg:w-auto">
                {article.finalCta?.label ?? "Agendar consulta"}
              </ButtonLink>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

function ArticleSectionBlock({ section }: { section: ArticleSection }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h2 className="text-[1.65rem] font-semibold leading-tight text-ink sm:text-3xl">{section.title}</h2>
      <div className="mt-5 grid gap-5 text-[1.02rem] leading-8 text-graphite">
        {section.blocks.map((block, index) => {
          if (block.type === "paragraph") {
            return <p key={index}>{block.text}</p>;
          }

          if (block.type === "list") {
            return (
              <ul key={index} className="grid gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          }

          if (block.type === "symptom-list") {
            return (
              <div key={index} className="grid gap-4 sm:grid-cols-2">
                {block.items.map((item) => (
                  <article key={item.title} className="rounded-subtle border border-deep/10 bg-pearl p-5 shadow-[0_10px_30px_rgba(2,37,61,0.06)]">
                    <h3 className="text-base font-semibold leading-6 text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-graphite">{item.text}</p>
                  </article>
                ))}
              </div>
            );
          }

          return (
            <div key={index} className="my-4 rounded-[22px] border border-gold/25 bg-deep p-5 text-white shadow-soft sm:p-6">
              <h3 className="text-xl font-semibold">{block.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/78">{block.text}</p>
              <ButtonLink href={block.href} className="mt-5 bg-gold text-deep hover:bg-white">
                {block.label}
              </ButtonLink>
            </div>
          );
        })}
      </div>
    </section>
  );
}
