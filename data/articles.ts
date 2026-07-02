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
  local: string;
  author: string;
  crm: string;
  datePublished: string;
  coverImage: string;
  coverAlt: string;
  sections: ArticleSection[];
  faq: { question: string; answer: string }[];
  internalLinks: { label: string; href: string; text: string }[];
};

export const articles: Article[] = [
  {
    slug: "testosterona-petropolis",
    path: "/testosterona-petropolis",
    title: "Testosterona em Petrópolis: Quando o Homem Deve se Preocupar com os Níveis Hormonais?",
    metaTitle: "Testosterona em Petrópolis | Dr. Pedro Machado",
    description:
      "Cansaço, queda de libido ou perda de força? Entenda quando investigar a testosterona e agende avaliação com o Dr. Pedro Machado em Petrópolis.",
    excerpt:
      "Entenda sinais que podem justificar investigação dos níveis de testosterona, como funciona a avaliação médica e por que evitar automedicação hormonal.",
    category: "Saúde hormonal masculina",
    local: "Petrópolis/RJ",
    author: doctor.name,
    crm: "CRM 01198564/RJ",
    datePublished: "2026-07-01",
    coverImage: "/images/artigo-testosterona-petropolis.svg",
    coverAlt: "Composição editorial sobre avaliação médica e saúde hormonal masculina",
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
