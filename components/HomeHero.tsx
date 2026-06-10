import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { doctor } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-linen">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_12%,rgba(185,147,90,0.14),transparent_27%),radial-gradient(circle_at_8%_80%,rgba(2,37,61,0.08),transparent_34%),linear-gradient(135deg,#FFFFFF_0%,#F6F8F7_48%,#E6ECEC_100%)]" />
      <Container className="grid min-h-[calc(100vh-4.25rem)] items-center gap-10 py-10 lg:grid-cols-[1fr_0.92fr] lg:py-14">
        <div className="section-reveal max-w-[38rem]">
          <p className="mb-4 inline-flex rounded-full border border-gold/30 bg-white/78 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-deep shadow-[0_10px_28px_rgba(2,37,61,0.07)] backdrop-blur">
            Avaliação clínica individualizada
          </p>
          <h1 className="max-w-[39rem] text-[2rem] font-semibold leading-[1.15] tracking-normal text-ink sm:text-[2.5rem] lg:text-[3rem]">
            Acompanhamento Médico para Emagrecimento, Saúde Hormonal e Qualidade de Vida
          </h1>
          <p className="mt-5 max-w-xl text-[1.03rem] leading-8 text-graphite sm:text-lg">
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
          <div className="shine-subtle float-slow relative overflow-hidden rounded-[26px] border border-white/80 bg-white/78 shadow-[0_24px_78px_rgba(2,37,61,0.16)] backdrop-blur">
            <Image
              src="/images/hero-medical-premium.svg"
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
