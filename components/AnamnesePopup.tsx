"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

const storageKey = "drPedroAnamnesePopupSeen";
const supportItems = ["Emagrecimento estético", "Sobrepeso e obesidade", "Saúde hormonal", "Hipertrofia", "Check-up da saúde"];

export function AnamnesePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const primaryLinkRef = useRef<HTMLAnchorElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let shouldShow = false;

    try {
      shouldShow = sessionStorage.getItem(storageKey) !== "true";
    } catch {
      shouldShow = true;
    }

    if (!shouldShow) return;

    const timer = window.setTimeout(() => {
      previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setIsOpen(true);

      try {
        sessionStorage.setItem(storageKey, "true");
      } catch {
        // If storage is unavailable, the popup still remains dismissible.
      }
    }, 1900);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    primaryLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePopup();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closePopup() {
    setIsOpen(false);
    window.setTimeout(() => previousFocusRef.current?.focus(), 0);
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-deep/38 px-4 py-6 backdrop-blur-[2px] sm:px-6"
      onMouseDown={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="anamnese-popup-title"
        className="section-reveal relative max-h-[calc(100vh-3rem)] w-full max-w-[38rem] overflow-y-auto rounded-[28px] border border-deep/18 bg-linen p-5 shadow-[0_28px_90px_rgba(2,37,61,0.24)] sm:p-7"
      >
        <div className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full border border-gold/25" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gold/70 via-deep/18 to-transparent" />
        <button
          type="button"
          onClick={closePopup}
          className="focus-ring absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-deep/10 bg-white p-0 text-deep shadow-[0_10px_26px_rgba(2,37,61,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-sand"
        >
          <span className="sr-only">Fechar avaliação inicial</span>
          <span aria-hidden="true" className="pointer-events-none block text-2xl leading-none">
            ×
          </span>
        </button>

        <div className="relative px-8 text-center sm:px-12">
          <p className="mb-4 inline-flex rounded-full border border-gold/35 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Avaliação inicial
          </p>
          <h2 id="anamnese-popup-title" className="text-[1.85rem] font-semibold leading-tight text-deep sm:text-[2.35rem]">
            Entenda como o Dr. Pedro pode ajudar você
          </h2>
          <p className="mt-4 text-base leading-7 text-graphite sm:text-[1.05rem] sm:leading-8">
            Descubra se o seu corpo está dando sinais de que precisa de mais atenção. A avaliação inicial gratuita reúne perguntas rápidas, cálculo de IMC e relação cintura-quadril para ajudar a equipe do Dr. Pedro Machado a entender seus objetivos e orientar o próximo passo do acompanhamento.
          </p>
        </div>

        <div className="relative mt-5 grid gap-2 sm:grid-cols-2">
          {supportItems.map((item) => (
            <div key={item} className="rounded-[14px] border border-deep/10 bg-white/80 px-4 py-3 text-center text-sm font-semibold text-petrol shadow-[0_10px_24px_rgba(2,37,61,0.05)]">
              <span className="mr-2 text-gold">•</span>
              {item}
            </div>
          ))}
        </div>

        <div className="relative mt-7 flex flex-col justify-center gap-3 text-center sm:flex-row">
          <Link
            ref={primaryLinkRef}
            href="/anamnese"
            onClick={closePopup}
            className="focus-ring inline-flex min-h-14 flex-1 items-center justify-center rounded-subtle bg-deep px-6 text-center text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift active:translate-y-0"
          >
            Começar avaliação gratuita
          </Link>
          <button
            type="button"
            onClick={closePopup}
            className="focus-ring inline-flex min-h-14 items-center justify-center rounded-subtle border border-deep/15 bg-white px-6 text-base font-semibold text-deep transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-sand"
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
}
