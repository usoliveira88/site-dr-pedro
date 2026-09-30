import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { EvaluationLandingClient } from "@/components/calculators/EvaluationLandingClient";
import { MedicalDisclaimer } from "@/components/calculators/MedicalDisclaimer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Avaliação Inicial Gratuita",
  description:
    "Calcule IMC, relação cintura-quadril e estimativa calórica com ferramentas gratuitas do Dr. Pedro Machado em Petrópolis.",
  alternates: { canonical: "/avaliacao-inicial" }
};

export default function InitialEvaluationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/20" />
        <Container>
          <div className="relative max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-gold/35 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Ferramentas gratuitas
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-tight sm:text-5xl">
              Descubra quais sinais da sua saúde merecem atenção
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              Calcule seus indicadores iniciais e entenda melhor seu ponto de partida. Essas ferramentas não substituem avaliação médica, mas ajudam a organizar o primeiro passo.
            </p>
            <ButtonLink href="/anamnese" variant="secondary" className="mt-7 w-full bg-white sm:w-auto">
              Começar avaliação completa
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section className="bg-pearl">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Escolha uma ferramenta</p>
            <h2 className="text-[1.8rem] font-semibold leading-tight text-deep sm:text-4xl">
              Comece pelo indicador mais relacionado ao seu objetivo
            </h2>
          </div>
          <EvaluationLandingClient />
          <MedicalDisclaimer />
        </div>
      </Section>
    </>
  );
}
