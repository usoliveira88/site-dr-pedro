import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { DoctorBio } from "@/components/DoctorBio";
import { Section, SectionHeading } from "@/components/Section";
import { VideoBlock } from "@/components/VideoBlock";
import { services } from "@/data/site";
import { ServiceCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Página provisória sobre trajetória, filosofia de atendimento e credenciais do Dr. Pedro Machado."
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-mist">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Sobre</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Confiança, escuta clínica e cuidado individualizado</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            Esta página deve vender confiança, não apenas listar formação. Os dados abaixo são provisórios e devem ser validados antes da publicação.
          </p>
        </div>
      </Section>
      <Section>
        <DoctorBio />
      </Section>
      <Section className="bg-linen">
        <SectionHeading
          eyebrow="Filosofia"
          title="Atendimento orientado por avaliação, exames e contexto individual"
          text="Texto provisório. Ajustar após confirmação do escopo real de atendimento, credenciais, condutas oferecidas e tom de voz aprovado."
        />
        <ButtonLink href="/contato">Agendar consulta</ButtonLink>
      </Section>
      <Section>
        <VideoBlock
          title="Como conduzo meus atendimentos"
          text="Espaço reservado para vídeo do médico explicando método, escuta clínica, investigação e acompanhamento."
        />
      </Section>
      <Section className="bg-mist">
        <SectionHeading eyebrow="Áreas" title="Áreas de acompanhamento" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
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
