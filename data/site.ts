export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  indicatedFor: string[];
  evaluatedItems: string[];
  realisticExpectations: string;
  videoPlaceholder: string;
  seoTerms: string[];
};

export const doctor = {
  name: "Dr. Pedro Machado",
  professionalId: "CRM 01198564/RJ",
  role: "Médico Nutrólogo em Petrópolis",
  complementaryTraining: "Pós-graduado em Nutrologia Esportiva",
  bio:
    "Dr. Pedro Machado é Médico Nutrólogo em Petrópolis, com pós-graduação em Nutrologia Esportiva. Seu atendimento é voltado a adultos e idosos que buscam cuidar da saúde metabólica, melhorar a composição corporal, prevenir doenças crônicas e alcançar mais vitalidade com acompanhamento médico individualizado.",
  fullBio:
    "Dr. Pedro Machado é Médico Nutrólogo em Petrópolis, com pós-graduação em Nutrologia Esportiva. Seu atendimento é voltado a adultos e idosos que buscam cuidar da saúde metabólica, melhorar a composição corporal, prevenir doenças crônicas e alcançar mais vitalidade com acompanhamento médico individualizado.\n\nSua atuação inclui emagrecimento saudável, controle e tratamento da obesidade, saúde metabólica, performance, hipertrofia e estratégias clínicas voltadas à melhora da qualidade de vida. O acompanhamento considera histórico, rotina, exames, objetivos e segurança antes da definição de qualquer conduta.\n\nQuando há indicação clínica, o Dr. Pedro também realiza acompanhamento hormonal individualizado e prescrição de terapias medicamentosas modernas para controle de peso e tratamento da obesidade, incluindo medicações injetáveis conhecidas popularmente como “canetas emagrecedoras”. Todo o processo deve ser conduzido com avaliação médica, critérios de segurança e acompanhamento contínuo.",
  phone: "(24) 2245-9374",
  whatsapp: "(24) 2245-9374",
  whatsappUrl: "https://wa.me/552422459374",
  instagram: "@drpedromachado_",
  location: "R. Paulino Afonso, 108, Centro, Petrópolis, RJ, 25680-195",
  hours: "Horários de atendimento: inserir horários validados"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/contato", label: "Contato" }
];

export const patientNeeds = [
  "Tenho dificuldade para emagrecer, mesmo tentando dieta e treino.",
  "Ganhei peso nos últimos anos e quero investigar as causas.",
  "Tenho sobrepeso e quero evitar que o quadro avance.",
  "Sinto queda de energia, libido, força ou disposição.",
  "Quero ganhar massa muscular com acompanhamento médico.",
  "Quero fazer um check-up mais completo da minha saúde."
];

export const homeNeedCards = [
  {
    title: "Quando o peso não responde como antes",
    text: "Dificuldade para emagrecer, efeito sanfona, fome frequente ou mudanças corporais que merecem investigação clínica."
  },
  {
    title: "Quando energia e disposição caem",
    text: "Cansaço persistente, queda de força, libido ou recuperação podem exigir uma avaliação mais ampla da saúde."
  },
  {
    title: "Quando a prevenção precisa sair do papel",
    text: "Check-up, histórico familiar, risco metabólico e exames ajudam a orientar decisões com mais segurança."
  }
];

export const homeMethodPillars = [
  {
    title: "Investigação médica",
    text: "Antes de definir qualquer conduta, o atendimento parte de escuta clínica, sintomas, histórico e contexto de saúde."
  },
  {
    title: "Exames e dados clínicos",
    text: "Marcadores laboratoriais, composição corporal e fatores de risco ajudam a construir uma leitura mais precisa."
  },
  {
    title: "Rotina possível",
    text: "O plano precisa conversar com sono, alimentação, treino, trabalho, estresse e objetivos reais do paciente."
  },
  {
    title: "Acompanhamento individualizado",
    text: "A evolução é monitorada com ajustes, metas realistas e decisões tomadas com segurança médica."
  }
];

export const homeServiceHighlights = [
  {
    slug: "emagrecimento",
    title: "Emagrecimento",
    text: "Para investigar por que perder peso tem sido difícil e orientar um caminho clínico compatível com sua rotina."
  },
  {
    slug: "obesidade",
    title: "Obesidade",
    text: "Cuidado médico contínuo para uma condição multifatorial, com atenção a riscos, exames e contexto individual."
  },
  {
    slug: "reposicao-hormonal-masculina",
    title: "Saúde hormonal masculina",
    text: "Avaliação criteriosa de sintomas, exames e indicação real antes de qualquer decisão terapêutica."
  },
  {
    slug: "reposicao-hormonal-feminina",
    title: "Saúde hormonal feminina",
    text: "Acompanhamento para sintomas hormonais, climatério ou menopausa com análise de riscos e necessidades."
  },
  {
    slug: "hipertrofia",
    title: "Hipertrofia e composição corporal",
    text: "Avaliação para quem treina, busca evolução e quer acompanhar performance sem perder segurança clínica."
  },
  {
    slug: "check-up-da-saude",
    title: "Check-up da saúde",
    text: "Um mapa clínico para prevenção, clareza sobre exames e decisões mais bem orientadas."
  }
];

export const services: Service[] = [
  {
    slug: "emagrecimento",
    title: "Emagrecimento com acompanhamento médico individualizado",
    shortTitle: "Emagrecimento",
    description:
      "Avaliação clínica para entender fatores relacionados à dificuldade de perder peso e construir um plano compatível com saúde, rotina e objetivos.",
    indicatedFor: [
      "Pessoas que tentam emagrecer e têm dificuldade de manter constância.",
      "Pacientes com fome excessiva ou recuperação frequente de peso.",
      "Quem deseja acompanhamento médico para perda de gordura com segurança."
    ],
    evaluatedItems: [
      "Histórico de peso, exames laboratoriais e composição corporal.",
      "Rotina alimentar, sono, estresse e atividade física.",
      "Medicamentos em uso, fatores metabólicos e contexto clínico."
    ],
    realisticExpectations:
      "O acompanhamento busca evolução progressiva, melhora de hábitos e monitoramento de marcadores de saúde, sem promessa de resultado.",
    videoPlaceholder: "Vídeo provisório: Por que emagrecer não é apenas comer menos?",
    seoTerms: ["emagrecimento médico", "médico para emagrecer", "tratamento para perda de peso"]
  },
  {
    slug: "sobrepeso",
    title: "Sobrepeso: cuidado médico antes que o problema avance",
    shortTitle: "Sobrepeso",
    description:
      "O sobrepeso pode estar associado a alterações metabólicas, hormonais ou comportamentais que merecem avaliação individual.",
    indicatedFor: [
      "Pacientes acima do peso ou com aumento de gordura abdominal.",
      "Pessoas com histórico familiar de diabetes, hipertensão ou colesterol alto.",
      "Quem percebe piora recente da disposição ou mudança de composição corporal."
    ],
    evaluatedItems: [
      "IMC, circunferência abdominal, pressão arterial e exames metabólicos.",
      "Colesterol, glicemia, sono, hábitos e histórico familiar.",
      "Fatores de risco e rotina atual do paciente."
    ],
    realisticExpectations:
      "O objetivo é identificar riscos, corrigir fatores associados ao ganho de peso e orientar prevenção de quadros mais complexos.",
    videoPlaceholder: "Vídeo provisório: Por que tratar o sobrepeso cedo pode mudar sua saúde futura?",
    seoTerms: ["tratamento para sobrepeso", "sobrepeso médico", "controle de peso"]
  },
  {
    slug: "obesidade",
    title: "Tratamento médico da obesidade com acompanhamento contínuo",
    shortTitle: "Obesidade",
    description:
      "A obesidade é uma condição clínica multifatorial e deve ser acompanhada com investigação, seriedade e continuidade.",
    indicatedFor: [
      "Pacientes com IMC elevado ou gordura abdominal importante.",
      "Pessoas com efeito sanfona, resistência à insulina ou hipertensão.",
      "Quem apresenta apneia do sono, dores articulares ou riscos associados ao peso."
    ],
    evaluatedItems: [
      "Comorbidades, histórico de tentativas anteriores e exames.",
      "Sono, medicamentos, perfil metabólico e composição corporal.",
      "Riscos cardiovasculares e fatores emocionais relevantes."
    ],
    realisticExpectations:
      "O cuidado busca redução de riscos, melhora metabólica e construção de estratégia sustentável, sem garantias de resultado.",
    videoPlaceholder: "Vídeo provisório: Obesidade não é falta de força de vontade.",
    seoTerms: ["tratamento médico da obesidade", "médico para obesidade", "obesidade e saúde metabólica"]
  },
  {
    slug: "reposicao-hormonal-masculina",
    title: "Reposição hormonal masculina com avaliação médica criteriosa",
    shortTitle: "Reposição Hormonal Masculina",
    description:
      "Investigação de sintomas relacionados a alterações hormonais masculinas, com análise clínica, exames e conduta individualizada.",
    indicatedFor: [
      "Homens com queda de libido, cansaço persistente ou perda de força.",
      "Pacientes com dificuldade de ganhar massa muscular ou piora da disposição.",
      "Quem apresenta alteração de humor ou suspeita de baixa testosterona."
    ],
    evaluatedItems: [
      "Perfil hormonal, sintomas, sono, rotina e histórico clínico.",
      "Avaliação de próstata, hemograma, perfil lipídico e fígado, quando aplicável.",
      "Riscos cardiovasculares e critérios médicos de indicação."
    ],
    realisticExpectations:
      "A avaliação deve identificar se há indicação clínica real, mapear riscos e evitar uso inadequado de hormônios.",
    videoPlaceholder: "Vídeo provisório: Quando a reposição hormonal masculina pode ser considerada?",
    seoTerms: ["reposição hormonal masculina", "baixa testosterona", "avaliação hormonal masculina"]
  },
  {
    slug: "reposicao-hormonal-feminina",
    title: "Reposição hormonal feminina com cuidado individualizado",
    shortTitle: "Reposição Hormonal Feminina",
    description:
      "Avaliação médica para mulheres com sintomas associados a alterações hormonais, climatério, menopausa ou outras fases da vida.",
    indicatedFor: [
      "Mulheres com ondas de calor, queda de libido ou piora do sono.",
      "Pacientes com irritabilidade, cansaço ou alteração de composição corporal.",
      "Quem tem sintomas no climatério, menopausa ou fases de transição hormonal."
    ],
    evaluatedItems: [
      "Histórico ginecológico, sintomas e exames hormonais.",
      "Riscos pessoais, histórico familiar, sono, energia e metabolismo.",
      "Composição corporal e contexto clínico individual."
    ],
    realisticExpectations:
      "O acompanhamento busca entender sintomas, riscos e possibilidades terapêuticas com segurança e individualização.",
    videoPlaceholder: "Vídeo provisório: Reposição hormonal feminina: quando avaliar?",
    seoTerms: ["reposição hormonal feminina", "menopausa", "climatério"]
  },
  {
    slug: "hipertrofia",
    title: "Hipertrofia e composição corporal com acompanhamento médico",
    shortTitle: "Hipertrofia",
    description:
      "Avaliação médica para quem deseja ganhar massa muscular, melhorar performance e acompanhar saúde durante o processo.",
    indicatedFor: [
      "Pessoas que treinam e têm dificuldade de evoluir.",
      "Pacientes com fadiga intensa ou dificuldade de recuperação.",
      "Quem deseja acompanhar exames durante a estratégia de hipertrofia."
    ],
    evaluatedItems: [
      "Rotina de treino, composição corporal, exames e sono.",
      "Recuperação, perfil hormonal, nutrição e histórico de lesões.",
      "Marcadores de saúde e fatores que podem limitar evolução."
    ],
    realisticExpectations:
      "O foco é investigar limitadores, orientar condutas seguras e acompanhar força, composição corporal e marcadores clínicos.",
    videoPlaceholder: "Vídeo provisório: Por que ganhar massa muscular também exige avaliação de saúde?",
    seoTerms: ["médico para hipertrofia", "ganho de massa muscular", "composição corporal"]
  },
  {
    slug: "check-up-da-saude",
    title: "Check-up da saúde para prevenção e clareza clínica",
    shortTitle: "Check-up da Saúde",
    description:
      "Avaliação médica para entender o estado geral da saúde, identificar riscos e orientar decisões preventivas com mais clareza.",
    indicatedFor: [
      "Pacientes que desejam prevenir doenças ou acompanhar marcadores de saúde.",
      "Pessoas com histórico familiar importante.",
      "Quem quer avaliar metabolismo, hormônios, vitaminas e risco cardiovascular."
    ],
    evaluatedItems: [
      "Exames laboratoriais e risco cardiometabólico.",
      "Histórico familiar, sintomas, pressão arterial, sono e rotina.",
      "Energia, composição corporal e marcadores preventivos."
    ],
    realisticExpectations:
      "A proposta é criar um mapa clínico do paciente e orientar decisões preventivas com base em dados.",
    videoPlaceholder: "Vídeo provisório: O que um bom check-up pode revelar sobre sua saúde?",
    seoTerms: ["check-up médico", "check-up metabólico", "avaliação preventiva de saúde"]
  }
];

export const processSteps = [
  {
    title: "Consulta inicial e escuta clínica",
    text: "Momento de compreender sintomas, histórico, rotina, objetivos e dificuldades que impactam sua saúde e qualidade de vida."
  },
  {
    title: "Investigação médica e exames",
    text: "A conduta parte da avaliação clínica e, quando necessário, da análise de exames para entender melhor metabolismo, composição corporal e fatores de risco."
  },
  {
    title: "Plano individualizado",
    text: "As decisões são construídas considerando contexto, metas, segurança e possibilidades reais para cada paciente."
  },
  {
    title: "Acompanhamento e ajustes",
    text: "O cuidado continua após a primeira consulta, com reavaliações e ajustes conforme a evolução clínica e a resposta do paciente."
  }
];

export const generalFaq = [
  {
    question: "O atendimento é presencial, online ou ambos?",
    answer: "Informação provisória. Confirmar modalidade oficial de atendimento antes da publicação."
  },
  {
    question: "O site pode prometer resultados?",
    answer: "Não. A comunicação deve ser informativa, ética e baseada em avaliação individual."
  },
  {
    question: "Preciso levar exames para a consulta?",
    answer: "Texto provisório. O fluxo exato deve ser validado com a equipe do consultório."
  },
  {
    question: "Como faço para agendar?",
    answer: "Inserir aqui o WhatsApp oficial, telefone ou link de agendamento validado."
  }
];

export const googleReviews = {
  ratingLabel: "Nota média no Google: inserir nota real",
  totalLabel: "Quantidade de avaliações: inserir número real",
  sourceLabel: "Avaliações do Google",
  items: [
    {
      name: "Nome do paciente",
      text: "Depoimento real a ser inserido após autorização e revisão."
    },
    {
      name: "Nome do paciente",
      text: "Espaço preparado para avaliação real do Google."
    },
    {
      name: "Nome do paciente",
      text: "Substituir por relato autorizado, sem promessas de resultado."
    }
  ]
};
