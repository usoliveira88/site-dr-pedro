import { Container } from "@/components/Container";

export function Section({
  children,
  className = "",
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section-reveal py-12 sm:py-20 lg:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-8 max-w-3xl sm:mb-10 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p> : null}
      <h2 className="text-[1.65rem] font-semibold leading-tight tracking-normal text-ink sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-graphite sm:text-lg sm:leading-8">{text}</p> : null}
    </div>
  );
}
