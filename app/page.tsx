import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { GoogleReviews } from "@/components/GoogleReviews";
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
      <Section className="bg-mist">
        <HomeNeedEditorial />
      </Section>
      <Section className="bg-bluegray">
        <HomeMethodSection />
      </Section>
      <Section className="bg-white">
        <HomeServiceEditorial />
      </Section>
      <Section className="bg-bluegray">
        <VideoBlock
          title="Vídeo institucional do Dr. Pedro"
          text="Espaço provisório para um vídeo curto sobre escuta clínica, investigação, exames, rotina do paciente e decisões individualizadas. O conteúdo final deve ser validado antes da publicação."
        />
      </Section>
      <Section className="bg-pearl">
        <SectionHeading
          eyebrow="Processo"
          title="Um acompanhamento construído em etapas"
          text="A organização do atendimento ajuda o paciente a entender o caminho antes do agendamento, sem prometer resultados ou simplificar decisões clínicas."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-subtle border border-petrol/12 bg-white/72 p-7 shadow-[0_10px_32px_rgba(15,76,92,0.07)] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/90 hover:shadow-soft">
              <span className="inline-flex rounded-full bg-sage/25 px-3 py-1 text-sm font-semibold text-petrol">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-graphite">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-bluegray">
        <HomeBioAuthority />
      </Section>
      <Section className="bg-white">
        <LocationSection />
      </Section>
      <Section className="bg-bluegray">
        <GoogleReviews />
      </Section>
      <Section className="bg-pearl">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        <FAQ items={generalFaq} />
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
