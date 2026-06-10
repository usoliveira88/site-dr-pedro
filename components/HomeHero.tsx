import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { doctor } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-linen">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_12%,rgba(185,154,95,0.13),transparent_27%),linear-gradient(135deg,#f5f1e8_0%,#eef4f0_54%,#dce9e5_100%)]" />
      <Container className="grid min-h-[calc(100vh-4.25rem)] items-center gap-10 py-10 lg:grid-cols-[1fr_0.92fr] lg:py-14">
        <div className="section-reveal max-w-[38rem]">
          <p className="mb-4 inline-flex rounded-full border border-petrol/10 bg-white/62 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-petrol shadow-[0_10px_28px_rgba(22,74,81,0.06)] backdrop-blur">
            Avaliação clínica individualizada
          </p>
          <h1 className="max-w-[38rem] text-[2rem] font-semibold leading-[1.16] tracking-normal text-ink sm:text-[2.55rem] lg:text-[3.05rem]">
            Acompanhamento médico para emagrecimento, saúde hormonal e qualidade de vida
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-graphite sm:text-lg">
            Uma avaliação individualizada para entender seu corpo, sua rotina e suas necessidades antes de qualquer conduta.
          </p>
          <p className="mt-4 text-sm font-medium text-petrol">{doctor.professionalId}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={doctor.whatsappUrl}>Agendar consulta</ButtonLink>
            <ButtonLink href="/servicos" variant="secondary">
              Conhecer serviços
            </ButtonLink>
          </div>
          <div className="mt-8 grid max-w-xl gap-3 border-l border-gold/50 pl-5 text-sm leading-6 text-graphite sm:grid-cols-3 sm:border-l-0 sm:pl-0">
            <span>Investigação médica</span>
            <span>Análise de exames</span>
            <span>Metas realistas</span>
          </div>
        </div>
        <div className="section-reveal relative mx-auto w-full max-w-[36rem] lg:mr-0">
          <div className="float-slow relative overflow-hidden rounded-[26px] border border-white/70 bg-white/70 shadow-[0_24px_72px_rgba(22,74,81,0.13)] backdrop-blur">
            <Image
              src="/images/hero-wellness-placeholder.svg"
              alt="Imagem conceitual de bem-estar, rotina saudável e cuidado médico sofisticado"
              width={1600}
              height={1100}
              className="aspect-[1.12/1] w-full object-cover opacity-95"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-petrol/12 via-white/0 to-white/18" />
          </div>
        </div>
      </Container>
    </section>
  );
}
