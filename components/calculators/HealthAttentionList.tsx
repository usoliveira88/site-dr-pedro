type HealthAttentionListProps = {
  title: string;
  introduction: string;
  items: string[];
  closing: string;
  tone?: "attention" | "positive" | "neutral";
};

const toneStyles = {
  attention: "border-gold/45 bg-sand/55",
  positive: "border-petrol/18 bg-mist",
  neutral: "border-deep/12 bg-white"
};

export function HealthAttentionList({
  title,
  introduction,
  items,
  closing,
  tone = "attention"
}: HealthAttentionListProps) {
  return (
    <section className={`rounded-[24px] border p-5 shadow-soft sm:p-7 ${toneStyles[tone]}`}>
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-gold bg-white shadow-[0_0_0_4px_rgba(184,145,73,0.12)]"
        />
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-deep">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-graphite sm:text-base">{introduction}</p>
        </div>
      </div>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex min-h-12 items-center gap-3 rounded-subtle border border-deep/8 bg-white/85 px-4 py-3 text-sm text-deep shadow-[0_7px_18px_rgba(2,37,61,0.04)] sm:text-base"
          >
            <span aria-hidden="true" className="text-lg leading-none text-gold">•</span>
            <strong className="font-semibold">{item}</strong>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-l-2 border-gold pl-4 text-sm font-medium leading-7 text-petrol sm:text-base">
        {closing}
      </p>
    </section>
  );
}
