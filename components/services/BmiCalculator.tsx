"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type BmiResult = {
  classification: string;
  title: string;
  message: string;
  attentionTitle: string;
  items: string[];
  complement: string;
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
};

const whatsappUrl = "https://wa.me/552422459374";

function parseNumber(value: string) {
  const normalized = value.replace(",", ".").trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeHeight(value: string) {
  const height = parseNumber(value);
  if (height > 3) {
    return height / 100;
  }
  return height;
}

function getBmiResult(bmi: number): BmiResult {
  if (bmi < 18.5) {
    return {
      classification: "Baixo peso",
      title: "Seu IMC está abaixo da faixa considerada adequada",
      message:
        "Sua faixa de IMC indica baixo peso para adultos. Esse dado precisa ser interpretado com cuidado, porque o IMC não mostra composição corporal, massa muscular, exames, rotina alimentar ou histórico de saúde.",
      attentionTitle: "Pode fazer sentido avaliar com mais critério",
      items: ["composição corporal", "massa muscular", "rotina alimentar", "exames preventivos", "energia e disposição", "sono e recuperação"],
      complement:
        "Quando há dificuldade para ganhar peso ou massa muscular, uma avaliação médica pode ajudar a entender o contexto e orientar estratégias mais seguras.",
      primary: { label: "Conhecer acompanhamento para hipertrofia", href: "/servicos/hipertrofia" },
      secondary: { label: "Falar com a equipe", href: whatsappUrl }
    };
  }

  if (bmi < 25) {
    return {
      classification: "Peso adequado",
      title: "Seu resultado inicial está muito bom",
      message:
        "Seu IMC está dentro da faixa considerada adequada para adultos. Esse é um bom ponto de partida, mas o IMC é apenas uma medida inicial: ele não mostra composição corporal, massa muscular, percentual de gordura, distribuição de gordura, exames ou saúde metabólica.",
      attentionTitle: "Mesmo com IMC adequado, pode fazer sentido avaliar",
      items: [
        "composição corporal",
        "ganho de massa muscular",
        "percentual de gordura",
        "saúde metabólica",
        "exames preventivos",
        "performance, força e recuperação",
        "rotina alimentar, sono e treino"
      ],
      complement:
        "Se o seu objetivo é melhorar composição corporal, ganhar massa muscular, investigar exames ou prevenir alterações futuras, uma avaliação médica pode ajudar a definir estratégias mais seguras e individualizadas.",
      primary: { label: "Conhecer acompanhamento para hipertrofia", href: "/servicos/hipertrofia" },
      secondary: { label: "Agendar check-up da saúde", href: "/servicos/check-up-da-saude" }
    };
  }

  if (bmi < 30) {
    return {
      classification: "Sobrepeso",
      title: "Seu IMC está na faixa de sobrepeso",
      message:
        "Sua faixa de IMC indica sobrepeso para adultos. Isso não define sozinho seu estado de saúde, mas pode ser um sinal para olhar com mais atenção para composição corporal, rotina, exames e saúde metabólica.",
      attentionTitle: "Pontos que podem ajudar a orientar a avaliação",
      items: ["histórico de peso", "circunferência abdominal", "exames metabólicos", "pressão arterial", "sono e estresse", "rotina alimentar", "atividade física"],
      complement:
        "Uma avaliação médica pode ajudar a diferenciar excesso de gordura, massa muscular, retenção e fatores metabólicos antes de qualquer conduta.",
      primary: { label: "Conhecer acompanhamento para sobrepeso", href: "/servicos/sobrepeso" },
      secondary: { label: "Agendar check-up da saúde", href: "/servicos/check-up-da-saude" }
    };
  }

  if (bmi < 35) {
    return {
      classification: "Obesidade grau I",
      title: "Seu IMC está na faixa de obesidade grau I",
      message:
        "Essa faixa de IMC merece avaliação individualizada. O resultado não deve ser visto de forma isolada, porque saúde metabólica, exames, histórico, rotina e composição corporal mudam a interpretação clínica.",
      attentionTitle: "Na consulta, pode ser importante avaliar",
      items: ["saúde metabólica", "glicemia e colesterol", "pressão arterial", "histórico familiar", "sono e apetite", "medicações em uso", "composição corporal"],
      complement:
        "O acompanhamento médico pode ajudar a entender riscos, possibilidades e estratégias seguras para cuidado contínuo, sem promessas de resultado.",
      primary: { label: "Conhecer acompanhamento para obesidade", href: "/servicos/obesidade" },
      secondary: { label: "Falar com a equipe", href: whatsappUrl }
    };
  }

  if (bmi < 40) {
    return {
      classification: "Obesidade grau II",
      title: "Seu IMC está na faixa de obesidade grau II",
      message:
        "Essa faixa de IMC pede uma leitura clínica mais cuidadosa. O IMC é apenas o ponto de partida e precisa ser associado a sintomas, exames, histórico de saúde, rotina e fatores metabólicos.",
      attentionTitle: "Aspectos que podem precisar de investigação",
      items: ["risco cardiometabólico", "pressão arterial", "glicemia", "colesterol", "sono", "composição corporal", "tentativas anteriores de controle de peso"],
      complement:
        "Uma avaliação médica individualizada pode organizar prioridades e orientar próximos passos com mais segurança.",
      primary: { label: "Conhecer acompanhamento para obesidade", href: "/servicos/obesidade" },
      secondary: { label: "Falar com a equipe", href: whatsappUrl }
    };
  }

  return {
    classification: "Obesidade grau III",
    title: "Seu IMC está na faixa de obesidade grau III",
    message:
      "Essa faixa de IMC deve ser avaliada com atenção médica. O resultado não define tudo sozinho, mas pode indicar necessidade de uma investigação clínica estruturada e acompanhamento contínuo.",
    attentionTitle: "Pontos importantes para uma avaliação individualizada",
    items: ["saúde metabólica", "pressão arterial", "glicemia e colesterol", "sono", "histórico clínico", "medicações em uso", "risco cardiovascular"],
    complement:
      "O acompanhamento médico pode ajudar a entender o contexto, avaliar riscos e definir estratégias possíveis com segurança.",
    primary: { label: "Conhecer acompanhamento para obesidade", href: "/servicos/obesidade" },
    secondary: { label: "Falar com a equipe", href: whatsappUrl }
  };
}

export function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const numericWeight = parseNumber(weight);
  const heightInMeters = normalizeHeight(height);
  const canCalculate = numericWeight > 0 && heightInMeters > 0;
  const bmi = canCalculate ? numericWeight / (heightInMeters * heightInMeters) : 0;
  const result = useMemo(() => (canCalculate && submitted ? getBmiResult(bmi) : null), [bmi, canCalculate, submitted]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-linen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <div className="section-reveal overflow-hidden rounded-[30px] border border-deep/20 bg-white shadow-[0_24px_70px_rgba(2,37,61,0.12)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-deep/10 bg-pearl p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Calculadora de IMC</p>
              <h2 className="text-[1.75rem] font-semibold leading-tight text-deep sm:text-4xl">Entenda seu ponto de partida</h2>
              <p className="mt-4 text-base leading-8 text-graphite">
                O IMC é uma medida inicial que relaciona peso e altura. Ele pode ajudar na triagem, mas não substitui avaliação médica, exames, composição corporal e contexto clínico.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
                <label className="grid gap-2 text-sm font-semibold text-deep">
                  Peso em kg
                  <input
                    type="text"
                    inputMode="decimal"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    placeholder="Ex.: 82"
                    className="focus-ring min-h-[3.25rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-deep">
                  Altura em metros ou centímetros
                  <input
                    type="text"
                    inputMode="decimal"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    placeholder="Ex.: 1,75 ou 175"
                    className="focus-ring min-h-[3.25rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
                  />
                </label>

                <button
                  type="submit"
                  className="focus-ring mt-2 inline-flex min-h-14 items-center justify-center rounded-subtle bg-deep px-6 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift active:translate-y-0"
                >
                  Calcular IMC
                </button>
              </form>
            </div>

            <div className="p-6 sm:p-8 lg:p-10" aria-live="polite">
              {submitted && !canCalculate ? (
                <div className="rounded-[24px] border border-gold/35 bg-sand/45 p-5 text-sm leading-7 text-deep">
                  Informe peso e altura válidos para calcular seu IMC. A altura pode ser preenchida em metros ou centímetros.
                </div>
              ) : null}

              {result ? (
                <div className="grid gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">Resultado inicial</p>
                    <div className="mt-4 flex flex-wrap items-end gap-4">
                      <strong className="text-[3rem] font-semibold leading-none text-deep sm:text-[4rem]">{bmi.toFixed(1).replace(".", ",")}</strong>
                      <span className="mb-2 rounded-full border border-deep/15 bg-mist px-4 py-2 text-sm font-semibold text-deep">{result.classification}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink sm:text-3xl">{result.title}</h3>
                    <p className="mt-4 text-base leading-8 text-graphite">{result.message}</p>
                  </div>

                  <div className="rounded-[24px] border border-deep/20 bg-white p-5 shadow-[0_14px_44px_rgba(2,37,61,0.07)] sm:p-6">
                    <h4 className="text-lg font-semibold leading-7 text-deep">{result.attentionTitle}</h4>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {result.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-graphite">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-base leading-8 text-graphite">{result.complement}</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={result.primary.href}
                        className="focus-ring inline-flex min-h-[3.25rem] items-center justify-center rounded-subtle bg-deep px-5 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift"
                      >
                        {result.primary.label}
                      </Link>
                      <Link
                        href={result.secondary.href}
                        className="focus-ring inline-flex min-h-[3.25rem] items-center justify-center rounded-subtle border border-deep/20 bg-white px-5 text-sm font-semibold text-deep transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-sand"
                      >
                        {result.secondary.label}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full min-h-[24rem] flex-col justify-center rounded-[26px] border border-deep/10 bg-gradient-to-br from-white via-mist/45 to-sand/35 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Como interpretar</p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-deep">O resultado aparece aqui após o cálculo</h3>
                  <p className="mt-4 text-base leading-8 text-graphite">
                    Use o resultado como ponto de partida. Peso, altura, exames, composição corporal, rotina e objetivos precisam ser avaliados em conjunto.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
