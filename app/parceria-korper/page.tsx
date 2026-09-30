import type { Metadata } from "next";

export { default } from "../korper/page";

const title = "Dr. Pedro Machado + Körper | Saúde, Composição Corporal e Performance";
const description = "Acompanhamento médico individualizado do Dr. Pedro Machado em parceria com a Körper Academia.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/parceria-korper" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "/parceria-korper",
    type: "website",
    locale: "pt_BR"
  },
  twitter: { card: "summary_large_image", title, description }
};
