import Image from "next/image";
import Link from "next/link";
import { doctor, navItems, services } from "@/data/site";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-petrol/12 bg-linen/94 shadow-[0_8px_28px_rgba(15,76,92,0.07)] backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-4 lg:min-h-[4.25rem] lg:gap-6">
        <Link href="/" className="focus-ring flex items-center gap-3" aria-label="Ir para a página inicial">
          <Image
            src="/images/logo-dr-pedro-machado-nav.png"
            alt="Logo Dr. Pedro Machado"
            width={420}
            height={40}
            className="h-5 w-auto object-contain sm:h-7 lg:h-8"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-graphite lg:flex" aria-label="Navegação principal">
          {navItems.map((item) =>
            item.href === "/servicos" ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className="focus-ring transition hover:text-petrol">
                  {item.label}
                </Link>
                <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-subtle border border-petrol/10 bg-linen p-3 shadow-soft">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/servicos/${service.slug}`}
                        className="focus-ring block rounded-subtle px-3 py-2 text-sm text-graphite transition hover:bg-sage/20 hover:text-petrol"
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="focus-ring transition hover:text-petrol">
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href={doctor.whatsappUrl}>Agendar consulta</ButtonLink>
        </div>
        <details className="relative lg:hidden">
          <summary className="focus-ring flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-subtle border border-petrol/15 bg-sand/45 text-petrol sm:h-11 sm:w-11">
            <span className="sr-only">Abrir menu</span>
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-[calc(100vw-2rem)] max-w-72 rounded-subtle border border-petrol/10 bg-linen p-3 shadow-soft sm:mt-4 sm:p-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring block rounded-subtle px-3 py-3 text-sm font-medium text-graphite hover:bg-mist">
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </Container>
    </header>
  );
}
