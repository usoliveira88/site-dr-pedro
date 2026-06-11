import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CTASection } from "@/components/CTASection";
import { ClockIcon, InstagramIcon, MapPinIcon, WhatsAppIcon } from "@/components/Icons";
import { LocationSection } from "@/components/LocationSection";
import { Section, SectionHeading } from "@/components/Section";
import { doctor } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Informações provisórias de contato e localização para agendamento."
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-mist">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contato</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Agendamento e localização</h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            Fale com a equipe para verificar disponibilidade de consulta e receber orientação sobre o próximo passo.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <ContactCard title="WhatsApp" icon={<WhatsAppIcon className="h-5 w-5" />}>
            <a href={doctor.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-petrol transition hover:text-teal">
              {doctor.whatsapp}
            </a>
          </ContactCard>
          <ContactCard title="Endereço" icon={<MapPinIcon className="h-5 w-5" />}>
            {doctor.location}
          </ContactCard>
          <ContactCard title="Horários" icon={<ClockIcon className="h-5 w-5" />}>
            {doctor.hours}
          </ContactCard>
          <ContactCard title="Instagram" icon={<InstagramIcon className="h-5 w-5" />}>
            {doctor.instagram}
          </ContactCard>
        </div>
      </Section>
      <Section className="bg-linen">
        <SectionHeading title="Como chegar" text="Mapa baseado no endereço informado. Fotos reais do consultório podem substituir a imagem provisória quando estiverem disponíveis." />
        <LocationSection />
      </Section>
      <Section className="pt-0">
        <CTASection />
      </Section>
    </>
  );
}

function ContactCard({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div className="hover-ink-card rounded-subtle border border-deep/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1">
      <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-deep text-white">{icon}</span>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{title}</p>
      <div className="mt-4 text-base leading-7 text-graphite">{children}</div>
    </div>
  );
}
