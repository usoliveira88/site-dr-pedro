type IconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path d="M4.6 19.7l1-3.7A7.9 7.9 0 114.6 19.7Z" fill="currentColor" opacity=".16" />
      <path d="M6.3 17.7l.5-1.9a6.3 6.3 0 10-1.1-3.6 6.4 6.4 0 001 3.4l-.7 2.5 2.6-.7a6.3 6.3 0 002.9.7 6.3 6.3 0 003.2-11.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.4 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.3c.1.3.1.5-.1.7l-.4.5c.5.9 1.2 1.6 2.1 2.1l.6-.4c.2-.2.4-.2.7-.1l1.3.6c.3.1.4.3.4.6v.4c0 .4-.2.6-.5.8-.5.3-1.1.4-1.8.3-2.6-.4-4.9-2.7-5.3-5.3-.1-.7 0-1.3.3-1.8Z" fill="currentColor" />
    </svg>
  );
}

export function MapPinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s6-5.1 6-11a6 6 0 10-12 0c0 5.9 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function ClockIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.4l3 1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.3 7.8h.01" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 3.4l2.4 5 5.5.8-4 3.9.9 5.5-4.8-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 3.4Z" />
    </svg>
  );
}
