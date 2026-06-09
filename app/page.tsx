import { CardsGrid } from "@/components/Grids";
import { CTASection } from "@/components/CTASection";
import { DoctorBio } from "@/components/DoctorBio";
import { FAQ } from "@/components/FAQ";
import { HomeHero } from "@/components/HomeHero";
import { LocationSection } from "@/components/LocationSection";
import { Section, SectionHeading } from "@/components/Section";
import { VideoBlock } from "@/components/VideoBlock";
import { PatientNeedCard, ServiceCard } from "@/components/Cards";
import { generalFaq, patientNeeds, processSteps, services } from "@/data/site";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Section>
        <SectionHeading
          eyebrow="Para quem é"
          title="Situações que podem indicar a necessidade de avaliação"
          text="O site deve ajudar o paciente a se reconhecer sem prometer resultados ou simplificar condições clínicas."
        />
        <CardsGrid>
          {patientNeeds.map((need, index) => (
            <PatientNeedCard key={need} text={need} index={index} />
          ))}
        </CardsGrid>
      </Section>
      <Section className="bg-mist">
        <SectionHeading
          eyebrow="Serviços"
          title="Principais frentes de acompanhamento"
          text="Cada página aprofunda uma necessidade específica, com linguagem informativa, ética e orientada para decisão."
        />
        <CardsGrid>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </CardsGrid>
      </Section>
      <Section>
        <VideoBlock
          title="Vídeo institucional do Dr. Pedro"
          text="Bloco provisório para vídeo de 45 a 90 segundos sobre forma de atendimento, investigação clínica, exames, rotina do paciente e expectativas realistas."
        />
      </Section>
      <Section className="bg-linen">
        <SectionHeading eyebrow="Processo" title="Como funciona o atendimento" />
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-subtle border border-petrol/10 bg-white p-6 shadow-[0_10px_32px_rgba(22,74,81,0.05)]">
              <span className="text-sm font-semibold text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step}</h3>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <DoctorBio compact />
      </Section>
      <Section className="bg-mist">
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
