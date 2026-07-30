"use client";

import { useId, useState } from "react";
import {
  getWaistHipResult,
  parseHealthNumber,
  type Sex,
  type WaistHipResult
} from "@/lib/healthCalculators";
import { CalculatorResultSummary } from "@/components/calculators/CalculatorResultSummary";

export type WaistHipFormResult = WaistHipResult & {
  sex: Sex;
  waist: number;
  hip: number;
};

type WaistHipFormProps = {
  onResult?: (resultData: WaistHipFormResult) => void;
  submitLabel?: string;
  compact?: boolean;
};

export function WaistHipForm({
  onResult,
  submitLabel = "Ver meu resultado inicial",
  compact = false
}: WaistHipFormProps) {
  const id = useId();
  const [sex, setSex] = useState<Sex | "">("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<WaistHipFormResult | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const numericWaist = parseHealthNumber(waist);
    const numericHip = parseHealthNumber(hip);
    const hasValidMeasurements =
      numericWaist >= 40 && numericWaist <= 250 && numericHip >= 40 && numericHip <= 250;

    if (!sex || !hasValidMeasurements) {
      setResult(null);
      setError("Selecione o sexo e informe cintura e quadril entre 40 e 250 cm.");
      return;
    }

    const waistHipResult = getWaistHipResult(sex, numericWaist, numericHip);
    if (!waistHipResult) {
      setResult(null);
      setError("Não foi possível calcular com os valores informados.");
      return;
    }

    const resultData = {
      ...waistHipResult,
      sex,
      waist: numericWaist,
      hip: numericHip
    };
    setError("");
    setResult(resultData);
    onResult?.(resultData);
  }

  const inputClass =
    "focus-ring min-h-12 w-full rounded-subtle border border-deep/15 bg-white px-4 text-base text-deep outline-none transition placeholder:text-graphite/50 hover:border-deep/30 focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-5"} noValidate>
      <p className="text-sm leading-6 text-graphite">
        Este indicador inicial depende do preenchimento correto das medidas de cintura e quadril.
      </p>

      <label htmlFor={`${id}-sex`} className="grid gap-2 text-sm font-semibold text-deep">
        Sexo
        <select
          id={`${id}-sex`}
          name="sex"
          value={sex}
          onChange={(event) => {
            setSex(event.target.value as Sex | "");
            setError("");
            setResult(null);
          }}
          className={inputClass}
          aria-describedby={error ? `${id}-error` : undefined}
        >
          <option value="">Selecione</option>
          <option value="homem">Homem</option>
          <option value="mulher">Mulher</option>
        </select>
      </label>

      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
        <label htmlFor={`${id}-waist`} className="grid gap-2 text-sm font-semibold text-deep">
          Cintura <span className="font-normal text-graphite">em cm</span>
          <input
            id={`${id}-waist`}
            name="waist"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={waist}
            onChange={(event) => {
              setWaist(event.target.value);
              setError("");
              setResult(null);
            }}
            placeholder="Ex.: 85"
            className={inputClass}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        </label>

        <label htmlFor={`${id}-hip`} className="grid gap-2 text-sm font-semibold text-deep">
          Quadril <span className="font-normal text-graphite">em cm</span>
          <input
            id={`${id}-hip`}
            name="hip"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={hip}
            onChange={(event) => {
              setHip(event.target.value);
              setError("");
              setResult(null);
            }}
            placeholder="Ex.: 100"
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
          title="Sua relação cintura-quadril estimada"
          value={result.formattedValue}
          classification={result.classification}
          description={result.description}
        />
      ) : null}
    </form>
  );
}
