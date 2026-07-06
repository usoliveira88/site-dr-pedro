import { doctor } from "@/data/site";

export type ArticleSection = {
  id: string;
  title: string;
  blocks: Array<
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
    | { type: "symptom-list"; items: { title: string; text: string }[] }
    | { type: "cta"; title: string; text: string; href: string; label: string }
  >;
};

export type Article = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  primaryCategory: string;
  categories: string[];
  local: string;
  author: string;
  crm: string;
  datePublished: string;
  coverImage: string;
  coverAlt: string;
  sections: ArticleSection[];
  faq: { question: string; answer: string }[];
  internalLinks: { label: string; href: string; text: string }[];
  summaryTitle?: string;
  faqTitle?: string;
  finalCta?: { eyebrow: string; title: string; text: string; label: string; href: string };
};

export const articles: Article[] = [
  {
    slug: "testosterona-petropolis",
    path: "/testosterona-petropolis",
    title: "Quando o Homem Deve se Preocupar com os Níveis Hormonais?",
    metaTitle: "Quando Investigar a Testosterona | Dr. Pedro Machado",
    description:
      "Cansaço, queda de libido ou perda de força? Entenda quando investigar a testosterona e agende avaliação com o Dr. Pedro Machado em Petrópolis.",
    excerpt:
      "Entenda sinais que podem justificar investigação dos níveis de testosterona, como funciona a avaliação médica e por que evitar automedicação hormonal.",
    category: "Reposição Hormonal Masculina",
    primaryCategory: "Reposição Hormonal Masculina",
    categories: ["Reposição Hormonal Masculina", "Check-up da Saúde"],
    local: "Petrópolis/RJ",
    author: doctor.name,
    crm: "CRM 01198564/RJ",
    datePublished: "2026-07-01",
    coverImage: "/images/testosterona-medico-petropolis.png",
    coverAlt: "Imagem editorial sobre testosterona e saúde hormonal masculina",
    sections: [
      {
        id: "introducao",
        title: "Introdução",
        blocks: [
          {
            type: "paragraph",
            text:
              "Cansaço que não passa com o descanso, queda no desempenho físico, dificuldade de concentração no trabalho, mudanças de humor sem explicação aparente. Muitos homens em Petrópolis convivem com esses sinais no dia a dia e acabam atribuindo tudo à rotina corrida, ao estresse ou simplesmente ao envelhecimento."
          },
          {
            type: "paragraph",
            text:
              "Em alguns casos, no entanto, esses sintomas podem estar relacionados a alterações nos níveis de testosterona, um hormônio fundamental para diversas funções do organismo masculino. Isso não significa que toda queda de energia ou de disposição tenha uma causa hormonal, mas entender os sinais de alerta é o primeiro passo para saber quando vale a pena buscar uma avaliação médica."
          },
          {
            type: "paragraph",
            text:
              "Neste artigo, vamos explicar o que é a testosterona, quais sintomas podem justificar investigação, como funciona o diagnóstico e por que a automedicação com hormônios ou moduladores pode trazer riscos importantes à saúde."
          }
        ]
      },
      {
        id: "funcao",
        title: "O que é a testosterona e qual sua função no organismo masculino?",
        blocks: [
          {
            type: "paragraph",
            text: "A testosterona é o principal hormônio sexual masculino, produzido principalmente nos testículos. Ela participa de diversas funções no organismo, entre elas:"
          },
          {
            type: "list",
            items: [
              "desenvolvimento e manutenção da massa muscular;",
              "distribuição de gordura corporal;",
              "produção de espermatozoides e fertilidade;",
              "libido e função sexual;",
              "densidade óssea;",
              "produção de células vermelhas do sangue;",
              "influência sobre humor, disposição e concentração."
            ]
          },
          {
            type: "paragraph",
            text:
              "Por atuar em tantas frentes, alterações nos níveis desse hormônio podem gerar sintomas variados, que muitas vezes são confundidos com outras condições de saúde ou até mesmo com o cansaço natural da rotina."
          }
        ]
      },
      {
        id: "variacao-natural",
        title: "A testosterona varia naturalmente, e isso é normal",
        blocks: [
          {
            type: "paragraph",
            text: "É importante entender que os níveis de testosterona não são fixos ao longo da vida. Diversos fatores podem influenciar essa variação, como:"
          },
          {
            type: "list",
            items: [
              "idade, já que a produção tende a reduzir gradualmente a partir dos 30-40 anos;",
              "qualidade do sono, pois noites mal dormidas afetam diretamente a produção hormonal;",
              "estresse crônico, que eleva o cortisol e pode impactar negativamente a testosterona;",
              "peso corporal, especialmente o excesso de gordura abdominal;",
              "uso de medicamentos que podem interferir na produção hormonal;",
              "doenças associadas, como diabetes, obesidade e algumas condições da tireoide;",
              "hábitos de vida, incluindo sedentarismo, consumo de álcool e tabagismo."
            ]
          },
          {
            type: "paragraph",
            text:
              "Ou seja: perceber uma variação não significa, necessariamente, que existe um problema. O que importa é observar o conjunto de sintomas e, quando houver dúvida, buscar avaliação médica."
          }
        ]
      },
      {
        id: "quando-investigar",
        title: "Quando o homem deve investigar a testosterona?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Não existe uma resposta única para essa pergunta, pois cada pessoa reage de forma diferente às variações hormonais. Ainda assim, alguns sinais podem indicar que vale a pena conversar com um médico sobre o assunto, especialmente quando aparecem de forma persistente e combinada."
          },
          {
            type: "symptom-list",
            items: [
              { title: "Queda de libido", text: "Diminuição do interesse sexual, quando persistente, pode ter diversas causas, incluindo hormonais." },
              { title: "Disfunção erétil", text: "Dificuldade para obter ou manter ereções pode estar relacionada a fatores hormonais, vasculares, psicológicos ou combinados." },
              { title: "Cansaço persistente", text: "Fadiga que não melhora com o descanso adequado merece atenção, principalmente quando associada a outros sintomas." },
              { title: "Perda de massa muscular", text: "Redução perceptível da força ou do volume muscular, mesmo mantendo a atividade física habitual." },
              { title: "Aumento de gordura abdominal", text: "Ganho de gordura na região do abdômen, especialmente quando não explicado por mudanças na alimentação." },
              { title: "Redução de força", text: "Dificuldade para manter o desempenho em atividades físicas antes realizadas com facilidade." },
              { title: "Alterações de humor", text: "Irritabilidade, tristeza ou oscilações emocionais sem uma causa aparente." },
              { title: "Piora do sono", text: "Dificuldade para dormir ou sono não reparador, mesmo com boa rotina de descanso." },
              { title: "Dificuldade de concentração", text: "Sensação de neblina mental, esquecimentos frequentes ou dificuldade para manter o foco." },
              { title: "Infertilidade", text: "Em alguns casos, alterações hormonais podem estar relacionadas a dificuldades reprodutivas." }
            ]
          },
          {
            type: "cta",
            title: "Percebe sinais persistentes?",
            text: "A avaliação médica ajuda a diferenciar alterações hormonais de outras causas possíveis para os sintomas.",
            href: doctor.whatsappUrl,
            label: "Agendar avaliação"
          }
        ]
      },
      {
        id: "sintomas-isolados",
        title: "Sintomas isolados não confirmam baixa testosterona",
        blocks: [
          {
            type: "paragraph",
            text:
              "É fundamental destacar: apresentar um ou dois desses sintomas não significa, automaticamente, que existe baixa testosterona. Muitos desses sinais são inespecíficos, ou seja, podem estar relacionados a diversas outras condições, como problemas de tireoide, depressão, apneia do sono, diabetes ou simplesmente sobrecarga física e emocional."
          },
          {
            type: "paragraph",
            text:
              "O diagnóstico correto depende de uma avaliação clínica cuidadosa, que leva em conta o histórico de saúde, os sintomas relatados, exame físico e, quando indicado, exames laboratoriais. Não é recomendável basear qualquer conclusão apenas em sintomas ou em informações encontradas na internet."
          }
        ]
      },
      {
        id: "exames",
        title: "Quando os exames de testosterona costumam ser solicitados?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Quando há indicação clínica, o médico pode solicitar a dosagem de testosterona no sangue. Um ponto relevante é o horário da coleta: os níveis de testosterona costumam ser mais altos pela manhã, por isso muitos protocolos recomendam a coleta entre 7h e 10h, o que pode influenciar o resultado do exame."
          },
          {
            type: "paragraph",
            text:
              "Além disso, em geral, recomenda-se confirmar um resultado alterado com uma segunda dosagem, já que os níveis hormonais podem variar por diferentes fatores pontuais, como noite mal dormida, estresse ou até mesmo uma infecção recente."
          }
        ]
      },
      {
        id: "total-livre",
        title: "Testosterona total x testosterona livre: qual a diferença?",
        blocks: [
          {
            type: "list",
            items: [
              "Testosterona total: mede a quantidade total do hormônio no sangue, incluindo a fração que está ligada a proteínas e a fração livre.",
              "Testosterona livre: é a parcela do hormônio que não está ligada a proteínas e que, teoricamente, está disponível para ser utilizada pelo organismo."
            ]
          },
          {
            type: "paragraph",
            text:
              "Em determinadas situações clínicas, o médico pode considerar mais relevante avaliar a testosterona livre, especialmente quando há alterações nas proteínas que se ligam ao hormônio. A interpretação correta desses valores depende sempre da avaliação médica em conjunto com o quadro clínico do paciente."
          }
        ]
      },
      {
        id: "causas",
        title: "Possíveis causas de testosterona baixa",
        blocks: [
          {
            type: "paragraph",
            text: "Diversos fatores podem estar associados a níveis reduzidos de testosterona, entre eles:"
          },
          {
            type: "list",
            items: [
              "obesidade;",
              "sedentarismo;",
              "privação crônica de sono;",
              "estresse crônico;",
              "uso de anabolizantes, que podem suprimir a produção natural do hormônio;",
              "uso de determinadas medicações;",
              "doenças metabólicas, como diabetes tipo 2;",
              "alterações hormonais primárias ou secundárias."
            ]
          },
          {
            type: "paragraph",
            text: "A identificação da causa é importante, pois o tratamento, quando indicado, costuma variar conforme a origem do problema."
          }
        ]
      },
      {
        id: "automedicacao",
        title: "Os riscos da automedicação com testosterona, anabolizantes ou moduladores hormonais",
        blocks: [
          {
            type: "paragraph",
            text:
              "O uso de testosterona, anabolizantes ou substâncias chamadas de moduladores hormonais sem orientação médica é uma prática que pode trazer riscos significativos à saúde."
          },
          {
            type: "paragraph",
            text:
              "É comum encontrar informações na internet e em redes sociais sugerindo o uso dessas substâncias para melhorar desempenho físico, disposição ou estética corporal. No entanto, o uso sem avaliação médica adequada pode mascarar problemas de saúde que precisariam de investigação, gerar efeitos colaterais importantes e causar alterações que, em alguns casos, são de difícil reversão."
          },
          {
            type: "paragraph",
            text: "Por isso, qualquer decisão sobre suplementação ou reposição hormonal deve ser feita exclusivamente com acompanhamento médico."
          }
        ]
      },
      {
        id: "reposicao",
        title: "Reposição de testosterona não é indicada para todos os homens",
        blocks: [
          {
            type: "paragraph",
            text:
              "A reposição de testosterona não é um tratamento indicado automaticamente para todo homem que apresenta sintomas ou que está envelhecendo. A decisão sobre iniciar ou não uma reposição hormonal depende de uma avaliação individualizada."
          },
          {
            type: "list",
            items: [
              "os sintomas apresentados;",
              "os resultados de exames laboratoriais, geralmente confirmados em mais de uma dosagem;",
              "o histórico de saúde do paciente;",
              "a presença de outras condições clínicas;",
              "os riscos e benefícios específicos de cada caso."
            ]
          },
          {
            type: "paragraph",
            text: "Não existe fórmula genérica: cada paciente deve ser avaliado individualmente por um médico."
          }
        ]
      },
      {
        id: "riscos",
        title: "Possíveis riscos do uso de testosterona sem indicação médica",
        blocks: [
          {
            type: "list",
            items: [
              "alteração da fertilidade, já que o uso externo do hormônio pode suprimir a produção natural e reduzir a produção de espermatozoides;",
              "acne e alterações na pele;",
              "retenção de líquidos;",
              "alterações em exames laboratoriais, como aumento do hematócrito;",
              "piora de algumas condições clínicas pré-existentes;",
              "supressão da produção natural de testosterona pelo organismo."
            ]
          },
          {
            type: "paragraph",
            text:
              "Esses riscos reforçam por que a testosterona não deve ser utilizada como solução rápida para sintomas de cansaço ou queda de desempenho, sem antes passar por uma avaliação médica completa."
          }
        ]
      },
      {
        id: "petropolis",
        title: "Quando procurar um médico em Petrópolis para avaliar a testosterona?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Se você mora em Petrópolis ou na região e vem notando, de forma persistente, sinais como cansaço constante, queda de libido, perda de massa muscular ou mudanças de humor, pode ser um bom momento para conversar com um médico sobre o assunto."
          },
          {
            type: "paragraph",
            text:
              "A avaliação presencial permite um exame físico adequado, uma conversa detalhada sobre o histórico de saúde e a solicitação de exames complementares, quando necessário. Essas etapas não podem ser substituídas por buscas na internet ou pela opinião de terceiros sem formação médica."
          }
        ]
      },
      {
        id: "atendimento",
        title: "Atendimento médico com o Dr. Pedro Machado em Petrópolis/RJ",
        blocks: [
          {
            type: "paragraph",
            text:
              "O Dr. Pedro Machado, médico inscrito no CRM 01198564/RJ, atende em Petrópolis/RJ pacientes que buscam entender melhor sintomas relacionados à saúde hormonal masculina, incluindo queda de libido, cansaço persistente, alterações de humor e outros sinais que podem estar associados a variações na testosterona."
          },
          {
            type: "paragraph",
            text:
              "O atendimento é conduzido com base em avaliação clínica individualizada, sem promessas de resultado e sem incentivo à automedicação. O objetivo é oferecer ao paciente uma investigação cuidadosa, orientada por evidências médicas, para que qualquer decisão sobre exames ou eventual tratamento seja tomada de forma segura e informada."
          },
          {
            type: "cta",
            title: "Agende uma consulta em Petrópolis",
            text: "Converse com a equipe para verificar disponibilidade e entender o próximo passo para uma avaliação individualizada.",
            href: doctor.whatsappUrl,
            label: "Chamar no WhatsApp"
          }
        ]
      },
      {
        id: "conclusao",
        title: "Conclusão",
        blocks: [
          {
            type: "paragraph",
            text:
              "Perceber sinais como cansaço persistente, queda de libido ou mudanças de humor pode gerar dúvidas sobre a saúde hormonal. Mas esses sintomas têm diversas causas possíveis, e apenas uma avaliação médica individualizada pode esclarecer se há, de fato, relação com os níveis de testosterona."
          },
          {
            type: "paragraph",
            text:
              "Se você é de Petrópolis ou região e identifica esses sinais no seu dia a dia, o caminho mais seguro é buscar uma consulta médica para investigação adequada, evitando automedicação e decisões baseadas apenas em informações genéricas."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Quais são os sintomas de testosterona baixa?",
        answer:
          "Os sintomas mais comuns incluem cansaço persistente, queda de libido, disfunção erétil, perda de massa muscular, aumento de gordura abdominal e alterações de humor. Esses sinais, isoladamente, não confirmam o diagnóstico e devem ser avaliados por um médico."
      },
      {
        question: "Todo homem acima dos 40 precisa repor testosterona?",
        answer:
          "Não. A reposição hormonal não é indicada automaticamente pela idade. A decisão depende de avaliação clínica individualizada, exames laboratoriais e análise dos riscos e benefícios para cada paciente."
      },
      {
        question: "Testosterona baixa causa cansaço?",
        answer:
          "O cansaço persistente pode estar relacionado a níveis baixos de testosterona, mas também pode ter outras causas, como distúrbios do sono, alterações de tireoide ou sobrecarga emocional. Por isso, a investigação médica é importante."
      },
      {
        question: "Baixa testosterona pode afetar a libido?",
        answer:
          "Sim, a queda de libido é um dos sintomas possivelmente associados a alterações hormonais, mas também pode estar relacionada a fatores emocionais, de relacionamento ou outras condições de saúde."
      },
      {
        question: "Quando devo fazer exame de testosterona?",
        answer:
          "O exame costuma ser solicitado pelo médico diante da presença de sintomas persistentes. A coleta geralmente é recomendada no período da manhã, quando os níveis do hormônio tendem a ser mais altos."
      },
      {
        question: "Qual a diferença entre testosterona total e livre?",
        answer:
          "A testosterona total mede a quantidade geral do hormônio no sangue, enquanto a testosterona livre representa a fração que não está ligada a proteínas. A interpretação de cada valor depende da avaliação médica."
      },
      {
        question: "Reposição de testosterona é segura?",
        answer:
          "Quando indicada e acompanhada por um médico, a reposição pode ser considerada em casos específicos. No entanto, seu uso sem indicação e acompanhamento adequados pode trazer riscos à saúde."
      },
      {
        question: "Posso tomar testosterona sem orientação médica?",
        answer:
          "Não é recomendado. O uso de testosterona sem avaliação e acompanhamento médico pode causar efeitos colaterais e mascarar outras condições de saúde que precisariam de investigação."
      },
      {
        question: "Onde procurar avaliação para testosterona em Petrópolis?",
        answer:
          "O Dr. Pedro Machado, CRM 01198564/RJ, atende em Petrópolis/RJ pacientes que desejam investigar sintomas relacionados à saúde hormonal masculina, com avaliação individualizada."
      }
    ],
    internalLinks: [
      {
        label: "Saúde hormonal masculina",
        href: "/servicos/reposicao-hormonal-masculina",
        text: "Entenda como funciona a avaliação médica para saúde hormonal masculina."
      },
      {
        label: "Check-up da saúde",
        href: "/servicos/check-up-da-saude",
        text: "Veja como uma avaliação ampla pode investigar sintomas inespecíficos."
      },
      {
        label: "Contato e localização",
        href: "/contato",
        text: "Acesse WhatsApp, endereço e mapa para atendimento em Petrópolis."
      }
    ]
  },
  {
    slug: "efeitos-colaterais-canetas-emagrecedoras",
    path: "/artigos/efeitos-colaterais-canetas-emagrecedoras",
    title: "Os Efeitos Colaterais das Canetas Emagrecedoras",
    metaTitle: "Efeitos Colaterais das Canetas Emagrecedoras | Dr. Pedro Machado",
    description:
      "Entenda possíveis efeitos colaterais das canetas emagrecedoras, como náuseas, efeito sanfona e perda de massa muscular, e quando buscar avaliação médica.",
    excerpt:
      "Entenda quais efeitos colaterais podem ocorrer com medicamentos injetáveis para controle de peso, por que o acompanhamento médico é importante e quando procurar avaliação.",
    category: "Emagrecimento",
    primaryCategory: "Emagrecimento",
    categories: ["Emagrecimento", "Sobrepeso", "Obesidade", "Check-up da Saúde"],
    local: "Petrópolis/RJ",
    author: doctor.name,
    crm: "CRM 01198564/RJ",
    datePublished: "2026-07-06",
    coverImage: "/images/artigos/efeitos-colaterais-canetas-emagrecedoras.svg",
    coverAlt: "Avaliação médica sobre efeitos colaterais das canetas emagrecedoras em Petrópolis",
    summaryTitle: "Neste artigo você verá",
    faqTitle: "Perguntas frequentes sobre canetas emagrecedoras",
    finalCta: {
      eyebrow: "Avaliação médica em Petrópolis",
      title: "Converse com o Dr. Pedro Machado em Petrópolis",
      text: "Fale com a equipe para verificar disponibilidade de consulta e entender o próximo passo para uma avaliação médica individualizada.",
      label: "Chamar no WhatsApp",
      href: doctor.whatsappUrl
    },
    sections: [
      {
        id: "introducao",
        title: "Introdução",
        blocks: [
          {
            type: "paragraph",
            text:
              "As chamadas canetas emagrecedoras ganharam muita visibilidade nos últimos anos. Medicamentos injetáveis usados no controle de peso passaram a ser discutidos em conversas de academia, redes sociais, grupos de família e consultórios. Essa popularização trouxe informação, mas também trouxe dúvidas, expectativas exageradas e uso sem acompanhamento adequado."
          },
          {
            type: "paragraph",
            text:
              "É importante começar por um ponto de equilíbrio: esses medicamentos não são vilões. Em pacientes bem avaliados, com indicação clínica, prescrição correta e acompanhamento médico, podem fazer parte de uma estratégia de tratamento para sobrepeso, obesidade e saúde metabólica. O problema começa quando a decisão é tomada sem avaliação, sem exames, sem análise de rotina e sem plano para monitorar efeitos colaterais, composição corporal e manutenção do peso."
          },
          {
            type: "paragraph",
            text:
              "Neste artigo, você vai entender quais efeitos colaterais podem acontecer, por que náuseas e sintomas gastrointestinais são comuns, como o efeito sanfona pode ocorrer, por que a perda de massa muscular merece atenção e quando procurar avaliação médica em Petrópolis."
          },
          {
            type: "cta",
            title: "Pensando em usar canetas emagrecedoras ou já teve efeitos colaterais?",
            text: "A avaliação médica ajuda a entender indicação, riscos, exames e o melhor caminho para seu contexto.",
            href: doctor.whatsappUrl,
            label: "Agendar avaliação em Petrópolis"
          }
        ]
      },
      {
        id: "o-que-sao",
        title: "O que são as canetas emagrecedoras?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Canetas emagrecedoras é uma forma popular de se referir a medicamentos injetáveis usados em alguns tratamentos para controle de peso. Entre os exemplos mais conhecidos estão substâncias como semaglutida, liraglutida e tirzepatida, que podem atuar em mecanismos relacionados ao apetite, à saciedade, ao esvaziamento gástrico e ao controle metabólico."
          },
          {
            type: "paragraph",
            text:
              "Na prática clínica, esses medicamentos não devem ser entendidos como uma solução isolada. O controle de peso envolve histórico, exames laboratoriais, composição corporal, rotina alimentar, sono, estresse, atividade física, medicamentos em uso e fatores metabólicos. Por isso, a decisão de usar ou não uma medicação precisa ser individualizada."
          },
          {
            type: "paragraph",
            text:
              "Também é essencial diferenciar indicação médica de uso por impulso. Uma pessoa pode ter visto bons relatos, conhecer alguém que perdeu peso ou encontrar informações na internet, mas isso não substitui avaliação. O que funciona para um paciente pode não ser adequado para outro, especialmente quando há doenças associadas, sintomas digestivos, alterações em exames ou uso de outras medicações."
          }
        ]
      },
      {
        id: "efeitos-colaterais",
        title: "Quais efeitos colaterais podem acontecer?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Os efeitos colaterais mais comentados das canetas emagrecedoras costumam envolver o sistema gastrointestinal. Náuseas, vômitos, diarreia, constipação, dor abdominal, refluxo, sensação de estômago cheio e empachamento podem aparecer, principalmente no início do tratamento ou em fases de ajuste."
          },
          {
            type: "list",
            items: [
              "náuseas ou enjoo;",
              "vômitos;",
              "diarreia;",
              "constipação intestinal;",
              "dor ou desconforto abdominal;",
              "refluxo, empachamento ou digestão mais lenta;",
              "redução excessiva do apetite;",
              "risco de desidratação quando há vômitos ou diarreia importantes."
            ]
          },
          {
            type: "paragraph",
            text:
              "Esses sintomas não acontecem da mesma forma em todos os pacientes. Dose, adaptação, histórico clínico, alimentação, hidratação, outras medicações e acompanhamento fazem diferença. Algumas pessoas apresentam sintomas leves e transitórios; outras podem ter efeitos mais intensos e precisar de reavaliação médica."
          },
          {
            type: "cta",
            title: "Importante: efeitos colaterais não são iguais para todos.",
            text: "Dose, adaptação, histórico clínico e acompanhamento médico influenciam a tolerância e a segurança do tratamento.",
            href: doctor.whatsappUrl,
            label: "Falar com a equipe"
          }
        ]
      },
      {
        id: "sintomas-gastrointestinais",
        title: "Náuseas, vômitos, diarreia e constipação",
        blocks: [
          {
            type: "paragraph",
            text:
              "Náuseas, vômitos, diarreia e constipação estão entre os efeitos gastrointestinais mais relatados com medicamentos que atuam em vias relacionadas ao GLP-1. Em muitos casos, eles aparecem no começo do uso ou após mudanças de dose, justamente quando o organismo ainda está se adaptando."
          },
          {
            type: "paragraph",
            text:
              "Quando esses sintomas são leves, podem ser acompanhados dentro do plano médico. Mas sintomas intensos, persistentes ou associados a fraqueza, piora do estado geral, dor importante, vômitos repetidos ou sinais de desidratação merecem avaliação. O ponto central é não normalizar sofrimento nem insistir em uma conduta sem reavaliar segurança."
          },
          {
            type: "paragraph",
            text:
              "Este artigo não orienta dose, ajuste ou forma de aplicação. Essas decisões devem ser tomadas por médico, considerando quadro clínico, exames e resposta individual. O acompanhamento existe justamente para identificar quando algo precisa ser ajustado ou interrompido."
          },
          {
            type: "cta",
            title: "Efeitos persistentes ou intensos precisam ser avaliados com segurança.",
            text: "Se você já usa medicação e sente sintomas importantes, procure orientação médica antes de insistir por conta própria.",
            href: doctor.whatsappUrl,
            label: "Falar com a equipe"
          }
        ]
      },
      {
        id: "efeito-sanfona",
        title: "Efeito sanfona: por que o peso pode voltar?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Uma dúvida frequente é se a pessoa necessariamente recupera o peso depois de parar a medicação. A resposta exige cuidado: não é correto dizer que todo mundo volta ao peso anterior, mas também não é seguro tratar a medicação como solução definitiva sem estratégia de manutenção."
          },
          {
            type: "paragraph",
            text:
              "O peso pode voltar quando a interrupção acontece sem plano, quando hábitos não foram construídos, quando sono, alimentação, treino e rotina continuam desorganizados ou quando fatores metabólicos não foram acompanhados. A medicação pode ajudar em determinados casos, mas não substitui uma estratégia clínica mais ampla."
          },
          {
            type: "paragraph",
            text:
              "Por isso, o tratamento precisa olhar para a manutenção desde o começo. A pergunta não deve ser apenas quanto peso foi perdido, mas como essa perda ocorreu, quais marcadores melhoraram, se houve preservação de massa magra, como está a rotina e quais ajustes serão necessários ao longo do tempo."
          }
        ]
      },
      {
        id: "massa-muscular",
        title: "Perda de massa muscular durante o emagrecimento",
        blocks: [
          {
            type: "paragraph",
            text:
              "Durante o emagrecimento, especialmente quando a perda de peso é rápida ou mal acompanhada, pode haver redução de gordura e também de massa magra. Isso importa porque massa muscular participa da força, autonomia, gasto energético, saúde metabólica e qualidade de vida."
          },
          {
            type: "paragraph",
            text:
              "Acompanhamento médico não deve olhar apenas para o número da balança. Composição corporal, ingestão de proteína, treino de força, exames, disposição, sintomas e ritmo de perda precisam ser considerados. Em alguns casos, perder menos peso, mas preservar melhor a massa magra, pode ser clinicamente mais interessante do que perseguir uma queda rápida e desorganizada."
          },
          {
            type: "paragraph",
            text:
              "Essa é uma das razões pelas quais temas como emagrecimento, hipertrofia, saúde metabólica e check-up se conectam. O objetivo não é apenas reduzir peso, mas cuidar do corpo de forma mais segura e sustentável."
          },
          {
            type: "cta",
            title: "Emagrecer com segurança exige olhar para peso, exames, rotina e composição corporal.",
            text: "Uma avaliação individualizada ajuda a organizar prioridades e reduzir riscos durante o acompanhamento.",
            href: doctor.whatsappUrl,
            label: "Agendar consulta"
          }
        ]
      },
      {
        id: "automedicacao",
        title: "Automedicação e uso sem acompanhamento médico",
        blocks: [
          {
            type: "paragraph",
            text:
              "O uso de canetas emagrecedoras sem acompanhamento pode trazer riscos. Além de efeitos colaterais, há possibilidade de dose inadequada, produto irregular, ignorar contraindicações, mascarar doenças e atrasar diagnósticos que precisariam de investigação."
          },
          {
            type: "paragraph",
            text:
              "Antes de iniciar qualquer medicação, o médico precisa entender histórico de saúde, exames, medicações em uso, sintomas, rotina e objetivos. Também é importante avaliar se há condições que exigem cuidado maior, como histórico de pancreatite ou sintomas digestivos relevantes, doenças gastrointestinais importantes, diabetes em uso de outras medicações, doença renal, risco de desidratação, gestação ou tentativa de engravidar."
          },
          {
            type: "paragraph",
            text:
              "Essa não é uma lista de contraindicações absolutas. É um lembrete de que cada caso precisa ser avaliado. Medicamentos para controle de peso podem ser úteis em contextos específicos, mas segurança depende de indicação, prescrição e monitoramento."
          }
        ]
      },
      {
        id: "quem-precisa-cuidado",
        title: "Quem precisa ter mais cuidado?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Alguns pacientes precisam de avaliação ainda mais criteriosa antes de considerar medicamentos injetáveis para controle de peso. Isso inclui pessoas com histórico de pancreatite ou sintomas digestivos relevantes, doenças gastrointestinais importantes, diabetes em uso de outras medicações, doença renal ou maior risco de desidratação."
          },
          {
            type: "paragraph",
            text:
              "Gestantes, pessoas tentando engravidar ou pacientes com sintomas intensos durante o uso também devem discutir o caso com médico. O objetivo não é assustar, mas reforçar que segurança depende de contexto clínico. Uma mesma medicação pode ser adequada para um paciente e inadequada para outro."
          },
          {
            type: "paragraph",
            text:
              "Por isso, a consulta precisa olhar para riscos e benefícios. A decisão não deve ser baseada apenas no desejo de perder peso, mas no conjunto de saúde, exames, rotina, composição corporal e acompanhamento possível."
          }
        ]
      },
      {
        id: "quando-procurar",
        title: "Quando procurar avaliação médica em Petrópolis?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Vale procurar avaliação médica antes de iniciar o uso, mas também quando a pessoa já está usando e apresenta efeitos colaterais, quando parou e recuperou peso, quando percebe perda de massa muscular, quando tem exames alterados ou quando deseja emagrecer com mais segurança."
          },
          {
            type: "list",
            items: [
              "antes de iniciar uma medicação para controle de peso;",
              "se já usa e tem náuseas, vômitos, diarreia ou constipação persistentes;",
              "se houve reganho de peso após interrupção;",
              "se houve perda de força ou massa muscular;",
              "se existem exames alterados ou doenças associadas;",
              "se o objetivo é emagrecer com avaliação médica e monitoramento."
            ]
          },
          {
            type: "paragraph",
            text:
              "A consulta ajuda a diferenciar o que pode ser esperado, o que precisa de ajuste e o que exige investigação. Também permite organizar uma estratégia que considere saúde metabólica, composição corporal e manutenção do peso."
          }
        ]
      },
      {
        id: "atendimento-petropolis",
        title: "Atendimento com o Dr. Pedro Machado em Petrópolis/RJ",
        blocks: [
          {
            type: "paragraph",
            text:
              "O Dr. Pedro Machado, CRM 01198564/RJ, atende em Petrópolis/RJ pacientes que buscam acompanhamento médico para emagrecimento, sobrepeso, obesidade, composição corporal e saúde metabólica. A avaliação considera histórico, rotina, sintomas, exames, objetivos e segurança antes da definição de qualquer conduta."
          },
          {
            type: "paragraph",
            text:
              "Se você pensa em usar canetas emagrecedoras, já está usando ou teve efeitos colaterais, o primeiro passo é conversar com a equipe e verificar disponibilidade para uma avaliação individualizada."
          }
        ]
      },
      {
        id: "fontes-consultadas",
        title: "Fontes consultadas",
        blocks: [
          {
            type: "paragraph",
            text:
              "Este conteúdo foi elaborado com base em informações gerais de segurança e educação em saúde disponíveis em fontes regulatórias e médicas, incluindo Anvisa, FDA, EMA e bulas profissionais de medicamentos quando aplicável. O texto tem finalidade educativa e não substitui avaliação médica individualizada."
          },
          {
            type: "paragraph",
            text:
              "Pontos factuais considerados: efeitos gastrointestinais como náuseas, vômitos, diarreia e constipação são relatados com medicamentos agonistas de GLP-1; esses medicamentos podem atuar em saciedade, apetite e esvaziamento gástrico; e o uso deve respeitar indicação, prescrição e acompanhamento médico."
          }
        ]
      }
    ],
    faq: [
      {
        question: "Quais são os efeitos colaterais mais comuns das canetas emagrecedoras?",
        answer:
          "Os efeitos mais relatados costumam ser gastrointestinais, como náuseas, vômitos, diarreia, constipação, dor abdominal, refluxo e sensação de empachamento. A intensidade varia de pessoa para pessoa."
      },
      {
        question: "Toda pessoa que usa caneta emagrecedora sente náusea?",
        answer:
          "Não. Algumas pessoas têm poucos sintomas, enquanto outras apresentam náuseas mais relevantes. Dose, adaptação, histórico clínico e acompanhamento médico influenciam a tolerância."
      },
      {
        question: "Canetas emagrecedoras causam efeito sanfona?",
        answer:
          "O reganho de peso pode acontecer quando não há estratégia de manutenção, mas não deve ser tratado como algo inevitável para todos. Rotina, alimentação, sono, treino, composição corporal e acompanhamento influenciam o resultado."
      },
      {
        question: "É possível perder massa muscular usando medicamentos para emagrecer?",
        answer:
          "Durante o emagrecimento pode haver perda de gordura e também de massa magra, especialmente quando a perda de peso é rápida ou pouco acompanhada. Por isso, composição corporal, proteína, treino e exames precisam ser considerados."
      },
      {
        question: "Posso usar caneta emagrecedora sem acompanhamento médico?",
        answer:
          "Não é recomendado. O uso sem avaliação pode aumentar riscos, mascarar condições clínicas e levar a condutas inadequadas. A indicação deve ser individualizada."
      },
      {
        question: "Quando devo procurar um médico por efeitos colaterais?",
        answer:
          "Procure avaliação se os sintomas forem intensos, persistentes, associados a vômitos repetidos, sinais de desidratação, dor importante ou piora do estado geral."
      },
      {
        question: "Esses medicamentos são indicados para qualquer pessoa?",
        answer:
          "Não. A indicação depende de avaliação clínica, histórico de saúde, exames, medicações em uso, objetivos e possíveis fatores de risco."
      },
      {
        question: "O acompanhamento médico ajuda a reduzir riscos?",
        answer:
          "Sim. O acompanhamento permite avaliar indicação, monitorar efeitos colaterais, acompanhar exames, composição corporal e ajustar a estratégia quando necessário."
      },
      {
        question: "Onde buscar avaliação em Petrópolis?",
        answer:
          "O Dr. Pedro Machado, CRM 01198564/RJ, atende em Petrópolis/RJ pacientes que buscam avaliação médica para emagrecimento, sobrepeso, obesidade e saúde metabólica."
      }
    ],
    internalLinks: [
      {
        label: "Emagrecimento",
        href: "/servicos/emagrecimento",
        text: "Entenda como funciona o acompanhamento médico para emagrecimento individualizado."
      },
      {
        label: "Obesidade",
        href: "/servicos/obesidade",
        text: "Veja como a obesidade pode ser acompanhada como condição multifatorial."
      },
      {
        label: "Check-up da Saúde",
        href: "/servicos/check-up-da-saude",
        text: "Conheça a avaliação preventiva com exames e leitura do contexto clínico."
      },
      {
        label: "Hipertrofia",
        href: "/servicos/hipertrofia",
        text: "Leia sobre composição corporal, massa muscular e acompanhamento médico."
      },
      {
        label: "Contato",
        href: "/contato",
        text: "Acesse WhatsApp, endereço e mapa para atendimento em Petrópolis."
      }
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticleReadingTime(article: Article) {
  const text = [
    article.title,
    article.description,
    ...article.sections.flatMap((section) => [
      section.title,
      ...section.blocks.flatMap((block) => {
        if (block.type === "paragraph") return [block.text];
        if (block.type === "list") return block.items;
        if (block.type === "symptom-list") return block.items.flatMap((item) => [item.title, item.text]);
        return [block.title, block.text, block.label];
      })
    ]),
    ...article.faq.flatMap((item) => [item.question, item.answer])
  ].join(" ");

  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
