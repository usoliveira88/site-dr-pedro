import Image from "next/image";
import { doctor } from "@/data/site";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";

export function WhatsAppButton() {
  return (
    <TrackedWhatsAppLink
      href={doctor.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white p-1.5 shadow-[0_14px_34px_rgba(2,37,61,0.24)] ring-1 ring-white/70 transition duration-300 hover:-translate-y-0.5 hover:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 sm:shadow-[0_16px_42px_rgba(2,37,61,0.26)]"
      aria-label="Falar com a equipe pelo WhatsApp"
      trackingButton="whatsapp_floating"
      trackingLocation="floating_button"
    >
      <Image src="/images/whatsapp-icon.png" alt="" width={256} height={256} className="h-full w-full rounded-full object-cover" />
    </TrackedWhatsAppLink>
  );
}
