import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { doctor, homeMethodPillars, homeNeedCards, homeServiceHighlights } from "@/data/site";

export function HomeNeedEditorial() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[24px] border border-petrol/10 bg-white p-8 shadow-soft lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Para quem é</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Quando sintomas, peso e rotina começam a pedir uma investigação mais cuidadosa
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-graphite">
          A primeira decisão não precisa ser uma conduta pronta. O ponto de partida é entender o que está acontecendo no corpo, na rotina e nos exames.
        </p>
      </div>
      <div className="grid gap-4">
        {homeNeedCards.map((card, index) => (
          <div
            key={card.title}
            className="group rounded-subtle border border-petrol/10 bg-white p-6 shadow-[0_10px_32px_rgba(22,74,81,0.05)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft"
          >
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-sm font-semibold text-petrol transition group-hover:bg-petrol group-hover:text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-graphite">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeMethodSection() {
  return (
    <div className="rounded-[28px] bg-ink p-7 text-white shadow-lift sm:p-10 lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Método clínico</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Precisão clínica antes de qualquer conduta</h2>
          <p className="mt-5 text-base leading-8 text-white/72">
            O acompanhamento ganha valor quando cada decisão nasce de uma leitura responsável: histórico, exames, rotina, sintomas, riscos e objetivos possíveis.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {homeMethodPillars.map((pillar) => (
            <div key={pillar.title} className="rounded-subtle border border-white/10 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomeServiceEditorial() {
  return (
    <div>
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Serviços</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">Acompanhamentos com páginas próprias e leitura clínica clara</h2>
        </div>
        <p className="text-base leading-8 text-graphite">
          Cada frente de atendimento aprofunda uma necessidade diferente, sem promessas e sem fórmulas genéricas. A proposta é orientar o paciente com clareza antes do contato.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {homeServiceHighlights.map((service, index) => (
          <Link
            key={service.slug}
            href={`/servicos/${service.slug}`}
            className="focus-ring group relative overflow-hidden rounded-subtle border border-petrol/10 bg-white p-6 shadow-[0_10px_32px_rgba(22,74,81,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft"
          >
            <span className="absolute right-5 top-5 text-5xl font-semibold text-petrol/[0.06]">{String(index + 1).padStart(2, "0")}</span>
            <span className="mb-6 block h-px w-12 bg-gold transition duration-300 group-hover:w-20" />
            <h3 className="relative text-xl font-semibold text-ink">{service.title}</h3>
            <p className="relative mt-4 text-sm leading-7 text-graphite">{service.text}</p>
            <span className="relative mt-6 inline-flex text-sm font-semibold text-petrol">Ver página do serviço</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HomeBioAuthority() {
  return (
    <div className="grid items-center gap-10 rounded-[28px] border border-petrol/10 bg-white p-6 shadow-soft md:grid-cols-[0.78fr_1.22fr] lg:p-10">
      <div className="relative overflow-hidden rounded-[22px] bg-mist">
        <Image
          src="/images/dr-pedro-machado.jpg"
          alt="Foto do Dr. Pedro Machado"
          width={636}
          height={800}
          className="aspect-[4/5] w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 to-transparent p-5">
          <p className="text-sm font-medium text-white">{doctor.professionalId}</p>
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Sobre o médico</p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Autoridade e proximidade para uma avaliação mais consciente
        </h2>
        <p className="mt-5 text-base leading-8 text-graphite">
          {doctor.bio}
        </p>
        <p className="mt-5 text-base leading-8 text-graphite">
          Esta seção deve receber a versão final da trajetória, formação validada, áreas registradas e forma de atendimento aprovada pelo cliente.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/sobre">Conhecer trajetória</ButtonLink>
          <ButtonLink href="/contato" variant="secondary">
            Agendar consulta
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
