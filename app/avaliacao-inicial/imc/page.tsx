import type { Metadata } from "next";
import { BmiResultClient } from "@/components/calculators/BmiResultClient";
import { MedicalDisclaimer } from "@/components/calculators/MedicalDisclaimer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Calculadora de IMC",
  description: "Calcule seu IMC e veja uma interpretação inicial. Resultado informativo que não substitui avaliação médica.",
  alternates: { canonical: "/avaliacao-inicial/imc" }
};

export default function BmiResultPage() {
  return (
    <>
      <section className="bg-deep py-14 text-white sm:py-20">
        <Container>
          <p className="mb-4 inline-flex rounded-full border border-gold/35 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Resultado inicial de IMC
          </p>
          <h1 className="max-w-3xl text-[2.1rem] font-semibold leading-tight sm:text-5xl">
            Seu IMC é apenas um ponto de partida
          </h1>
        </Container>
      </section>
      <Section className="bg-pearl">
        <div className="mx-auto max-w-6xl space-y-8">
          <BmiResultClient />
          <MedicalDisclaimer />
        </div>
      </Section>
    </>
  );
}
