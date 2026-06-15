import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { doctor, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a trajetória, a forma de atendimento e os princípios que orientam o cuidado médico do Dr. Pedro Machado em Petrópolis."
};

export default function AboutPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-pearl">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute right-0 top-24 h-px w-1/3 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="max-w-[38rem]">
            <p className="mb-4 inline-flex rounded-full border border-gold/30 bg-white/80 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Sobre
            </p>
            <h1 className="text-[2.65rem] font-semibold leading-[1.08] text-ink sm:text-[3.35rem] lg:text-[3.75rem]">Confiança, escuta clínica e cuidado individualizado</h1>
            <p className="mt-7 text-xl leading-9 text-graphite">
              Um atendimento médico construído com escuta, avaliação clínica e acompanhamento individualizado para decisões mais seguras em saúde, composição corporal e qualidade de vida.
            </p>
          </div>
          <AboutPhotoComposition />
        </div>
      </Section>
      <Section className="bg-white">
        <AboutDoctorCard />
      </Section>
      <Section className="bg-bluegray">
        <AboutPhilosophy />
      </Section>
      <Section className="bg-white">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Áreas</p>
          <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">Frentes de cuidado acompanhadas pelo Dr. Pedro</h2>
          <p className="mt-4 text-[1.03rem] leading-8 text-graphite">
            Cada área de acompanhamento parte de avaliação clínica, histórico, exames e objetivos individuais, sempre com foco em segurança e orientação médica.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <AboutServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <CTASection
          title="Agende uma avaliação médica individualizada"
          text="Fale com a equipe para verificar disponibilidade de consulta e entender o próximo passo do atendimento."
        />
      </Section>
    </>
  );
}

function AboutPhotoComposition() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-gold/30" />
      <div className="grid gap-4 md:grid-cols-[1.38fr_0.62fr]">
        <div className="relative flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[28px] border border-white/80 bg-[radial-gradient(circle_at_24%_18%,rgba(185,147,90,0.18),transparent_28%),linear-gradient(135deg,#ffffff_0%,#eef3f1_48%,#e6ecec_100%)] shadow-soft">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,37,61,0.08),transparent_44%)]" />
          <div className="absolute left-7 top-7 h-px w-28 bg-gold/55" />
          <div className="absolute bottom-7 right-7 h-24 w-24 rounded-full border border-deep/10" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-deep text-white shadow-lift ring-8 ring-white/55">
            <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-white" />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="min-h-[10.5rem] rounded-[22px] border border-white/80 bg-[linear-gradient(145deg,#ffffff_0%,#f6f8f7_52%,#e6ecec_100%)] shadow-soft" />
          <div className="min-h-[10.5rem] rounded-[22px] border border-white/80 bg-[radial-gradient(circle_at_72%_18%,rgba(185,147,90,0.16),transparent_30%),linear-gradient(145deg,#ffffff_0%,#eef3f1_100%)] shadow-soft" />
        </div>
      </div>
    </div>
  );
}

function AboutDoctorCard() {
  return (
    <div className="grid items-center gap-10 rounded-[28px] border border-deep/10 bg-white p-6 shadow-soft md:grid-cols-[0.78fr_1.22fr] lg:p-10">
      <div className="overflow-hidden rounded-[22px] bg-mist">
        <Image
          src="/images/dr-pedro-bio-medico.webp"
          alt="Dr. Pedro Machado em ambiente médico profissional"
          width={960}
          height={1200}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Sobre o médico</p>
        <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{doctor.name}</h2>
        <p className="mt-3 text-sm font-medium text-petrol">{doctor.professionalId}</p>
        <div className="mt-5 grid gap-4 text-base leading-8 text-graphite">
          <p>
            Dr. Pedro Machado é Médico Pós-Graduado em Medicina Esportiva em Petrópolis, com pós-graduação em Nutrologia Esportiva. Seu atendimento é voltado a adultos e idosos que buscam cuidar da saúde metabólica, melhorar a composição corporal, prevenir doenças crônicas e alcançar mais qualidade de vida com acompanhamento médico individualizado.
          </p>
          <p>A avaliação considera histórico, rotina, exames, objetivos e segurança antes da definição de qualquer conduta.</p>
        </div>
        <p className="mt-4 text-sm font-medium text-petrol">{doctor.complementaryTraining}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={doctor.whatsappUrl}>Falar com a equipe</ButtonLink>
          <ButtonLink href={doctor.whatsappUrl} variant="secondary">
            Agendar consulta
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function AboutPhilosophy() {
  const pillars = [
    {
      title: "Escuta clínica",
      text: "Entender queixas, rotina, histórico e objetivos é parte essencial para construir uma conduta coerente com a realidade do paciente."
    },
    {
      title: "Avaliação criteriosa",
      text: "A análise clínica pode envolver exames, composição corporal, fatores metabólicos e riscos individuais antes de qualquer decisão."
    },
    {
      title: "Acompanhamento contínuo",
      text: "O cuidado pode ser ajustado ao longo do tempo, conforme evolução clínica, resposta do paciente e metas realistas."
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-deep/10 bg-white p-7 shadow-soft sm:p-10">
      <div className="about-line mb-8 h-px w-28 bg-gold" />
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Filosofia de atendimento</p>
        <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">Atendimento orientado por avaliação, exames e contexto individual</h2>
        <p className="mt-4 text-[1.03rem] leading-8 text-graphite">
          O acompanhamento considera histórico, rotina, sintomas, exames, objetivos e segurança antes da definição de qualquer conduta.
        </p>
      </div>
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <div key={pillar.title} className="about-philosophy-card hover-ink-card rounded-subtle border border-deep/10 bg-pearl p-6 shadow-[0_10px_32px_rgba(2,37,61,0.07)]" style={{ animationDelay: `${index * 120}ms` }}>
            <span className="hover-ink-number mb-5 inline-flex rounded-full bg-mist px-3 py-1 text-sm font-semibold text-petrol">0{index + 1}</span>
            <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
            <p className="hover-ink-muted mt-3 text-sm leading-7 text-graphite">{pillar.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className="hover-ink-card focus-ring group flex h-full flex-col rounded-subtle border border-deep/10 bg-white p-6 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="mb-5 h-px w-12 bg-gold transition duration-300 group-hover:w-20" />
      <h3 className="text-xl font-semibold text-ink">{service.shortTitle}</h3>
      <p className="hover-ink-muted mt-4 flex-1 text-sm leading-7 text-graphite">{service.description}</p>
      <span className="mt-6 text-sm font-semibold text-petrol">Saiba Mais</span>
    </Link>
  );
}
