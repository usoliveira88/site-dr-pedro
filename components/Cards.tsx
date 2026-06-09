import Link from "next/link";
import { Service } from "@/data/site";

export function PatientNeedCard({ text, index }: { text: string; index: number }) {
  return (
    <div className="rounded-subtle border border-petrol/10 bg-white p-6 shadow-[0_10px_32px_rgba(22,74,81,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft">
      <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-mist text-sm font-semibold text-petrol">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-base leading-7 text-ink">{text}</p>
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className="focus-ring group flex h-full flex-col rounded-subtle border border-petrol/10 bg-white p-6 shadow-[0_10px_32px_rgba(22,74,81,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft"
    >
      <span className="mb-5 h-px w-12 bg-gold transition duration-300 group-hover:w-20" />
      <h3 className="text-xl font-semibold text-ink">{service.shortTitle}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-graphite">{service.description}</p>
      <span className="mt-6 text-sm font-semibold text-petrol">Entender acompanhamento</span>
    </Link>
  );
}

export function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-subtle border border-petrol/10 bg-white p-6 shadow-[0_10px_32px_rgba(22,74,81,0.06)]">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-graphite">{text}</p>
    </div>
  );
}
