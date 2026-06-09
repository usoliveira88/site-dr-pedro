import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { LocationSection } from "@/components/LocationSection";
import { Section, SectionHeading } from "@/components/Section";
import { doctor } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Informações provisórias de contato e localização para agendamento."
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-mist">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contato</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Agendamento e localização</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            Os canais abaixo são placeholders editáveis. Substituir por telefone, WhatsApp, endereço e horários oficiais antes da publicação.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-subtle border border-petrol/10 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">WhatsApp</p>
            <p className="mt-4 text-base leading-7 text-graphite">{doctor.whatsapp}</p>
          </div>
          <div className="rounded-subtle border border-petrol/10 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Endereço</p>
            <p className="mt-4 text-base leading-7 text-graphite">{doctor.location}</p>
          </div>
          <div className="rounded-subtle border border-petrol/10 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Horários</p>
            <p className="mt-4 text-base leading-7 text-graphite">{doctor.hours}</p>
          </div>
        </div>
      </Section>
      <Section className="bg-linen">
        <SectionHeading title="Como chegar" text="Mapa e fotos do consultório devem ser inseridos após validação do endereço e autorização de uso das imagens." />
        <LocationSection />
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}
