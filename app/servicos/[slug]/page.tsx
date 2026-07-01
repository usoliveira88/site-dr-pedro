import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { StarIcon } from "@/components/Icons";
import { Section, SectionHeading } from "@/components/Section";
import { VideoBlock } from "@/components/VideoBlock";
import { doctor, googleReviews, processSteps, services, type Service } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.shortTitle,
    description: service.description
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  if (service.slug === "emagrecimento") {
    return <WeightLossLanding service={service} />;
  }

  const faqItems = [
    {
      question: `Como funciona o acompanhamento de ${service.shortTitle.toLowerCase()}?`,
      answer: "Texto provisório. Ajustar conforme fluxo real de consulta, exames, retorno e acompanhamento."
    },
    {
      question: "Esse atendimento garante resultado?",
      answer: "Não. A comunicação deve evitar promessas. A conduta depende de avaliação individual e critérios médicos."
    },
    {
      question: "Quais exames são solicitados?",
      answer: "Texto provisório. A solicitação de exames deve ser definida pelo médico após avaliação clínica."
    }
  ];

  return (
    <>
      <Section className="bg-mist">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{service.shortTitle}</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">{service.title}</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">{service.description}</p>
          <p className="mt-4 text-sm font-medium text-petrol">{doctor.professionalId}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={doctor.whatsappUrl}>Agendar consulta</ButtonLink>
            <ButtonLink href="/servicos" variant="secondary">
              Ver todos os serviços
            </ButtonLink>
          </div>
        </div>
      </Section>
      <Section>
        <VideoBlock title={service.videoPlaceholder} text="Espaço reservado para vídeo de 1 a 2 minutos, com explicação objetiva, natural e sem promessa de resultado." />
      </Section>
      <Section className="bg-linen">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Indicação" title="Para quem é indicado" />
            <ul className="grid gap-4">
              {service.indicatedFor.map((item) => (
                <li key={item} className="rounded-subtle border border-petrol/10 bg-white p-5 text-sm leading-7 text-graphite shadow-[0_10px_32px_rgba(22,74,81,0.05)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Avaliação" title="O que pode ser avaliado" />
            <ul className="grid gap-4">
              {service.evaluatedItems.map((item) => (
                <li key={item} className="rounded-subtle border border-petrol/10 bg-white p-5 text-sm leading-7 text-graphite shadow-[0_10px_32px_rgba(22,74,81,0.05)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Processo" title="Como funciona" />
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-subtle border border-petrol/10 bg-white p-6 shadow-[0_10px_32px_rgba(22,74,81,0.05)]">
              <span className="text-sm font-semibold text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-graphite">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-mist">
        <div className="rounded-[24px] border border-petrol/10 bg-white p-8 shadow-soft">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Expectativas realistas</p>
          <h2 className="text-3xl font-semibold text-ink">O que esperar do acompanhamento</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-graphite">{service.realisticExpectations}</p>
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes" />
        <FAQ items={faqItems} />
      </Section>
      <Section className="pt-0">
        <CTASection title={`Agende uma avaliação para ${service.shortTitle.toLowerCase()}`} />
      </Section>
    </>
  );
}

function WeightLossLanding({ service }: { service: Service }) {
  const trustItems = [doctor.professionalId, "Atendimento em Petrópolis", "Acompanhamento individualizado", "Foco em saúde metabólica"];
  const difficultyItems = [
    "Fome fora de hora",
    "Efeito sanfona",
    "Baixa disposição",
    "Dificuldade de manter constância",
    "Alterações metabólicas",
    "Necessidade de avaliação criteriosa"
  ];
  const indicatedCards = [
    {
      title: "Dificuldade para emagrecer",
      text: "Para pessoas que já tentaram mudanças anteriores, mas têm dificuldade de manter constância e evolução."
    },
    {
      title: "Fome excessiva ou efeito sanfona",
      text: "Para quem enfrenta oscilação frequente de peso, fome aumentada ou dificuldade de sustentar hábitos."
    },
    {
      title: "Busca por segurança médica",
      text: "Para quem deseja perder gordura com acompanhamento individualizado e mais critério clínico."
    }
  ];
  const evaluationCards = [
    {
      title: "Histórico e composição corporal",
      text: "Peso, exames laboratoriais, composição corporal e sinais relacionados ao metabolismo."
    },
    {
      title: "Rotina e hábitos",
      text: "Alimentação, sono, estresse, atividade física e fatores que interferem na evolução."
    },
    {
      title: "Contexto clínico",
      text: "Medicações em uso, fatores metabólicos, histórico de saúde e individualidade clínica."
    }
  ];
  const faqItems = [
    {
      question: "Como funciona o acompanhamento médico para emagrecimento?",
      answer:
        "O acompanhamento começa com avaliação clínica, histórico de peso, rotina, sintomas e, quando necessário, exames. A partir dessa leitura, as condutas são definidas de forma individualizada e acompanhadas ao longo da evolução."
    },
    {
      question: "O atendimento é indicado para quem já tentou emagrecer antes?",
      answer:
        "Sim. Tentativas anteriores, efeito sanfona, fome frequente, mudanças na rotina e dificuldade de manter constância são pontos importantes para entender o contexto do paciente."
    },
    {
      question: "O acompanhamento garante perda de peso?",
      answer:
        "Não. A comunicação médica deve ser ética e sem promessa de resultado. A evolução depende de avaliação individual, adesão, contexto clínico e acompanhamento."
    },
    {
      question: "O atendimento acontece em Petrópolis?",
      answer:
        `Sim. O atendimento presencial acontece em Petrópolis, no endereço ${doctor.location}. A modalidade de atendimento deve ser confirmada com a equipe no agendamento.`
    }
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-deep text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(185,147,90,0.22),transparent_28%),radial-gradient(circle_at_8%_82%,rgba(168,191,163,0.14),transparent_34%),linear-gradient(135deg,#02253D_0%,#0F4C5C_52%,#1F2A2D_100%)]" />
        <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute bottom-12 right-10 h-px w-56 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-9 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.98fr_0.82fr] lg:px-8 lg:py-20">
          <div className="section-reveal">
            <p className="mb-5 inline-flex rounded-full border border-gold/30 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold backdrop-blur sm:px-4">
              Emagrecimento médico em Petrópolis
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Avaliação clínica para entender fatores relacionados à dificuldade de perder peso e construir um plano compatível com saúde, rotina e objetivos.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {trustItems.map((item) => (
                <span key={item} className="rounded-full border border-white/14 bg-white/[0.08] px-3 py-2 text-xs font-semibold text-white/86">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="w-full bg-white sm:w-auto">
                Agendar consulta
              </ButtonLink>
              <ButtonLink href={doctor.whatsappUrl} variant="ghost" className="w-full border border-white/22 bg-white/10 text-white hover:bg-white hover:text-deep sm:w-auto">
                Falar com a equipe
              </ButtonLink>
            </div>
          </div>
          <div className="section-reveal relative mx-auto w-full max-w-[30rem] lg:mr-0">
            <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-gold/30" />
            <div className="overflow-hidden rounded-[28px] border border-white/18 bg-white/10 p-3 shadow-[0_26px_90px_rgba(0,0,0,0.28)] backdrop-blur">
              <Image
                src="/images/hero-dr-pedro-machado.webp"
                alt="Dr. Pedro Machado em ambiente médico profissional"
                width={1600}
                height={1429}
                className="aspect-[1.08/1] w-full rounded-[22px] object-cover object-[42%_42%]"
                priority
              />
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/82">
                <div className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Consulta</span>
                  <span className="mt-1 block">Escuta, exames e rotina</span>
                </div>
                <div className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Cuidado</span>
                  <span className="mt-1 block">Decisões individualizadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-linen">
        <div className="grid items-center gap-8 rounded-[28px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="relative overflow-hidden rounded-[24px] bg-mist p-6 shadow-[inset_0_0_0_1px_rgba(2,37,61,0.08)] sm:p-8">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-gold/25" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Avaliação clínica</p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Por que emagrecer pode estar sendo tão difícil?</h2>
            <p className="mt-5 text-base leading-7 text-graphite sm:leading-8">
              A dificuldade para perder peso pode envolver rotina, alimentação, sono, estresse, composição corporal, fatores metabólicos e tentativas anteriores sem acompanhamento individualizado.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {difficultyItems.map((item, index) => (
              <div
                key={item}
                className="section-reveal hover-ink-card group rounded-subtle border border-deep/10 bg-pearl p-4 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="hover-ink-number inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage/25 text-xs font-semibold text-petrol">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm font-semibold leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-bluegray">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Indicação" title="Para quem é indicado" />
            <ul className="grid gap-4">
              {indicatedCards.map((item, index) => (
                <li key={item.title} className="section-reveal hover-ink-card group relative overflow-hidden rounded-[18px] border border-deep/10 bg-white p-5 shadow-[0_16px_40px_rgba(2,37,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7" style={{ animationDelay: `${index * 80}ms` }}>
                  <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-gold via-gold/45 to-transparent sm:inset-x-7" />
                  <span className="hover-ink-number inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-mist px-2 text-xs font-semibold text-petrol">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold leading-snug text-ink transition group-hover:text-white">{item.title}</h3>
                  <p className="hover-ink-muted mt-3 text-[0.98rem] leading-7 text-graphite">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Avaliação" title="O que pode ser avaliado" />
            <ul className="grid gap-4">
              {evaluationCards.map((item, index) => (
                <li key={item.title} className="section-reveal hover-ink-card group relative overflow-hidden rounded-[18px] border border-deep/10 bg-white p-5 shadow-[0_16px_40px_rgba(2,37,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7" style={{ animationDelay: `${index * 80}ms` }}>
                  <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-gold via-gold/45 to-transparent sm:inset-x-7" />
                  <span className="hover-ink-number inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-sage/25 px-2 text-xs font-semibold text-petrol">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold leading-snug text-ink transition group-hover:text-white">{item.title}</h3>
                  <p className="hover-ink-muted mt-3 text-[0.98rem] leading-7 text-graphite">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-deep">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Processo</p>
          <h2 className="text-[1.75rem] font-semibold leading-tight text-white sm:text-4xl">Como funciona o acompanhamento</h2>
          <p className="mt-4 text-base leading-7 text-white sm:text-lg sm:leading-8">
            Um caminho organizado ajuda a entender o ponto de partida, orientar decisões e acompanhar ajustes com segurança clínica.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="section-reveal rounded-subtle border border-white/12 bg-white/[0.075] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-white/[0.1] sm:p-6" style={{ animationDelay: `${index * 80}ms` }}>
              <span className="text-sm font-semibold text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid items-center gap-6 rounded-[28px] border border-deep/10 bg-linen p-5 shadow-soft sm:p-8 lg:grid-cols-[1fr_0.58fr] lg:p-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Expectativas realistas</p>
            <h2 className="text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">O que esperar do acompanhamento</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-graphite sm:leading-8">{service.realisticExpectations}</p>
          </div>
          <div className="rounded-[22px] border border-deep/10 bg-white p-5 shadow-[0_14px_38px_rgba(2,37,61,0.08)]">
            <p className="text-sm font-semibold text-petrol">O foco não é uma fórmula pronta.</p>
            <p className="mt-3 text-sm leading-7 text-graphite">
              A avaliação considera dados clínicos, rotina e objetivos possíveis para orientar decisões com mais clareza.
            </p>
            <div className="mt-5">
              <ButtonLink href={doctor.whatsappUrl} className="w-full sm:w-auto">Agendar consulta</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-bluegray">
        <div className="grid items-start gap-8 rounded-[28px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{googleReviews.sourceLabel}</p>
            <h2 className="text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Um relato sobre o acompanhamento</h2>
          </div>
          <article className="rounded-subtle border border-deep/10 bg-pearl p-5 shadow-[0_10px_32px_rgba(2,37,61,0.07)] sm:p-6">
            <div className="mb-4 flex gap-1 text-gold" aria-label={`${googleReviews.items[2].rating} estrelas`}>
              {Array.from({ length: googleReviews.items[2].rating }).map((_, starIndex) => (
                <StarIcon key={starIndex} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-sm leading-7 text-graphite">“{googleReviews.items[2].text}”</p>
            <p className="mt-4 text-sm font-semibold text-deep">{googleReviews.items[2].name}</p>
          </article>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes sobre emagrecimento" />
        <FAQ items={faqItems} />
      </Section>

      <Section className="pt-0">
        <CTASection title="Agende uma avaliação para emagrecimento" />
      </Section>
    </>
  );
}
