export type LandingEventName =
  | "lp_view"
  | "hero_cta_click"
  | "mid_page_cta_click"
  | "korper_section_cta_click"
  | "final_cta_click"
  | "whatsapp_click";

export function trackLandingEvent(eventName: LandingEventName): void {
  if (typeof window === "undefined") return;

  try {
    window.dispatchEvent(
      new CustomEvent("landing:analytics", {
        detail: { event: eventName }
      })
    );
  } catch {
    // Analytics must never interrupt navigation or the appointment flow.
  }
}
