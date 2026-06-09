import type { Metadata } from "next";
import { InfoCard, ServiceCard } from "@/components/Cards";
import { CTASection } from "@/components/CTASection";
import { Section, SectionHeading } from "@/components/Section";
import { services } from "@/data/site";

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
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Quero perder peso" text="Emagrecimento, Sobrepeso ou Obesidade." />
          <InfoCard title="Quero investigar hormônios" text="Reposição Hormonal Masculina ou Reposição Hormonal Feminina." />
          <InfoCard title="Quero ganhar massa" text="Hipertrofia." />
          <InfoCard title="Quero prevenir problemas" text="Check-up da Saúde." />
        </div>
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
        <CTASection />
      </Section>
    </>
  );
}
