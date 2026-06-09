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
    "Dr. Pedro Machado, Médico Nutrólogo em Petrópolis. Acompanhamento médico para emagrecimento, saúde hormonal, composição corporal e prevenção.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Dr. Pedro Machado",
    description:
      "Médico Nutrólogo em Petrópolis, com acompanhamento individualizado para saúde metabólica, peso, composição corporal e qualidade de vida.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: doctor.name,
    description: `${doctor.role}. ${doctor.complementaryTraining}.`,
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
