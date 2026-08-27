import type { Metadata } from "next";
import ArticlesPage from "@/app/artigos/page";

export const metadata: Metadata = {
  title: { absolute: "Artigos | Dr. Pedro Machado" },
  description:
    "Conteúdos sobre saúde metabólica, composição corporal, saúde hormonal, check-up e acompanhamento médico com o Dr. Pedro Machado em Petrópolis.",
  alternates: { canonical: "/artigos" }
};

export default ArticlesPage;
