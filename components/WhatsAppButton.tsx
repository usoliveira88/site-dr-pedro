import { doctor } from "@/data/site";
import { WhatsAppIcon } from "@/components/Icons";

export function WhatsAppButton() {
  return (
    <a
      href={doctor.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-deep text-white shadow-[0_16px_42px_rgba(2,37,61,0.28)] ring-1 ring-white/50 transition duration-300 hover:-translate-y-0.5 hover:bg-petrol md:flex"
      aria-label="Falar com a equipe pelo WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
