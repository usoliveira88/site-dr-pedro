import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { doctor } from "@/data/site";

const siteUrl = "https://www.doutorpedromachado.com.br";

const homeTitle = "Médico do Emagrecimento em Petrópolis | Dr. Pedro Machado";
const homeDescription =
  "Dr. Pedro Machado é médico em Petrópolis com acompanhamento para emagrecimento, saúde hormonal, composição corporal, sobrepeso, obesidade e prevenção.";
const homeSocialDescription =
  "Conheça o acompanhamento médico do Dr. Pedro Machado em Petrópolis para emagrecimento, saúde hormonal, composição corporal e prevenção.";

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: "%s | Dr. Pedro Machado"
  },
  description: homeDescription,
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Dr. Pedro Machado" }],
  creator: "Dr. Pedro Machado",
  publisher: "Dr. Pedro Machado",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    title: homeTitle,
    description: homeSocialDescription,
    url: "/",
    siteName: "Dr. Pedro Machado",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeSocialDescription
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
