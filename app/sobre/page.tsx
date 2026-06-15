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
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-gold/30 bg-white/80 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Sobre
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Confiança, escuta clínica e cuidado individualizado</h1>
            <p className="mt-6 text-lg leading-8 text-graphite">
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
  const photos = [
    {
      src: "/images/hero-dr-pedro-machado.webp",
      alt: "Dr. Pedro Machado em ambiente médico profissional",
      className: "row-span-2 aspect-[4/5] rounded-[26px]"
    },
    {
      src: "/images/dr-pedro-bio-medico.webp",
      alt: "Dr. Pedro Machado em atendimento",
      className: "aspect-[4/5] rounded-[20px]"
    },
    {
      src: "/images/dr-pedro-machado.jpg",
      alt: "Dr. Pedro Machado em contexto clínico",
      className: "aspect-[4/5] rounded-[20px]"
    },
    {
      src: "/images/fachada-consultorio.jpg",
      alt: "Ambiente de atendimento médico",
      className: "col-span-2 aspect-[16/9] rounded-[22px]"
    }
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-gold/30" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-[1.18fr_0.82fr]">
        {photos.map((photo, index) => (
          <div key={photo.src} className={`relative overflow-hidden border border-white/80 bg-white shadow-soft ${photo.className}`}>
            <Image src={photo.src} alt={photo.alt} fill sizes={index === 0 ? "(min-width: 1024px) 520px, 100vw" : "260px"} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep/10 via-transparent to-white/10" />
          </div>
        ))}
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
            <span className="mb-5 inline-flex rounded-full bg-mist px-3 py-1 text-sm font-semibold text-petrol">0{index + 1}</span>
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
