import Image from "next/image";
import type { ReactNode } from "react";
import { ClockIcon, InstagramIcon, MapPinIcon, WhatsAppIcon } from "@/components/Icons";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import { doctor } from "@/data/site";

export function LocationSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="overflow-hidden rounded-[24px] border border-deep/10 bg-white shadow-soft">
        <Image
          src="/images/fachada-consultorio.jpg"
          alt="Fachada do local de atendimento"
          width={1400}
          height={875}
          className="aspect-[16/10] w-full object-cover"
        />
        <div className="p-7">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Localização</p>
          <h2 className="text-3xl font-semibold text-ink">Atendimento em ambiente médico</h2>
          <div className="mt-6 grid gap-4 text-[0.96rem] leading-7 text-graphite">
            <InfoLine icon={<MapPinIcon className="h-5 w-5" />} text={doctor.location} />
            <InfoLine icon={<ClockIcon className="h-5 w-5" />} text={doctor.hours} />
            <TrackedWhatsAppLink href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex gap-3 rounded-subtle border border-deep/10 bg-pearl p-4 font-semibold text-petrol transition hover:-translate-y-0.5 hover:border-gold/45 hover:bg-white hover:shadow-soft">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-deep text-white transition group-hover:bg-petrol">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span className="pt-1">{doctor.whatsapp}</span>
            </TrackedWhatsAppLink>
            <InfoLine icon={<InstagramIcon className="h-5 w-5" />} text={`Instagram: ${doctor.instagram}`} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-[24px] border border-deep/10 bg-white shadow-soft">
        <iframe
          title="Mapa do consultório do Dr. Pedro Machado"
          src={mapSrc}
          className="h-full min-h-[420px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

function InfoLine({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex gap-3 rounded-subtle border border-deep/10 bg-pearl p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist text-deep">{icon}</span>
      <p className="pt-1">{text}</p>
    </div>
  );
}
