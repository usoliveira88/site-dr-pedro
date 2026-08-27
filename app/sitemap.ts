import type { MetadataRoute } from "next";
import { services } from "@/data/site";

const siteUrl = "https://www.doutorpedromachado.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/sobre", changeFrequency: "monthly", priority: 0.8 },
    { path: "/servicos", changeFrequency: "weekly", priority: 0.9 },
    { path: "/anamnese", changeFrequency: "monthly", priority: 0.8 },
    { path: "/avaliacao-inicial", changeFrequency: "monthly", priority: 0.8 },
    { path: "/avaliacao-inicial/imc", changeFrequency: "monthly", priority: 0.8 },
    { path: "/avaliacao-inicial/relacao-cintura-quadril", changeFrequency: "monthly", priority: 0.8 },
    { path: "/avaliacao-inicial/calorias", changeFrequency: "monthly", priority: 0.8 },
    { path: "/artigos", changeFrequency: "weekly", priority: 0.7 },
    { path: "/testosterona-petropolis", changeFrequency: "monthly", priority: 0.7 },
    { path: "/artigos/efeitos-colaterais-canetas-emagrecedoras", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contato", changeFrequency: "monthly", priority: 0.7 }
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/servicos/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9
  }));

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${siteUrl}${path || "/"}`,
      lastModified,
      changeFrequency,
      priority
    })),
    ...serviceRoutes
  ];
}
