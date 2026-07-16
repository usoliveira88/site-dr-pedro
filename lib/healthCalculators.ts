export type Sex = "homem" | "mulher";

export function parseHealthNumber(value: string) {
  const normalized = value.replace(",", ".").trim();
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function normalizeHeight(value: string) {
  const height = parseHealthNumber(value);
  return height > 3 ? height / 100 : height;
}

export function formatHealthDecimal(value: number, digits = 1) {
  return value.toFixed(digits).replace(".", ",");
}

export function calculateBmi(weight: number, heightInMeters: number) {
  if (weight <= 0 || heightInMeters <= 0) return 0;
  return weight / (heightInMeters * heightInMeters);
}

export function classifyBmi(bmi: number) {
  if (bmi < 18.5) return "Baixo peso";
  if (bmi < 25) return "Peso adequado";
  if (bmi < 30) return "Sobrepeso";
  if (bmi < 35) return "Obesidade grau I";
  if (bmi < 40) return "Obesidade grau II";
  return "Obesidade grau III";
}

export function calculateWaistHipRatio(waist: number, hip: number) {
  if (waist <= 0 || hip <= 0) return 0;
  return waist / hip;
}

export function classifyWaistHipRatio(sex: Sex, ratio: number) {
  const threshold = sex === "homem" ? 0.9 : 0.85;
  return ratio < threshold ? "Menor risco cardiometabólico pela RCQ" : "Risco cardiometabólico aumentado pela RCQ";
}
