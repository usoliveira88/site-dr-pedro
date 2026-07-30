"use client";

import { useId, useState } from "react";
import {
  activityLevels,
  calculateCaloriesEstimate,
  parseHealthNumber,
  type ActivityLevel,
  type CalorieResult,
  type Sex
} from "@/lib/healthCalculators";
import { CalculatorResultSummary } from "@/components/calculators/CalculatorResultSummary";

export type CalorieFormResult = CalorieResult & {
  activityLevel: ActivityLevel;
};

type CalorieFormProps = {
  onResult?: (resultData: CalorieFormResult) => void;
  submitLabel?: string;
  compact?: boolean;
};

export function CalorieForm({
  onResult,
  submitLabel = "Ver minha estimativa",
  compact = false
}: CalorieFormProps) {
  const id = useId();
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState<Sex | "">("");
  const [activityLevel, setActivityLevel] = useState<ActivityLevel | "">("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<CalorieResult | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!sex || !activityLevel) {
      setResult(null);
      setError("Selecione o sexo e o nível de atividade física.");
      return;
    }

    const resultData = calculateCaloriesEstimate({
      sex,
      age: parseHealthNumber(age),
      weight: parseHealthNumber(weight),
      height: parseHealthNumber(height),
      activityLevel
    });

    if (!resultData) {
      setResult(null);
      setError("Informe idade entre 10 e 100 anos, peso entre 20 e 300 kg e altura entre 100 e 230 cm.");
      return;
    }

    const formResult = { ...resultData, activityLevel };
    setError("");
    setResult(resultData);
    onResult?.(formResult);
  }

  function clearFeedback() {
    setError("");
    setResult(null);
  }

  const inputClass =
    "focus-ring min-h-12 w-full rounded-subtle border border-deep/15 bg-white px-4 text-base text-deep outline-none transition placeholder:text-graphite/50 hover:border-deep/30 focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-5"} noValidate>
      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
        <label htmlFor={`${id}-age`} className="grid gap-2 text-sm font-semibold text-deep">
          Idade <span className="font-normal text-graphite">em anos</span>
          <input
            id={`${id}-age`}
            name="age"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
              clearFeedback();
            }}
            placeholder="Ex.: 35"
            className={inputClass}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </label>

        <label htmlFor={`${id}-sex`} className="grid gap-2 text-sm font-semibold text-deep">
          Sexo
          <select
            id={`${id}-sex`}
            name="sex"
            value={sex}
            onChange={(event) => {
              setSex(event.target.value as Sex | "");
              clearFeedback();
            }}
            className={inputClass}
            aria-describedby={error ? `${id}-error` : undefined}
          >
            <option value="">Selecione</option>
            <option value="homem">Homem</option>
            <option value="mulher">Mulher</option>
          </select>
        </label>

        <label htmlFor={`${id}-weight`} className="grid gap-2 text-sm font-semibold text-deep">
          Peso <span className="font-normal text-graphite">em kg</span>
          <input
            id={`${id}-weight`}
            name="weight"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={weight}
            onChange={(event) => {
              setWeight(event.target.value);
              clearFeedback();
            }}
            placeholder="Ex.: 70"
            className={inputClass}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </label>

        <label htmlFor={`${id}-height`} className="grid gap-2 text-sm font-semibold text-deep">
          Altura <span className="font-normal text-graphite">em cm</span>
          <input
            id={`${id}-height`}
            name="height"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={height}
            onChange={(event) => {
              setHeight(event.target.value);
              clearFeedback();
            }}
            placeholder="Ex.: 170"
            className={inputClass}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </label>
      </div>

      <label htmlFor={`${id}-activity`} className="grid gap-2 text-sm font-semibold text-deep">
        Nível de atividade física
        <select
          id={`${id}-activity`}
          name="activityLevel"
          value={activityLevel}
          onChange={(event) => {
            setActivityLevel(event.target.value as ActivityLevel | "");
            clearFeedback();
          }}
          className={inputClass}
          aria-describedby={`${id}-activity-help${error ? ` ${id}-error` : ""}`}
        >
          <option value="">Selecione</option>
          {Object.entries(activityLevels).map(([key, activity]) => (
            <option key={key} value={key}>
              {activity.label}
            </option>
          ))}
        </select>
        <span id={`${id}-activity-help`} className="text-xs font-normal leading-5 text-graphite">
          {activityLevel
            ? activityLevels[activityLevel].description
            : "Escolha a opção que mais se aproxima da sua rotina habitual."}
        </span>
      </label>

      {error ? (
        <p id={`${id}-error`} role="alert" className="rounded-subtle border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="focus-ring min-h-12 w-full rounded-subtle bg-deep px-5 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift"
      >
        {submitLabel}
      </button>

      {result ? (
        <CalculatorResultSummary
          title="Gasto energético diário estimado"
          value={`${result.formattedTdee} kcal/dia`}
          secondaryValue={{
            label: "Taxa metabólica basal estimada",
            value: `${result.formattedBmr} kcal/dia`
          }}
          description="Uma estimativa baseada nos dados informados e um ponto de partida para uma avaliação individualizada."
        />
      ) : null}
    </form>
  );
}
