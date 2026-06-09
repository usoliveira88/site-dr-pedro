import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { doctor } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-linen">
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="section-reveal max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-gold/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-petrol shadow-soft">
            Cuidado médico individualizado
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
            Acompanhamento médico para emagrecimento, saúde hormonal e composição corporal
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">
            Avaliação clínica individualizada para pacientes que desejam cuidar do peso, investigar sintomas,
            melhorar performance física e acompanhar a saúde com segurança médica.
          </p>
          <p className="mt-4 text-sm font-medium text-petrol">{doctor.professionalId}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contato">Agendar consulta</ButtonLink>
            <ButtonLink href="/servicos" variant="secondary">
              Conhecer serviços
            </ButtonLink>
          </div>
        </div>
        <div className="section-reveal relative">
          <div className="float-slow relative overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-soft">
            <Image
              src="/images/hero-wellness-placeholder.svg"
              alt="Imagem conceitual de bem-estar, prevenção e cuidado médico premium"
              width={1600}
              height={1100}
              className="aspect-[4/3] w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 left-6 max-w-xs rounded-subtle border border-white/80 bg-white/88 p-5 shadow-soft backdrop-blur">
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
