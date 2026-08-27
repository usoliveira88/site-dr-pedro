import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AnamnesePopup } from "@/components/AnamnesePopup";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { StarIcon } from "@/components/Icons";
import { Section, SectionHeading } from "@/components/Section";
import { VideoBlock } from "@/components/VideoBlock";
import { doctor, googleReviews, processSteps, serviceEvidenceStats, services, type Service } from "@/data/site";

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
    title: { absolute: `${service.shortTitle} | Dr. Pedro Machado` },
    description: service.description,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${service.shortTitle} | Dr. Pedro Machado`,
      description: service.description,
      url: `/servicos/${service.slug}`,
      type: "website",
      locale: "pt_BR"
    }
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

  if (service.slug === "sobrepeso-e-obesidade") {
    return (
      <>
        <AnamnesePopup />
        <OverweightObesityLanding service={service} />
      </>
    );
  }

  if (service.slug === "obesidade") {
    return <ObesityLanding service={service} />;
  }

  if (service.slug === "sobrepeso") {
    return <OverweightLanding service={service} />;
  }

  if (service.slug === "hipertrofia") {
    return <HypertrophyLanding service={service} />;
  }

  if (service.slug === "reposicao-hormonal-masculina") {
    return (
      <>
        <AnamnesePopup />
        <MaleHormoneLanding service={service} />
      </>
    );
  }

  if (service.slug === "reposicao-hormonal-feminina") {
    return (
      <>
        <AnamnesePopup />
        <FemaleHormoneLanding service={service} />
      </>
    );
  }

  if (service.slug === "check-up-da-saude") {
    return <CheckupLanding service={service} />;
  }

  const faqItems = [
    {
      question: `Como funciona o acompanhamento de ${service.shortTitle.toLowerCase()}?`,
      answer: "O acompanhamento parte de avaliação clínica, análise do histórico, exames quando indicados e definição de condutas individualizadas."
    },
    {
      question: "Esse atendimento garante resultado?",
      answer: "Não. A comunicação deve evitar promessas. A conduta depende de avaliação individual e critérios médicos."
    },
    {
      question: "Quais exames são solicitados?",
      answer: "A solicitação de exames deve ser definida pelo médico após avaliação clínica, considerando sintomas, histórico e objetivos do paciente."
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
              Ver todos os atendimentos
            </ButtonLink>
          </div>
        </div>
      </Section>
      <Section>
        <VideoBlock title={service.videoPlaceholder} text="Conteúdo educativo sobre o acompanhamento, com explicação objetiva, natural e sem promessa de resultado." />
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

function ServiceEvidenceSection({ slug }: { slug: string }) {
  const items = serviceEvidenceStats[slug];

  if (!items?.length) {
    return null;
  }

  return (
    <Section className="bg-white">
      <div className="rounded-[28px] border border-deep/10 bg-linen p-5 shadow-soft sm:p-8 lg:p-10">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contexto</p>
          <h2 className="text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Dados que ajudam a entender o cenário</h2>
          <p className="mt-4 text-base leading-7 text-graphite sm:text-lg sm:leading-8">
            Alguns dados ajudam a contextualizar a importância de uma avaliação médica individualizada, sem substituir a análise clínica de cada paciente.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={`${slug}-${item.value}`}
              className="section-reveal hover-ink-card group relative overflow-hidden rounded-[18px] border border-deep/10 bg-white p-5 shadow-[0_16px_40px_rgba(2,37,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-gold via-gold/45 to-transparent sm:inset-x-6" />
              <p className="text-3xl font-semibold leading-tight text-deep transition group-hover:text-white sm:text-4xl">{item.value}</p>
              <p className="hover-ink-muted mt-4 text-sm leading-7 text-graphite">{item.text}</p>
              <p className="mt-5 border-t border-deep/10 pt-3 text-xs font-medium leading-5 text-petrol transition group-hover:border-white/16 group-hover:text-white/78">
                {item.source}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function WeightLossLanding({ service }: { service: Service }) {
  const trustItems = [doctor.professionalId, "Atendimento em Petrópolis", "Acompanhamento individualizado", "Composição corporal com segurança"];
  const difficultyItems = [
    "Redução de gordura",
    "Melhora de medidas",
    "Preservação de massa muscular",
    "Rotina alimentar e treino",
    "Exames e segurança",
    "Necessidade de avaliação criteriosa"
  ];
  const indicatedCards = [
    {
      title: "Redução de gordura com critério",
      text: "Para pessoas que buscam melhorar medidas e composição corporal com acompanhamento individualizado."
    },
    {
      title: "Preservação de massa muscular",
      text: "Para quem deseja reduzir gordura sem perder de vista força, treino, recuperação e segurança clínica."
    },
    {
      title: "Busca por segurança médica",
      text: "Para quem deseja alinhar estética corporal, exames, rotina e metas realistas sem promessas de resultado."
    }
  ];
  const evaluationCards = [
    {
      title: "Histórico e composição corporal",
      text: "Percentual de gordura, massa muscular, medidas, exames laboratoriais e histórico clínico."
    },
    {
      title: "Rotina e hábitos",
      text: "Alimentação, sono, estresse, atividade física e fatores que interferem na evolução."
    },
    {
      title: "Contexto clínico",
      text: "Medicações em uso, segurança médica, histórico de saúde e individualidade clínica."
    }
  ];
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;
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
              Emagrecimento estético em Petrópolis
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Avaliação clínica para orientar redução de gordura, melhora de medidas e composição corporal com segurança, rotina possível e metas realistas.
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
              O emagrecimento estético exige mais do que olhar para o peso. Rotina, treino, alimentação, sono, composição corporal, exames e preservação de massa muscular ajudam a orientar decisões mais seguras.
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

      <ServiceEvidenceSection slug={service.slug} />

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
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes sobre emagrecimento estético" />
        <FAQ items={faqItems} />
      </Section>

      <Section className="bg-white pt-0">
        <div className="section-reveal relative overflow-hidden rounded-[30px] bg-deep p-5 text-white shadow-lift sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-8 left-10 h-px w-56 bg-gradient-to-r from-gold/70 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
              <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
                Agende sua avaliação médica em Petrópolis
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
                Fale com a equipe para verificar disponibilidade de consulta e receber orientação sobre o próximo passo do seu acompanhamento.
              </p>
              <div className="mt-7 grid gap-3 text-sm text-white/86 sm:grid-cols-3">
                {["Atendimento com avaliação individualizada", "Clínica em Petrópolis", "Contato rápido pelo WhatsApp"].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                    <span className="block h-px w-10 bg-gold" />
                    <span className="mt-3 block leading-6">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="min-h-14 w-full bg-white px-7 text-base shadow-[0_18px_42px_rgba(0,0,0,0.22)] hover:bg-gold hover:text-deep sm:w-auto">
                  Agendar consulta
                </ButtonLink>
                <ButtonLink href="#localizacao-emagrecimento" variant="ghost" className="min-h-14 w-full border border-white/24 bg-white/10 px-7 text-base text-white hover:bg-white hover:text-deep sm:w-auto">
                  Ver localização
                </ButtonLink>
              </div>
            </div>
            <div id="localizacao-emagrecimento" className="overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <Image
                src="/images/fachada-consultorio.jpg"
                alt="Fachada do local de atendimento"
                width={1400}
                height={875}
                className="aspect-[16/9] w-full rounded-[20px] object-cover"
              />
              <div className="mt-3 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[18px] border border-white/12 bg-white/[0.08] p-4 text-sm leading-6 text-white">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Localização</p>
                  <p>{doctor.location}</p>
                  <p className="mt-3">{doctor.phone}</p>
                  <p className="mt-1">{doctor.instagram}</p>
                </div>
                <iframe
                  title="Mapa da clínica em Petrópolis"
                  src={mapsUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full rounded-[18px] border-0 sm:h-56 lg:h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function OverweightObesityLanding({ service }: { service: Service }) {
  const trustItems = [doctor.professionalId, "Sobrepeso e obesidade em Petrópolis", "Acompanhamento médico individualizado", "Foco em saúde metabólica"];
  const contextItems = [
    "Excesso de peso",
    "Gordura abdominal",
    "Pressão alta",
    "Diabetes tipo 2",
    "Colesterol e triglicerídeos",
    "Apneia do sono"
  ];
  const indicatedCards = [
    {
      title: "Sobrepeso ou ganho de peso progressivo",
      text: "Para pessoas que desejam investigar excesso de peso, gordura abdominal, rotina e fatores de risco antes que o quadro avance."
    },
    {
      title: "Obesidade e riscos associados",
      text: "Para quem apresenta IMC elevado, resistência à insulina, pressão alta, gordura no fígado, apneia do sono ou dores articulares."
    },
    {
      title: "Busca por cuidado contínuo",
      text: "Para quem deseja acompanhamento médico para sobrepeso ou obesidade com escuta, exames, segurança e decisões individualizadas."
    }
  ];
  const evaluationCards = [
    {
      title: "Saúde metabólica",
      text: "Glicemia, colesterol, triglicerídeos, pressão arterial, gordura no fígado e risco cardiovascular."
    },
    {
      title: "Composição corporal e rotina",
      text: "IMC, circunferência abdominal, gordura corporal, sono, alimentação, treino, estresse e histórico de peso."
    },
    {
      title: "Estratégias de acompanhamento",
      text: "Ajustes de rotina, avaliação de exames, monitoramento contínuo e, quando indicado, terapias medicamentosas com critério médico."
    }
  ];
  const faqItems = [
    {
      question: "Qual a diferença entre sobrepeso e obesidade?",
      answer:
        "São classificações diferentes de acordo com critérios clínicos, mas ambas podem exigir atenção ao contexto de saúde, composição corporal, exames, rotina e fatores de risco."
    },
    {
      question: "O acompanhamento médico para sobrepeso e obesidade é só sobre perder peso?",
      answer:
        "Não. O cuidado considera saúde metabólica, pressão arterial, glicemia, colesterol, sono, composição corporal, histórico, rotina e riscos associados ao excesso de peso."
    },
    {
      question: "O tratamento da obesidade em Petrópolis pode envolver medicação?",
      answer:
        "Quando há indicação clínica, terapias medicamentosas podem ser consideradas dentro de critérios médicos, avaliação de riscos e acompanhamento contínuo. A decisão deve ser individualizada."
    },
    {
      question: "O acompanhamento garante perda de peso?",
      answer:
        "Não. A comunicação deve ser ética e sem promessa de resultado. A evolução depende de avaliação individual, adesão, contexto clínico e acompanhamento."
    },
    {
      question: "Há atendimento para sobrepeso e obesidade em Petrópolis?",
      answer:
        `Sim. O atendimento presencial acontece em Petrópolis, no endereço ${doctor.location}. A disponibilidade deve ser confirmada com a equipe no agendamento.`
    }
  ];
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-deep text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(185,147,90,0.22),transparent_28%),radial-gradient(circle_at_8%_82%,rgba(168,191,163,0.14),transparent_34%),linear-gradient(135deg,#02253D_0%,#0F4C5C_52%,#1F2A2D_100%)]" />
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-9 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.98fr_0.82fr] lg:px-8 lg:py-20">
          <div className="section-reveal">
            <p className="mb-5 inline-flex rounded-full border border-gold/30 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold backdrop-blur sm:px-4">
              Sobrepeso e obesidade em Petrópolis
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{service.description}</p>
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
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Avaliação</span>
                  <span className="mt-1 block">Exames, rotina e riscos</span>
                </div>
                <div className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Cuidado</span>
                  <span className="mt-1 block">Acompanhamento contínuo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-linen">
        <div className="grid items-center gap-8 rounded-[28px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="relative overflow-hidden rounded-[24px] bg-mist p-6 shadow-[inset_0_0_0_1px_rgba(2,37,61,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Condição multifatorial</p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Excesso de peso merece uma avaliação mais ampla</h2>
            <p className="mt-5 text-base leading-7 text-graphite sm:leading-8">
              Sobrepeso e obesidade podem envolver saúde metabólica, rotina, sono, histórico familiar, composição corporal, uso de medicamentos e tentativas anteriores de controle de peso.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contextItems.map((item, index) => (
              <div key={item} className="section-reveal hover-ink-card group rounded-subtle border border-deep/10 bg-pearl p-4 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lift" style={{ animationDelay: `${index * 70}ms` }}>
                <span className="hover-ink-number inline-flex h-8 w-8 items-center justify-center rounded-full bg-sage/25 text-xs font-semibold text-petrol">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm font-semibold leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ServiceEvidenceSection slug={service.slug} />

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
            O acompanhamento médico para sobrepeso e obesidade organiza avaliação, exames, rotina e reavaliações para orientar decisões com mais segurança.
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
            <p className="text-sm font-semibold text-petrol">O foco é cuidado contínuo, não julgamento.</p>
            <p className="mt-3 text-sm leading-7 text-graphite">A conduta considera saúde metabólica, exames, rotina, histórico e possibilidades terapêuticas seguras para cada paciente.</p>
            <div className="mt-5">
              <ButtonLink href={doctor.whatsappUrl} className="w-full sm:w-auto">Agendar consulta</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes sobre sobrepeso e obesidade" />
        <FAQ items={faqItems} />
      </Section>

      <Section className="bg-white pt-0">
        <div className="section-reveal relative overflow-hidden rounded-[30px] bg-deep p-5 text-white shadow-lift sm:p-8 lg:p-10">
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
              <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">Agende sua avaliação médica em Petrópolis</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">Fale com a equipe para verificar disponibilidade de consulta e receber orientação sobre o próximo passo do seu acompanhamento.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="min-h-14 w-full bg-white px-7 text-base shadow-[0_18px_42px_rgba(0,0,0,0.22)] hover:bg-gold hover:text-deep sm:w-auto">
                  Agendar consulta
                </ButtonLink>
                <ButtonLink href="#localizacao-sobrepeso-e-obesidade" variant="ghost" className="min-h-14 w-full border border-white/24 bg-white/10 px-7 text-base text-white hover:bg-white hover:text-deep sm:w-auto">
                  Ver localização
                </ButtonLink>
              </div>
            </div>
            <div id="localizacao-sobrepeso-e-obesidade" className="overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <Image src="/images/fachada-consultorio.jpg" alt="Fachada do local de atendimento" width={1400} height={875} className="aspect-[16/9] w-full rounded-[20px] object-cover" />
              <div className="mt-3 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[18px] border border-white/12 bg-white/[0.08] p-4 text-sm leading-6 text-white">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Localização</p>
                  <p>{doctor.location}</p>
                  <p className="mt-3">{doctor.phone}</p>
                  <p className="mt-1">{doctor.instagram}</p>
                </div>
                <iframe title="Mapa da clínica em Petrópolis" src={mapsUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-48 w-full rounded-[18px] border-0 sm:h-56 lg:h-full" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ObesityLanding({ service }: { service: Service }) {
  const trustItems = [doctor.professionalId, "Tratamento da obesidade em Petrópolis", "Acompanhamento médico contínuo", "Foco em saúde metabólica"];
  const difficultyItems = [
    "Condição multifatorial",
    "Riscos metabólicos associados",
    "Histórico de efeito sanfona",
    "Fatores de rotina e sono",
    "Possível indicação medicamentosa",
    "Necessidade de acompanhamento contínuo"
  ];
  const indicatedCards = [
    {
      title: "Obesidade ou ganho de peso progressivo",
      text: "Para pessoas que convivem com aumento de peso, gordura abdominal ou dificuldade de controle ao longo do tempo."
    },
    {
      title: "Riscos clínicos associados",
      text: "Para quem apresenta alterações como resistência à insulina, pressão alta, colesterol elevado ou histórico familiar relevante."
    },
    {
      title: "Busca por cuidado sem julgamento",
      text: "Para quem deseja um tratamento individualizado da obesidade, com avaliação médica, escuta e segurança."
    }
  ];
  const evaluationCards = [
    {
      title: "Saúde metabólica",
      text: "Exames laboratoriais, composição corporal, pressão arterial e fatores associados ao controle de peso."
    },
    {
      title: "Histórico e tentativas anteriores",
      text: "Oscilações de peso, tratamentos prévios, medicações em uso, rotina alimentar, sono e atividade física."
    },
    {
      title: "Estratégias de tratamento",
      text: "Condutas individualizadas e, quando indicado, avaliação de terapias medicamentosas com acompanhamento contínuo."
    }
  ];
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;
  const faqItems = [
    {
      question: "Como funciona o acompanhamento médico para obesidade?",
      answer:
        "O acompanhamento começa com avaliação clínica, histórico de saúde, rotina, composição corporal e exames quando necessários. A partir dessa leitura, o tratamento é individualizado e acompanhado ao longo do tempo."
    },
    {
      question: "Obesidade é apenas uma questão de alimentação?",
      answer:
        "Não. A obesidade é uma condição multifatorial e pode envolver metabolismo, sono, estresse, medicamentos, histórico familiar, rotina, composição corporal e outros fatores clínicos."
    },
    {
      question: "O tratamento pode envolver medicamentos?",
      answer:
        "Quando há indicação clínica, terapias medicamentosas podem ser consideradas dentro de critérios médicos, avaliação de riscos e acompanhamento contínuo. A decisão deve ser individualizada."
    },
    {
      question: "O tratamento da obesidade garante perda de peso?",
      answer:
        "Não. A comunicação deve ser ética e sem promessa de resultado. O objetivo é construir um cuidado médico seguro, individualizado e orientado por avaliação clínica."
    },
    {
      question: "Há atendimento para obesidade em Petrópolis?",
      answer:
        `Sim. O atendimento presencial acontece em Petrópolis, no endereço ${doctor.location}. A disponibilidade deve ser confirmada com a equipe no agendamento.`
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
              Tratamento da obesidade em Petrópolis
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Acompanhamento médico para obesidade com avaliação clínica, exames, análise da rotina e estratégias individualizadas para cuidar da saúde metabólica com segurança.
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
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Avaliação</span>
                  <span className="mt-1 block">Histórico, exames e riscos</span>
                </div>
                <div className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Cuidado</span>
                  <span className="mt-1 block">Acompanhamento contínuo</span>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Condição multifatorial</p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Por que a obesidade exige uma avaliação mais ampla?</h2>
            <p className="mt-5 text-base leading-7 text-graphite sm:leading-8">
              A obesidade pode envolver saúde metabólica, histórico familiar, sono, estresse, rotina, composição corporal, medicações em uso e tentativas anteriores de controle de peso.
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

      <ServiceEvidenceSection slug={service.slug} />

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
            O acompanhamento médico para obesidade organiza avaliação, investigação, definição de condutas e reavaliações para conduzir decisões com mais segurança.
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
            <p className="mt-5 max-w-3xl text-base leading-7 text-graphite sm:leading-8">
              O acompanhamento busca compreender fatores associados à obesidade, reduzir riscos clínicos e orientar um tratamento individualizado, sem prometer resultado ou simplificar uma condição multifatorial.
            </p>
          </div>
          <div className="rounded-[22px] border border-deep/10 bg-white p-5 shadow-[0_14px_38px_rgba(2,37,61,0.08)]">
            <p className="text-sm font-semibold text-petrol">O foco é cuidado contínuo, não julgamento.</p>
            <p className="mt-3 text-sm leading-7 text-graphite">
              A conduta considera saúde metabólica, exames, rotina, histórico e possibilidades terapêuticas seguras para cada paciente.
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
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes sobre obesidade" />
        <FAQ items={faqItems} />
      </Section>

      <Section className="bg-white pt-0">
        <div className="section-reveal relative overflow-hidden rounded-[30px] bg-deep p-5 text-white shadow-lift sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-8 left-10 h-px w-56 bg-gradient-to-r from-gold/70 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
              <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
                Agende sua avaliação médica em Petrópolis
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
                Fale com a equipe para verificar disponibilidade de consulta e receber orientação sobre o próximo passo do seu acompanhamento.
              </p>
              <div className="mt-7 grid gap-3 text-sm text-white/86 sm:grid-cols-3">
                {["Atendimento com avaliação individualizada", "Clínica em Petrópolis", "Contato rápido pelo WhatsApp"].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                    <span className="block h-px w-10 bg-gold" />
                    <span className="mt-3 block leading-6">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="min-h-14 w-full bg-white px-7 text-base shadow-[0_18px_42px_rgba(0,0,0,0.22)] hover:bg-gold hover:text-deep sm:w-auto">
                  Agendar consulta
                </ButtonLink>
                <ButtonLink href="#localizacao-obesidade" variant="ghost" className="min-h-14 w-full border border-white/24 bg-white/10 px-7 text-base text-white hover:bg-white hover:text-deep sm:w-auto">
                  Ver localização
                </ButtonLink>
              </div>
            </div>
            <div id="localizacao-obesidade" className="overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <Image
                src="/images/fachada-consultorio.jpg"
                alt="Fachada do local de atendimento"
                width={1400}
                height={875}
                className="aspect-[16/9] w-full rounded-[20px] object-cover"
              />
              <div className="mt-3 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[18px] border border-white/12 bg-white/[0.08] p-4 text-sm leading-6 text-white">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Localização</p>
                  <p>{doctor.location}</p>
                  <p className="mt-3">{doctor.phone}</p>
                  <p className="mt-1">{doctor.instagram}</p>
                </div>
                <iframe
                  title="Mapa da clínica em Petrópolis"
                  src={mapsUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full rounded-[18px] border-0 sm:h-56 lg:h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function OverweightLanding({ service }: { service: Service }) {
  const trustItems = ["Atendimento em Petrópolis", doctor.professionalId, "Avaliação individualizada", "Foco em saúde metabólica"];
  const difficultyItems = [
    "Ganho de peso progressivo",
    "Dificuldade de manter constância",
    "Alteração em exames",
    "Cansaço e baixa disposição",
    "Risco de evolução para obesidade",
    "Prevenção e acompanhamento"
  ];
  const indicatedCards = [
    {
      title: "Ganho de peso progressivo",
      text: "Para pessoas que perceberam aumento de peso ao longo do tempo e querem entender os fatores envolvidos."
    },
    {
      title: "Dificuldade de controlar a rotina",
      text: "Quando alimentação, sono, estresse ou atividade física dificultam a manutenção de hábitos."
    },
    {
      title: "Prevenção e saúde metabólica",
      text: "Para quem deseja agir antes que o sobrepeso evolua para maiores riscos clínicos."
    }
  ];
  const evaluationCards = [
    {
      title: "Histórico e composição corporal",
      text: "Peso, medidas, composição corporal, histórico familiar e evolução ao longo do tempo."
    },
    {
      title: "Exames e metabolismo",
      text: "Avaliação de marcadores laboratoriais, riscos metabólicos e sinais clínicos relevantes."
    },
    {
      title: "Rotina e contexto individual",
      text: "Sono, alimentação, estresse, medicações em uso e fatores que interferem no controle de peso."
    }
  ];
  const overweightSteps = [
    {
      title: "Consulta inicial e escuta clínica",
      text: "Momento de entender histórico, rotina, exames anteriores, objetivos e dificuldades."
    },
    {
      title: "Investigação médica e exames",
      text: "A avaliação pode incluir análise clínica, composição corporal e exames quando necessário."
    },
    {
      title: "Plano individualizado",
      text: "As condutas são pensadas conforme contexto, segurança, necessidades e metas realistas."
    },
    {
      title: "Acompanhamento e ajustes",
      text: "O acompanhamento permite revisar evolução, dificuldades e respostas ao plano proposto."
    }
  ];
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;
  const faqItems = [
    {
      question: "Sobrepeso precisa de acompanhamento médico?",
      answer:
        "Pode ser indicado quando há ganho de peso progressivo, alterações em exames, gordura abdominal, histórico familiar ou dificuldade de manter hábitos. A avaliação médica ajuda a entender riscos e caminhos possíveis."
    },
    {
      question: "Qual a diferença entre sobrepeso e obesidade?",
      answer:
        "São classificações diferentes de acordo com critérios clínicos, mas ambas podem exigir atenção ao contexto de saúde, composição corporal, exames, rotina e fatores de risco."
    },
    {
      question: "O sobrepeso pode alterar exames?",
      answer:
        "Sim. Em alguns casos, o sobrepeso pode estar associado a alterações de glicemia, colesterol, pressão arterial, gordura no fígado e outros marcadores metabólicos."
    },
    {
      question: "O acompanhamento envolve apenas dieta?",
      answer:
        "Não. O acompanhamento considera histórico, sono, estresse, atividade física, exames, composição corporal, rotina e, quando necessário, outras estratégias individualizadas."
    },
    {
      question: "Preciso fazer exames antes da consulta?",
      answer:
        "Se você já tiver exames recentes, pode levá-los. A necessidade de novos exames será definida após avaliação clínica."
    },
    {
      question: "Medicações podem ser indicadas para sobrepeso?",
      answer:
        "Quando houver indicação clínica, medicamentos podem ser considerados com critérios médicos, avaliação de riscos e acompanhamento. A decisão é individualizada."
    },
    {
      question: "O objetivo é apenas emagrecer?",
      answer:
        "Não. O foco é saúde metabólica, prevenção, qualidade de vida, composição corporal e orientação segura, sem promessas de resultado."
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer:
        `O agendamento pode ser feito pelo WhatsApp ou telefone ${doctor.phone}. O atendimento presencial acontece em Petrópolis, no endereço ${doctor.location}.`
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
              Acompanhamento médico para sobrepeso em Petrópolis
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              O sobrepeso pode envolver rotina, exames, composição corporal, fatores metabólicos e histórico de saúde. A avaliação médica ajuda a entender o contexto antes da definição de qualquer conduta.
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
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Prevenção</span>
                  <span className="mt-1 block">Exames, rotina e riscos</span>
                </div>
                <div className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Cuidado</span>
                  <span className="mt-1 block">Plano individualizado</span>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Cuidado preventivo</p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Por que o sobrepeso merece atenção médica?</h2>
            <p className="mt-5 text-base leading-7 text-graphite sm:leading-8">
              O sobrepeso pode estar relacionado a hábitos, sono, estresse, composição corporal, histórico familiar, alterações metabólicas e uso de medicamentos. Avaliar esses fatores ajuda a orientar decisões mais seguras e individualizadas.
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

      <ServiceEvidenceSection slug={service.slug} />

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
            O acompanhamento médico para sobrepeso organiza escuta, avaliação, exames e ajustes para orientar decisões com prevenção, segurança e metas realistas.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {overweightSteps.map((step, index) => (
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
            <p className="mt-5 max-w-3xl text-base leading-7 text-graphite sm:leading-8">
              O acompanhamento do sobrepeso busca orientar decisões mais seguras, melhorar hábitos, monitorar fatores de risco e construir um plano compatível com a realidade do paciente, sem promessas de resultado.
            </p>
          </div>
          <div className="rounded-[22px] border border-deep/10 bg-white p-5 shadow-[0_14px_38px_rgba(2,37,61,0.08)]">
            <p className="text-sm font-semibold text-petrol">O foco é saúde, não apenas peso na balança.</p>
            <p className="mt-3 text-sm leading-7 text-graphite">
              A avaliação considera prevenção da obesidade, saúde metabólica, composição corporal, exames e rotina possível.
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
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes sobre sobrepeso" />
        <FAQ items={faqItems} />
      </Section>

      <Section className="bg-white pt-0">
        <div className="section-reveal relative overflow-hidden rounded-[30px] bg-deep p-5 text-white shadow-lift sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-8 left-10 h-px w-56 bg-gradient-to-r from-gold/70 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
              <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
                Agende sua avaliação médica em Petrópolis
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
                Fale com a equipe para verificar disponibilidade de consulta e entender o próximo passo do seu acompanhamento.
              </p>
              <div className="mt-7 grid gap-3 text-sm text-white/86 sm:grid-cols-3">
                {["Atendimento com avaliação individualizada", "Clínica em Petrópolis", "Contato rápido pelo WhatsApp"].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                    <span className="block h-px w-10 bg-gold" />
                    <span className="mt-3 block leading-6">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="min-h-14 w-full bg-white px-7 text-base shadow-[0_18px_42px_rgba(0,0,0,0.22)] hover:bg-gold hover:text-deep sm:w-auto">
                  Agendar consulta
                </ButtonLink>
                <ButtonLink href="#localizacao-sobrepeso" variant="ghost" className="min-h-14 w-full border border-white/24 bg-white/10 px-7 text-base text-white hover:bg-white hover:text-deep sm:w-auto">
                  Ver localização
                </ButtonLink>
              </div>
            </div>
            <div id="localizacao-sobrepeso" className="overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <Image
                src="/images/fachada-consultorio.jpg"
                alt="Fachada do local de atendimento"
                width={1400}
                height={875}
                className="aspect-[16/9] w-full rounded-[20px] object-cover"
              />
              <div className="mt-3 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[18px] border border-white/12 bg-white/[0.08] p-4 text-sm leading-6 text-white">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Localização</p>
                  <p>{doctor.location}</p>
                  <p className="mt-3">{doctor.phone}</p>
                  <p className="mt-1">{doctor.instagram}</p>
                </div>
                <iframe
                  title="Mapa da clínica em Petrópolis"
                  src={mapsUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full rounded-[18px] border-0 sm:h-56 lg:h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function HypertrophyLanding({ service }: { service: Service }) {
  const trustItems = ["Atendimento em Petrópolis", doctor.professionalId, "Avaliação individualizada", "Foco em composição corporal e performance"];
  const difficultyItems = [
    "Dificuldade de ganhar massa muscular",
    "Estagnação nos treinos",
    "Baixa recuperação",
    "Alimentação insuficiente ou desorganizada",
    "Sono ruim",
    "Dúvidas sobre suplementação"
  ];
  const indicatedCards = [
    {
      title: "Dificuldade de ganhar massa muscular",
      text: "Para pessoas que treinam, mas sentem dificuldade de evoluir na composição corporal com segurança e constância."
    },
    {
      title: "Estagnação nos resultados",
      text: "Quando treino, alimentação e rotina parecem não gerar a evolução esperada e exigem uma avaliação mais criteriosa."
    },
    {
      title: "Busca por performance com segurança",
      text: "Para quem deseja melhorar força, recuperação e composição corporal com acompanhamento médico individualizado."
    }
  ];
  const evaluationCards = [
    {
      title: "Composição corporal e evolução",
      text: "Avaliação de massa muscular, gordura corporal, histórico de treino e mudanças ao longo do tempo."
    },
    {
      title: "Exames e saúde metabólica",
      text: "Análise de marcadores laboratoriais, fatores hormonais, metabolismo e sinais clínicos relevantes."
    },
    {
      title: "Rotina, treino e recuperação",
      text: "Sono, alimentação, intensidade de treino, estresse, suplementação e fatores que interferem na evolução."
    }
  ];
  const hypertrophySteps = [
    {
      title: "Consulta inicial e escuta clínica",
      text: "Momento de entender histórico, rotina, treinos, objetivos, exames anteriores e dificuldades."
    },
    {
      title: "Investigação médica e exames",
      text: "A avaliação pode incluir análise clínica, composição corporal, exames e fatores que afetam recuperação e desempenho."
    },
    {
      title: "Plano individualizado",
      text: "As condutas são pensadas conforme contexto, segurança, necessidades e metas realistas."
    },
    {
      title: "Acompanhamento e ajustes",
      text: "O acompanhamento permite revisar evolução, dificuldades, resposta clínica e necessidade de ajustes."
    }
  ];
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;
  const faqItems = [
    {
      question: "A hipertrofia pode ser acompanhada por médico?",
      answer:
        "Sim. A avaliação médica pode ajudar a entender fatores clínicos, exames, composição corporal, recuperação, rotina e segurança antes da definição de estratégias."
    },
    {
      question: "O atendimento é apenas para atletas?",
      answer:
        "Não. O acompanhamento pode ser indicado para pessoas que treinam e desejam evoluir composição corporal, força e recuperação com metas realistas e avaliação individualizada."
    },
    {
      question: "Quais exames podem ser avaliados?",
      answer:
        "A definição depende da avaliação clínica, mas podem ser considerados marcadores metabólicos, hormonais, nutricionais e outros exames relacionados ao contexto do paciente."
    },
    {
      question: "O acompanhamento envolve alimentação e treino?",
      answer:
        "O atendimento pode considerar alimentação, rotina de treino, sono, recuperação, estresse e composição corporal, sempre dentro de uma estratégia individualizada."
    },
    {
      question: "O médico pode avaliar saúde hormonal?",
      answer:
        "Sim. Sintomas, exames e histórico podem indicar a necessidade de avaliar fatores hormonais, sempre com critério médico e sem condutas automáticas."
    },
    {
      question: "Suplementação pode ser discutida na consulta?",
      answer:
        "Pode, quando fizer sentido dentro do contexto clínico, da rotina, da alimentação, dos exames e dos objetivos do paciente."
    },
    {
      question: "É possível ganhar massa muscular com segurança?",
      answer:
        "O acompanhamento busca orientar decisões mais seguras, monitorar fatores clínicos e alinhar estratégias à realidade do paciente, sem promessa de resultado."
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer:
        `O agendamento pode ser feito pelo WhatsApp ou telefone ${doctor.phone}. O atendimento presencial acontece em Petrópolis, no endereço ${doctor.location}.`
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
              Acompanhamento médico para hipertrofia em Petrópolis
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              O ganho de massa muscular pode depender de treino, alimentação, sono, recuperação, composição corporal, exames e saúde metabólica. A avaliação médica ajuda a entender o contexto antes da definição de qualquer estratégia.
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
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Avaliação</span>
                  <span className="mt-1 block">Exames, treino e rotina</span>
                </div>
                <div className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Cuidado</span>
                  <span className="mt-1 block">Recuperação e segurança</span>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Composição corporal</p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Por que ganhar massa muscular pode ser mais difícil do que parece?</h2>
            <p className="mt-5 text-base leading-7 text-graphite sm:leading-8">
              A evolução na hipertrofia pode envolver treino, alimentação, sono, recuperação, composição corporal, saúde hormonal, exames e rotina. Avaliar esses fatores ajuda a orientar estratégias mais seguras e compatíveis com o contexto do paciente.
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

      <ServiceEvidenceSection slug={service.slug} />

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
            O acompanhamento médico para hipertrofia organiza avaliação clínica, exames, rotina, treino e recuperação para orientar decisões com segurança.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {hypertrophySteps.map((step, index) => (
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
            <p className="mt-5 max-w-3xl text-base leading-7 text-graphite sm:leading-8">
              O acompanhamento para hipertrofia busca orientar decisões mais seguras, melhorar a leitura da composição corporal, acompanhar fatores clínicos e construir estratégias compatíveis com a rotina do paciente, sem promessas de resultado.
            </p>
          </div>
          <div className="rounded-[22px] border border-deep/10 bg-white p-5 shadow-[0_14px_38px_rgba(2,37,61,0.08)]">
            <p className="text-sm font-semibold text-petrol">O foco é evolução com critério.</p>
            <p className="mt-3 text-sm leading-7 text-graphite">
              A avaliação considera composição corporal, exames, recuperação, alimentação, treino e metas realistas.
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
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes sobre hipertrofia" />
        <FAQ items={faqItems} />
      </Section>

      <Section className="bg-white pt-0">
        <div className="section-reveal relative overflow-hidden rounded-[30px] bg-deep p-5 text-white shadow-lift sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-8 left-10 h-px w-56 bg-gradient-to-r from-gold/70 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
              <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
                Agende sua avaliação médica em Petrópolis
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
                Fale com a equipe para verificar disponibilidade de consulta e entender o próximo passo do seu acompanhamento.
              </p>
              <div className="mt-7 grid gap-3 text-sm text-white/86 sm:grid-cols-3">
                {["Atendimento com avaliação individualizada", "Clínica em Petrópolis", "Contato rápido pelo WhatsApp"].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                    <span className="block h-px w-10 bg-gold" />
                    <span className="mt-3 block leading-6">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="min-h-14 w-full bg-white px-7 text-base shadow-[0_18px_42px_rgba(0,0,0,0.22)] hover:bg-gold hover:text-deep sm:w-auto">
                  Agendar consulta
                </ButtonLink>
                <ButtonLink href="#localizacao-hipertrofia" variant="ghost" className="min-h-14 w-full border border-white/24 bg-white/10 px-7 text-base text-white hover:bg-white hover:text-deep sm:w-auto">
                  Ver localização
                </ButtonLink>
              </div>
            </div>
            <div id="localizacao-hipertrofia" className="overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <Image
                src="/images/fachada-consultorio.jpg"
                alt="Fachada do local de atendimento"
                width={1400}
                height={875}
                className="aspect-[16/9] w-full rounded-[20px] object-cover"
              />
              <div className="mt-3 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[18px] border border-white/12 bg-white/[0.08] p-4 text-sm leading-6 text-white">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Localização</p>
                  <p>{doctor.location}</p>
                  <p className="mt-3">{doctor.phone}</p>
                  <p className="mt-1">{doctor.instagram}</p>
                </div>
                <iframe
                  title="Mapa da clínica em Petrópolis"
                  src={mapsUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full rounded-[18px] border-0 sm:h-56 lg:h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function MaleHormoneLanding({ service }: { service: Service }) {
  const trustItems = ["Atendimento em Petrópolis", doctor.professionalId, "Avaliação individualizada", "Segurança antes de qualquer conduta"];
  const difficultyItems = [
    "Queda de disposição",
    "Alterações de libido",
    "Perda de força ou pior recuperação",
    "Mudanças na composição corporal",
    "Sono ruim",
    "Alterações em exames"
  ];
  const indicatedCards = [
    {
      title: "Sintomas que merecem investigação",
      text: "Para homens com queda de disposição, alterações de libido, piora da recuperação ou mudanças na composição corporal."
    },
    {
      title: "Exames hormonais alterados",
      text: "Quando exames anteriores apontam alterações e precisam ser interpretados dentro do contexto clínico completo."
    },
    {
      title: "Busca por acompanhamento seguro",
      text: "Para quem deseja entender a saúde hormonal com avaliação médica, critérios de segurança e acompanhamento individualizado."
    }
  ];
  const evaluationCards = [
    {
      title: "Sintomas e histórico clínico",
      text: "Queixas, rotina, sono, libido, energia, composição corporal, uso de medicações e histórico de saúde."
    },
    {
      title: "Exames laboratoriais",
      text: "Marcadores hormonais, metabólicos e outros exames necessários para uma avaliação mais criteriosa."
    },
    {
      title: "Riscos, benefícios e contexto",
      text: "Análise individualizada de segurança, contraindicações, objetivos e necessidade real de qualquer conduta hormonal."
    }
  ];
  const hormoneSteps = [
    {
      title: "Consulta inicial e escuta clínica",
      text: "Momento de entender sintomas, histórico, rotina, exames anteriores, objetivos e preocupações do paciente."
    },
    {
      title: "Investigação médica e exames",
      text: "A avaliação pode incluir exames hormonais, metabólicos e análise de fatores que interferem na saúde masculina."
    },
    {
      title: "Conduta individualizada",
      text: "Qualquer decisão é construída com base em indicação clínica, segurança, riscos, benefícios e necessidades individuais."
    },
    {
      title: "Acompanhamento e ajustes",
      text: "O acompanhamento permite monitorar resposta clínica, exames, segurança e necessidade de ajustes ao longo do tempo."
    }
  ];
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;
  const faqItems = [
    {
      question: "Como saber se preciso investigar meus hormônios?",
      answer:
        "Sintomas como cansaço persistente, alterações de libido, perda de força, piora da recuperação ou mudanças corporais podem justificar avaliação médica, mas precisam ser analisados junto a exames, rotina e histórico."
    },
    {
      question: "Testosterona baixa sempre precisa de reposição?",
      answer:
        "Não. A decisão depende de sintomas, exames, riscos, histórico de saúde e critérios médicos. Nem toda alteração laboratorial indica reposição hormonal."
    },
    {
      question: "Quais sintomas podem indicar alteração hormonal?",
      answer:
        "Queda de disposição, alteração de libido, piora do sono, perda de força, mudanças de composição corporal e dificuldade de recuperação podem ser investigadas, mas não têm causa única."
    },
    {
      question: "Quais exames podem ser avaliados?",
      answer:
        "A avaliação pode incluir marcadores hormonais, metabólicos e exames de segurança, definidos conforme sintomas, histórico e avaliação clínica."
    },
    {
      question: "Reposição hormonal masculina é indicada para qualquer homem?",
      answer:
        "Não. Terapia hormonal masculina só deve ser considerada quando houver indicação clínica, análise de riscos e acompanhamento médico."
    },
    {
      question: "Existe risco na reposição hormonal sem acompanhamento?",
      answer:
        "Sim. O uso sem avaliação e monitoramento pode trazer riscos. Por isso, qualquer conduta hormonal deve ser acompanhada com exames e critérios de segurança."
    },
    {
      question: "O acompanhamento pode avaliar disposição, libido e composição corporal?",
      answer:
        "Sim. Esses pontos podem ser avaliados dentro de uma investigação mais ampla, considerando saúde hormonal masculina, rotina, exames e saúde metabólica."
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer:
        `O agendamento pode ser feito pelo WhatsApp ou telefone ${doctor.phone}. O atendimento presencial acontece em Petrópolis, no endereço ${doctor.location}.`
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
              Reposição hormonal masculina em Petrópolis
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Sintomas como queda de disposição, alterações de libido, perda de força, piora da recuperação e mudanças na composição corporal podem ter diferentes causas. A avaliação médica ajuda a investigar o contexto antes de qualquer decisão hormonal.
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
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Investigação</span>
                  <span className="mt-1 block">Sintomas, exames e rotina</span>
                </div>
                <div className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Segurança</span>
                  <span className="mt-1 block">Critério antes da conduta</span>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Investigação hormonal</p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Quando investigar a saúde hormonal masculina?</h2>
            <p className="mt-5 text-base leading-7 text-graphite sm:leading-8">
              Alterações hormonais podem se manifestar de formas diferentes e nem sempre explicam sozinhas sintomas como cansaço, baixa libido, dificuldade de recuperação, perda de força ou mudanças no peso. Por isso, a avaliação deve considerar exames, rotina, sono, histórico de saúde e contexto metabólico.
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

      <ServiceEvidenceSection slug={service.slug} />

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
            A avaliação da saúde hormonal masculina organiza sintomas, exames, riscos e contexto clínico antes de qualquer decisão terapêutica.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {hormoneSteps.map((step, index) => (
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
            <p className="mt-5 max-w-3xl text-base leading-7 text-graphite sm:leading-8">
              O acompanhamento hormonal masculino busca orientar decisões seguras, investigar sintomas com critério e avaliar se existe indicação real para alguma conduta. A reposição hormonal, quando indicada, deve ser conduzida com acompanhamento médico e monitoramento contínuo.
            </p>
          </div>
          <div className="rounded-[22px] border border-deep/10 bg-white p-5 shadow-[0_14px_38px_rgba(2,37,61,0.08)]">
            <p className="text-sm font-semibold text-petrol">O foco é indicação clínica, não conduta automática.</p>
            <p className="mt-3 text-sm leading-7 text-graphite">
              A decisão considera sintomas, exames, riscos, benefícios, histórico de saúde e acompanhamento contínuo.
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
            <div className="mb-4 flex gap-1 text-gold" aria-label={`${googleReviews.items[0].rating} estrelas`}>
              {Array.from({ length: googleReviews.items[0].rating }).map((_, starIndex) => (
                <StarIcon key={starIndex} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-sm leading-7 text-graphite">“{googleReviews.items[0].text}”</p>
            <p className="mt-4 text-sm font-semibold text-deep">{googleReviews.items[0].name}</p>
          </article>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes sobre saúde hormonal masculina" />
        <FAQ items={faqItems} />
      </Section>

      <Section className="bg-white pt-0">
        <div className="section-reveal relative overflow-hidden rounded-[30px] bg-deep p-5 text-white shadow-lift sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-8 left-10 h-px w-56 bg-gradient-to-r from-gold/70 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
              <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
                Agende sua avaliação médica em Petrópolis
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
                Fale com a equipe para verificar disponibilidade de consulta e entender o próximo passo do seu acompanhamento.
              </p>
              <div className="mt-7 grid gap-3 text-sm text-white/86 sm:grid-cols-3">
                {["Atendimento com avaliação individualizada", "Clínica em Petrópolis", "Contato rápido pelo WhatsApp"].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                    <span className="block h-px w-10 bg-gold" />
                    <span className="mt-3 block leading-6">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="min-h-14 w-full bg-white px-7 text-base shadow-[0_18px_42px_rgba(0,0,0,0.22)] hover:bg-gold hover:text-deep sm:w-auto">
                  Agendar consulta
                </ButtonLink>
                <ButtonLink href="#localizacao-hormonal-masculina" variant="ghost" className="min-h-14 w-full border border-white/24 bg-white/10 px-7 text-base text-white hover:bg-white hover:text-deep sm:w-auto">
                  Ver localização
                </ButtonLink>
              </div>
            </div>
            <div id="localizacao-hormonal-masculina" className="overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <Image
                src="/images/fachada-consultorio.jpg"
                alt="Fachada do local de atendimento"
                width={1400}
                height={875}
                className="aspect-[16/9] w-full rounded-[20px] object-cover"
              />
              <div className="mt-3 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[18px] border border-white/12 bg-white/[0.08] p-4 text-sm leading-6 text-white">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Localização</p>
                  <p>{doctor.location}</p>
                  <p className="mt-3">{doctor.phone}</p>
                  <p className="mt-1">{doctor.instagram}</p>
                </div>
                <iframe
                  title="Mapa da clínica em Petrópolis"
                  src={mapsUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full rounded-[18px] border-0 sm:h-56 lg:h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function FemaleHormoneLanding({ service }: { service: Service }) {
  const trustItems = ["Atendimento em Petrópolis", doctor.professionalId, "Avaliação individualizada", "Segurança antes de qualquer conduta"];
  const difficultyItems = [
    "Alterações de sono",
    "Queda de disposição",
    "Alterações de humor",
    "Mudanças na composição corporal",
    "Redução de libido",
    "Sintomas no climatério ou menopausa"
  ];
  const indicatedCards = [
    {
      title: "Sintomas que merecem investigação",
      text: "Para mulheres com alterações de sono, disposição, humor, libido ou composição corporal que desejam entender melhor o contexto clínico."
    },
    {
      title: "Climatério e menopausa",
      text: "Para quem está passando por mudanças hormonais nessa fase e busca avaliação médica individualizada."
    },
    {
      title: "Busca por segurança médica",
      text: "Para mulheres que desejam avaliar saúde hormonal, exames, riscos e possibilidades de cuidado com acompanhamento médico."
    }
  ];
  const evaluationCards = [
    {
      title: "Sintomas e histórico clínico",
      text: "Queixas, rotina, sono, humor, libido, composição corporal, histórico de saúde e uso de medicações."
    },
    {
      title: "Exames laboratoriais",
      text: "Marcadores hormonais, metabólicos e outros exames necessários para avaliação mais criteriosa."
    },
    {
      title: "Riscos, benefícios e contexto",
      text: "Análise individualizada de segurança, contraindicações, objetivos e necessidade real de qualquer conduta hormonal."
    }
  ];
  const hormoneSteps = [
    {
      title: "Consulta inicial e escuta clínica",
      text: "Momento de entender sintomas, histórico, rotina, exames anteriores, objetivos e preocupações da paciente."
    },
    {
      title: "Investigação médica e exames",
      text: "A avaliação pode incluir exames hormonais, metabólicos e análise de fatores que interferem na saúde feminina."
    },
    {
      title: "Conduta individualizada",
      text: "Qualquer decisão é construída com base em indicação clínica, segurança, riscos, benefícios e necessidades individuais."
    },
    {
      title: "Acompanhamento e ajustes",
      text: "O acompanhamento permite monitorar resposta clínica, exames, segurança e necessidade de ajustes ao longo do tempo."
    }
  ];
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;
  const faqItems = [
    {
      question: "Como saber se preciso investigar minha saúde hormonal?",
      answer:
        "Alterações de sono, disposição, humor, libido, composição corporal ou sintomas no climatério e menopausa podem justificar avaliação médica, sempre considerando histórico, exames e contexto individual."
    },
    {
      question: "Toda mulher na menopausa precisa de reposição hormonal?",
      answer:
        "Não. A decisão depende de sintomas, exames, histórico, riscos, contraindicações e avaliação individualizada. Terapia hormonal não é indicada automaticamente para todas."
    },
    {
      question: "Quais sintomas podem estar relacionados a alterações hormonais?",
      answer:
        "Sono ruim, ondas de calor, queda de disposição, alterações de humor, libido, composição corporal e outros sintomas podem ser investigados, mas não têm causa única."
    },
    {
      question: "Quais exames podem ser avaliados?",
      answer:
        "A avaliação pode considerar marcadores hormonais, metabólicos e exames de segurança, definidos conforme sintomas, fase de vida, histórico e avaliação clínica."
    },
    {
      question: "Reposição hormonal feminina é indicada para qualquer mulher?",
      answer:
        "Não. Terapia hormonal feminina só deve ser considerada quando houver indicação clínica, análise de riscos e acompanhamento médico."
    },
    {
      question: "Existe risco em usar hormônios sem acompanhamento médico?",
      answer:
        "Sim. O uso sem avaliação e monitoramento pode trazer riscos. Qualquer conduta hormonal deve ser conduzida com critérios de segurança e acompanhamento."
    },
    {
      question: "O acompanhamento pode avaliar sono, disposição, libido e composição corporal?",
      answer:
        "Sim. Esses pontos podem fazer parte de uma investigação mais ampla sobre saúde hormonal feminina, climatério, menopausa, rotina, exames e saúde metabólica."
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer:
        `O agendamento pode ser feito pelo WhatsApp ou telefone ${doctor.phone}. O atendimento presencial acontece em Petrópolis, no endereço ${doctor.location}.`
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
              Reposição hormonal feminina em Petrópolis
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Sintomas como alterações de sono, disposição, humor, libido e composição corporal podem ter diferentes causas. A avaliação médica ajuda a entender o contexto antes de qualquer decisão hormonal.
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
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Investigação</span>
                  <span className="mt-1 block">Sintomas, exames e fase de vida</span>
                </div>
                <div className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Segurança</span>
                  <span className="mt-1 block">Conduta quando indicada</span>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Climatério e menopausa</p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Quando investigar a saúde hormonal feminina?</h2>
            <p className="mt-5 text-base leading-7 text-graphite sm:leading-8">
              Alterações hormonais podem aparecer em diferentes fases da vida adulta, especialmente no climatério e na menopausa. Sintomas como piora do sono, queda de disposição, alterações de humor, mudanças na composição corporal e redução da libido precisam ser avaliados dentro do contexto clínico completo.
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

      <ServiceEvidenceSection slug={service.slug} />

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
            A avaliação da saúde hormonal feminina organiza sintomas, exames, histórico e riscos antes de qualquer decisão terapêutica.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {hormoneSteps.map((step, index) => (
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
            <p className="mt-5 max-w-3xl text-base leading-7 text-graphite sm:leading-8">
              O acompanhamento hormonal feminino busca orientar decisões seguras, investigar sintomas com critério e avaliar se existe indicação real para alguma conduta. A terapia hormonal, quando indicada, deve ser conduzida com avaliação médica e monitoramento contínuo.
            </p>
          </div>
          <div className="rounded-[22px] border border-deep/10 bg-white p-5 shadow-[0_14px_38px_rgba(2,37,61,0.08)]">
            <p className="text-sm font-semibold text-petrol">O foco é indicação clínica e segurança.</p>
            <p className="mt-3 text-sm leading-7 text-graphite">
              A decisão considera sintomas, climatério, menopausa, exames, riscos, benefícios e histórico individual.
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
            <div className="mb-4 flex gap-1 text-gold" aria-label={`${googleReviews.items[0].rating} estrelas`}>
              {Array.from({ length: googleReviews.items[0].rating }).map((_, starIndex) => (
                <StarIcon key={starIndex} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-sm leading-7 text-graphite">“{googleReviews.items[0].text}”</p>
            <p className="mt-4 text-sm font-semibold text-deep">{googleReviews.items[0].name}</p>
          </article>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes sobre saúde hormonal feminina" />
        <FAQ items={faqItems} />
      </Section>

      <Section className="bg-white pt-0">
        <div className="section-reveal relative overflow-hidden rounded-[30px] bg-deep p-5 text-white shadow-lift sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-8 left-10 h-px w-56 bg-gradient-to-r from-gold/70 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
              <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
                Agende sua avaliação médica em Petrópolis
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
                Fale com a equipe para verificar disponibilidade de consulta e entender o próximo passo do seu acompanhamento.
              </p>
              <div className="mt-7 grid gap-3 text-sm text-white/86 sm:grid-cols-3">
                {["Atendimento com avaliação individualizada", "Clínica em Petrópolis", "Contato rápido pelo WhatsApp"].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                    <span className="block h-px w-10 bg-gold" />
                    <span className="mt-3 block leading-6">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="min-h-14 w-full bg-white px-7 text-base shadow-[0_18px_42px_rgba(0,0,0,0.22)] hover:bg-gold hover:text-deep sm:w-auto">
                  Agendar consulta
                </ButtonLink>
                <ButtonLink href="#localizacao-hormonal-feminina" variant="ghost" className="min-h-14 w-full border border-white/24 bg-white/10 px-7 text-base text-white hover:bg-white hover:text-deep sm:w-auto">
                  Ver localização
                </ButtonLink>
              </div>
            </div>
            <div id="localizacao-hormonal-feminina" className="overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <Image
                src="/images/fachada-consultorio.jpg"
                alt="Fachada do local de atendimento"
                width={1400}
                height={875}
                className="aspect-[16/9] w-full rounded-[20px] object-cover"
              />
              <div className="mt-3 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[18px] border border-white/12 bg-white/[0.08] p-4 text-sm leading-6 text-white">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Localização</p>
                  <p>{doctor.location}</p>
                  <p className="mt-3">{doctor.phone}</p>
                  <p className="mt-1">{doctor.instagram}</p>
                </div>
                <iframe
                  title="Mapa da clínica em Petrópolis"
                  src={mapsUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full rounded-[18px] border-0 sm:h-56 lg:h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function CheckupLanding({ service }: { service: Service }) {
  const trustItems = ["Atendimento em Petrópolis", doctor.professionalId, "Avaliação preventiva", "Foco em saúde metabólica"];
  const difficultyItems = [
    "Exames alterados sem sintomas",
    "Histórico familiar de doenças crônicas",
    "Ganho de peso ou cansaço frequente",
    "Pressão, glicemia ou colesterol alterados",
    "Desejo de prevenir problemas futuros",
    "Entender melhor a saúde metabólica"
  ];
  const indicatedCards = [
    {
      title: "Prevenção e acompanhamento",
      text: "Para adultos e idosos que desejam avaliar a saúde com mais critério e acompanhar fatores de risco ao longo do tempo."
    },
    {
      title: "Exames alterados ou dúvidas clínicas",
      text: "Para quem recebeu resultados fora do esperado e precisa entender o significado dentro do contexto individual."
    },
    {
      title: "Histórico familiar ou sintomas silenciosos",
      text: "Para pessoas com histórico de doenças crônicas, cansaço, ganho de peso ou sinais que merecem investigação."
    }
  ];
  const evaluationCards = [
    {
      title: "Exames laboratoriais",
      text: "Marcadores metabólicos, hormonais, inflamatórios e outros dados relevantes conforme avaliação médica."
    },
    {
      title: "Histórico e fatores de risco",
      text: "Histórico familiar, hábitos, rotina, sono, alimentação, atividade física e condições já conhecidas."
    },
    {
      title: "Saúde metabólica e composição corporal",
      text: "Peso, composição corporal, pressão arterial, glicemia, colesterol e sinais relacionados ao metabolismo."
    }
  ];
  const checkupSteps = [
    {
      title: "Consulta inicial e escuta clínica",
      text: "Momento de entender histórico, rotina, queixas, exames anteriores, objetivos e fatores de risco."
    },
    {
      title: "Avaliação médica e exames",
      text: "A análise pode envolver exames laboratoriais, sinais clínicos, composição corporal e histórico individual."
    },
    {
      title: "Orientação individualizada",
      text: "As recomendações são construídas conforme riscos, necessidades, contexto e prioridades de saúde."
    },
    {
      title: "Acompanhamento e próximos passos",
      text: "O acompanhamento ajuda a monitorar exames, revisar condutas e organizar medidas preventivas com segurança."
    }
  ];
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;
  const faqItems = [
    {
      question: "Quando devo fazer um check-up médico?",
      answer:
        "O check-up pode ser considerado quando há histórico familiar, alterações em exames, sintomas inespecíficos, fatores de risco ou desejo de acompanhar a saúde de forma preventiva."
    },
    {
      question: "O check-up é indicado mesmo sem sintomas?",
      answer:
        "Pode ser. Algumas alterações podem não gerar sintomas evidentes. A indicação depende de idade, histórico, rotina, fatores de risco e avaliação individualizada."
    },
    {
      question: "Preciso levar exames anteriores?",
      answer:
        "Se você tiver exames recentes, é útil levá-los. Eles ajudam a entender evolução, contexto e necessidade de novas avaliações."
    },
    {
      question: "Quais exames podem ser avaliados?",
      answer:
        "A avaliação pode incluir marcadores metabólicos, hormonais, inflamatórios e outros exames conforme sintomas, histórico e critérios médicos."
    },
    {
      question: "O check-up pode avaliar saúde metabólica?",
      answer:
        "Sim. Podem ser avaliados pontos como glicemia, colesterol, pressão arterial, composição corporal, peso, rotina e fatores relacionados ao metabolismo."
    },
    {
      question: "O acompanhamento ajuda na prevenção de doenças crônicas?",
      answer:
        "O acompanhamento pode identificar fatores de risco e orientar medidas preventivas, mas não garante prevenção absoluta. A proposta é tomar decisões mais seguras com base em avaliação médica."
    },
    {
      question: "Adultos e idosos podem fazer esse tipo de avaliação?",
      answer:
        "Sim. Adultos e idosos podem se beneficiar de uma avaliação individualizada, considerando histórico, sintomas, exames, riscos e prioridades de saúde."
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer:
        `O agendamento pode ser feito pelo WhatsApp ou telefone ${doctor.phone}. O atendimento presencial acontece em Petrópolis, no endereço ${doctor.location}.`
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
              Check-up médico em Petrópolis
            </p>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Uma avaliação preventiva pode ajudar a entender exames, histórico, rotina, composição corporal e fatores de risco antes que pequenos sinais se tornem problemas maiores.
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
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Prevenção</span>
                  <span className="mt-1 block">Exames, histórico e riscos</span>
                </div>
                <div className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gold">Cuidado</span>
                  <span className="mt-1 block">Orientação individualizada</span>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Avaliação preventiva</p>
            <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Por que fazer um check-up médico?</h2>
            <p className="mt-5 text-base leading-7 text-graphite sm:leading-8">
              Nem sempre alterações importantes aparecem com sintomas evidentes. O check-up permite avaliar exames, histórico, rotina, composição corporal e fatores de risco para orientar decisões mais seguras sobre saúde e prevenção.
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

      <ServiceEvidenceSection slug={service.slug} />

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
            O check-up médico organiza histórico, exames, fatores de risco e próximos passos para uma leitura mais clara da saúde.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {checkupSteps.map((step, index) => (
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
            <h2 className="text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">O que esperar do check-up</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-graphite sm:leading-8">
              O check-up da saúde busca organizar informações clínicas, identificar fatores que merecem atenção e orientar decisões preventivas. A avaliação não substitui acompanhamentos específicos quando necessários, mas ajuda a construir um panorama mais claro da saúde.
            </p>
          </div>
          <div className="rounded-[22px] border border-deep/10 bg-white p-5 shadow-[0_14px_38px_rgba(2,37,61,0.08)]">
            <p className="text-sm font-semibold text-petrol">O foco é prevenção com critério.</p>
            <p className="mt-3 text-sm leading-7 text-graphite">
              A avaliação considera exames, histórico clínico, saúde metabólica, composição corporal e fatores de risco.
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
            <div className="mb-4 flex gap-1 text-gold" aria-label={`${googleReviews.items[0].rating} estrelas`}>
              {Array.from({ length: googleReviews.items[0].rating }).map((_, starIndex) => (
                <StarIcon key={starIndex} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-sm leading-7 text-graphite">“{googleReviews.items[0].text}”</p>
            <p className="mt-4 text-sm font-semibold text-deep">{googleReviews.items[0].name}</p>
          </article>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="FAQ" title="Dúvidas frequentes sobre check-up da saúde" />
        <FAQ items={faqItems} />
      </Section>

      <Section className="bg-white pt-0">
        <div className="section-reveal relative overflow-hidden rounded-[30px] bg-deep p-5 text-white shadow-lift sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-8 left-10 h-px w-56 bg-gradient-to-r from-gold/70 to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
              <h2 className="max-w-2xl text-[1.9rem] font-semibold leading-tight sm:text-4xl lg:text-[2.65rem]">
                Agende sua avaliação médica em Petrópolis
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
                Fale com a equipe para verificar disponibilidade de consulta e entender o próximo passo do atendimento.
              </p>
              <div className="mt-7 grid gap-3 text-sm text-white/86 sm:grid-cols-3">
                {["Atendimento com avaliação individualizada", "Clínica em Petrópolis", "Contato rápido pelo WhatsApp"].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/12 bg-white/[0.08] p-4">
                    <span className="block h-px w-10 bg-gold" />
                    <span className="mt-3 block leading-6">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="min-h-14 w-full bg-white px-7 text-base shadow-[0_18px_42px_rgba(0,0,0,0.22)] hover:bg-gold hover:text-deep sm:w-auto">
                  Agendar consulta
                </ButtonLink>
                <ButtonLink href="#localizacao-check-up" variant="ghost" className="min-h-14 w-full border border-white/24 bg-white/10 px-7 text-base text-white hover:bg-white hover:text-deep sm:w-auto">
                  Ver localização
                </ButtonLink>
              </div>
            </div>
            <div id="localizacao-check-up" className="overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.08] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <Image
                src="/images/fachada-consultorio.jpg"
                alt="Fachada do local de atendimento"
                width={1400}
                height={875}
                className="aspect-[16/9] w-full rounded-[20px] object-cover"
              />
              <div className="mt-3 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[18px] border border-white/12 bg-white/[0.08] p-4 text-sm leading-6 text-white">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Localização</p>
                  <p>{doctor.location}</p>
                  <p className="mt-3">{doctor.phone}</p>
                  <p className="mt-1">{doctor.instagram}</p>
                </div>
                <iframe
                  title="Mapa da clínica em Petrópolis"
                  src={mapsUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-48 w-full rounded-[18px] border-0 sm:h-56 lg:h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
