import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { doctor } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-linen">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_16%,rgba(185,154,95,0.18),transparent_30%),linear-gradient(135deg,#fbfaf7_0%,#f3f7f4_52%,#e2eeeb_100%)]" />
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div className="section-reveal max-w-[42rem]">
          <p className="mb-5 inline-flex rounded-full border border-petrol/10 bg-white/72 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-petrol shadow-[0_12px_36px_rgba(22,74,81,0.08)] backdrop-blur">
            Avaliação clínica individualizada
          </p>
          <h1 className="max-w-[42rem] text-3xl font-semibold leading-[1.12] tracking-normal text-ink sm:text-4xl lg:text-[3.65rem]">
            Acompanhamento médico para emagrecimento, saúde hormonal e qualidade de vida
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite sm:text-xl">
            Uma avaliação individualizada para entender seu corpo, sua rotina e suas necessidades antes de qualquer conduta.
          </p>
          <p className="mt-4 text-sm font-medium text-petrol">{doctor.professionalId}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={doctor.whatsappUrl}>Agendar consulta</ButtonLink>
            <ButtonLink href="/servicos" variant="secondary">
              Conhecer serviços
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 border-l border-gold/50 pl-5 text-sm leading-6 text-graphite sm:grid-cols-3 sm:border-l-0 sm:pl-0">
            <span>Investigação médica</span>
            <span>Análise de exames</span>
            <span>Metas realistas</span>
          </div>
        </div>
        <div className="section-reveal relative">
          <div className="absolute -left-5 top-12 z-10 hidden w-44 rounded-subtle border border-white/70 bg-white/82 p-4 shadow-soft backdrop-blur sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Método</p>
            <p className="mt-2 text-sm leading-6 text-petrol">Decisões orientadas por contexto, exames e segurança.</p>
          </div>
          <div className="float-slow relative overflow-hidden rounded-[34px] border border-white/80 bg-white shadow-[0_28px_90px_rgba(22,74,81,0.16)]">
            <Image
              src="/images/hero-wellness-placeholder.svg"
              alt="Imagem conceitual de bem-estar, rotina saudável e cuidado médico sofisticado"
              width={1600}
              height={1100}
              className="aspect-[4/3] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-petrol/10 via-transparent to-white/10" />
          </div>
          <div className="absolute -bottom-6 right-4 max-w-xs rounded-subtle border border-white/80 bg-white/88 p-5 shadow-soft backdrop-blur sm:right-8">
            <p className="text-sm font-semibold text-petrol">Imagem conceitual provisória</p>
            <p className="mt-2 text-sm leading-6 text-graphite">
              Substituir por fotografia premium validada antes da publicação.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
