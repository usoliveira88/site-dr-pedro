import { StarIcon } from "@/components/Icons";
import { googleReviews } from "@/data/site";

export function GoogleReviews() {
  return (
    <div className="rounded-[28px] border border-deep/10 bg-white p-7 shadow-soft sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{googleReviews.sourceLabel}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">Espaço preparado para avaliações reais</h2>
          <p className="mt-5 text-[1.03rem] leading-8 text-graphite">
            Estrutura pronta para receber nota média, quantidade de avaliações e depoimentos reais autorizados.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-subtle bg-deep p-5 text-white">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-5 w-5" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/74">{googleReviews.ratingLabel}</p>
            </div>
            <div className="rounded-subtle border border-deep/10 bg-pearl p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-petrol">Volume</p>
              <p className="mt-4 text-sm leading-6 text-graphite">{googleReviews.totalLabel}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {googleReviews.items.map((review, index) => (
            <div key={`${review.name}-${index}`} className="rounded-subtle border border-deep/10 bg-pearl p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white hover:shadow-soft">
              <div className="mb-3 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={starIndex} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-sm leading-7 text-graphite">{review.text}</p>
              <p className="mt-4 text-sm font-semibold text-deep">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
