import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Área provisória para artigos, vídeos e materiais educativos."
};

export default function ContentPage() {
  return (
    <>
      <Section className="bg-mist">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Conteúdos</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Artigos e vídeos educativos</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            Página provisória preparada para receber conteúdos orgânicos, vídeos explicativos e pautas de SEO.
          </p>
        </div>
      </Section>
      <Section>
        <SectionHeading
          title="Estrutura pronta para publicação futura"
          text="Inserir aqui artigos validados, vídeos aprovados e materiais educativos sem promessas clínicas ou linguagem sensacionalista."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {["Emagrecimento", "Saúde hormonal", "Prevenção"].map((item) => (
            <div key={item} className="rounded-subtle border border-petrol/10 bg-white p-6 shadow-[0_10px_32px_rgba(22,74,81,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Categoria</p>
              <h2 className="mt-4 text-xl font-semibold text-ink">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-graphite">Placeholder editável para conteúdo futuro.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
