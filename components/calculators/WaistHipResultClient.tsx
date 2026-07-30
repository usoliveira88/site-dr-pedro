"use client";

import { useEffect, useState } from "react";
import { WaistHipForm, type WaistHipFormResult } from "@/components/calculators/WaistHipForm";
import { CalculatorResultSummary } from "@/components/calculators/CalculatorResultSummary";
import { OtherCalculators } from "@/components/calculators/OtherCalculators";
import { readCalculatorResult, saveCalculatorResult } from "@/components/calculators/calculatorSession";
import { ButtonLink } from "@/components/ButtonLink";
import { formatHealthDecimal, getWaistHipResult, type Sex, type WaistHipResult } from "@/lib/healthCalculators";

type WaistHipInput = {
  sex: Sex;
  waist: number;
  hip: number;
};

type ValidWaistHipResult = {
  input: WaistHipInput;
  result: WaistHipResult;
};

function recalculate(input: WaistHipInput): ValidWaistHipResult | null {
  const hasValidSex = input.sex === "homem" || input.sex === "mulher";
  const hasValidMeasurements =
    Number.isFinite(input.waist) &&
    input.waist >= 40 &&
    input.waist <= 250 &&
    Number.isFinite(input.hip) &&
    input.hip >= 40 &&
    input.hip <= 250;
  if (!hasValidSex || !hasValidMeasurements) return null;

  const result = getWaistHipResult(input.sex, input.waist, input.hip);
  return result ? { input, result } : null;
}

export function WaistHipResultClient() {
  const [isReady, setIsReady] = useState(false);
  const [data, setData] = useState<ValidWaistHipResult | null>(null);

  useEffect(() => {
    const stored = readCalculatorResult<WaistHipInput, WaistHipResult>("waistHip");
    setData(stored ? recalculate(stored.input) : null);
    setIsReady(true);
  }, []);

  function handleResult(formResult: WaistHipFormResult) {
    const input = {
      sex: formResult.sex,
      waist: formResult.waist,
      hip: formResult.hip
    };
    const recalculated = recalculate(input);
    if (!recalculated) return;
    saveCalculatorResult("waistHip", input, recalculated.result);
    setData(recalculated);
  }

  if (!isReady) {
    return <div className="min-h-48 animate-pulse rounded-[24px] bg-mist" aria-label="Carregando resultado" />;
  }

  if (!data) {
    return (
      <div className="rounded-[24px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Calcule agora</p>
        <h2 className="mb-3 text-2xl font-semibold text-deep">Informe suas medidas</h2>
        <p className="mb-5 text-sm leading-6 text-graphite">
          Não encontramos um resultado temporário nesta sessão. Preencha os dados para gerar uma nova estimativa.
        </p>
        <WaistHipForm onResult={handleResult} compact />
      </div>
    );
  }

  const { input, result } = data;
  const isFavorable = result.status === "menor-risco";

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <CalculatorResultSummary
          title="Sua relação cintura-quadril"
          value={result.formattedValue}
          classification={result.classification}
          description="Indicador inicial calculado a partir das medidas informadas."
        />
        <div className="rounded-[24px] border border-deep/10 bg-white p-5 shadow-soft sm:p-7">
          <h2 className="text-2xl font-semibold text-deep">
            {isFavorable
              ? "Sua medida está em uma faixa mais favorável"
              : "Sua medida pode indicar maior atenção à gordura abdominal"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-graphite">
            {isFavorable
              ? "Esse resultado é positivo, mas não avalia sozinho composição corporal, exames, sono, alimentação, rotina de treino ou saúde metabólica."
              : "Uma relação cintura-quadril elevada pode estar associada a maior acúmulo de gordura abdominal, que pode se relacionar com pressão alta, resistência à insulina, diabetes tipo 2, alterações de colesterol, gordura no fígado, apneia do sono e maior risco cardiovascular."}
          </p>
          <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-subtle bg-mist p-3">
              <dt className="text-graphite">Sexo</dt>
              <dd className="mt-1 font-semibold capitalize text-deep">{input.sex}</dd>
            </div>
            <div className="rounded-subtle bg-mist p-3">
              <dt className="text-graphite">Cintura</dt>
              <dd className="mt-1 font-semibold text-deep">{formatHealthDecimal(input.waist)} cm</dd>
            </div>
            <div className="rounded-subtle bg-mist p-3">
              <dt className="text-graphite">Quadril</dt>
              <dd className="mt-1 font-semibold text-deep">{formatHealthDecimal(input.hip)} cm</dd>
            </div>
          </dl>
        </div>
      </div>

      <p className="text-base leading-7 text-graphite">
        A relação cintura-quadril é um indicador inicial relacionado à distribuição de gordura corporal, especialmente na região abdominal. Ela não substitui avaliação médica e depende da medição correta.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="https://wa.me/552422459374" className="w-full sm:w-auto">Quero entender meu resultado</ButtonLink>
        <ButtonLink href="/anamnese" variant="secondary" className="w-full sm:w-auto">Preencher anamnese completa</ButtonLink>
      </div>

      <section className="rounded-[24px] bg-deep p-6 text-white sm:p-8">
        <h2 className="text-2xl font-semibold">Como o Dr. Pedro pode ajudar</h2>
        <p className="mt-3 max-w-3xl leading-7 text-white/80">
          Com avaliação médica, exames e análise da rotina, é possível interpretar esse indicador junto com outros dados de saúde e entender quais pontos merecem acompanhamento.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-deep">Conheça outras ferramentas</h2>
        <OtherCalculators current="waistHip" />
      </section>
    </div>
  );
}
