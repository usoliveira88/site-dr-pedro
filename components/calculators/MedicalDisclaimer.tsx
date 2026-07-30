type MedicalDisclaimerProps = {
  compact?: boolean;
  className?: string;
  text?: string;
};

const defaultText =
  "Este resultado é apenas uma estimativa inicial e não substitui avaliação médica individualizada. Indicadores como IMC, relação cintura-quadril e gasto calórico estimado devem ser interpretados junto com histórico, exames, sintomas, rotina e composição corporal.";

export function MedicalDisclaimer({ compact = false, className = "", text = defaultText }: MedicalDisclaimerProps) {
  return (
    <aside
      aria-label="Aviso sobre os resultados"
      className={`rounded-subtle border border-deep/10 bg-mist text-graphite ${compact ? "p-3 text-xs leading-5" : "p-4 text-sm leading-6"} ${className}`}
    >
      {text}
    </aside>
  );
}
