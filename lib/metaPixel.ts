export type MetaEventParams = Partial<
  Record<"content_name" | "source", string>
>;

export type MetaContactParams = {
  content_name?: "website_contact";
  source?: "website";
};

export type MetaCustomEventName = "SiteInteraction";

type MetaStandardEventName = "PageView" | "Contact" | "Lead";
type Fbq = (command: "track" | "trackCustom", eventName: string, params?: MetaEventParams) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

const allowedParamKeys = ["content_name", "source"] as const;

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
): boolean {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return false;

  try {
    const safeParams = getSafeParams(params);

    if (safeParams) {
      window.fbq(command, eventName, safeParams);
      return true;
    }

    window.fbq(command, eventName);
    return true;
  } catch {
    // Tracking must never interrupt the user experience.
    return false;
  }
}

export function trackMetaEvent(eventName: MetaStandardEventName, params?: MetaEventParams): boolean {
  return dispatchMetaEvent("track", eventName, params);
}

export function trackCustomEvent(eventName: MetaCustomEventName, params?: MetaEventParams): boolean {
  return dispatchMetaEvent("trackCustom", eventName, params);
}

export function trackLead(params?: MetaEventParams): void {
  trackMetaEvent("Lead", params);
}

export function trackContact(params: MetaContactParams = {}): void {
  const contactParams: MetaEventParams = {
    content_name: params.content_name ?? "website_contact",
    source: params.source ?? "website"
  };

  if (trackMetaEvent("Contact", contactParams) || typeof window === "undefined") return;

  let attempts = 0;
  const retry = () => {
    attempts += 1;

    if (trackMetaEvent("Contact", contactParams) || attempts >= 4) return;

    window.setTimeout(retry, 200);
  };

  window.setTimeout(retry, 200);
}
