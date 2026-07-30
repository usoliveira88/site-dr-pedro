"use client";

import { useRouter } from "next/navigation";
import type { CalculatorType } from "@/components/calculators/CalculatorSelector";

type OtherCalculatorsProps = {
  current: CalculatorType;
};

const calculatorOptions: Array<{
  type: CalculatorType;
  title: string;
  text: string;
  href: string;
}> = [
  {
    type: "bmi",
    title: "Calcular meu IMC",
    text: "Entenda sua faixa de peso em relação à altura.",
    href: "/avaliacao-inicial/imc"
  },
  {
    type: "waistHip",
    title: "Calcular cintura-quadril",
    text: "Observe um indicador relacionado à distribuição de gordura corporal.",
    href: "/avaliacao-inicial/relacao-cintura-quadril"
  },
  {
    type: "calories",
    title: "Calcular calorias estimadas",
    text: "Veja uma estimativa inicial do seu gasto energético diário.",
    href: "/avaliacao-inicial/calorias"
  }
];

export function OtherCalculators({ current }: OtherCalculatorsProps) {
  const router = useRouter();
  const options = calculatorOptions.filter((option) => option.type !== current);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {options.map((option) => (
        <article key={option.type} className="flex flex-col rounded-subtle border border-deep/10 bg-white p-5 shadow-soft">
          <h3 className="text-lg font-semibold text-deep">{option.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-graphite">{option.text}</p>
          <button
            type="button"
            onClick={() => router.push(option.href)}
            className="focus-ring mt-4 min-h-11 rounded-subtle border border-deep/15 bg-mist px-4 text-sm font-semibold text-deep transition hover:border-gold hover:bg-sand"
          >
            Avaliar agora
          </button>
        </article>
      ))}
    </div>
  );
}
