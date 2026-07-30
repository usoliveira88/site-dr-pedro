export type Sex = "homem" | "mulher";

export type BmiStatus =
  | "baixo-peso"
  | "peso-adequado"
  | "sobrepeso"
  | "obesidade-grau-i"
  | "obesidade-grau-ii"
  | "obesidade-grau-iii";

export type WaistHipStatus = "menor-risco" | "risco-aumentado";

export type BmiResult = {
  value: number;
  formattedValue: string;
  classification: string;
  status: BmiStatus;
  description: string;
};

export type WaistHipResult = {
  value: number;
  formattedValue: string;
  classification: string;
  status: WaistHipStatus;
  description: string;
};

export type ActivityLevel = "sedentario" | "leve" | "moderado" | "alto" | "extremo";

export type ActivityLevelDefinition = {
  factor: number;
  label: string;
  description: string;
};

export type CalorieInput = {
  sex: Sex;
  age: number;
  weight: number;
  height: number;
  activityLevel: ActivityLevel;
};

export type CalorieResult = {
  bmr: number;
  formattedBmr: string;
  tdee: number;
  formattedTdee: string;
  activityFactor: number;
  activityLabel: string;
  sex: Sex;
  age: number;
  weight: number;
  height: number;
};

export const activityLevels: Record<ActivityLevel, ActivityLevelDefinition> = {
  sedentario: {
    factor: 1.2,
    label: "Sedentário",
    description: "Pouca ou nenhuma atividade física regular."
  },
  leve: {
    factor: 1.375,
    label: "Levemente ativo",
    description: "Atividade leve ou treinos ocasionais."
  },
  moderado: {
    factor: 1.55,
    label: "Moderadamente ativo",
    description: "Treinos ou atividade física em vários dias da semana."
  },
  alto: {
    factor: 1.725,
    label: "Muito ativo",
    description: "Rotina intensa de treinos ou trabalho fisicamente exigente."
  },
  extremo: {
    factor: 1.9,
    label: "Extremamente ativo",
    description: "Treinos muito intensos, alta demanda física ou dupla rotina de atividade."
  }
};

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

export function getBmiResult(weight: number, heightInMeters: number): BmiResult | null {
  const value = calculateBmi(weight, heightInMeters);
  if (!value) return null;

  if (value < 18.5) {
    return {
      value,
      formattedValue: formatHealthDecimal(value),
      classification: classifyBmi(value),
      status: "baixo-peso",
      description: "Indicador inicial abaixo da faixa considerada adequada para adultos."
    };
  }

  if (value < 25) {
    return {
      value,
      formattedValue: formatHealthDecimal(value),
      classification: classifyBmi(value),
      status: "peso-adequado",
      description: "Indicador inicial dentro da faixa considerada adequada para adultos."
    };
  }

  const status: BmiStatus =
    value < 30
      ? "sobrepeso"
      : value < 35
        ? "obesidade-grau-i"
        : value < 40
          ? "obesidade-grau-ii"
          : "obesidade-grau-iii";

  return {
    value,
    formattedValue: formatHealthDecimal(value),
    classification: classifyBmi(value),
    status,
    description: "Indicador inicial que merece ser interpretado junto de outros dados de saúde."
  };
}

export function calculateWaistHipRatio(waist: number, hip: number) {
  if (waist <= 0 || hip <= 0) return 0;
  return waist / hip;
}

export function classifyWaistHipRatio(sex: Sex, ratio: number) {
  const threshold = sex === "homem" ? 0.9 : 0.85;
  return ratio < threshold ? "Menor risco cardiometabólico pela RCQ" : "Risco cardiometabólico aumentado pela RCQ";
}

export function getWaistHipResult(sex: Sex, waist: number, hip: number): WaistHipResult | null {
  const value = calculateWaistHipRatio(waist, hip);
  if (!value) return null;

  const hasIncreasedRisk = (sex === "homem" && value >= 0.9) || (sex === "mulher" && value >= 0.85);

  return {
    value,
    formattedValue: formatHealthDecimal(value, 2),
    classification: classifyWaistHipRatio(sex, value),
    status: hasIncreasedRisk ? "risco-aumentado" : "menor-risco",
    description: hasIncreasedRisk
      ? "Indicador inicial que pode ajudar a observar a distribuição de medidas na região abdominal."
      : "Indicador inicial em uma faixa mais favorável para a relação cintura-quadril."
  };
}

export function calculateCaloriesEstimate(input: CalorieInput): CalorieResult | null {
  const { sex, age, weight, height, activityLevel } = input;
  const activity = activityLevels[activityLevel];

  const hasValidSex = sex === "homem" || sex === "mulher";
  const hasValidAge = Number.isFinite(age) && age >= 10 && age <= 100;
  const hasValidWeight = Number.isFinite(weight) && weight >= 20 && weight <= 300;
  const hasValidHeight = Number.isFinite(height) && height >= 100 && height <= 230;

  if (!hasValidSex || !hasValidAge || !hasValidWeight || !hasValidHeight || !activity) {
    return null;
  }

  const sexAdjustment = sex === "homem" ? 5 : -161;
  const bmr = 10 * weight + 6.25 * height - 5 * age + sexAdjustment;
  const tdee = bmr * activity.factor;

  return {
    bmr,
    formattedBmr: formatHealthDecimal(bmr, 0),
    tdee,
    formattedTdee: formatHealthDecimal(tdee, 0),
    activityFactor: activity.factor,
    activityLabel: activity.label,
    sex,
    age,
    weight,
    height
  };
}
