import { ButtonLink } from "@/components/ButtonLink";
import { doctor } from "@/data/site";

export function CTASection({
  title = "Agende uma avaliação médica individualizada",
  text = "Fale com a equipe para verificar disponibilidade de consulta e receber orientação sobre o próximo passo."
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
        <ButtonLink href={doctor.whatsappUrl} variant="secondary" className="bg-white">
          Agendar consulta
        </ButtonLink>
      </div>
    </div>
  );
}
