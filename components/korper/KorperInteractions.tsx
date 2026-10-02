"use client";

import { useEffect } from "react";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import { trackLandingEvent, type LandingEventName } from "@/lib/landingAnalytics";

type KorperCtaProps = {
  href: string;
  eventName: LandingEventName;
  children: React.ReactNode;
  className: string;
  ariaLabel?: string;
};

export function WhatsAppIcon() {
  return <WhatsAppBrandIcon />;
}

export function WhatsAppBrandIcon() {
  return (
    <svg
      className="whatsappBrandIcon"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="12" fill="#25D366" stroke="none" />
      <path
        d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.1 7.7c.2-.4.4-.4.7-.4h.3c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.7 2.6.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.4-.8 2-.6.6-1.5.8-2.5.5-1.1-.3-2.5-.9-4.2-2.4-1.3-1.2-2.2-2.7-2.5-3.8-.4-1.3 0-2.2.4-2.9Z"
        fill="#fff"
        stroke="none"
      />
    </svg>
  );
}

export function KorperCta({ href, eventName, children, className, ariaLabel }: KorperCtaProps) {
  return (
    <TrackedWhatsAppLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        trackLandingEvent(eventName);
        trackLandingEvent("whatsapp_click");
      }}
    >
      {children}
    </TrackedWhatsAppLink>
  );
}

export function KorperViewTracker() {
  useEffect(() => {
    trackLandingEvent("lp_view");
  }, []);

  return null;
}

