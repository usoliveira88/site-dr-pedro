import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { doctor } from "@/data/site";

export function DoctorBio({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid items-center gap-10 rounded-[24px] border border-petrol/10 bg-white p-6 shadow-soft md:grid-cols-[0.82fr_1.18fr] lg:p-10">
      <div className="overflow-hidden rounded-[20px] bg-mist">
        <Image
          src="/images/dr-pedro-machado.jpg"
          alt="Foto do Dr. Pedro Machado"
          width={636}
          height={800}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Sobre o médico</p>
        <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{doctor.name}</h2>
        <p className="mt-3 text-sm font-medium text-petrol">{doctor.professionalId}</p>
        <div className="mt-5 grid gap-4 text-base leading-8 text-graphite">
          {(compact ? [doctor.bio] : doctor.fullBio.split("\n\n")).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-4 text-sm font-medium text-petrol">{doctor.complementaryTraining}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/sobre">Conhecer trajetória</ButtonLink>
          <ButtonLink href={doctor.whatsappUrl} variant="secondary">
            Agendar consulta
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
