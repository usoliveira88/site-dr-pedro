import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnamnesePopup } from "@/components/AnamnesePopup";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { doctor, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a trajetória, a forma de atendimento e os princípios que orientam o cuidado médico do Dr. Pedro Machado em Petrópolis.",
  alternates: { canonical: "/sobre" }
};

const aboutHeroKeywords = ["Escuta clínica", "Exames", "Composição corporal", "Saúde metabólica", "Medicina esportiva", "Petrópolis/RJ"];

export default function AboutPage() {
  return (
    <>
      <AnamnesePopup />
      <Section className="relative overflow-hidden bg-[linear-gradient(135deg,#f6f8f7_0%,#eef3f1_48%,#f1e8d8_100%)]">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute right-0 top-24 h-px w-1/3 bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-10 h-48 w-48 rounded-full bg-deep/[0.06] blur-3xl" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-[43rem]">
            <p className="section-reveal mb-4 inline-flex rounded-full border border-gold/35 bg-white/80 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Sobre o Dr. Pedro
            </p>
            <h1 className="section-reveal text-[2.35rem] font-semibold leading-[1.08] text-ink sm:text-[3.15rem] lg:text-[3.65rem]">
              Cuidado médico com escuta, critério clínico e acompanhamento individualizado
            </h1>
            <p className="section-reveal mt-6 text-lg leading-8 text-graphite sm:text-xl sm:leading-9">
              Dr. Pedro Machado atende em Petrópolis com foco em avaliação clínica, saúde metabólica, composição corporal, medicina esportiva e qualidade de vida. Cada consulta considera histórico, rotina, sintomas, exames e objetivos antes da definição de qualquer conduta.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {aboutHeroKeywords.map((keyword, index) => (
                <span
                  key={keyword}
                  className="section-reveal rounded-full border border-deep/10 bg-white/80 px-3.5 py-2 text-xs font-semibold text-petrol shadow-[0_10px_26px_rgba(2,37,61,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-white"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="section-reveal mt-7 rounded-[20px] border border-deep/10 bg-white/80 p-5 text-base leading-8 text-graphite shadow-[0_18px_50px_rgba(2,37,61,0.08)]">
              O atendimento não começa por uma fórmula pronta. Começa por entender a pessoa: sua rotina, seus sintomas, seus exames, seus objetivos e o que faz sentido para sua saúde.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={doctor.whatsappUrl} className="min-h-14 px-7 text-base">
                Falar com a equipe
              </ButtonLink>
              <ButtonLink href="/servicos" variant="secondary" className="min-h-14 px-7 text-base">
                Conhecer atendimentos
              </ButtonLink>
            </div>
          </div>
          <AboutPhotoComposition />
        </div>
      </Section>
      <Section className="bg-bluegray">
        <AboutPhilosophy />
      </Section>
      <Section className="bg-white">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Áreas</p>
          <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">Frentes de cuidado acompanhadas pelo Dr.&nbsp;Pedro</h2>
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
    <div className="section-reveal relative">
      <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-gold/30" />
      <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white p-3 shadow-[0_28px_80px_rgba(2,37,61,0.14)]">
        <Image
          src="/images/dr-pedro-bio-medico.webp"
          alt="Dr. Pedro Machado em ambiente médico profissional"
          width={960}
          height={1200}
          className="aspect-[4/5] max-h-[34rem] w-full rounded-[24px] object-cover object-[50%_18%]"
          priority
        />
        <div className="absolute bottom-5 left-5 right-5 rounded-[18px] border border-white/55 bg-white/90 p-4 shadow-soft backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Atendimento em Petrópolis</p>
          <p className="mt-3 text-sm font-semibold text-deep">{doctor.professionalId}</p>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-3 hidden w-48 overflow-hidden rounded-[20px] border border-white/80 bg-white p-2 shadow-lift sm:block">
        <Image
          src="/images/fachada-consultorio.jpg"
          alt="Fachada do local de atendimento em Petrópolis"
          width={700}
          height={520}
          className="aspect-[4/3] rounded-[14px] object-cover"
        />
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
