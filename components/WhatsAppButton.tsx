import { doctor } from "@/data/site";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import { WhatsAppIcon } from "@/components/Icons";

export function WhatsAppButton() {
  return (
    <TrackedWhatsAppLink
      href={doctor.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(18,140,82,0.34)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_16px_36px_rgba(18,140,82,0.4)] active:translate-y-0 active:scale-100 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      aria-label="Falar com a equipe pelo WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </TrackedWhatsAppLink>
  );
}
