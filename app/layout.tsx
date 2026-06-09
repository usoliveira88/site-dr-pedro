import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Dr. Pedro Machado | Site institucional",
    template: "%s | Dr. Pedro Machado"
  },
  description:
    "Site institucional provisório para acompanhamento médico em emagrecimento, saúde hormonal, composição corporal e prevenção.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Dr. Pedro Machado",
    description:
      "Acompanhamento médico individualizado para peso, saúde hormonal, composição corporal e prevenção.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
