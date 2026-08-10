"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackCustomEvent, trackLead } from "@/lib/metaPixel";

const whatsappNumber = "552422459374";

type TrackedWhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  trackingButton?: string;
  trackingLocation?: string;
};

function isTrackedWhatsAppUrl(href: string): boolean {
  return href.replace(/\D/g, "").includes(whatsappNumber);
}

function normalizeLabel(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80);
}

export function TrackedWhatsAppLink({
  href,
  children,
  trackingButton,
  trackingLocation = "site",
  onClick,
  ...anchorProps
}: TrackedWhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>): void {
    onClick?.(event);

    if (!isTrackedWhatsAppUrl(href)) return;

    const childLabel = typeof children === "string" ? children : "whatsapp";
    const button = normalizeLabel(trackingButton ?? anchorProps["aria-label"] ?? childLabel) || "whatsapp";

    trackCustomEvent("WhatsAppClick", {
      page: window.location.pathname,
      button,
      location: trackingLocation
    });
    trackLead({ content_name: "whatsapp_click" });
  }

  return (
    <a href={href} onClick={handleClick} {...anchorProps}>
      {children}
    </a>
  );
}
