import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { HomeBioAuthority, HomeMethodSection, HomeNeedEditorial, HomeServiceEditorial } from "@/components/HomeEditorial";
import { HomeHero } from "@/components/HomeHero";
import { LocationSection } from "@/components/LocationSection";
import { Section, SectionHeading } from "@/components/Section";
import { VideoBlock } from "@/components/VideoBlock";
import { processSteps, generalFaq } from "@/data/site";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Section>
        <HomeNeedEditorial />
      </Section>
      <Section className="bg-mist">
        <HomeMethodSection />
      </Section>
      <Section>
        <HomeServiceEditorial />
      </Section>
      <Section className="bg-linen">
        <VideoBlock
          title="Vídeo institucional do Dr. Pedro"
          text="Espaço provisório para um vídeo curto sobre escuta clínica, investigação, exames, rotina do paciente e decisões individualizadas. O conteúdo final deve ser validado antes da publicação."
        />
      </Section>
      <Section>
        <SectionHeading
          eyebrow="Processo"
          title="Um acompanhamento construído em etapas"
          text="A organização do atendimento ajuda o paciente a entender o caminho antes do agendamento, sem prometer resultados ou simplificar decisões clínicas."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-subtle border border-petrol/10 bg-white p-6 shadow-[0_10px_32px_rgba(22,74,81,0.05)]">
              <span className="text-sm font-semibold text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step}</h3>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-mist">
        <HomeBioAuthority />
      </Section>
      <Section>
        <LocationSection />
      </Section>
      <Section>
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        <FAQ items={generalFaq} />
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
