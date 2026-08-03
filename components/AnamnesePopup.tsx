"use client";

import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { BmiForm, type BmiFormResult } from "@/components/calculators/BmiForm";
import { CalculatorSelector, type CalculatorType } from "@/components/calculators/CalculatorSelector";
import { CalorieForm, type CalorieFormResult } from "@/components/calculators/CalorieForm";
import { MedicalDisclaimer } from "@/components/calculators/MedicalDisclaimer";
import { WaistHipForm, type WaistHipFormResult } from "@/components/calculators/WaistHipForm";
import { saveCalculatorResult } from "@/components/calculators/calculatorSession";

const storageKey = "drPedroCalculatorPopupSeen";

const resultRoutes: Record<CalculatorType, string> = {
  bmi: "/avaliacao-inicial/imc",
  waistHip: "/avaliacao-inicial/relacao-cintura-quadril",
  calories: "/avaliacao-inicial/calorias"
};

export function AnamnesePopup() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<CalculatorType | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
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
      setSelected(null);
      setIsOpen(true);

      try {
        sessionStorage.setItem(storageKey, "true");
      } catch {
        // The popup remains dismissible when browser storage is unavailable.
      }
    }, 1900);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePopup();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closePopup() {
    setIsOpen(false);
    window.setTimeout(() => previousFocusRef.current?.focus(), 0);
  }

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) closePopup();
  }

  function finishCalculation(type: CalculatorType, input: object, result: object) {
    saveCalculatorResult(type, input, result);
    setIsOpen(false);
    router.push(resultRoutes[type]);
  }

  function handleBmiResult(result: BmiFormResult) {
    finishCalculation("bmi", { weight: result.weight, height: result.height }, result);
  }

  function handleWaistHipResult(result: WaistHipFormResult) {
    finishCalculation(
      "waistHip",
      { sex: result.sex, waist: result.waist, hip: result.hip },
      result
    );
  }

  function handleCalorieResult(result: CalorieFormResult) {
    finishCalculation(
      "calories",
      {
        sex: result.sex,
        age: result.age,
        weight: result.weight,
        height: result.height,
        activityLevel: result.activityLevel
      },
      result
    );
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-deep/40 px-3 py-4 backdrop-blur-[2px] sm:px-6 sm:py-6"
      onMouseDown={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="calculator-popup-title"
        className="section-reveal relative max-h-[calc(100vh-2rem)] w-full max-w-3xl overflow-x-hidden overflow-y-auto rounded-[28px] border border-deep/18 bg-linen p-4 shadow-[0_28px_90px_rgba(2,37,61,0.24)] sm:max-h-[calc(100vh-3rem)] sm:p-7"
      >
        <div className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full border border-gold/25" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-gold/70 via-deep/18 to-transparent" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Fechar ferramentas de avaliação inicial"
          className="focus-ring absolute right-3 top-3 z-30 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-deep/10 bg-white p-0 text-deep shadow-[0_10px_26px_rgba(2,37,61,0.08)] transition hover:-translate-y-0.5 hover:border-gold hover:bg-sand sm:right-4 sm:top-4"
        >
          <span aria-hidden="true" className="pointer-events-none block text-[1.75rem] leading-none">×</span>
        </button>

        <div className="relative pr-12">
          {selected ? (
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="focus-ring mb-4 inline-flex min-h-10 items-center rounded-subtle px-2 text-sm font-semibold text-petrol transition hover:bg-mist hover:text-deep"
            >
              <span aria-hidden="true" className="mr-2">←</span>
              Voltar
            </button>
          ) : (
            <p className="mb-4 inline-flex rounded-full border border-gold/35 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Ferramentas gratuitas
            </p>
          )}
        </div>

        <div className="relative">
          <h2 id="calculator-popup-title" className="max-w-2xl text-[1.65rem] font-semibold leading-tight text-deep sm:text-[2.15rem]">
            {selected
              ? selected === "bmi"
                ? "Calcule seu IMC"
                : selected === "waistHip"
                  ? "Calcule sua relação cintura-quadril"
                  : "Calcule suas calorias estimadas"
              : "Descubra quais sinais da sua saúde merecem atenção"}
          </h2>

          {!selected ? (
            <p className="mt-3 max-w-2xl text-sm leading-6 text-graphite sm:text-base sm:leading-7">
              Escolha uma das ferramentas gratuitas do Dr. Pedro Machado e veja seus indicadores iniciais. Em poucos minutos, você entende melhor seu ponto de partida e descobre como uma avaliação médica pode ajudar.
            </p>
          ) : null}
        </div>

        <div className="relative mt-5">
          {!selected ? <CalculatorSelector onSelectCalculator={setSelected} compact copyVariant="popup" /> : null}
          {selected === "bmi" ? <BmiForm onResult={handleBmiResult} compact /> : null}
          {selected === "waistHip" ? <WaistHipForm onResult={handleWaistHipResult} compact /> : null}
          {selected === "calories" ? <CalorieForm onResult={handleCalorieResult} compact /> : null}
        </div>

        <MedicalDisclaimer
          compact
          className="relative mt-5"
          text="Os resultados são estimativas iniciais e não substituem avaliação médica individualizada."
        />
      </div>
    </div>
  );
}
