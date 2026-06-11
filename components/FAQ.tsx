export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-subtle border border-deep/10 bg-white p-5 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft">
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
            {item.question}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-petrol transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-graphite">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
