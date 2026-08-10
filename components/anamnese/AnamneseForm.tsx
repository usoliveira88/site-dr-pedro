"use client";

import { useState } from "react";
import { AnamneseHealthIndicators, type HealthIndicatorsPayload } from "@/components/anamnese/AnamneseHealthIndicators";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";

const whatsappUrl = "https://wa.me/552422459374";

type Question = {
  id: string;
  title: string;
  options: string[];
  group: "Objetivos e rotina" | "Hábitos e desafios" | "Próximo passo";
};

const questions: Question[] = [
  {
    id: "principalObjetivo",
    title: "Qual é o seu principal objetivo neste momento?",
    group: "Objetivos e rotina",
    options: ["Emagrecer", "Controlar diabetes, colesterol ou pressão alta", "Ganhar massa muscular", "Melhorar disposição e energia", "Equilibrar hormônios", "Outro"]
  },
  {
    id: "alimentacao",
    title: "Como você avalia sua alimentação hoje?",
    group: "Objetivos e rotina",
    options: ["Excelente", "Boa, mas com alguns deslizes", "Irregular", "Ruim", "Não faço ideia se estou me alimentando corretamente"]
  },
  {
    id: "atividadeFisica",
    title: "Com que frequência você pratica atividade física?",
    group: "Objetivos e rotina",
    options: ["Não pratico", "1 a 2 vezes por semana", "3 a 4 vezes por semana", "5 ou mais vezes por semana"]
  },
  {
    id: "hidratacao",
    title: "Como está sua hidratação?",
    group: "Hábitos e desafios",
    options: ["Bebo água suficiente todos os dias", "Bebo menos água do que deveria", "Só lembro de beber quando sinto sede", "Quase não bebo água"]
  },
  {
    id: "sono",
    title: "Como você classificaria seu sono?",
    group: "Hábitos e desafios",
    options: ["Durmo bem e acordo descansado", "Durmo, mas acordo cansado", "Tenho dificuldade para dormir", "Durmo poucas horas na maioria dos dias"]
  },
  {
    id: "estresse",
    title: "Como está seu nível de estresse atualmente?",
    group: "Hábitos e desafios",
    options: ["Muito baixo", "Moderado", "Alto", "Muito alto e sinto que isso afeta minha saúde"]
  },
  {
    id: "situacaoFrequente",
    title: "Qual dessas situações acontece com mais frequência?",
    group: "Hábitos e desafios",
    options: [
      "Falta de tempo para cuidar da saúde",
      "Ansiedade que interfere na alimentação",
      "Compulsão alimentar",
      "Falta de motivação para treinar",
      "Não consigo manter uma rotina saudável",
      "Nenhuma dessas"
    ]
  },
  {
    id: "tentativasAnteriores",
    title: "Você já tentou mudar seus hábitos ou emagrecer antes?",
    group: "Próximo passo",
    options: ["Nunca tentei", "Sim, mas recuperei o peso", "Sim, tive resultados por pouco tempo", "Sim, continuo tentando sem o resultado esperado", "Sim, consegui manter os resultados"]
  },
  {
    id: "interesseContato",
    title: "Se uma avaliação individualizada ajudasse a organizar seus próximos passos, você gostaria de conversar com nossa equipe?",
    group: "Próximo passo",
    options: ["Sim, quero agendar uma avaliação.", "Sim, quero receber mais informações pelo WhatsApp.", "Talvez, dependendo da proposta.", "Não neste momento."]
  }
];

const scaleQuestion = {
  id: "satisfacaoSaudeCorpo",
  title: "O quanto você está satisfeito com sua saúde e seu corpo hoje?"
};

const formSections = [
  {
    title: "Objetivos e rotina",
    items: [
      { type: "question" as const, number: "01", id: "principalObjetivo" },
      { type: "question" as const, number: "02", id: "alimentacao" },
      { type: "question" as const, number: "03", id: "atividadeFisica" }
    ]
  },
  {
    title: "Hábitos e desafios",
    items: [
      { type: "question" as const, number: "04", id: "hidratacao" },
      { type: "question" as const, number: "05", id: "sono" },
      { type: "question" as const, number: "06", id: "estresse" },
      { type: "question" as const, number: "07", id: "situacaoFrequente" }
    ]
  },
  {
    title: "Próximo passo",
    items: [
      { type: "scale" as const, number: "08", id: scaleQuestion.id },
      { type: "question" as const, number: "09", id: "tentativasAnteriores" },
      { type: "question" as const, number: "10", id: "interesseContato" }
    ]
  }
];

const questionsById = questions.reduce<Record<string, Question>>((acc, question) => {
  acc[question.id] = question;
  return acc;
}, {});

type Answers = Record<string, string>;

function formatWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function AnamneseForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState("");
  const [answers, setAnswers] = useState<Answers>({});
  const [healthIndicators, setHealthIndicators] = useState<HealthIndicatorsPayload>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  function updateAnswer(id: string, value: string) {
    setAnswers((current) => ({ ...current, [id]: value }));
  }

  function validate() {
    if (!name.trim() || !whatsapp.trim()) {
      return false;
    }

    const allQuestionsAnswered = questions.every((question) => Boolean(answers[question.id]));
    return allQuestionsAnswered && Boolean(answers[scaleQuestion.id]);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!validate()) {
      setError("Confira se todos os campos obrigatórios foram preenchidos antes de enviar.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/anamnese", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          whatsapp,
          website,
          answers,
          healthIndicators,
          origin: window.location.href
        })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
      setError("Não foi possível enviar agora. Tente novamente ou fale diretamente pelo WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <section id="formulario" className="bg-linen px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[980px] overflow-hidden rounded-[30px] border border-deep/15 bg-white p-6 shadow-[0_24px_70px_rgba(2,37,61,0.12)] sm:p-9 lg:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Avaliação enviada</p>
          <h2 className="text-[2rem] font-semibold leading-tight text-deep sm:text-4xl">Parabéns por concluir sua avaliação!</h2>
          <div className="mt-5 grid gap-4 text-base leading-8 text-graphite sm:text-lg">
            <p>
              Suas respostas mostram quais hábitos podem estar dificultando seus resultados. A maioria das pessoas não precisa apenas de uma dieta ou de um remédio, mas de uma estratégia personalizada envolvendo alimentação, atividade física, sono, manejo do estresse e acompanhamento médico.
            </p>
            <p>Nossa equipe analisará suas respostas e entrará em contato para explicar como funciona o acompanhamento e verificar se ele faz sentido para o seu caso.</p>
            <p>Clique abaixo para falar diretamente com nossa secretária e agendar sua consulta.</p>
          </div>
          <TrackedWhatsAppLink
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-subtle bg-deep px-7 text-center text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift sm:w-auto"
            trackingLocation="anamnese_success"
          >
            Quero falar com a secretária pelo WhatsApp
          </TrackedWhatsAppLink>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="bg-linen px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <form onSubmit={handleSubmit} className="mx-auto max-w-[1120px] overflow-hidden rounded-[30px] border border-deep/15 bg-white shadow-[0_24px_70px_rgba(2,37,61,0.12)]">
        <div className="border-b border-deep/10 bg-pearl p-6 sm:p-8 lg:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Avaliação inicial</p>
          <h2 className="text-[1.85rem] font-semibold leading-tight text-deep sm:text-4xl">Conte um pouco sobre você</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-graphite">
            As respostas ajudam a equipe a entender seu momento e orientar o contato inicial. Nome, WhatsApp e perguntas principais são obrigatórios; os indicadores iniciais são opcionais.
          </p>
        </div>

        <div className="grid gap-9 p-6 sm:p-8 lg:p-10">
          <section className="grid gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Seus dados</p>
              <p className="mt-2 text-sm leading-7 text-graphite">Esses dados serão usados apenas para que a equipe possa retornar o contato.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-deep">
                Nome completo
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  autoComplete="name"
                  className="focus-ring min-h-[3.4rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
                  placeholder="Digite seu nome completo"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-deep">
                WhatsApp
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(formatWhatsapp(event.target.value))}
                  required
                  autoComplete="tel"
                  className="focus-ring min-h-[3.4rem] rounded-subtle border border-deep/15 bg-white px-4 py-3 text-base font-medium text-ink outline-none transition placeholder:text-graphite/45 focus:border-gold"
                  placeholder="(24) 99999-9999"
                />
              </label>
            </div>
            <label className="hidden" aria-hidden="true">
              Site
              <input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
            </label>
          </section>

          <AnamneseHealthIndicators onChange={setHealthIndicators} />

          {formSections.map((section) => (
            <section key={section.title} id={section.title === "Objetivos e rotina" ? "questionario-anamnese" : undefined} className="grid gap-5 scroll-mt-24">
              <div className="border-t border-deep/10 pt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{section.title}</p>
              </div>
              <div className="grid gap-5">
                {section.items.map((item) =>
                  item.type === "scale" ? (
                    <ScaleBlock key={item.id} value={answers[scaleQuestion.id]} onChange={(value) => updateAnswer(scaleQuestion.id, value)} number={item.number} />
                  ) : (
                    <QuestionBlock key={item.id} number={item.number} question={questionsById[item.id]} value={answers[item.id]} onChange={updateAnswer} />
                  )
                )}
              </div>
            </section>
          ))}

          <div className="rounded-[24px] border border-deep/12 bg-pearl p-5 sm:p-6">
            <p className="text-sm leading-7 text-graphite">
              Ao enviar, você autoriza a equipe do Dr. Pedro Machado a entrar em contato pelo WhatsApp informado. As respostas não substituem consulta médica e serão usadas apenas para orientação inicial do atendimento.
            </p>
            {error ? <p className="mt-4 rounded-subtle border border-gold/30 bg-sand/45 p-4 text-sm font-semibold leading-6 text-deep">{error}</p> : null}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="focus-ring inline-flex min-h-14 w-full items-center justify-center rounded-subtle bg-deep px-7 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#06324f] hover:shadow-lift disabled:cursor-wait disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? "Enviando respostas..." : "Enviar avaliação inicial"}
              </button>
              <TrackedWhatsAppLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-14 w-full items-center justify-center rounded-subtle border border-deep/20 bg-white px-7 text-base font-semibold text-deep transition duration-300 hover:border-gold hover:bg-sand sm:w-auto" trackingLocation="anamnese_form">
                Falar pelo WhatsApp
              </TrackedWhatsAppLink>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

function QuestionBlock({
  number,
  question,
  value,
  onChange
}: {
  number: string;
  question: Question;
  value?: string;
  onChange: (id: string, value: string) => void;
}) {
  return (
    <fieldset className="rounded-[24px] border border-deep/10 bg-white p-5 shadow-[0_12px_36px_rgba(2,37,61,0.06)] sm:p-6">
      <legend className="mb-4 flex gap-3 text-lg font-semibold leading-7 text-ink">
        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-xs font-semibold text-deep">{number}</span>
        {question.title}
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option) => (
          <label
            key={option}
            className={`focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2 flex min-h-[3.25rem] cursor-pointer items-center rounded-subtle border px-4 py-3 text-sm font-semibold leading-6 transition ${
              value === option ? "border-deep bg-deep text-white shadow-soft" : "border-deep/12 bg-pearl text-deep hover:border-gold hover:bg-sand/55"
            }`}
          >
            <input type="radio" name={question.id} value={option} checked={value === option} onChange={() => onChange(question.id, option)} className="sr-only" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function ScaleBlock({ value, onChange, number }: { value?: string; onChange: (value: string) => void; number: string }) {
  return (
    <fieldset className="rounded-[24px] border border-deep/10 bg-white p-5 shadow-[0_12px_36px_rgba(2,37,61,0.06)] sm:p-6">
      <legend className="mb-4 flex gap-3 text-lg font-semibold leading-7 text-ink">
        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-xs font-semibold text-deep">{number}</span>
        {scaleQuestion.title}
      </legend>
      <div className="grid grid-cols-6 gap-2 sm:grid-cols-11">
        {Array.from({ length: 11 }, (_, index) => String(index)).map((option) => (
          <label
            key={option}
            className={`focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2 grid h-12 cursor-pointer place-items-center rounded-subtle border text-sm font-semibold transition ${
              value === option ? "border-deep bg-deep text-white shadow-soft" : "border-deep/12 bg-pearl text-deep hover:border-gold hover:bg-sand/55"
            }`}
          >
            <input type="radio" name={scaleQuestion.id} value={option} checked={value === option} onChange={() => onChange(option)} className="sr-only" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
