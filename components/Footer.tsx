import Link from "next/link";
import { Container } from "@/components/Container";
import { doctor, navItems, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-petrol/10 bg-ink text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xl font-semibold">{doctor.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/72">{doctor.role}</p>
          <p className="mt-5 text-sm text-white/64">{doctor.professionalId}</p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Páginas</p>
          <div className="grid gap-3 text-sm text-white/76">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Serviços</p>
          <div className="grid gap-3 text-sm text-white/76">
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`} className="transition hover:text-white">
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        Conteúdo provisório para revisão humana antes da publicação.
      </div>
    </footer>
  );
}
