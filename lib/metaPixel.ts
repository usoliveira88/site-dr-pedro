export type MetaEventParams = Partial<
  Record<"page" | "button" | "calculator" | "location" | "content_name", string>
>;

export type MetaCustomEventName =
  | "WhatsAppClick"
  | "CalculatorStart"
  | "CalculatorResult"
  | "AnamneseStart"
  | "AnamneseSubmit"
  | "ResultCtaClick";

type MetaStandardEventName = "PageView" | "Lead";
type Fbq = (command: "track" | "trackCustom", eventName: string, params?: MetaEventParams) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

const allowedParamKeys = ["page", "button", "calculator", "location", "content_name"] as const;

function getSafeParams(params?: MetaEventParams): MetaEventParams | undefined {
  if (!params) return undefined;

  const safeParams: MetaEventParams = {};

  for (const key of allowedParamKeys) {
    const value = params[key];

    if (typeof value === "string" && value.trim()) {
      safeParams[key] = value;
    }
  }

  return Object.keys(safeParams).length ? safeParams : undefined;
}

function dispatchMetaEvent(
  command: "track" | "trackCustom",
  eventName: MetaStandardEventName | MetaCustomEventName,
  params?: MetaEventParams
): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  try {
    const safeParams = getSafeParams(params);

    if (safeParams) {
      window.fbq(command, eventName, safeParams);
      return;
    }

    window.fbq(command, eventName);
  } catch {
    // Tracking must never interrupt the user experience.
  }
}

export function trackMetaEvent(eventName: MetaStandardEventName, params?: MetaEventParams): void {
  dispatchMetaEvent("track", eventName, params);
}

export function trackCustomEvent(eventName: MetaCustomEventName, params?: MetaEventParams): void {
  dispatchMetaEvent("trackCustom", eventName, params);
}

export function trackLead(params?: MetaEventParams): void {
  trackMetaEvent("Lead", params);
}

