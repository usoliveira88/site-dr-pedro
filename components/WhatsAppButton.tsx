import Image from "next/image";
import { doctor } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={doctor.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white p-1.5 shadow-[0_16px_42px_rgba(2,37,61,0.26)] ring-1 ring-white/70 transition duration-300 hover:-translate-y-0.5 hover:scale-105"
      aria-label="Falar com a equipe pelo WhatsApp"
    >
      <Image src="/images/whatsapp-icon.png" alt="" width={256} height={256} className="h-full w-full rounded-full object-cover" />
    </a>
  );
}
