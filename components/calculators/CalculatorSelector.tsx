"use client";

export type CalculatorType = "bmi" | "waistHip" | "calories";

type CalculatorSelectorProps = {
  onSelectCalculator: (type: CalculatorType) => void;
  compact?: boolean;
};

const calculators: Array<{
  type: CalculatorType;
  title: string;
  text: string;
}> = [
  {
    type: "bmi",
    title: "Calcular meu IMC",
    text: "Entenda sua faixa de peso em relação à altura."
  },
  {
    type: "waistHip",
    title: "Calcular cintura-quadril",
    text: "Avalie um indicador relacionado à distribuição de gordura corporal."
  },
  {
    type: "calories",
    title: "Calcular calorias estimadas",
    text: "Veja uma estimativa inicial das suas necessidades calóricas diárias."
  }
];

export function CalculatorSelector({ onSelectCalculator, compact = false }: CalculatorSelectorProps) {
  return (
    <div className={`grid ${compact ? "gap-3" : "gap-4 md:grid-cols-3"}`} role="list" aria-label="Calculadoras disponíveis">
      {calculators.map((calculator) => (
        <article
          key={calculator.type}
          role="listitem"
          className={`flex flex-col rounded-subtle border border-deep/10 bg-white shadow-[0_10px_28px_rgba(2,37,61,0.06)] ${
            compact ? "p-4" : "p-5"
          }`}
        >
          <h3 className="text-lg font-semibold leading-tight text-deep">{calculator.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-graphite">{calculator.text}</p>
          <button
            type="button"
            onClick={() => onSelectCalculator(calculator.type)}
            className="focus-ring mt-4 min-h-11 w-full rounded-subtle border border-deep/15 bg-mist px-4 text-sm font-semibold text-deep transition hover:-translate-y-0.5 hover:border-gold hover:bg-sand"
            aria-label={`${calculator.title}: avaliar agora`}
          >
            Avaliar agora
          </button>
        </article>
      ))}
    </div>
  );
}
