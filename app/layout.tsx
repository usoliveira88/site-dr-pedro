import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { doctor } from "@/data/site";

const siteUrl = "https://doutorpedromachado.com.br";

export const metadata: Metadata = {
  title: {
    default: "Dr. Pedro Machado | Site institucional",
    template: "%s | Dr. Pedro Machado"
  },
  description:
    "Dr. Pedro Machado, médico em Petrópolis. Acompanhamento médico para emagrecimento, saúde hormonal, composição corporal e prevenção.",
  metadataBase: new URL(siteUrl),
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
    url: siteUrl
  };

  return (
    <html lang="pt-BR">
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2127573711299466');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2127573711299466&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
