import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { ClockIcon, InstagramIcon, MapPinIcon, WhatsAppIcon } from "@/components/Icons";
import { Section } from "@/components/Section";
import { doctor } from "@/data/site";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;

const trustItems = [
  "Atendimento em Petrópolis",
  doctor.professionalId,
  "Consulta com avaliação individualizada",
  "Contato direto pelo WhatsApp"
];

const bookingSteps = [
  {
    number: "01",
    title: "Fale com a equipe",
    text: "Entre em contato pelo WhatsApp para informar seu interesse e tirar dúvidas iniciais sobre disponibilidade."
  },
  {
    number: "02",
    title: "Confirme as informações",
    text: "A equipe poderá orientar sobre horários disponíveis, modalidade de atendimento e informações necessárias."
  },
  {
    number: "03",
    title: "Compareça à avaliação",
    text: "Na consulta, o atendimento considera histórico, rotina, exames, objetivos e segurança antes de qualquer conduta."
  }
];

const usefulInfo = [
  "Informe seu objetivo principal ao falar com a equipe.",
  "Caso tenha exames recentes, pergunte se deve levá-los à consulta.",
  "Confirme disponibilidade de horários diretamente pelo WhatsApp.",
  "O atendimento é individualizado e depende de avaliação médica."
];

const contactFaq = [
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "O agendamento pode ser iniciado pelo WhatsApp da equipe. Por lá, você pode verificar disponibilidade e receber orientações sobre o próximo passo."
  },
  {
    question: "Qual é o endereço da clínica?",
    answer: `O atendimento fica em ${doctor.location}.`
  },
  {
    question: "O atendimento é presencial ou online?",
    answer: "A modalidade de atendimento deve ser confirmada diretamente com a equipe no momento do agendamento, conforme disponibilidade."
  },
  {
    question: "Preciso levar exames na primeira consulta?",
    answer:
      "Caso tenha exames recentes, pode ser útil levá-los. A necessidade de novos exames será avaliada conforme histórico, objetivos e contexto clínico."
  },
  {
    question: "O contato pelo WhatsApp substitui consulta médica?",
    answer:
      "Não. O WhatsApp serve para informações e agendamento. Orientações médicas dependem de consulta e avaliação individualizada."
  }
];

export const metadata: Metadata = {
  title: "Contato | Dr. Pedro Machado em Petrópolis",
  description:
    "Entre em contato com a equipe do Dr. Pedro Machado em Petrópolis. WhatsApp, endereço, localização no mapa e informações para agendamento."
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep text-white">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-[8%] h-px w-1/2 bg-gradient-to-r from-gold/70 via-white/20 to-transparent" />
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_82%_24%,rgba(185,147,90,0.22),transparent_28rem)]" />
        </div>
        <div className="relative mx-auto grid w-full max-w-[1240px] items-center gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.82fr] lg:px-8 lg:py-20">
          <div className="section-reveal max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contato</p>
            <h1 className="text-[2.25rem] font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-[3.45rem]">
              Entre em contato com a equipe do Dr. Pedro Machado
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
              Fale pelo WhatsApp para verificar disponibilidade de consulta, confirmar informações de atendimento e receber orientação sobre o próximo passo.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {trustItems.map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/[0.85]">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={doctor.whatsappUrl} className="min-h-14 bg-gold px-7 text-deep hover:bg-white">
                Chamar no WhatsApp
              </ButtonLink>
              <ButtonLink href="#localizacao" variant="secondary" className="min-h-14 border-white/20 bg-white/10 px-7 text-white hover:border-gold hover:bg-white/[0.16]">
                Ver localização
              </ButtonLink>
            </div>
          </div>
          <aside className="section-reveal rounded-[28px] border border-white/14 bg-white/[0.08] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur sm:p-6">
            <div className="rounded-[22px] border border-white/14 bg-white/[0.08] p-5">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-deep">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Canal direto</p>
              <p className="mt-3 text-2xl font-semibold">{doctor.whatsapp}</p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Use o WhatsApp para iniciar o agendamento, confirmar disponibilidade e receber informações iniciais da equipe.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Section className="bg-linen" id="localizacao">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="section-reveal rounded-[28px] border border-deep/10 bg-white p-5 shadow-soft sm:p-7">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">Contato e localização em Petrópolis</h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              Fale com a equipe para verificar disponibilidade de consulta médica em Petrópolis e confirmar as informações necessárias para o atendimento.
            </p>

            <div className="mt-7 grid gap-4">
              <ContactInfo title="WhatsApp / telefone" icon={<WhatsAppIcon className="h-5 w-5" />}>
                <a href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-petrol transition hover:text-deep">
                  {doctor.whatsapp}
                </a>
              </ContactInfo>
              <ContactInfo title="Endereço" icon={<MapPinIcon className="h-5 w-5" />}>
                {doctor.location}
              </ContactInfo>
              <ContactInfo title="Instagram" icon={<InstagramIcon className="h-5 w-5" />}>
                {doctor.instagram}
              </ContactInfo>
              <ContactInfo title="Horários" icon={<ClockIcon className="h-5 w-5" />}>
                Os horários disponíveis devem ser confirmados com a equipe no momento do agendamento.
              </ContactInfo>
            </div>

            <ButtonLink href={doctor.whatsappUrl} className="mt-7 min-h-14 w-full bg-deep text-white hover:bg-petrol sm:w-auto">
              Chamar no WhatsApp
            </ButtonLink>
          </div>

          <div className="section-reveal overflow-hidden rounded-[28px] border border-deep/10 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[0.82fr_1fr]">
              <div className="order-2 p-5 sm:p-6 lg:order-1">
                <Image
                  src="/images/fachada-consultorio.jpg"
                  alt="Fachada da clínica em Petrópolis"
                  width={1400}
                  height={875}
                  className="aspect-[4/3] w-full rounded-[20px] object-cover shadow-[0_18px_42px_rgba(2,37,61,0.14)]"
                />
                <div className="mt-4 rounded-[18px] border border-deep/10 bg-pearl p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Endereço Dr. Pedro Machado</p>
                  <p className="mt-2 text-sm leading-6 text-graphite">{doctor.location}</p>
                </div>
              </div>
              <div className="order-1 min-h-[280px] overflow-hidden lg:order-2">
                <iframe
                  title="Mapa da clínica do Dr. Pedro Machado em Petrópolis"
                  src={mapSrc}
                  className="h-[300px] w-full lg:h-full lg:min-h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Agendamento</p>
          <h2 className="text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Como funciona o agendamento</h2>
          <p className="mt-4 text-base leading-8 text-graphite">
            Um caminho simples para iniciar o contato, confirmar as informações e chegar à avaliação com mais clareza.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {bookingSteps.map((step, index) => (
            <article
              key={step.number}
              className="section-reveal hover-ink-card group relative overflow-hidden rounded-[20px] border border-deep/10 bg-pearl p-5 shadow-[0_14px_38px_rgba(2,37,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-6"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-gold via-gold/45 to-transparent" />
              <span className="hover-ink-number inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-gold transition">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-ink">{step.title}</h3>
              <p className="hover-ink-muted mt-3 text-sm leading-7 text-graphite">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-mist">
        <div className="grid items-start gap-8 rounded-[28px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:p-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Orientações úteis</p>
            <h2 className="text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Informações que podem ajudar no atendimento</h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              Alguns detalhes ajudam a equipe a direcionar melhor o primeiro contato e a orientar o próximo passo com segurança.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {usefulInfo.map((item, index) => (
              <div key={item} className="section-reveal rounded-subtle border border-deep/10 bg-pearl p-5 shadow-[0_10px_30px_rgba(2,37,61,0.06)]" style={{ animationDelay: `${index * 80}ms` }}>
                <span className="text-sm font-semibold text-gold">0{index + 1}</span>
                <p className="mt-3 text-sm leading-7 text-graphite">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Dúvidas</p>
            <h2 className="text-[1.75rem] font-semibold leading-tight text-ink sm:text-4xl">Perguntas rápidas sobre contato</h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              Respostas objetivas para ajudar antes de falar com a equipe do Dr. Pedro Machado em Petrópolis.
            </p>
          </div>
          <div className="grid gap-4">
            {contactFaq.map((item) => (
              <details key={item.question} className="group rounded-subtle border border-deep/10 bg-pearl p-5 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-soft">
                <summary className="cursor-pointer list-none text-base font-semibold text-ink">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-graphite">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-linen">
        <div className="section-reveal relative overflow-hidden rounded-[30px] bg-deep p-6 text-white shadow-lift sm:p-8 lg:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gold/65 via-white/12 to-transparent" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.42fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Próximo passo</p>
              <h2 className="text-[1.85rem] font-semibold leading-tight sm:text-4xl">Fale com a equipe e confirme a disponibilidade de atendimento</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                Entre em contato pelo WhatsApp para verificar horários, endereço e orientações iniciais para sua avaliação médica.
              </p>
            </div>
            <ButtonLink href={doctor.whatsappUrl} className="min-h-14 w-full bg-gold px-7 text-deep hover:bg-white lg:w-auto">
              Chamar no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactInfo({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-subtle border border-deep/10 bg-pearl p-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-deep text-white">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{title}</p>
        <div className="mt-2 text-sm leading-7 text-graphite">{children}</div>
      </div>
    </div>
  );
}
