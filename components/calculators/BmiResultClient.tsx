"use client";

import { useEffect, useState } from "react";
import { BmiForm, type BmiFormResult } from "@/components/calculators/BmiForm";
import { CalculatorResultSummary } from "@/components/calculators/CalculatorResultSummary";
import { HealthAttentionList } from "@/components/calculators/HealthAttentionList";
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
    ? "Mesmo com IMC adequado, ele não mostra tudo"
    : isLowWeight
      ? "Pontos que merecem atenção"
      : "Pontos de atenção que merecem investigação";
  const attentionIntroduction = isAdequate
    ? "Seu resultado está em uma faixa adequada, mas o IMC não avalia sozinho a qualidade da composição corporal ou outros marcadores de saúde."
    : isLowWeight
      ? "O IMC abaixo da faixa adequada deve ser interpretado junto com sintomas, exames, rotina alimentar e composição corporal."
      : "O excesso de peso pode estar associado a alterações importantes de saúde. Isso não significa que você tenha alguma dessas condições, mas indica que vale investigar com acompanhamento médico.";
  const attentionItems = isAdequate
    ? [
        "Composição corporal",
        "Percentual de gordura",
        "Massa muscular",
        "Saúde hormonal",
        "Exames metabólicos",
        "Rotina de treino e alimentação",
        "Sono e disposição"
      ]
    : isLowWeight
      ? [
          "Alimentação insuficiente",
          "Perda de peso não intencional",
          "Baixa massa muscular",
          "Alterações hormonais",
          "Deficiências nutricionais",
          "Sintomas associados",
          "Histórico clínico"
        ]
      : [
          "Pressão alta",
          "Resistência à insulina",
          "Diabetes tipo 2",
          "Colesterol e triglicerídeos alterados",
          "Gordura no fígado",
          "Apneia do sono",
          "Dores articulares",
          "Maior risco cardiovascular"
        ];
  const attentionClosing = isAdequate
    ? "Uma avaliação médica pode ajudar a interpretar composição corporal, exames, rotina e objetivos específicos."
    : isLowWeight
      ? "Vale olhar com cuidado para o histórico, os sintomas e os fatores que podem estar relacionados a esse resultado."
      : "Se esse foi o seu resultado, talvez seja o momento de entender melhor seus exames, rotina, composição corporal e saúde metabólica.";

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
          <h2 className="text-2xl font-semibold text-deep">Dados usados no cálculo</h2>
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

      <HealthAttentionList
        title={attentionTitle}
        introduction={attentionIntroduction}
        items={attentionItems}
        closing={attentionClosing}
        tone={isAdequate ? "positive" : "attention"}
      />

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
