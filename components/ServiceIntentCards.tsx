"use client";

import Link from "next/link";
import { useState } from "react";

const intentCards = [
  {
    id: "emagrecimento-estetico",
    number: "01",
    title: "Quero melhorar minha composição corporal",
    text: "Para quem busca reduzir gordura, melhorar medidas e alinhar estética corporal com avaliação médica individualizada.",
    note: "Emagrecimento Estético",
    links: [{ label: "Emagrecimento Estético", href: "/servicos/emagrecimento" }]
  },
  {
    id: "sobrepeso-obesidade",
    number: "02",
    title: "Quero tratar excesso de peso",
    text: "Para quem busca investigar peso, rotina, exames, saúde metabólica e riscos associados.",
    note: "Sobrepeso e Obesidade",
    links: [
      { label: "Sobrepeso", href: "/servicos/sobrepeso" },
      { label: "Obesidade", href: "/servicos/obesidade" }
    ]
  },
  {
    id: "hormonios",
    number: "03",
    title: "Quero investigar hormônios",
    text: "Para sintomas, dúvidas sobre exames e decisões que exigem avaliação médica individualizada.",
    note: "Saúde Hormonal Masculina e Feminina",
    links: [
      { label: "Reposição Hormonal Masculina", href: "/servicos/reposicao-hormonal-masculina" },
      { label: "Reposição Hormonal Feminina", href: "/servicos/reposicao-hormonal-feminina" }
    ]
  },
  {
    id: "massa",
    number: "04",
    title: "Quero ganhar massa",
    text: "Para quem treina e deseja acompanhar composição corporal, exames, recuperação e evolução com segurança.",
    note: "Hipertrofia e Performance",
    links: [{ label: "Hipertrofia", href: "/servicos/hipertrofia" }]
  },
  {
    id: "prevencao",
    number: "05",
    title: "Quero prevenir problemas",
    text: "Para organizar exames, mapear riscos e tomar decisões preventivas com acompanhamento médico.",
    note: "Check-up e Prevenção",
    links: [{ label: "Check-up da Saúde", href: "/servicos/check-up-da-saude" }]
  }
];

export function ServiceIntentCards() {
  const [expandedCard, setExpandedCard] = useState<string>("emagrecimento-estetico");

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
      {intentCards.map((card, index) => {
        const isExpanded = expandedCard === card.id;
        const panelId = `intent-card-${card.id}`;
        const desktopPlacement = index === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2";

        return (
          <article
            key={card.id}
            className={`section-reveal group relative overflow-hidden rounded-[24px] border shadow-[0_16px_46px_rgba(2,37,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lift ${desktopPlacement} ${
              isExpanded ? "border-gold/45 bg-deep text-white" : "border-deep/10 bg-white text-ink hover:border-gold/35 hover:bg-deep"
            }`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span
              className={`absolute inset-x-5 top-0 h-px bg-gradient-to-r transition duration-300 ${
                isExpanded ? "from-gold via-gold/45 to-transparent" : "from-gold/80 via-deep/10 to-transparent"
              }`}
            />

            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls={panelId}
              onClick={() => setExpandedCard(isExpanded ? "" : card.id)}
              className="focus-ring flex min-h-[15rem] w-full flex-col p-5 text-left sm:p-6 lg:min-h-[18rem]"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition duration-300 ${
                    isExpanded ? "bg-white/10 text-gold" : "bg-mist text-petrol group-hover:bg-white/10 group-hover:text-gold"
                  }`}
                >
                  {card.number}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid h-9 w-9 place-items-center rounded-full border text-lg leading-none transition duration-300 ${
                    isExpanded ? "rotate-45 border-white/20 bg-white/10 text-white" : "border-deep/10 bg-pearl text-petrol group-hover:rotate-45 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white"
                  }`}
                >
                  +
                </span>
              </div>

              <div className="mt-7 flex flex-1 flex-col">
                <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.16em] ${isExpanded ? "text-gold" : "text-gold"}`}>
                  {card.note}
                </p>
                <h3 className={`text-[1.35rem] font-semibold leading-tight sm:text-2xl ${isExpanded ? "text-white" : "text-ink group-hover:text-white"}`}>
                  {card.title}
                </h3>
                <p className={`mt-4 text-sm leading-7 sm:text-base ${isExpanded ? "text-white/80" : "text-graphite group-hover:text-white/80"}`}>
                  {card.text}
                </p>
                <span className={`mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.18em] ${isExpanded ? "text-white" : "text-petrol group-hover:text-white"}`}>
                  {isExpanded ? "Escolha uma opção" : "Toque para abrir"}
                </span>
              </div>
            </button>

            <div
              id={panelId}
              className={`grid gap-3 overflow-hidden px-5 transition-all duration-300 ease-out sm:px-6 lg:group-hover:max-h-72 lg:group-hover:pb-6 lg:group-hover:opacity-100 ${
                isExpanded ? "max-h-72 pb-5 opacity-100 sm:pb-6" : "max-h-0 pb-0 opacity-0"
              }`}
            >
              {card.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`focus-ring flex min-h-12 items-center justify-between gap-3 rounded-subtle border px-4 py-3 text-sm font-semibold leading-5 shadow-[0_10px_26px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 ${
                    isExpanded
                      ? "border-white/20 bg-white text-deep hover:border-gold hover:bg-sand"
                      : "border-deep/10 bg-pearl text-deep hover:border-gold"
                  }`}
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="text-gold">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
