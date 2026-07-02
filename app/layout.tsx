import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { doctor } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: "Dr. Pedro Machado | Site institucional",
    template: "%s | Dr. Pedro Machado"
  },
  description:
    "Dr. Pedro Machado, médico em Petrópolis. Acompanhamento médico para emagrecimento, saúde hormonal, composição corporal e prevenção.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Dr. Pedro Machado",
    description:
      "Médico em Petrópolis, com acompanhamento individualizado para saúde metabólica, peso, composição corporal e qualidade de vida.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: doctor.name,
    description: `${doctor.role}. Atendimento médico individualizado em Petrópolis.`,
    telephone: doctor.phone,
    address: doctor.location,
    sameAs: [`https://www.instagram.com/${doctor.instagram.replace("@", "")}/`],
    url: "https://example.com"
  };

  return (
    <html lang="pt-BR">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
