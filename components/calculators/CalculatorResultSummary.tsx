type CalculatorResultSummaryProps = {
  title: string;
  value: string;
  classification?: string;
  description: string;
  secondaryValue?: {
    label: string;
    value: string;
  };
};

export function CalculatorResultSummary({
  title,
  value,
  classification,
  description,
  secondaryValue
}: CalculatorResultSummaryProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-subtle border border-gold/30 bg-sand/60 p-4 text-left shadow-[0_10px_24px_rgba(2,37,61,0.06)]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{title}</p>
      <p className="mt-2 text-3xl font-semibold leading-none text-deep">{value}</p>
      {classification ? <p className="mt-2 font-semibold text-petrol">{classification}</p> : null}
      {secondaryValue ? (
        <p className="mt-3 text-sm text-graphite">
          <span className="font-semibold text-deep">{secondaryValue.label}:</span> {secondaryValue.value}
        </p>
      ) : null}
      <p className="mt-3 text-sm leading-6 text-graphite">{description}</p>
    </div>
  );
}
