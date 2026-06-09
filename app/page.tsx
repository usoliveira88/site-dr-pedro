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
      <Section className="bg-[#eef4f0]">
        <HomeNeedEditorial />
      </Section>
      <Section className="bg-[#e7efeb]">
        <HomeMethodSection />
      </Section>
      <Section className="bg-linen">
        <HomeServiceEditorial />
      </Section>
      <Section className="bg-[#edf2ee]">
        <VideoBlock
          title="Vídeo institucional do Dr. Pedro"
          text="Espaço provisório para um vídeo curto sobre escuta clínica, investigação, exames, rotina do paciente e decisões individualizadas. O conteúdo final deve ser validado antes da publicação."
        />
      </Section>
      <Section className="bg-[#f6f4ee]">
        <SectionHeading
          eyebrow="Processo"
          title="Um acompanhamento construído em etapas"
          text="A organização do atendimento ajuda o paciente a entender o caminho antes do agendamento, sem prometer resultados ou simplificar decisões clínicas."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-subtle border border-petrol/10 bg-white/88 p-7 shadow-[0_10px_32px_rgba(22,74,81,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <span className="text-sm font-semibold text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-graphite">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-mist">
        <HomeBioAuthority />
      </Section>
      <Section className="bg-[#e9f0ed]">
        <LocationSection />
      </Section>
      <Section className="bg-linen">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        <FAQ items={generalFaq} />
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
