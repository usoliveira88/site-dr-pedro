import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { InstagramIcon, MapPinIcon, WhatsAppIcon } from "@/components/Icons";
import { doctor, homeMethodPillars, homeNeedCards, homeServiceHighlights } from "@/data/site";

export function HomeClinicalBridge() {
  const items = ["Histórico e rotina", "Exames e composição corporal", "Conduta e acompanhamento"];

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-deep p-7 text-white shadow-lift sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-gold/20" />
      <div className="pointer-events-none absolute bottom-8 left-10 h-px w-48 bg-gradient-to-r from-gold/70 to-transparent" />
      <div className="grid gap-9 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Critério clínico</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Um acompanhamento que começa antes da conduta</h2>
          <p className="mt-5 text-base leading-8 text-white/76">
            O cuidado parte de avaliação, contexto e segurança para que cada decisão faça sentido dentro da realidade do paciente.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item, index) => (
            <div key={item} className="rounded-subtle border border-white/12 bg-white/[0.07] p-5">
              <span className="text-sm font-semibold text-gold">0{index + 1}</span>
              <p className="mt-4 text-base font-semibold leading-7 text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomeNeedEditorial() {
  return (
    <div className="relative grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="pointer-events-none absolute -top-8 right-10 hidden h-px w-40 bg-gradient-to-r from-transparent via-gold/45 to-transparent lg:block" />
      <div className="rounded-[24px] border border-petrol/10 bg-linen p-8 shadow-soft lg:p-10">
        <p className="inline-flex rounded-full bg-sage/25 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-petrol">Para quem é</p>
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
            className="hover-ink-card group rounded-subtle border border-deep/10 bg-white/74 p-6 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/30 text-sm font-semibold text-petrol transition group-hover:bg-petrol group-hover:text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="hover-ink-muted mt-2 text-sm leading-7 text-graphite">{card.text}</p>
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
    <div className="rounded-[28px] bg-petrol p-7 text-white shadow-lift sm:p-10 lg:p-12">
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
            <div key={pillar.title} className="rounded-subtle border border-sage/20 bg-white/[0.07] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-white/[0.1]">
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
    <div className="relative">
      <div className="pointer-events-none absolute -left-10 top-20 hidden h-32 w-32 rounded-full border border-deep/10 lg:block" />
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Serviços</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">Linhas de cuidado para investigar, orientar e acompanhar com critério</h2>
        </div>
        <p className="text-[1.03rem] leading-8 text-graphite">
          Cada serviço aprofunda uma necessidade clínica específica, conectando sintomas, exames, rotina e objetivos. A proposta é conduzir decisões individualizadas, sem promessas, atalhos ou soluções padronizadas.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {homeServiceHighlights.map((service, index) => (
          <Link
            key={service.slug}
            href={`/servicos/${service.slug}`}
            className="hover-ink-card focus-ring group relative overflow-hidden rounded-[14px] border border-deep/10 bg-white p-7 shadow-[0_16px_42px_rgba(2,37,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="hover-ink-decor absolute right-5 top-4 text-6xl font-semibold text-deep/[0.06] transition">{String(index + 1).padStart(2, "0")}</span>
            <span className="mb-6 block h-px w-14 bg-gold transition duration-300 group-hover:w-24" />
            <h3 className="relative text-xl font-semibold text-ink transition group-hover:text-white">{service.title}</h3>
            <p className="hover-ink-muted relative mt-4 text-sm leading-7 text-graphite">{service.text}</p>
            <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-petrol">
              Saiba Mais
              <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HomeLocationFeature() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
      <div className="overflow-hidden rounded-[28px] border border-deep/10 bg-white shadow-soft">
        <Image
          src="/images/fachada-consultorio.jpg"
          alt="Fachada do local de atendimento"
          width={1400}
          height={875}
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      <div className="rounded-[28px] border border-deep/10 bg-white p-7 shadow-soft sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Localização</p>
        <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">Atendimento em Petrópolis</h2>
        <p className="mt-4 text-[1.03rem] leading-8 text-graphite">
          Ambiente preparado para consulta médica, avaliação clínica e acompanhamento individualizado.
        </p>
        <div className="mt-7 grid gap-4 text-sm leading-7 text-graphite">
          <div className="flex gap-3 rounded-subtle border border-deep/10 bg-pearl p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-deep">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <p className="pt-1">{doctor.location}</p>
          </div>
          <a href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex gap-3 rounded-subtle border border-deep/10 bg-pearl p-4 font-semibold text-petrol transition hover:-translate-y-0.5 hover:border-gold/45 hover:bg-white hover:shadow-soft">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-deep text-white">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span className="pt-1">{doctor.whatsapp}</span>
          </a>
          <div className="flex gap-3 rounded-subtle border border-deep/10 bg-pearl p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-deep">
              <InstagramIcon className="h-5 w-5" />
            </span>
            <p className="pt-1">Instagram: {doctor.instagram}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeFinalCTA() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-deep p-8 text-white shadow-lift sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-gold/20" />
      <div className="pointer-events-none absolute bottom-8 left-10 h-px w-40 bg-gold/60" />
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.34fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Próximo passo</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Dê o próximo passo com orientação médica individualizada</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
            Fale com a equipe para verificar disponibilidade de consulta e entender como funciona o atendimento.
          </p>
          <div className="mt-7">
            <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="bg-white">
              Agendar consulta
            </ButtonLink>
          </div>
        </div>
        <div className="hidden overflow-hidden rounded-[22px] border border-white/15 bg-white/10 shadow-soft lg:block">
          <Image src="/images/fachada-consultorio.jpg" alt="Fachada do local de atendimento" width={1400} height={875} className="aspect-[4/3] w-full object-cover opacity-90" />
        </div>
      </div>
    </div>
  );
}

export function HomeBioAuthority() {
  return (
    <div className="relative grid items-center gap-10 overflow-hidden rounded-[28px] border border-petrol/10 bg-white p-6 shadow-soft md:grid-cols-[0.78fr_1.22fr] lg:p-10">
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gold/10" />
      <div className="relative overflow-hidden rounded-[22px] bg-mist">
        <Image
          src="/images/dr-pedro-bio-medico.webp"
          alt="Dr. Pedro Machado em ambiente médico profissional"
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
        <p className="mt-5 text-base leading-8 text-graphite">{doctor.bio}</p>
        <p className="mt-4 text-sm font-medium text-petrol">
          {doctor.professionalId} · {doctor.complementaryTraining}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/sobre">Conhecer trajetória</ButtonLink>
          <ButtonLink href={doctor.whatsappUrl} variant="secondary">
            Agendar consulta
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
