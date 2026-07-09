"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Cta = {
  label: string;
  href: string;
};

type CalculatorResult = {
  classification: string;
  title: string;
  message: string;
  attentionTitle: string;
  items: string[];
  complement: string;
  primary: Cta;
  secondary: Cta;
};

type Sex = "homem" | "mulher";

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

function formatDecimal(value: number, digits = 1) {
  return value.toFixed(digits).replace(".", ",");
}

function getBmiResult(bmi: number): CalculatorResult {
  if (bmi < 18.5) {
    return {
      classification: "Baixo peso",
      title: "Seu IMC está abaixo da faixa considerada adequada",
      message:
        "Esse resultado pode indicar necessidade de olhar com mais atenção para composição corporal, massa muscular, rotina alimentar, exames, sintomas e possíveis fatores clínicos associados. O IMC não fecha diagnóstico sozinho, mas pode ser um ponto de partida para entender melhor sua saúde.",
      attentionTitle: "Pontos que podem ser avaliados com acompanhamento médico",
      items: ["composição corporal", "massa muscular", "exames laboratoriais", "rotina alimentar", "disposição e sintomas associados", "saúde metabólica", "histórico clínico"],
      complement:
        "Agendar uma consulta com o Dr. Pedro Machado pode ajudar a investigar se esse resultado tem relação com baixa massa muscular, rotina alimentar, alterações em exames ou outros fatores clínicos que precisam de acompanhamento.",
      primary: { label: "Agendar avaliação com o Dr. Pedro", href: whatsappUrl },
      secondary: { label: "Conhecer Check-up da Saúde", href: "/servicos/check-up-da-saude" }
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
        "Se o seu objetivo é melhorar composição corporal, ganhar massa muscular, investigar exames ou prevenir alterações futuras, uma avaliação médica com o Dr. Pedro Machado pode ajudar a definir estratégias mais seguras e individualizadas.",
      primary: { label: "Conhecer acompanhamento para hipertrofia", href: "/servicos/hipertrofia" },
      secondary: { label: "Agendar check-up da saúde", href: "/servicos/check-up-da-saude" }
    };
  }

  if (bmi < 30) {
    return {
      classification: "Sobrepeso",
      title: "Seu IMC está na faixa de sobrepeso",
      message:
        "Sua faixa de IMC indica sobrepeso para adultos. Isso não define sozinho seu estado de saúde, mas pode ser um sinal para avaliar composição corporal, circunferência abdominal, exames, rotina, sono, alimentação e saúde metabólica.",
      attentionTitle: "Condições que podem estar relacionadas ao excesso de peso",
      items: ["pressão alta", "resistência à insulina", "diabetes tipo 2", "colesterol e triglicerídeos alterados", "gordura no fígado", "apneia do sono", "dores articulares", "maior risco cardiovascular"],
      complement:
        "Agendar uma consulta com o Dr. Pedro Machado pode ajudar a entender se o sobrepeso está associado a alterações metabólicas, perda de massa muscular, rotina alimentar, medicamentos em uso ou outros fatores que precisam de acompanhamento individualizado.",
      primary: { label: "Agendar avaliação com o Dr. Pedro", href: whatsappUrl },
      secondary: { label: "Conhecer acompanhamento para sobrepeso", href: "/servicos/sobrepeso" }
    };
  }

  if (bmi < 35) {
    return {
      classification: "Obesidade grau I",
      title: "Seu IMC está na faixa de obesidade grau I",
      message:
        "Sua faixa de IMC indica obesidade grau I para adultos. Esse resultado merece atenção porque o excesso de peso pode estar associado a alterações metabólicas e cardiovasculares, especialmente quando há histórico familiar, exames alterados, aumento de circunferência abdominal ou sintomas associados.",
      attentionTitle: "Condições que podem estar relacionadas à obesidade",
      items: ["pressão alta", "diabetes tipo 2", "resistência à insulina", "colesterol e triglicerídeos alterados", "gordura no fígado", "apneia do sono", "dores articulares", "maior risco cardiovascular"],
      complement:
        "Uma consulta com o Dr. Pedro Machado pode ajudar a avaliar exames, composição corporal, histórico, rotina, sintomas e riscos individuais antes da definição de qualquer conduta. O objetivo é entender o cenário de forma segura e personalizada.",
      primary: { label: "Agendar avaliação com o Dr. Pedro", href: whatsappUrl },
      secondary: { label: "Conhecer acompanhamento para obesidade", href: "/servicos/obesidade" }
    };
  }

  if (bmi < 40) {
    return {
      classification: "Obesidade grau II",
      title: "Seu IMC está na faixa de obesidade grau II",
      message:
        "Sua faixa de IMC indica obesidade grau II para adultos. Nessa faixa, pode ser ainda mais importante avaliar fatores metabólicos, cardiovasculares, articulares e respiratórios associados ao excesso de peso.",
      attentionTitle: "Condições que merecem atenção nessa faixa de IMC",
      items: ["pressão alta", "diabetes tipo 2", "resistência à insulina", "colesterol e triglicerídeos alterados", "gordura no fígado", "apneia do sono", "dores articulares", "sobrecarga cardiovascular"],
      complement:
        "Agendar uma consulta com o Dr. Pedro Machado pode ajudar a mapear riscos, revisar exames, entender a composição corporal e construir um plano de acompanhamento compatível com sua realidade clínica.",
      primary: { label: "Agendar avaliação com o Dr. Pedro", href: whatsappUrl },
      secondary: { label: "Conhecer acompanhamento para obesidade", href: "/servicos/obesidade" }
    };
  }

  return {
    classification: "Obesidade grau III",
    title: "Seu IMC está na faixa de obesidade grau III",
    message:
      "Sua faixa de IMC indica obesidade grau III para adultos. Esse resultado exige atenção médica criteriosa, pois pode estar associado a maior risco de alterações metabólicas, cardiovasculares, respiratórias e articulares.",
    attentionTitle: "Condições que precisam ser avaliadas com cuidado",
    items: ["pressão alta", "diabetes tipo 2", "resistência à insulina", "colesterol e triglicerídeos alterados", "gordura no fígado", "apneia do sono", "dores articulares", "maior risco cardiovascular", "impacto na qualidade de vida"],
    complement:
      "Agendar uma consulta com o Dr. Pedro Machado pode ajudar a avaliar exames, sintomas, histórico, rotina, composição corporal e fatores de risco, para que qualquer conduta seja definida com segurança e acompanhamento individualizado.",
    primary: { label: "Agendar avaliação com o Dr. Pedro", href: whatsappUrl },
    secondary: { label: "Conhecer acompanhamento para obesidade", href: "/servicos/obesidade" }
  };
}

function getWaistHipResult(sex: Sex, ratio: number): CalculatorResult {
  const threshold = sex === "homem" ? 0.9 : 0.85;

  if (ratio < threshold) {
    return {
      classification: "Menor risco cardiometabólico pela RCQ",
      title: "Sua relação cintura-quadril está em uma faixa mais favorável",
      message:
        "Esse resultado sugere uma distribuição de medidas mais favorável pela relação cintura-quadril. Ainda assim, essa medida não avalia sozinha composição corporal, exames, pressão arterial, glicemia, colesterol, rotina de treino ou saúde metabólica.",
      attentionTitle: "Mesmo com resultado favorável, pode fazer sentido acompanhar",
      items: ["composição corporal", "exames preventivos", "pressão arterial", "glicemia", "colesterol e triglicerídeos", "massa muscular", "rotina de treino, sono e alimentação"],
      complement:
        "Se seu objetivo é ganhar massa muscular, melhorar composição corporal, prevenir alterações futuras ou organizar exames, uma avaliação com o Dr. Pedro Machado pode ajudar a definir um caminho mais individualizado.",
      primary: { label: "Conhecer acompanhamento para hipertrofia", href: "/servicos/hipertrofia" },
      secondary: { label: "Agendar check-up da saúde", href: "/servicos/check-up-da-saude" }
    };
  }

  return {
    classification: "Risco cardiometabólico aumentado pela RCQ",
    title: "Sua relação cintura-quadril merece atenção",
    message:
      "Esse resultado pode indicar maior concentração de medidas na região abdominal. A gordura abdominal pode estar associada a maior risco cardiometabólico, por isso vale avaliar esse dado junto com IMC, exames, histórico, rotina e composição corporal.",
    attentionTitle: "Condições que podem estar relacionadas à gordura abdominal",
    items: ["pressão alta", "resistência à insulina", "diabetes tipo 2", "colesterol e triglicerídeos alterados", "gordura no fígado", "apneia do sono", "maior risco cardiovascular"],
    complement:
      "Agendar uma consulta com o Dr. Pedro Machado pode ajudar a entender se esse resultado está associado a alterações metabólicas, rotina, alimentação, sono, composição corporal ou outros fatores que merecem acompanhamento individualizado.",
    primary: { label: "Agendar avaliação com o Dr. Pedro", href: whatsappUrl },
    secondary: { label: "Conhecer acompanhamento para sobrepeso", href: "/servicos/sobrepeso" }
  };
}

function CtaLink({ cta, variant = "primary" }: { cta: Cta; variant?: "primary" | "secondary" }) {
  const classes =
    variant === "primary"
      ? "focus-ring inline-flex min-h-[3.25rem] items-center justify-center rounded-subtle bg-deep px-5 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift"
      : "focus-ring inline-flex min-h-[3.25rem] items-center justify-center rounded-subtle border border-deep/20 bg-white px-5 text-sm font-semibold text-deep transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-sand";

  if (cta.href.startsWith("http")) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {cta.label}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={classes}>
      {cta.label}
    </Link>
  );
}

function ResultPanel({ result, value, valueLabel }: { result: CalculatorResult; value: string; valueLabel: string }) {
  return (
    <div className="mt-6 grid gap-5 border-t border-deep/10 pt-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{valueLabel}</p>
        <div className="mt-3 flex flex-wrap items-end gap-3">
          <strong className="text-[2.6rem] font-semibold leading-none text-deep sm:text-[3.2rem]">{value}</strong>
          <span className="mb-1 rounded-full border border-deep/15 bg-mist px-3.5 py-2 text-xs font-semibold text-deep">{result.classification}</span>
        </div>
        <h3 className="mt-5 text-[1.45rem] font-semibold leading-tight text-ink sm:text-2xl">{result.title}</h3>
        <p className="mt-3 text-sm leading-7 text-graphite sm:text-base sm:leading-8">{result.message}</p>
      </div>

      <div className="rounded-[22px] border border-deep/20 bg-white p-5 shadow-[0_14px_44px_rgba(2,37,61,0.07)]">
        <h4 className="text-base font-semibold leading-7 text-deep sm:text-lg">{result.attentionTitle}</h4>
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
        <p className="text-sm leading-7 text-graphite sm:text-base sm:leading-8">{result.complement}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <CtaLink cta={result.primary} />
          <CtaLink cta={result.secondary} variant="secondary" />
        </div>
      </div>
    </div>
  );
}

function InitialPanel({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-6 rounded-[24px] border border-deep/10 bg-gradient-to-br from-white via-mist/45 to-sand/35 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Resultado</p>
      <h3 className="mt-3 text-xl font-semibold leading-tight text-deep">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-graphite">{text}</p>
    </div>
  );
}

export function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiSubmitted, setBmiSubmitted] = useState(false);

  const [sex, setSex] = useState<Sex>("homem");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [waistHipSubmitted, setWaistHipSubmitted] = useState(false);

  const numericWeight = parseNumber(weight);
  const heightInMeters = normalizeHeight(height);
  const canCalculateBmi = numericWeight > 0 && heightInMeters > 0;
  const bmi = canCalculateBmi ? numericWeight / (heightInMeters * heightInMeters) : 0;
  const bmiResult = useMemo(() => (canCalculateBmi && bmiSubmitted ? getBmiResult(bmi) : null), [bmi, canCalculateBmi, bmiSubmitted]);

  const numericWaist = parseNumber(waist);
  const numericHip = parseNumber(hip);
  const hasValidWaistHip = numericWaist >= 40 && numericWaist <= 250 && numericHip >= 40 && numericHip <= 250;
  const waistHipRatio = hasValidWaistHip ? numericWaist / numericHip : 0;
  const waistHipResult = useMemo(
    () => (hasValidWaistHip && waistHipSubmitted ? getWaistHipResult(sex, waistHipRatio) : null),
    [hasValidWaistHip, sex, waistHipRatio, waistHipSubmitted]
  );

  function handleBmiSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBmiSubmitted(true);
  }

  function handleWaistHipSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setWaistHipSubmitted(true);
  }

  return (
    <section className="bg-linen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <div className="section-reveal overflow-hidden rounded-[30px] border border-deep/20 bg-white p-5 shadow-[0_24px_70px_rgba(2,37,61,0.12)] sm:p-7 lg:p-9">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Indicadores iniciais</p>
            <h2 className="text-[1.85rem] font-semibold leading-tight text-deep sm:text-4xl">Calcule seus indicadores iniciais de saúde</h2>
            <p className="mt-4 text-base leading-8 text-graphite sm:text-lg">
              IMC e relação cintura-quadril são medidas simples que ajudam a observar peso, distribuição de gordura e pontos de atenção. Esses resultados não substituem avaliação médica, mas podem orientar o próximo passo.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:items-start">
            <article className="rounded-[26px] border border-deep/14 bg-pearl p-5 shadow-[0_16px_46px_rgba(2,37,61,0.08)] sm:p-6">
              <div className="border-b border-deep/10 pb-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">IMC</p>
                <h3 className="text-2xl font-semibold leading-tight text-deep">Calculadora de IMC</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  O IMC relaciona peso e altura. Ele ajuda na triagem, mas não mostra composição corporal, exames, distribuição de gordura ou saúde metabólica.
                </p>
              </div>

              <form onSubmit={handleBmiSubmit} className="mt-5 grid gap-4">
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
                  className="focus-ring mt-1 inline-flex min-h-14 items-center justify-center rounded-subtle bg-deep px-6 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift active:translate-y-0"
                >
                  Calcular IMC
                </button>
              </form>

              <div aria-live="polite">
                {bmiSubmitted && !canCalculateBmi ? (
                  <div className="mt-6 rounded-[22px] border border-gold/35 bg-sand/45 p-5 text-sm leading-7 text-deep">
                    Informe peso e altura válidos para calcular seu IMC. A altura pode ser preenchida em metros ou centímetros.
                  </div>
                ) : null}

                {bmiResult ? (
                  <ResultPanel result={bmiResult} value={formatDecimal(bmi)} valueLabel="Seu IMC estimado" />
                ) : (
                  <InitialPanel
                    title="Informe peso e altura para calcular seu IMC."
                    text="O resultado aparece aqui após o cálculo e deve ser interpretado como ponto de partida para uma avaliação mais completa."
                  />
                )}
              </div>
            </article>

            <article className="rounded-[26px] border border-deep/14 bg-pearl p-5 shadow-[0_16px_46px_rgba(2,37,61,0.08)] sm:p-6">
              <div className="border-b border-deep/10 pb-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Distribuição de gordura</p>
                <h3 className="text-2xl font-semibold leading-tight text-deep">Relação Cintura-Quadril</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  Essa medida ajuda a observar a distribuição de gordura corporal, especialmente na região abdominal, que pode ter relação com risco cardiometabólico.
                </p>
              </div>

              <form onSubmit={handleWaistHipSubmit} className="mt-5 grid gap-4">
                <fieldset className="grid gap-2">
                  <legend className="text-sm font-semibold text-deep">Sexo</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {(["homem", "mulher"] as const).map((option) => (
                      <label
                        key={option}
                        className={`focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2 grid min-h-[3.1rem] cursor-pointer place-items-center rounded-subtle border px-4 text-sm font-semibold capitalize transition ${
                          sex === option ? "border-deep bg-deep text-white shadow-soft" : "border-deep/15 bg-white text-deep hover:border-gold"
                        }`}
                      >
                        <input type="radio" name="sex" value={option} checked={sex === option} onChange={() => setSex(option)} className="sr-only" />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="grid gap-2 text-sm font-semibold text-deep">
                  Cintura <span className="font-normal text-graphite/70">cm</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={waist}
                    onChange={(event) => setWaist(event.target.value)}
                    placeholder="Ex.: 90"
                    className="focus-ring min-h-[3.25rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
                  />
                  <span className="text-xs font-normal leading-5 text-graphite/70">Meça na região da cintura, aproximadamente acima do umbigo.</span>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-deep">
                  Quadril <span className="font-normal text-graphite/70">cm</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={hip}
                    onChange={(event) => setHip(event.target.value)}
                    placeholder="Ex.: 105"
                    className="focus-ring min-h-[3.25rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
                  />
                  <span className="text-xs font-normal leading-5 text-graphite/70">Meça a região mais larga do quadril.</span>
                </label>

                <button
                  type="submit"
                  className="focus-ring mt-1 inline-flex min-h-14 items-center justify-center rounded-subtle bg-deep px-6 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift active:translate-y-0"
                >
                  Calcular relação cintura-quadril
                </button>
              </form>

              <div aria-live="polite">
                {waistHipSubmitted && !hasValidWaistHip ? (
                  <div className="mt-6 rounded-[22px] border border-gold/35 bg-sand/45 p-5 text-sm leading-7 text-deep">
                    Confira as medidas informadas. Use valores em centímetros, como 90 para cintura e 105 para quadril.
                  </div>
                ) : null}

                {waistHipResult ? (
                  <ResultPanel result={waistHipResult} value={formatDecimal(waistHipRatio, 2)} valueLabel="Sua relação cintura-quadril estimada" />
                ) : (
                  <InitialPanel
                    title="Informe sexo, cintura e quadril para estimar sua relação cintura-quadril."
                    text="A medida ajuda a complementar o IMC ao observar a distribuição de gordura corporal."
                  />
                )}
              </div>
            </article>
          </div>

          <div className="mt-6 rounded-[24px] border border-deep/12 bg-white p-5 shadow-[0_14px_44px_rgba(2,37,61,0.07)] sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold leading-tight text-deep">Esses números são apenas o começo da avaliação</h3>
              <p className="mt-3 text-sm leading-7 text-graphite sm:text-base">
                IMC e relação cintura-quadril ajudam a orientar a conversa, mas a decisão clínica depende de histórico, exames, composição corporal, sintomas e objetivos.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <CtaLink cta={{ label: "Falar com a equipe do Dr. Pedro", href: whatsappUrl }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
