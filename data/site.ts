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
  role: "Médico Pós-Graduado em Medicina Esportiva",
  complementaryTraining: "Pós-graduado em Nutrologia Esportiva",
  bio:
    "Dr. Pedro Machado é Médico Pós-Graduado em Medicina Esportiva em Petrópolis, com pós-graduação em Nutrologia Esportiva. Seu atendimento é voltado a adultos e idosos que buscam cuidar da saúde metabólica, melhorar a composição corporal, prevenir doenças crônicas e alcançar mais vitalidade com acompanhamento médico individualizado.",
  fullBio:
    "Dr. Pedro Machado é Médico Pós-Graduado em Medicina Esportiva em Petrópolis, com pós-graduação em Nutrologia Esportiva. Seu atendimento é voltado a adultos e idosos que buscam cuidar da saúde metabólica, melhorar a composição corporal, prevenir doenças crônicas e alcançar mais vitalidade com acompanhamento médico individualizado.\n\nSua atuação inclui emagrecimento saudável, controle e tratamento da obesidade, saúde metabólica, performance, hipertrofia e estratégias clínicas voltadas à melhora da qualidade de vida. O acompanhamento considera histórico, rotina, exames, objetivos e segurança antes da definição de qualquer conduta.\n\nQuando há indicação clínica, o Dr. Pedro também realiza acompanhamento hormonal individualizado e prescrição de terapias medicamentosas modernas para controle de peso e tratamento da obesidade, incluindo medicações injetáveis conhecidas popularmente como “canetas emagrecedoras”. Todo o processo deve ser conduzido com avaliação médica, critérios de segurança e acompanhamento contínuo.",
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
    question: "Como sei se preciso de acompanhamento médico para emagrecer?",
    answer: "Quando há dificuldade para perder peso, efeito sanfona, ganho de gordura abdominal, alterações em exames ou dúvidas sobre condutas seguras, uma avaliação médica pode ajudar a entender causas e possibilidades."
  },
  {
    question: "O atendimento é indicado apenas para quem quer emagrecer?",
    answer: "Não. O acompanhamento também pode envolver saúde metabólica, composição corporal, disposição, prevenção, check-up, performance e avaliação hormonal quando houver indicação clínica."
  },
  {
    question: "O Dr. Pedro atende homens e mulheres?",
    answer: "Sim. O atendimento é voltado a adultos e idosos, com avaliação individualizada conforme histórico, sintomas, rotina, exames e objetivos."
  },
  {
    question: "Quando a reposição hormonal pode ser indicada?",
    answer: "A possibilidade deve ser avaliada caso a caso, considerando sintomas, exames, riscos, histórico pessoal e critérios médicos. Não é uma conduta indicada automaticamente para todos."
  },
  {
    question: "Preciso levar exames na primeira consulta?",
    answer: "Se você já tiver exames recentes, pode levá-los. A necessidade de novos exames será definida após avaliação clínica."
  },
  {
    question: "O acompanhamento pode ajudar na melhora da disposição e da composição corporal?",
    answer: "O acompanhamento pode investigar fatores associados a energia, rotina, sono, metabolismo e composição corporal, sempre com metas realistas e condutas individualizadas."
  },
  {
    question: "Como funciona o tratamento para obesidade?",
    answer: "O cuidado envolve avaliação clínica, investigação de fatores associados, definição de condutas individualizadas e acompanhamento contínuo, sem promessa de resultado."
  },
  {
    question: "As medicações para controle de peso são indicadas para qualquer pessoa?",
    answer: "Não. Medicações só devem ser consideradas quando clinicamente indicadas, com avaliação médica, critérios de segurança e acompanhamento."
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer: "O agendamento pode ser feito pelo WhatsApp ou telefone informado no site: (24) 2245-9374."
  },
  {
    question: "O atendimento é presencial, online ou ambos?",
    answer: "Informação provisória. Confirmar modalidade oficial de atendimento antes da publicação."
  }
];

export const googleReviews = {
  sourceLabel: "Avaliações no Google",
  title: "O que os pacientes dizem sobre o acompanhamento",
  intro:
    "Conheça relatos de pacientes que passaram pelo acompanhamento do Dr. Pedro Machado e destacaram pontos como escuta, ética, planejamento alimentar, emagrecimento, ganho de massa muscular e melhora da qualidade de vida.",
  items: [
    {
      name: "Mariana Beck",
      rating: 5,
      text: "Profissional muito atualizado, ético e empático. Faz meu acompanhamento e de toda a minha família.",
      highlights: ["ético", "empático", "acompanhamento"]
    },
    {
      name: "Danusa Krugen",
      rating: 5,
      text: "Dr. Pedro é um ótimo nutrólogo. Ele me ajudou muito no meu planejamento alimentar e na melhora da minha qualidade de vida. Recomendo muito.",
      highlights: ["nutrólogo", "planejamento alimentar", "qualidade de vida"]
    },
    {
      name: "Uiliam Sérgio de Oliveira",
      rating: 5,
      text: "Dr. Pedro Machado é um ótimo nutrólogo. Ele me acompanhou em todo o processo de emagrecimento e de ganho de massa muscular, tendo todo o atendimento pautado por exames e com um planejamento desenvolvido especialmente para mim.",
      highlights: ["nutrólogo", "emagrecimento", "ganho de massa muscular", "exames", "planejamento"]
    }
  ]
};
