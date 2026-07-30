import type { Metadata } from "next";
import { MedicalDisclaimer } from "@/components/calculators/MedicalDisclaimer";
import { WaistHipResultClient } from "@/components/calculators/WaistHipResultClient";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Calculadora Cintura-Quadril",
  description:
    "Calcule sua relação cintura-quadril e veja um indicador inicial relacionado à distribuição de gordura corporal."
};

export default function WaistHipResultPage() {
  return (
    <>
      <section className="bg-deep py-14 text-white sm:py-20">
        <Container>
          <p className="mb-4 inline-flex rounded-full border border-gold/35 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Resultado inicial de cintura-quadril
          </p>
          <h1 className="max-w-4xl text-[2.1rem] font-semibold leading-tight sm:text-5xl">
            Sua relação cintura-quadril ajuda a observar a distribuição de gordura corporal
          </h1>
        </Container>
      </section>
      <Section className="bg-pearl">
        <div className="mx-auto max-w-6xl space-y-8">
          <WaistHipResultClient />
          <MedicalDisclaimer />
        </div>
      </Section>
    </>
  );
}
