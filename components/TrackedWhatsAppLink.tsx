"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackContact } from "@/lib/metaPixel";

const whatsappNumber = "552422459374";

type TrackedWhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

function isTrackedWhatsAppUrl(href: string): boolean {
  return href.replace(/\D/g, "").includes(whatsappNumber);
}

export function TrackedWhatsAppLink({
  href,
  children,
  onClick,
  ...anchorProps
}: TrackedWhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>): void {
    if (isTrackedWhatsAppUrl(href)) {
      trackContact({
        content_name: "website_contact",
        source: "website"
      });
    }

    onClick?.(event);
  }

  return (
    <a href={href} onClick={handleClick} {...anchorProps}>
      {children}
    </a>
  );
}
