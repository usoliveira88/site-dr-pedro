import Image from "next/image";
import { doctor } from "@/data/site";

export function LocationSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(doctor.location)}&output=embed`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="overflow-hidden rounded-[24px] border border-petrol/10 bg-white shadow-soft">
        <Image
          src="/images/consultation-premium-placeholder.svg"
          alt="Imagem conceitual de ambiente médico premium"
          width={1200}
          height={860}
          className="aspect-[16/9] w-full object-cover"
        />
        <div className="p-7">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Localização</p>
          <h2 className="text-3xl font-semibold text-ink">Atendimento em ambiente médico</h2>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-graphite">
            <p>{doctor.location}</p>
            <p>{doctor.hours}</p>
            <a href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-petrol transition hover:text-teal">
              {doctor.whatsapp}
            </a>
            <p>Instagram: {doctor.instagram}</p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-[24px] border border-petrol/10 bg-white shadow-soft">
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
