import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Section, SectionHeading } from "@/components/Section";
import { VideoBlock } from "@/components/VideoBlock";
import { doctor, processSteps, services } from "@/data/site";

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
