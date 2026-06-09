import { doctor } from "@/data/site";

export function LocationSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[24px] border border-petrol/10 bg-white p-7 shadow-soft">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Localização</p>
        <h2 className="text-3xl font-semibold text-ink">Atendimento em ambiente médico</h2>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-graphite">
          <p>{doctor.location}</p>
          <p>{doctor.hours}</p>
          <p>{doctor.whatsapp}</p>
        </div>
      </div>
      <div className="flex min-h-80 items-center justify-center rounded-[24px] border border-dashed border-petrol/20 bg-mist p-8 text-center text-sm font-medium leading-7 text-petrol">
        Placeholder de mapa e fotos do consultório.
        <br />
        Substituir por endereço validado, Google Maps e imagens autorizadas.
      </div>
    </div>
  );
}
