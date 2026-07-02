import type { Metadata } from "next";
import { ServiceCard } from "@/components/Cards";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceIntentCards } from "@/components/ServiceIntentCards";
import { doctor, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça os acompanhamentos médicos disponíveis em páginas específicas e editáveis."
};

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-mist">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Serviços</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Conheça os acompanhamentos médicos disponíveis</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            Cada atendimento é conduzido a partir de avaliação clínica individualizada, considerando histórico, sintomas, exames, rotina e objetivos do paciente.
          </p>
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Escolha um caminho" title="Encontre a página mais adequada" />
        <ServiceIntentCards />
      </Section>
      <Section className="bg-linen">
        <SectionHeading eyebrow="Acompanhamentos" title="Páginas de serviço" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <ServicesFinalCTA />
      </Section>
    </>
  );
}

function ServicesFinalCTA() {
  return (
    <div className="section-reveal relative overflow-hidden rounded-[28px] border border-deep/20 bg-white p-6 shadow-[0_24px_70px_rgba(2,37,61,0.12)] sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-deep/10" />
      <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gold/65 via-deep/16 to-transparent" />
      <div className="pointer-events-none absolute left-6 top-6 h-px w-28 bg-gradient-to-r from-deep/35 to-transparent" />

      <div className="relative grid items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Próximo passo</p>
          <h2 className="text-[1.85rem] font-semibold leading-tight text-deep sm:text-4xl">
            Agende uma avaliação médica individualizada
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-graphite">
            Fale com a equipe para verificar disponibilidade de consulta e receber orientação sobre o próximo passo.
          </p>
        </div>
        <a
          href={doctor.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-14 w-full items-center justify-center rounded-subtle border border-deep bg-deep px-8 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift active:translate-y-0 active:bg-deep sm:w-auto"
        >
          Agendar consulta
        </a>
      </div>
    </div>
  );
}
