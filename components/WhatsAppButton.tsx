import { doctor } from "@/data/site";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import styles from "./whatsappButton.module.css";

export function WhatsAppButton({ href = doctor.whatsappUrl }: { href?: string }) {
  return (
    <TrackedWhatsAppLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} focus-ring`}
      aria-label="Falar com a equipe pelo WhatsApp"
      title="Agendar pelo WhatsApp"
    >
      <svg
        width={36}
        height={36}
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
        className={styles.icon}
      >
        <path d="M16.03 3.2A12.67 12.67 0 0 0 5.18 22.4L3.5 28.53l6.27-1.64a12.66 12.66 0 1 0 6.26-23.69Zm0 22.96c-2.2 0-4.24-.7-5.91-1.89l-.43-.3-3.72.97.99-3.62-.32-.47a10.28 10.28 0 1 1 9.39 5.31Zm5.64-7.7c-.31-.15-1.83-.9-2.11-1.01-.28-.1-.49-.15-.69.16-.2.3-.79 1.01-.97 1.22-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53a9.28 9.28 0 0 1-1.72-2.14c-.18-.31-.02-.47.14-.63.14-.14.3-.36.46-.54.15-.18.2-.31.3-.51.11-.21.06-.39-.02-.54-.08-.16-.7-1.67-.95-2.29-.25-.6-.5-.52-.69-.53h-.59c-.21 0-.54.08-.82.39-.28.3-1.08 1.05-1.08 2.57s1.11 2.98 1.26 3.19c.16.2 2.18 3.32 5.27 4.66.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.08-1.47.26-.72.26-1.34.18-1.47-.07-.13-.28-.2-.59-.36Z" />
      </svg>
    </TrackedWhatsAppLink>
  );
}
