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
            <div key={step.title} className="hover-ink-card group rounded-subtle border border-deep/10 bg-white p-7 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="inline-flex rounded-full bg-mist px-3 py-1 text-sm font-semibold text-petrol transition group-hover:bg-white/10 group-hover:text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink transition group-hover:text-white">{step.title}</h3>
              <p className="hover-ink-muted mt-3 text-sm leading-7 text-graphite">{step.text}</p>
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
      <Section className="bg-deep">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Dúvidas</p>
          <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">Perguntas frequentes</h2>
        </div>
        <FAQ items={generalFaq} />
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
