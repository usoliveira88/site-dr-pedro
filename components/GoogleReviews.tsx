import { StarIcon } from "@/components/Icons";
import { googleReviews } from "@/data/site";

export function GoogleReviews() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-deep/10 bg-white p-7 shadow-soft sm:p-10">
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-gold/20" />
      <div className="pointer-events-none absolute bottom-8 left-10 h-px w-36 bg-gradient-to-r from-gold/55 to-transparent" />
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="inline-flex rounded-full border border-gold/30 bg-pearl px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {googleReviews.sourceLabel}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{googleReviews.title}</h2>
          <p className="mt-5 text-[1.03rem] leading-8 text-graphite">{googleReviews.intro}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {googleReviews.items.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="relative rounded-subtle border border-deep/10 bg-pearl p-5 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-soft"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex gap-1 text-gold" aria-label={`${review.rating} estrelas`}>
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="h-4 w-4" />
                  ))}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-petrol">Google</span>
              </div>
              <p className="text-sm leading-7 text-graphite">{renderHighlightedReview(review.text, review.highlights)}</p>
              <p className="mt-4 text-sm font-semibold text-deep">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function renderHighlightedReview(text: string, highlights: string[]) {
  if (!highlights.length) {
    return text;
  }

  const ordered = [...highlights].sort((a, b) => b.length - a.length);
  const escaped = ordered.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const matcher = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(matcher);

  return parts.map((part, index) => {
    const isHighlight = ordered.some((highlight) => highlight.toLowerCase() === part.toLowerCase());

    if (!isHighlight) {
      return part;
    }

    return (
      <strong key={`${part}-${index}`} className="font-semibold text-deep">
        {part}
      </strong>
    );
  });
}
