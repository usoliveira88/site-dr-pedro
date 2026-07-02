import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ServiceCard } from "@/components/Cards";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceIntentCards } from "@/components/ServiceIntentCards";
import { doctor, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Atendimentos | Dr. Pedro Machado em Petrópolis",
  description:
    "Conheça os acompanhamentos médicos do Dr. Pedro Machado em Petrópolis: emagrecimento, sobrepeso, obesidade, saúde hormonal, hipertrofia e check-up da saúde."
};

const heroBadges = [
  "Atendimento em Petrópolis",
  doctor.professionalId,
  "Avaliação individualizada",
  "Segurança e estratégia clínica"
];

const heroSteps = [
  {
    number: "01",
    title: "Entenda seu objetivo",
    text: "Peso, hormônios, composição corporal ou prevenção."
  },
  {
    number: "02",
    title: "Avalie o contexto",
    text: "Histórico, sintomas, exames, rotina e riscos clínicos."
  },
  {
    number: "03",
    title: "Escolha o caminho",
    text: "Acesse a página do acompanhamento mais adequado."
  }
];

const careFactors = [
  "Histórico clínico",
  "Exames laboratoriais",
  "Composição corporal",
  "Rotina e sono",
  "Sintomas atuais",
  "Objetivos realistas"
];

const evaluationSigns = [
  "Dificuldade para emagrecer mesmo com tentativas anteriores.",
  "Suspeita de alterações hormonais, queda de energia ou libido.",
  "Desejo de ganhar massa com acompanhamento mais criterioso.",
  "Vontade de prevenir problemas e entender melhor seus exames."
];

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <Section className="bg-white">
        <div className="mb-9 max-w-3xl">
          <SectionHeading
            eyebrow="Acompanhamentos médicos"
            title="Qual objetivo você busca?"
            text="Cada pessoa chega com uma necessidade diferente. Escolha abaixo o tema que mais se aproxima do seu momento para conhecer o acompanhamento indicado."
          />
        </div>
        <ServiceIntentCards />
      </Section>

      <Section className="bg-deep text-white">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Avaliação médica</p>
            <h2 className="text-[1.85rem] font-semibold leading-tight sm:text-4xl">O atendimento considera mais do que um objetivo isolado</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
              Emagrecimento, saúde hormonal, hipertrofia e prevenção podem envolver fatores diferentes em cada pessoa. A avaliação ajuda a organizar prioridades antes de qualquer conduta.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {careFactors.map((factor) => (
              <div key={factor} className="rounded-subtle border border-white/12 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(0,0,0,0.12)]">
                {factor}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-linen">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Quando buscar avaliação"
            title="Sinais de que vale olhar para sua saúde com mais critério"
            text="A consulta pode ser útil quando há sintomas persistentes, metas que não evoluem ou dúvidas sobre exames, peso, hormônios e composição corporal."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {evaluationSigns.map((item, index) => (
              <div key={item} className="rounded-[18px] border border-deep/10 bg-white p-5 shadow-[0_14px_42px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-lift">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-4 text-base font-semibold leading-7 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-bluegray/50">
        <SectionHeading
          eyebrow="Acompanhamentos"
          title="Páginas de atendimento"
          text="Cada página aprofunda um tipo de acompanhamento e mostra quando ele pode fazer sentido, o que pode ser avaliado e como funciona o cuidado."
        />
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

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-deep text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(185,147,90,0.22),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(168,191,163,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:px-8 lg:py-20">
        <div className="relative z-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:text-sm">Atendimentos médicos em Petrópolis</p>
          <h1 className="max-w-5xl text-[2.25rem] font-semibold leading-[1.05] tracking-normal sm:text-5xl lg:text-[4.35rem]">
            Encontre o acompanhamento médico mais adequado para seu objetivo
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Emagrecimento, saúde hormonal, hipertrofia e prevenção com avaliação clínica individualizada, conduzida a partir do seu histórico, sintomas, exames e rotina.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {heroBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-xs font-semibold text-white/90 backdrop-blur">
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={doctor.whatsappUrl} className="min-h-14 px-7 text-base">
              Agendar consulta
            </ButtonLink>
            <ButtonLink href={doctor.whatsappUrl} variant="ghost" className="min-h-14 border border-white/20 bg-white/[0.08] px-7 text-base text-white hover:bg-white hover:text-deep">
              Falar com a equipe
            </ButtonLink>
          </div>
        </div>

        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.08] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative rounded-[22px] border border-white/10 bg-[#082f4b]/80 p-5 sm:p-6">
              <div className="border-b border-white/12 pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Como funciona</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">Um caminho mais claro para decidir</h2>
              </div>
              <div className="mt-5 grid gap-3">
                {heroSteps.map((step) => (
                  <div key={step.number} className="group rounded-[16px] border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:border-gold/45 hover:bg-white/[0.1]">
                    <div className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-gold">{step.number}</span>
                      <div>
                        <h3 className="font-semibold text-white">{step.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/70">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[16px] border border-gold/25 bg-gold/10 p-4 text-sm leading-6 text-white/80">
                Ideal para quem precisa entender qual atendimento faz mais sentido antes de agendar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesFinalCTA() {
  return (
    <div className="section-reveal relative overflow-hidden rounded-[30px] border border-deep/20 bg-white p-6 shadow-[0_24px_70px_rgba(2,37,61,0.13)] sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-deep/10" />
      <div className="pointer-events-none absolute right-10 top-8 h-28 w-28 rounded-full bg-gold/[0.14] blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gold/75 via-deep/16 to-transparent" />
      <div className="pointer-events-none absolute left-6 top-6 h-px w-32 bg-gradient-to-r from-deep/35 to-transparent" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Próximo passo</p>
          <h2 className="text-[1.85rem] font-semibold leading-tight text-deep sm:text-4xl">
            Agende sua avaliação e descubra o acompanhamento mais adequado para você
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-graphite">
            Fale com a equipe para verificar disponibilidade, esclarecer dúvidas e dar o próximo passo com orientação médica.
          </p>
        </div>
        <a
          href={doctor.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-14 w-full items-center justify-center rounded-subtle border border-deep bg-deep px-8 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift active:translate-y-0 active:bg-deep sm:w-auto"
        >
          Agendar consulta
        </a>
      </div>
    </div>
  );
}
