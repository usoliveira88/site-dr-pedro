import type { Metadata } from "next";
import { AnamneseForm } from "@/components/anamnese/AnamneseForm";
import { doctor } from "@/data/site";

export const metadata: Metadata = {
  title: "Anamnese Inicial | Dr. Pedro Machado",
  description:
    "Preencha a avaliação inicial do Dr. Pedro Machado em Petrópolis e informe seus objetivos, hábitos e rotina para que a equipe possa orientar o próximo passo."
};

const trustItems = ["Atendimento em Petrópolis", doctor.professionalId, "Avaliação individualizada", "Acompanhamento médico com segurança"];

export default function AnamnesePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linen">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(185,147,90,0.18),transparent_26rem),radial-gradient(circle_at_88%_18%,rgba(2,37,61,0.10),transparent_30rem)]" />
        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:px-8 lg:py-20">
          <div className="section-reveal">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Anamnese inicial</p>
            <h1 className="max-w-4xl text-[2.25rem] font-semibold leading-[1.05] text-deep sm:text-5xl lg:text-[4.2rem]">
              Dê o primeiro passo para cuidar melhor da sua saúde
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-graphite sm:text-lg sm:leading-9">
              Responda algumas perguntas rápidas sobre seus objetivos, rotina e hábitos. As informações ajudam a equipe do Dr. Pedro Machado a entender melhor seu momento antes do contato inicial.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {trustItems.map((item) => (
                <span key={item} className="rounded-full border border-deep/12 bg-white/70 px-3.5 py-2 text-xs font-semibold text-deep shadow-[0_10px_28px_rgba(2,37,61,0.06)]">
                  {item}
                </span>
              ))}
            </div>
            <a
              href="#formulario"
              className="focus-ring mt-8 inline-flex min-h-14 items-center justify-center rounded-subtle bg-deep px-7 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift"
            >
              Preencher avaliação inicial
            </a>
          </div>

          <div className="section-reveal rounded-[30px] border border-deep/15 bg-white p-5 shadow-[0_24px_70px_rgba(2,37,61,0.12)] sm:p-6">
            <div className="rounded-[24px] border border-deep/10 bg-pearl p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Primeiro contato</p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-deep">Uma coleta simples para orientar o próximo passo</h2>
              <div className="mt-6 grid gap-4 text-sm leading-7 text-graphite">
                <p>O formulário reúne dados iniciais sobre objetivos, alimentação, treino, sono, estresse e interesse em conversar com a equipe.</p>
                <p>As respostas não substituem consulta médica, mas ajudam a organizar o contato inicial com mais clareza e cuidado.</p>
              </div>
              <div className="mt-6 rounded-[18px] border border-gold/30 bg-sand/35 p-4 text-sm font-semibold leading-6 text-deep">
                Tempo estimado: poucos minutos. Nome, WhatsApp e perguntas principais são obrigatórios; os indicadores iniciais são opcionais.
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnamneseForm />
    </>
  );
}
