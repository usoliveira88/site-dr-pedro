"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildWhatsAppUrl, KORPER_WHATSAPP_MESSAGE } from "@/data/site";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const usesCustomChrome = pathname === "/korper" || pathname.startsWith("/korper/");

  return (
    <>
      {usesCustomChrome ? null : <Header />}
      <main>{children}</main>
      {usesCustomChrome ? <WhatsAppButton href={buildWhatsAppUrl(KORPER_WHATSAPP_MESSAGE)} /> : (
        <>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
