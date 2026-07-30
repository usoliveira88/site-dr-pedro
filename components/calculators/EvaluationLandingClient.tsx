"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BmiForm, type BmiFormResult } from "@/components/calculators/BmiForm";
import { CalculatorSelector, type CalculatorType } from "@/components/calculators/CalculatorSelector";
import { CalorieForm, type CalorieFormResult } from "@/components/calculators/CalorieForm";
import { WaistHipForm, type WaistHipFormResult } from "@/components/calculators/WaistHipForm";
import { saveCalculatorResult } from "@/components/calculators/calculatorSession";

const routes: Record<CalculatorType, string> = {
  bmi: "/avaliacao-inicial/imc",
  waistHip: "/avaliacao-inicial/relacao-cintura-quadril",
  calories: "/avaliacao-inicial/calorias"
};

export function EvaluationLandingClient() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<CalculatorType | null>(null);

  function selectCalculator(type: CalculatorType) {
    setSelected(type);
    window.setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }

  function completeBmi(result: BmiFormResult) {
    const input = { weight: result.weight, height: result.height };
    saveCalculatorResult("bmi", input, result);
    router.push(routes.bmi);
  }

  function completeWaistHip(result: WaistHipFormResult) {
    const input = { sex: result.sex, waist: result.waist, hip: result.hip };
    saveCalculatorResult("waistHip", input, result);
    router.push(routes.waistHip);
  }

  function completeCalories(result: CalorieFormResult) {
    const input = {
      sex: result.sex,
      age: result.age,
      weight: result.weight,
      height: result.height,
      activityLevel: result.activityLevel
    };
    saveCalculatorResult("calories", input, result);
    router.push(routes.calories);
  }

  return (
    <>
      <CalculatorSelector onSelectCalculator={selectCalculator} />

      {selected ? (
        <div ref={formRef} className="scroll-mt-28 rounded-[24px] border border-deep/10 bg-white p-5 shadow-soft sm:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Preencha seus dados</p>
          <h2 className="mb-5 text-2xl font-semibold leading-tight text-deep">
            {selected === "bmi"
              ? "Calcule seu IMC"
              : selected === "waistHip"
                ? "Calcule sua relação cintura-quadril"
                : "Calcule suas calorias estimadas"}
          </h2>
          {selected === "bmi" ? <BmiForm onResult={completeBmi} compact /> : null}
          {selected === "waistHip" ? <WaistHipForm onResult={completeWaistHip} compact /> : null}
          {selected === "calories" ? <CalorieForm onResult={completeCalories} compact /> : null}
        </div>
      ) : null}
    </>
  );
}
