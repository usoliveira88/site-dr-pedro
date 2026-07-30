"use client";

import { useEffect, useState } from "react";
import { BmiForm, type BmiFormResult } from "@/components/calculators/BmiForm";
import { CalculatorResultSummary } from "@/components/calculators/CalculatorResultSummary";
import { OtherCalculators } from "@/components/calculators/OtherCalculators";
import { readCalculatorResult, saveCalculatorResult } from "@/components/calculators/calculatorSession";
import { ButtonLink } from "@/components/ButtonLink";
import { formatHealthDecimal, getBmiResult, type BmiResult } from "@/lib/healthCalculators";

type BmiInput = {
  weight: number;
  height: number;
};

type ValidBmiResult = {
  input: BmiInput;
  result: BmiResult;
};

function recalculate(input: BmiInput): ValidBmiResult | null {
  const hasValidInput =
    Number.isFinite(input.weight) &&
    input.weight >= 20 &&
    input.weight <= 300 &&
    Number.isFinite(input.height) &&
    input.height >= 1 &&
    input.height <= 2.3;
  if (!hasValidInput) return null;

  const result = getBmiResult(input.weight, input.height);
  return result ? { input, result } : null;
}

export function BmiResultClient() {
  const [isReady, setIsReady] = useState(false);
  const [data, setData] = useState<ValidBmiResult | null>(null);

  useEffect(() => {
    const stored = readCalculatorResult<BmiInput, BmiResult>("bmi");
    setData(stored ? recalculate(stored.input) : null);
    setIsReady(true);
  }, []);

  function handleResult(formResult: BmiFormResult) {
    const input = { weight: formResult.weight, height: formResult.height };
    const recalculated = recalculate(input);
    if (!recalculated) return;
    saveCalculatorResult("bmi", input, recalculated.result);
    setData(recalculated);
  }

  if (!isReady) {
    return <div className="min-h-48 animate-pulse rounded-[24px] bg-mist" aria-label="Carregando resultado" />;
  }

  if (!data) {
    return (
      <div className="rounded-[24px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Calcule agora</p>
        <h2 className="mb-3 text-2xl font-semibold text-deep">Informe seu peso e sua altura</h2>
        <p className="mb-5 text-sm leading-6 text-graphite">
          Não encontramos um resultado temporário nesta sessão. Preencha os dados para gerar uma nova estimativa.
        </p>
        <BmiForm onResult={handleResult} compact />
      </div>
    );
  }

  const { input, result } = data;
  const isAdequate = result.status === "peso-adequado";
  const isLowWeight = result.status === "baixo-peso";
  const attentionTitle = isAdequate
    ? "Seu resultado está em uma faixa adequada"
    : isLowWeight
      ? "Seu resultado merece atenção"
      : "Seu resultado pode indicar pontos de atenção";
  const attentionText = isAdequate
    ? "Esse é um bom sinal inicial, mas ainda pode fazer sentido avaliar composição corporal, exames, rotina de treino, percentual de gordura, saúde hormonal e objetivos específicos."
    : isLowWeight
      ? "O IMC abaixo da faixa adequada pode ter diferentes causas e deve ser interpretado junto com histórico, alimentação, exames, sintomas e composição corporal."
      : "O excesso de peso pode estar associado a alterações como pressão alta, resistência à insulina, diabetes tipo 2, colesterol e triglicerídeos alterados, gordura no fígado, apneia do sono, dores articulares e maior risco cardiovascular. A interpretação depende do contexto clínico.";

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <CalculatorResultSummary
          title="Seu IMC calculado"
          value={result.formattedValue}
          classification={result.classification}
          description="Indicador inicial calculado a partir do peso e da altura informados."
        />
        <div className="rounded-[24px] border border-deep/10 bg-white p-5 shadow-soft sm:p-7">
          <h2 className="text-2xl font-semibold text-deep">{attentionTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-graphite">{attentionText}</p>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-subtle bg-mist p-3">
              <dt className="text-graphite">Peso informado</dt>
              <dd className="mt-1 font-semibold text-deep">{formatHealthDecimal(input.weight)} kg</dd>
            </div>
            <div className="rounded-subtle bg-mist p-3">
              <dt className="text-graphite">Altura informada</dt>
              <dd className="mt-1 font-semibold text-deep">{formatHealthDecimal(input.height, 2)} m</dd>
            </div>
          </dl>
        </div>
      </div>

      <p className="text-base leading-7 text-graphite">
        O IMC ajuda a observar a relação entre peso e altura, mas não mostra composição corporal, massa muscular, percentual de gordura, exames, rotina, sono ou saúde metabólica.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="https://wa.me/552422459374" className="w-full sm:w-auto">Quero entender meu resultado</ButtonLink>
        <ButtonLink href="/anamnese" variant="secondary" className="w-full sm:w-auto">Preencher anamnese completa</ButtonLink>
      </div>

      <section className="rounded-[24px] bg-deep p-6 text-white sm:p-8">
        <h2 className="text-2xl font-semibold">Como o Dr. Pedro pode ajudar</h2>
        <p className="mt-3 max-w-3xl leading-7 text-white/80">
          Com avaliação médica, exames e análise da rotina, o acompanhamento pode ajudar a entender se o seu resultado está relacionado a composição corporal, hábitos, metabolismo, saúde hormonal ou outros fatores que merecem investigação.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-deep">Conheça outras ferramentas</h2>
        <OtherCalculators current="bmi" />
      </section>
    </div>
  );
}
