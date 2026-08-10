"use client";

import { useEffect, useMemo, useState } from "react";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import {
  calculateBmi,
  calculateWaistHipRatio,
  classifyBmi,
  classifyWaistHipRatio,
  formatHealthDecimal,
  normalizeHeight,
  parseHealthNumber,
  type Sex
} from "@/lib/healthCalculators";

export type HealthIndicatorsPayload = {
  bmi?: {
    weight: string;
    height: string;
    value: number;
    classification: string;
  };
  waistHipRatio?: {
    sex: Sex;
    waist: string;
    hip: string;
    value: number;
    classification: string;
  };
};

type Props = {
  onChange: (value: HealthIndicatorsPayload) => void;
};

const whatsappUrl = "https://wa.me/552422459374";

function getBmiContextText(classification: string) {
  if (classification === "Peso adequado") {
    return "Esse é um bom dado inicial, mas IMC não mostra composição corporal, massa muscular, percentual de gordura, exames ou saúde metabólica.";
  }

  if (classification === "Sobrepeso") {
    return "Esse dado pode ajudar a equipe a observar excesso de peso, composição corporal, rotina e possíveis pontos de atenção metabólica.";
  }

  if (classification.startsWith("Obesidade")) {
    return "Esse dado pode ajudar a equipe a entender melhor o contexto de excesso de peso, saúde metabólica, exames e riscos associados.";
  }

  return "Esse dado ajuda a equipe a entender melhor seu contexto, mas não define diagnóstico sozinho.";
}

function getWaistHipContextText(classification: string) {
  if (classification.includes("aumentado")) {
    return "Esse resultado pode ajudar a observar distribuição de medidas na região abdominal, sempre junto de histórico, exames e avaliação médica.";
  }

  return "Esse resultado sugere uma distribuição de medidas mais favorável, mas ainda deve ser interpretado junto com o restante do seu contexto.";
}

export function AnamneseHealthIndicators({ onChange }: Props) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiTouched, setBmiTouched] = useState(false);
  const [bmiSubmitted, setBmiSubmitted] = useState(false);

  const [sex, setSex] = useState<Sex | "">("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [waistHipTouched, setWaistHipTouched] = useState(false);
  const [waistHipSubmitted, setWaistHipSubmitted] = useState(false);

  const numericWeight = parseHealthNumber(weight);
  const heightInMeters = normalizeHeight(height);
  const canCalculateBmi = numericWeight > 0 && heightInMeters > 0;
  const bmi = canCalculateBmi ? calculateBmi(numericWeight, heightInMeters) : 0;
  const bmiClassification = canCalculateBmi ? classifyBmi(bmi) : "";
  const showBmiError = bmiSubmitted && bmiTouched && !canCalculateBmi;

  const numericWaist = parseHealthNumber(waist);
  const numericHip = parseHealthNumber(hip);
  const hasValidWaistHip = Boolean(sex) && numericWaist >= 40 && numericWaist <= 250 && numericHip >= 40 && numericHip <= 250;
  const waistHipRatio = hasValidWaistHip ? calculateWaistHipRatio(numericWaist, numericHip) : 0;
  const waistHipClassification = hasValidWaistHip && sex ? classifyWaistHipRatio(sex, waistHipRatio) : "";
  const showWaistHipError = waistHipSubmitted && waistHipTouched && !hasValidWaistHip;

  const nextValue = useMemo<HealthIndicatorsPayload>(() => {
    const indicators: HealthIndicatorsPayload = {};

    if (canCalculateBmi) {
      indicators.bmi = {
        weight,
        height,
        value: Number(bmi.toFixed(1)),
        classification: bmiClassification
      };
    }

    if (hasValidWaistHip && sex) {
      indicators.waistHipRatio = {
        sex,
        waist,
        hip,
        value: Number(waistHipRatio.toFixed(2)),
        classification: waistHipClassification
      };
    }

    return indicators;
  }, [bmi, bmiClassification, canCalculateBmi, hasValidWaistHip, height, hip, sex, waist, waistHipClassification, waistHipRatio, weight]);

  function syncIndicators(indicators: HealthIndicatorsPayload) {
    onChange(indicators);
  }

  useEffect(() => {
    onChange(nextValue);
  }, [nextValue, onChange]);

  function handleBmiSubmit() {
    setBmiSubmitted(true);
    syncIndicators(nextValue);
  }

  function handleWaistHipSubmit() {
    setWaistHipSubmitted(true);
    syncIndicators(nextValue);
  }

  function updateWeight(next: string) {
    setWeight(next);
    setBmiTouched(Boolean(next || height));
  }

  function updateHeight(next: string) {
    setHeight(next);
    setBmiTouched(Boolean(weight || next));
  }

  function updateSex(next: Sex) {
    setSex(next);
    setWaistHipTouched(true);
  }

  function updateWaist(next: string) {
    setWaist(next);
    setWaistHipTouched(Boolean(next || hip || sex));
  }

  function updateHip(next: string) {
    setHip(next);
    setWaistHipTouched(Boolean(waist || next || sex));
  }

  function handleContinue() {
    syncIndicators(nextValue);
    document.getElementById("questionario-anamnese")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="grid gap-5 rounded-[26px] border border-deep/14 bg-pearl p-5 shadow-[0_16px_46px_rgba(2,37,61,0.08)] sm:p-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Opcional</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-deep">Indicadores iniciais de saúde</h3>
        <p className="mt-3 text-sm leading-7 text-graphite sm:text-base">
          Se quiser, informe seus dados para calcular IMC e relação cintura-quadril. Esses campos são opcionais e servem apenas como referência inicial para a equipe entender melhor seu contexto.
        </p>
        <p className="mt-3 rounded-[18px] border border-deep/10 bg-white p-4 text-sm leading-7 text-graphite">
          O IMC e a relação cintura-quadril não substituem avaliação médica. Eles devem ser interpretados junto com histórico, exames, sintomas, rotina e composição corporal.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-[22px] border border-deep/12 bg-white p-5 shadow-[0_12px_34px_rgba(2,37,61,0.06)]">
          <div className="border-b border-deep/10 pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">IMC</p>
            <h4 className="mt-2 text-xl font-semibold leading-tight text-deep">Peso e altura</h4>
            <p className="mt-2 text-sm leading-6 text-graphite">Não se preocupe se não souber preencher agora. Você pode continuar sem informar essas medidas.</p>
          </div>

          <div className="mt-4 grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-deep">
              Peso em kg <span className="font-normal text-graphite/70">(opcional)</span>
              <input
                type="text"
                inputMode="decimal"
                value={weight}
                onChange={(event) => updateWeight(event.target.value)}
                placeholder="Ex.: 82"
                className="focus-ring min-h-[3.25rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-deep">
              Altura em metros ou centímetros <span className="font-normal text-graphite/70">(opcional)</span>
              <input
                type="text"
                inputMode="decimal"
                value={height}
                onChange={(event) => updateHeight(event.target.value)}
                placeholder="Ex.: 1,75 ou 175"
                className="focus-ring min-h-[3.25rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
              />
            </label>

            <button
              type="button"
              onClick={handleBmiSubmit}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-subtle bg-deep px-5 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift"
            >
              Calcular IMC
            </button>
          </div>

          <div aria-live="polite">
            {showBmiError ? (
              <p className="mt-4 rounded-subtle border border-gold/35 bg-sand/45 p-4 text-sm font-semibold leading-6 text-deep">
                Para calcular o IMC, informe peso e altura.
              </p>
            ) : null}

            {bmiSubmitted && canCalculateBmi ? (
              <ResultSummary
                label="Seu IMC estimado"
                value={formatHealthDecimal(bmi)}
                classification={bmiClassification}
                text={getBmiContextText(bmiClassification)}
                onContinue={handleContinue}
              />
            ) : null}
          </div>
        </article>

        <article className="rounded-[22px] border border-deep/12 bg-white p-5 shadow-[0_12px_34px_rgba(2,37,61,0.06)]">
          <div className="border-b border-deep/10 pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Relação cintura-quadril</p>
            <h4 className="mt-2 text-xl font-semibold leading-tight text-deep">Distribuição de medidas</h4>
            <p className="mt-2 text-sm leading-6 text-graphite">Esse indicador é opcional e pode complementar a leitura inicial da equipe.</p>
          </div>

          <div className="mt-4 grid gap-4">
            <fieldset className="grid gap-2">
              <legend className="text-sm font-semibold text-deep">Sexo <span className="font-normal text-graphite/70">(opcional)</span></legend>
              <div className="grid grid-cols-2 gap-2">
                {(["homem", "mulher"] as const).map((option) => (
                  <label
                    key={option}
                    className={`focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2 grid min-h-[3.1rem] cursor-pointer place-items-center rounded-subtle border px-4 text-sm font-semibold capitalize transition ${
                      sex === option ? "border-deep bg-deep text-white shadow-soft" : "border-deep/15 bg-white text-deep hover:border-gold"
                    }`}
                  >
                    <input type="radio" name="health-indicator-sex" value={option} checked={sex === option} onChange={() => updateSex(option)} className="sr-only" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-2 text-sm font-semibold text-deep">
              Cintura em cm <span className="font-normal text-graphite/70">(opcional)</span>
              <input
                type="text"
                inputMode="decimal"
                value={waist}
                onChange={(event) => updateWaist(event.target.value)}
                placeholder="Ex.: 90"
                className="focus-ring min-h-[3.25rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-deep">
              Quadril em cm <span className="font-normal text-graphite/70">(opcional)</span>
              <input
                type="text"
                inputMode="decimal"
                value={hip}
                onChange={(event) => updateHip(event.target.value)}
                placeholder="Ex.: 105"
                className="focus-ring min-h-[3.25rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
              />
            </label>

            <button
              type="button"
              onClick={handleWaistHipSubmit}
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-subtle bg-deep px-5 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift"
            >
              Calcular relação cintura-quadril
            </button>
          </div>

          <div aria-live="polite">
            {showWaistHipError ? (
              <p className="mt-4 rounded-subtle border border-gold/35 bg-sand/45 p-4 text-sm font-semibold leading-6 text-deep">
                Para calcular a relação cintura-quadril, informe sexo, cintura e quadril.
              </p>
            ) : null}

            {waistHipSubmitted && hasValidWaistHip ? (
              <ResultSummary
                label="Sua relação cintura-quadril estimada"
                value={formatHealthDecimal(waistHipRatio, 2)}
                classification={waistHipClassification}
                text={getWaistHipContextText(waistHipClassification)}
                onContinue={handleContinue}
              />
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
}

function ResultSummary({
  label,
  value,
  classification,
  text,
  onContinue
}: {
  label: string;
  value: string;
  classification: string;
  text: string;
  onContinue: () => void;
}) {
  return (
    <div className="mt-4 rounded-[18px] border border-deep/12 bg-pearl p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{label}</p>
      <div className="mt-3 flex flex-wrap items-end gap-3">
        <strong className="text-[2rem] font-semibold leading-none text-deep">{value}</strong>
        <span className="mb-1 rounded-full border border-deep/15 bg-white px-3 py-1.5 text-xs font-semibold text-deep">{classification}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-graphite">{text}</p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={onContinue}
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-subtle bg-deep px-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f]"
        >
          Continuar preenchendo anamnese
        </button>
        <TrackedWhatsAppLink
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-11 items-center justify-center rounded-subtle border border-deep/15 bg-white px-4 text-sm font-semibold text-deep transition duration-300 hover:border-gold hover:bg-sand"
          trackingLocation="anamnese_indicators"
        >
          Falar com a equipe
        </TrackedWhatsAppLink>
      </div>
    </div>
  );
}
