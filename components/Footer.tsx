import Link from "next/link";
import { Container } from "@/components/Container";
import { doctor, navItems, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep text-white">
      <Container className="grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-[1.25fr_0.85fr_0.9fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-white sm:text-xl">{doctor.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/72">{doctor.role}</p>
          <p className="mt-5 text-sm text-white/64">{doctor.professionalId}</p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Páginas</p>
          <div className="grid gap-3 text-sm text-white/82">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Serviços</p>
          <div className="grid gap-3 text-sm text-white/82">
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} href={`/servicos/${service.slug}`} className="transition hover:text-white">
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contato</p>
          <div className="grid gap-3 text-sm leading-6 text-white/82">
            <a href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              {doctor.phone}
            </a>
            <p>{doctor.instagram}</p>
            <p>{doctor.location}</p>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/12 px-5 py-5 text-center text-xs leading-5 text-white/64">
        Comunicação médica informativa, sem promessa de resultados. Consulte disponibilidade de atendimento.
      </div>
    </footer>
  );
}
