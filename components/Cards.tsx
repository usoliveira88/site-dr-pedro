import Link from "next/link";
import { Service } from "@/data/site";

export function PatientNeedCard({ text, index }: { text: string; index: number }) {
  return (
    <div className="group rounded-subtle border border-deep/10 bg-white p-6 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-deep hover:shadow-lift">
      <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-mist text-sm font-semibold text-petrol transition group-hover:bg-white/10 group-hover:text-gold">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-base leading-7 text-ink transition group-hover:text-white">{text}</p>
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className="focus-ring group flex h-full flex-col rounded-subtle border border-deep/10 bg-white p-6 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-deep hover:shadow-lift"
    >
      <span className="mb-5 h-px w-12 bg-gold transition duration-300 group-hover:w-20" />
      <h3 className="text-xl font-semibold text-ink transition group-hover:text-white">{service.shortTitle}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-graphite transition group-hover:text-white/78">{service.description}</p>
      <span className="mt-6 text-sm font-semibold text-petrol transition group-hover:text-white">Entender acompanhamento</span>
    </Link>
  );
}

export function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group rounded-subtle border border-deep/10 bg-white p-6 shadow-[0_10px_32px_rgba(2,37,61,0.07)] transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-deep hover:shadow-lift">
      <h3 className="text-lg font-semibold text-ink transition group-hover:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-graphite transition group-hover:text-white/78">{text}</p>
    </div>
  );
}
