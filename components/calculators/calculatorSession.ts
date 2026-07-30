import type { CalculatorType } from "@/components/calculators/CalculatorSelector";

const storageKeys: Record<CalculatorType, string> = {
  bmi: "drPedroCalculatorResult:bmi",
  waistHip: "drPedroCalculatorResult:waistHip",
  calories: "drPedroCalculatorResult:calories"
};

export type StoredCalculatorResult<TInput, TResult> = {
  calculatorType: CalculatorType;
  input: TInput;
  result: TResult;
  createdAt: string;
};

export function saveCalculatorResult<TInput, TResult>(
  calculatorType: CalculatorType,
  input: TInput,
  result: TResult
) {
  const payload: StoredCalculatorResult<TInput, TResult> = {
    calculatorType,
    input,
    result,
    createdAt: new Date().toISOString()
  };

  try {
    sessionStorage.setItem(storageKeys[calculatorType], JSON.stringify(payload));
  } catch {
    // The result page can still show its own form when browser storage is unavailable.
  }

  return payload;
}

export function readCalculatorResult<TInput, TResult>(calculatorType: CalculatorType) {
  try {
    const serialized = sessionStorage.getItem(storageKeys[calculatorType]);
    if (!serialized) return null;

    const parsed = JSON.parse(serialized) as StoredCalculatorResult<TInput, TResult>;
    if (
      parsed.calculatorType !== calculatorType ||
      !parsed.input ||
      !parsed.result ||
      typeof parsed.createdAt !== "string"
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}
