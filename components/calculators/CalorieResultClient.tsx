"use client";

import { useEffect, useState } from "react";
import { CalorieForm, type CalorieFormResult } from "@/components/calculators/CalorieForm";
import { CalculatorResultSummary } from "@/components/calculators/CalculatorResultSummary";
import { HealthAttentionList } from "@/components/calculators/HealthAttentionList";
import { OtherCalculators } from "@/components/calculators/OtherCalculators";
import { readCalculatorResult, saveCalculatorResult } from "@/components/calculators/calculatorSession";
import { ButtonLink } from "@/components/ButtonLink";
import {
  calculateCaloriesEstimate,
  formatHealthDecimal,
  type ActivityLevel,
  type CalorieResult,
  type Sex
} from "@/lib/healthCalculators";

type CalorieInput = {
  sex: Sex;
  age: number;
  weight: number;
  height: number;
  activityLevel: ActivityLevel;
};

type ValidCalorieResult = {
  input: CalorieInput;
  result: CalorieResult;
};

function recalculate(input: CalorieInput): ValidCalorieResult | null {
  const result = calculateCaloriesEstimate(input);
  return result ? { input, result } : null;
}

const attentionItems = [
  "Objetivo atual",
  "Histórico de efeito sanfona",
  "Preservação de massa muscular",
  "Rotina de treino",
  "Sono e recuperação",
  "Exames metabólicos",
  "Saúde hormonal",
  "Uso de medicamentos",
  "Fome, saciedade e adesão ao plano"
];

export function CalorieResultClient() {
  const [isReady, setIsReady] = useState(false);
  const [data, setData] = useState<ValidCalorieResult | null>(null);

  useEffect(() => {
    const stored = readCalculatorResult<CalorieInput, CalorieResult>("calories");
    setData(stored ? recalculate(stored.input) : null);
    setIsReady(true);
  }, []);

  function handleResult(formResult: CalorieFormResult) {
    const input = {
      sex: formResult.sex,
      age: formResult.age,
      weight: formResult.weight,
      height: formResult.height,
      activityLevel: formResult.activityLevel
    };
    const recalculated = recalculate(input);
    if (!recalculated) return;
    saveCalculatorResult("calories", input, recalculated.result);
    setData(recalculated);
  }

  if (!isReady) {
    return <div className="min-h-48 animate-pulse rounded-[24px] bg-mist" aria-label="Carregando resultado" />;
  }

  if (!data) {
    return (
      <div className="rounded-[24px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Calcule agora</p>
        <h2 className="mb-3 text-2xl font-semibold text-deep">Informe seus dados e sua rotina</h2>
        <p className="mb-5 text-sm leading-6 text-graphite">
          Não encontramos um resultado temporário nesta sessão. Preencha os dados para gerar uma nova estimativa.
        </p>
        <CalorieForm onResult={handleResult} compact />
      </div>
    );
  }

  const { input, result } = data;

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <CalculatorResultSummary
          title="Gasto energético diário estimado"
          value={`${result.formattedTdee} kcal/dia`}
          secondaryValue={{
            label: "Taxa metabólica basal estimada",
            value: `${result.formattedBmr} kcal/dia`
          }}
          description="Estimativa calculada a partir dos dados e do nível de atividade informados."
        />
        <div className="rounded-[24px] border border-deep/10 bg-white p-5 shadow-soft sm:p-7">
          <h2 className="text-2xl font-semibold text-deep">Seus dados informados</h2>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-subtle bg-mist p-3"><dt className="text-graphite">Idade</dt><dd className="mt-1 font-semibold text-deep">{input.age} anos</dd></div>
            <div className="rounded-subtle bg-mist p-3"><dt className="text-graphite">Peso</dt><dd className="mt-1 font-semibold text-deep">{formatHealthDecimal(input.weight)} kg</dd></div>
            <div className="rounded-subtle bg-mist p-3"><dt className="text-graphite">Altura</dt><dd className="mt-1 font-semibold text-deep">{formatHealthDecimal(input.height)} cm</dd></div>
            <div className="rounded-subtle bg-mist p-3"><dt className="text-graphite">Sexo</dt><dd className="mt-1 font-semibold capitalize text-deep">{input.sex}</dd></div>
            <div className="col-span-2 rounded-subtle bg-mist p-3"><dt className="text-graphite">Atividade</dt><dd className="mt-1 font-semibold text-deep">{result.activityLabel} · fator {String(result.activityFactor).replace(".", ",")}</dd></div>
          </dl>
        </div>
      </div>

      <p className="text-base leading-7 text-graphite">
        Esse número é uma estimativa inicial do gasto energético diário. Ele deve ser interpretado como ponto de partida e junto de uma avaliação médica individualizada.
      </p>

      <HealthAttentionList
        title="Antes de pensar em calorias, é preciso olhar o contexto"
        introduction="A estimativa calórica é apenas um ponto de partida. Para emagrecer, ganhar massa muscular ou melhorar a composição corporal com segurança, outros fatores precisam ser avaliados."
        items={attentionItems}
        closing="Seguir um número de calorias sem considerar esses fatores pode dificultar a manutenção dos resultados e aumentar o risco de estratégias inadequadas."
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="https://wa.me/552422459374?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20consulta%20com%20o%20Dr.%20Pedro." className="w-full sm:w-auto">Quero avaliar minha estratégia</ButtonLink>
        <ButtonLink href="/anamnese" variant="secondary" className="w-full sm:w-auto">Preencher anamnese completa</ButtonLink>
      </div>

      <section className="rounded-[24px] bg-deep p-6 text-white sm:p-8">
        <h2 className="text-2xl font-semibold">Como o Dr. Pedro pode ajudar</h2>
        <p className="mt-3 max-w-3xl leading-7 text-white/80">
          Com avaliação médica, exames e análise da rotina, o acompanhamento pode ajudar a entender se a sua estratégia atual faz sentido para seu objetivo e quais ajustes precisam ser considerados com segurança.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-deep">Conheça outras ferramentas</h2>
        <OtherCalculators current="calories" />
      </section>
    </div>
  );
}
