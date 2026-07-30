"use client";

import { useId, useState } from "react";
import {
  getBmiResult,
  normalizeHeight,
  parseHealthNumber,
  type BmiResult
} from "@/lib/healthCalculators";
import { CalculatorResultSummary } from "@/components/calculators/CalculatorResultSummary";

export type BmiFormResult = BmiResult & {
  weight: number;
  height: number;
};

type BmiFormProps = {
  onResult?: (resultData: BmiFormResult) => void;
  submitLabel?: string;
  compact?: boolean;
};

export function BmiForm({
  onResult,
  submitLabel = "Ver meu resultado inicial",
  compact = false
}: BmiFormProps) {
  const id = useId();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<BmiFormResult | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const numericWeight = parseHealthNumber(weight);
    const heightInMeters = normalizeHeight(height);
    const hasValidWeight = numericWeight >= 20 && numericWeight <= 300;
    const hasValidHeight = heightInMeters >= 1 && heightInMeters <= 2.3;

    if (!hasValidWeight || !hasValidHeight) {
      setResult(null);
      setError("Informe um peso entre 20 e 300 kg e uma altura entre 1,00 e 2,30 m, ou entre 100 e 230 cm.");
      return;
    }

    const bmiResult = getBmiResult(numericWeight, heightInMeters);
    if (!bmiResult) {
      setResult(null);
      setError("Não foi possível calcular com os valores informados.");
      return;
    }

    const resultData = { ...bmiResult, weight: numericWeight, height: heightInMeters };
    setError("");
    setResult(resultData);
    onResult?.(resultData);
  }

  const inputClass =
    "focus-ring min-h-12 w-full rounded-subtle border border-deep/15 bg-white px-4 text-base text-deep outline-none transition placeholder:text-graphite/50 hover:border-deep/30 focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-5"} noValidate>
      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
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
              setError("");
              setResult(null);
            }}
            placeholder="Ex.: 80"
            className={inputClass}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </label>

        <label htmlFor={`${id}-height`} className="grid gap-2 text-sm font-semibold text-deep">
          Altura <span className="font-normal text-graphite">em metros ou cm</span>
          <input
            id={`${id}-height`}
            name="height"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={height}
            onChange={(event) => {
              setHeight(event.target.value);
              setError("");
              setResult(null);
            }}
            placeholder="Ex.: 1,75 ou 175"
            className={inputClass}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </label>
      </div>

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
          title="Seu IMC estimado"
          value={result.formattedValue}
          classification={result.classification}
          description={result.description}
        />
      ) : null}
    </form>
  );
}
