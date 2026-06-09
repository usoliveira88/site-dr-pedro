import { ButtonLink } from "@/components/ButtonLink";

export function CTASection({
  title = "Agende uma avaliação médica individualizada",
  text = "Texto provisório. Ajustar o canal oficial de contato e a mensagem final após validação da equipe."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <div className="rounded-[24px] bg-petrol p-8 text-white shadow-lift sm:p-10 lg:p-12">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">{text}</p>
        </div>
        <ButtonLink href="/contato" variant="secondary" className="bg-white">
          Ir para contato
        </ButtonLink>
      </div>
    </div>
  );
}
