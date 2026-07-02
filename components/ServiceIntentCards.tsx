"use client";

import Link from "next/link";
import { useState } from "react";

const intentCards = [
  {
    id: "peso",
    number: "01",
    title: "Quero perder peso",
    text: "Encontre o acompanhamento mais adequado para seu objetivo.",
    links: [
      { label: "Emagrecimento", href: "/servicos/emagrecimento" },
      { label: "Sobrepeso", href: "/servicos/sobrepeso" },
      { label: "Obesidade", href: "/servicos/obesidade" }
    ]
  },
  {
    id: "hormonios",
    number: "02",
    title: "Quero investigar hormônios",
    text: "Avaliação médica para sintomas, exames e saúde hormonal.",
    links: [
      { label: "Reposição Hormonal Masculina", href: "/servicos/reposicao-hormonal-masculina" },
      { label: "Reposição Hormonal Feminina", href: "/servicos/reposicao-hormonal-feminina" }
    ]
  },
  {
    id: "massa",
    number: "03",
    title: "Quero ganhar massa",
    text: "Acompanhamento para composição corporal e evolução com segurança.",
    links: [{ label: "Hipertrofia", href: "/servicos/hipertrofia" }]
  },
  {
    id: "prevencao",
    number: "04",
    title: "Quero prevenir problemas",
    text: "Avaliação preventiva, exames e saúde metabólica.",
    links: [{ label: "Check-up da Saúde", href: "/servicos/check-up-da-saude" }]
  }
];

export function ServiceIntentCards() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {intentCards.map((card, index) => {
        const isExpanded = expandedCard === card.id;
        const panelId = `intent-card-${card.id}`;

        return (
          <article
            key={card.id}
            className={`section-reveal group relative flex min-h-[18.5rem] flex-col overflow-hidden rounded-[20px] border p-5 shadow-[0_14px_38px_rgba(2,37,61,0.08)] transition duration-300 hover:-translate-y-1 hover:border-gold/55 hover:bg-deep hover:shadow-lift focus-within:border-gold/55 focus-within:bg-deep sm:p-6 ${
              isExpanded ? "border-gold/55 bg-deep shadow-lift" : "border-deep/10 bg-white"
            }`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-gold via-gold/45 to-transparent sm:inset-x-6" />
            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls={panelId}
              onClick={() => setExpandedCard(isExpanded ? null : card.id)}
              className="focus-ring -m-2 flex flex-1 cursor-pointer flex-col rounded-subtle p-2 text-left"
            >
              <span
                className={`mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition duration-300 ${
                  isExpanded ? "bg-white/10 text-white" : "bg-mist text-petrol group-hover:bg-white/10 group-hover:text-white group-focus-within:bg-white/10 group-focus-within:text-white"
                }`}
              >
                {card.number}
              </span>
              <h3
                className={`text-xl font-semibold leading-tight transition duration-300 ${
                  isExpanded ? "text-white" : "text-ink group-hover:text-white group-focus-within:text-white"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-4 text-sm leading-7 transition duration-300 ${
                  isExpanded ? "text-white/78" : "text-graphite group-hover:text-white/78 group-focus-within:text-white/78"
                }`}
              >
                {card.text}
              </p>
              <span
                className={`mt-5 text-xs font-semibold uppercase tracking-[0.16em] transition duration-300 ${
                  isExpanded ? "text-gold" : "text-petrol group-hover:text-gold group-focus-within:text-gold"
                }`}
              >
                {isExpanded ? "Ocultar opções" : "Ver opções"}
              </span>
            </button>

            <div
              id={panelId}
              className={`grid gap-3 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-64 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:max-h-64 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto ${
                isExpanded ? "mt-5 max-h-64 translate-y-0 opacity-100" : "mt-0 max-h-0 translate-y-2 opacity-0 pointer-events-none"
              }`}
            >
              {card.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring flex min-h-12 items-center justify-between gap-3 rounded-subtle border border-white/20 bg-white px-4 py-3 text-sm font-semibold leading-5 text-deep shadow-[0_10px_26px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-sand"
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
