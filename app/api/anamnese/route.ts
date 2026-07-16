import { NextResponse } from "next/server";

const requiredAnswerIds = [
  "principalObjetivo",
  "alimentacao",
  "atividadeFisica",
  "hidratacao",
  "sono",
  "estresse",
  "situacaoFrequente",
  "satisfacaoSaudeCorpo",
  "tentativasAnteriores",
  "interesseContato"
];

const questionLabels: Record<string, string> = {
  principalObjetivo: "Qual é o seu principal objetivo neste momento?",
  alimentacao: "Como você avalia sua alimentação hoje?",
  atividadeFisica: "Com que frequência você pratica atividade física?",
  hidratacao: "Como está sua hidratação?",
  sono: "Como você classificaria seu sono?",
  estresse: "Como está seu nível de estresse atualmente?",
  situacaoFrequente: "Qual dessas situações acontece com mais frequência?",
  satisfacaoSaudeCorpo: "O quanto você está satisfeito com sua saúde e seu corpo hoje?",
  tentativasAnteriores: "Você já tentou mudar seus hábitos ou emagrecer antes?",
  interesseContato: "Se existisse um plano personalizado para ajudar você a melhorar sua saúde de forma definitiva, gostaria de conversar com nossa equipe?"
};

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function clean(value: unknown) {
  return String(value ?? "").trim().slice(0, 1000);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 4;
  const current = rateLimit.get(key);

  if (!current || current.resetAt < now) {
    rateLimit.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  return current.count > maxRequests;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const name = clean(payload.name);
    const whatsapp = clean(payload.whatsapp);
    const website = clean(payload.website);
    const origin = clean(payload.origin);
    const answers = payload.answers && typeof payload.answers === "object" ? payload.answers : {};

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (isRateLimited(getClientKey(request))) {
      return NextResponse.json({ error: "Não foi possível enviar agora." }, { status: 429 });
    }

    const missingAnswer = requiredAnswerIds.some((id) => !clean(answers[id]));
    if (!name || !whatsapp || missingAnswer) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO || "agendaeleveclinic@gmail.com";

    if (!resendApiKey || !emailFrom) {
      return NextResponse.json({ error: "Envio indisponível." }, { status: 500 });
    }

    const sentAt = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const userAgent = clean(request.headers.get("user-agent"));
    const rows = requiredAnswerIds
      .map((id) => {
        const question = escapeHtml(questionLabels[id]);
        const answer = escapeHtml(clean(answers[id]));
        return `<tr><td style="padding:10px;border:1px solid #d8e0df;font-weight:700;color:#02253D;">${question}</td><td style="padding:10px;border:1px solid #d8e0df;color:#1F2A2D;">${answer}</td></tr>`;
      })
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;color:#1F2A2D;line-height:1.5;">
        <h1 style="color:#02253D;">Nova anamnese recebida pelo site</h1>
        <p>Esta é uma anamnese inicial enviada pelo site do Dr. Pedro Machado.</p>
        <h2 style="color:#02253D;">Dados do paciente</h2>
        <p><strong>Nome completo:</strong> ${escapeHtml(name)}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
        <p><strong>Data/hora do envio:</strong> ${escapeHtml(sentAt)}</p>
        ${origin ? `<p><strong>URL de origem:</strong> ${escapeHtml(origin)}</p>` : ""}
        ${userAgent ? `<p><strong>User agent:</strong> ${escapeHtml(userAgent)}</p>` : ""}
        <h2 style="color:#02253D;">Respostas</h2>
        <table style="border-collapse:collapse;width:100%;max-width:900px;">${rows}</table>
      </div>
    `;

    const text = [
      "Nova anamnese recebida pelo site",
      "",
      "Esta é uma anamnese inicial enviada pelo site do Dr. Pedro Machado.",
      "",
      `Nome completo: ${name}`,
      `WhatsApp: ${whatsapp}`,
      `Data/hora do envio: ${sentAt}`,
      origin ? `URL de origem: ${origin}` : "",
      userAgent ? `User agent: ${userAgent}` : "",
      "",
      "Respostas:",
      ...requiredAnswerIds.map((id) => `${questionLabels[id]}: ${clean(answers[id])}`)
    ]
      .filter(Boolean)
      .join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [emailTo],
        subject: "Nova anamnese recebida pelo site",
        html,
        text
      })
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Envio indisponível." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Não foi possível enviar agora." }, { status: 500 });
  }
}
