import { doctor } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={doctor.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-4 right-4 z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-petrol text-xs font-semibold text-white shadow-[0_14px_36px_rgba(22,74,81,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-teal md:flex"
      aria-label="Falar com a equipe pelo WhatsApp"
    >
      WA
    </a>
  );
}
