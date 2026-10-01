import type { Metadata } from "next";
import Image from "next/image";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { InstagramIcon, MapPinIcon, WebsiteIcon } from "@/components/Icons";
import { KorperCta, KorperViewTracker, WhatsAppIcon } from "@/components/korper/KorperInteractions";
import { buildWhatsAppUrl, doctor, KORPER_WHATSAPP_MESSAGE } from "@/data/site";
import styles from "./korper.module.css";

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-korper-display"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-korper-body"
});

const APPOINTMENT_URL = buildWhatsAppUrl(KORPER_WHATSAPP_MESSAGE);
const title = "Dr. Pedro Machado + Körper | Saúde, Composição Corporal e Performance";
const description = "Acompanhamento médico individualizado do Dr. Pedro Machado em parceria com a Körper Academia.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/korper" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/korper", type: "website", locale: "pt_BR" },
  twitter: { card: "summary_large_image", title, description }
};

const performancePoints = [
  ["01", "Composição corporal", "Você treina com frequência, mas não percebe no corpo a evolução que esperava?"],
  ["02", "Emagrecimento", "Peso e medidas parecem não responder, mesmo com rotina de treino?"],
  ["03", "Hipertrofia", "Você treina musculação, mas sente dificuldade para ganhar massa e evoluir como gostaria?"],
  ["04", "Disposição e performance", "Falta energia, recuperação ou constância para treinar como gostaria?"]
];

const equationItems = [
  ["Treino", "o estímulo"],
  ["Sono", "recuperação e rotina"],
  ["Recuperação", "como o corpo responde entre os treinos"],
  ["Metabolismo", "o contexto metabólico individual"],
  ["Rotina", "hábitos e realidade diária"],
  ["Saúde", "o ponto de partida de todo o processo"]
];

const steps = [
  ["01", "Entendemos o seu contexto", "Rotina, histórico de saúde, treino, alimentação, sono, dificuldades e objetivos."],
  ["02", "Investigamos o que faz sentido", "A avaliação médica define se exames ou outras análises são necessários para compreender melhor o caso."],
  ["03", "Definimos o melhor plano", "A estratégia é construída individualmente e pode envolver orientações de rotina, suplementação e, quando indicado, uso de medicamentos."],
  ["04", "Acompanhamos sua evolução", "O acompanhamento permite revisar resultados, ajustar o planejamento e manter continuidade no processo."]
];

const careHighlights = [
  "Clínica de primeira linha",
  "Planejamento personalizado",
  "Suporte e acompanhamento via WhatsApp",
  "Estratégia alinhada à rotina e aos objetivos do paciente",
  "Atendimento médico individualizado",
  "Experiência médica com a realidade de quem treina",
  "Avaliação de suplementação e medicamentos",
  "Condutas específicas quando clinicamente indicadas"
];

const faqItems = [
  {
    question: "Como funciona a consulta?",
    answer: "A consulta começa por uma conversa sobre histórico, rotina e objetivos. A partir da avaliação individual, o Dr. Pedro orienta os próximos passos adequados para cada pessoa."
  },
  {
    question: "O atendimento é individualizado?",
    answer: "Sim. O acompanhamento considera saúde, composição corporal, rotina, histórico e objetivos, sem usar uma fórmula pronta."
  },
  {
    question: "O acompanhamento pode incluir suplementos ou medicamentos?",
    answer: "Pode, quando houver indicação após avaliação médica. A estratégia pode envolver orientações sobre suplementação, medicamentos e recursos terapêuticos específicos, sempre considerando o contexto e a segurança de cada paciente."
  },
  {
    question: "Preciso ser aluno da Körper?",
    answer: "A parceria oferece uma condição especial para alunos Körper. A equipe confirma as condições disponíveis no momento do agendamento."
  },
  {
    question: "Como faço para agendar?",
    answer: "Clique em um dos botões desta página para falar com a equipe pelo WhatsApp oficial e consultar os horários disponíveis."
  }
];

function AbstractArc({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 360 360" aria-hidden="true">
      <path d="M43 223A146 146 0 1 1 294 280" />
      <path d="M74 240A118 118 0 0 1 282 106" />
      <circle cx="43" cy="223" r="5" />
      <circle cx="282" cy="106" r="3" />
    </svg>
  );
}

function BrandLockup({ light = false }: { light?: boolean }) {
  return (
    <div className={`${styles.brandLockup} ${light ? styles.brandLockupLight : ""}`}>
      <Image src="/images/korper/korper-logo-transparent.png" alt="Körper Academia" width={144} height={108} />
      <span aria-hidden="true">+</span>
      <Image src="/images/logo-dr-pedro-machado-nav.png" alt="Dr. Pedro Machado" width={300} height={30} className={styles.doctorLogo} />
    </div>
  );
}

export default function KorperLandingPage() {
  return (
    <div className={`${styles.page} ${displayFont.variable} ${bodyFont.variable}`}>
      <KorperViewTracker />

      <section id="korper-hero" className={styles.hero}>
        <div className={styles.heroTexture} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Körper + Dr. Pedro Machado</p>
            <h1>
              <span>Você já treina.</span>
              <span className={styles.heroPause}>Agora entenda</span>
              <span>o que <em>seu corpo</em></span>
              <span><em>precisa.</em></span>
            </h1>
            <p className={styles.heroText}>Seu treino mostra que você já decidiu cuidar do corpo. O próximo passo é entender melhor como ele está respondendo e construir uma estratégia alinhada aos seus objetivos.</p>
            <div className={styles.heroAction}>
              <KorperCta href={APPOINTMENT_URL} eventName="hero_cta_click" className={styles.primaryButton}>
                <WhatsAppIcon /> Agendar pelo WhatsApp
              </KorperCta>
              <small>Condição especial para <strong>alunos Körper.</strong></small>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <AbstractArc className={styles.heroArc} />
            <span className={styles.heroCoordinate}>22°30&apos; · 43°10&apos;</span>
            <Image src="/images/korper/dr-pedro-korper-cutout.png" alt="Dr. Pedro Machado" fill priority sizes="(max-width: 767px) 92vw, 49vw" className={styles.heroPortrait} />
            <div className={styles.heroIdentity}>
              <strong>{doctor.name}</strong>
              <span>Médico</span>
              <small>{doctor.professionalId}</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.performanceSection}>
        <div className={styles.darkInner}>
          <h2>Você treina.<span>Mas está evoluindo<br />como gostaria?</span></h2>
          <div className={styles.performanceList}>
            {performancePoints.map(([number, label, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{label}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.equationSection}>
        <div className={styles.lightInner}>
          <div className={styles.equationHeading}>
            <p className={styles.eyebrow}>O contexto completo</p>
            <h2>Treino é uma parte da equação.</h2>
            <p>O que acontece fora da academia também interfere na hipertrofia, no emagrecimento, na performance e na composição corporal.</p>
          </div>
          <div className={styles.equationDiagram}>
            {equationItems.map(([item, explanation], index) => (
              <div key={item}>
                <span><strong>{item}</strong><small>{explanation}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.doctorSection}>
        <div className={styles.doctorImageWrap}>
          <Image src="/images/korper/dr-pedro-retrato-medico.png" alt="Dr. Pedro Machado em atendimento médico" fill sizes="(max-width: 767px) 100vw, 62vw" className={styles.doctorImage} />
          <span className={styles.doctorIndex}>02 / 02</span>
        </div>
        <div className={styles.doctorCopy}>
          <p className={styles.eyebrow}>Medicina + performance</p>
          <h2>Conheça o<br />Dr. Pedro Machado.</h2>
          <div className={styles.doctorCredentials}>
            <strong>{doctor.name}</strong>
            <span>Médico | {doctor.professionalId}</span>
          </div>
          <div className={styles.doctorBody}>
            <p>Dr. Pedro Machado trabalha com acompanhamento médico individualizado para pessoas que buscam emagrecimento, hipertrofia, melhor composição corporal, evolução na musculação, mais disposição e performance.</p>
            <p>A proposta é entender rotina, treino, histórico, objetivos e contexto clínico para construir uma estratégia coerente com cada paciente.</p>
          </div>
          <p className={styles.doctorStatement}>Não existe<br /><em>fórmula pronta.</em></p>
        </div>
      </section>

      <section className={styles.careSection}>
        <div className={styles.lightInner}>
          <div className={styles.careHeading}>
            <p className={styles.eyebrow}>Atendimento médico</p>
            <h2>O que você encontrará<br />no meu atendimento</h2>
            <p>Cada plano é construído de forma individualizada, considerando objetivos, contexto clínico, rotina e estratégia.</p>
          </div>
          <div className={styles.careGrid}>
            {careHighlights.map((item) => (
              <article key={item} className={styles.careItem}>
                <span aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.lightInner}>
          <div className={styles.processHeading}>
            <p className={styles.eyebrow}>Como funciona</p>
            <h2>O que acontece<br />na consulta?</h2>
          </div>
          <ol className={styles.timeline}>
            {steps.map(([number, heading, text]) => (
              <li key={number}><span className={styles.stepNumber}>{number}</span><i aria-hidden="true" /><h3>{heading}</h3><p>{text}</p></li>
            ))}
          </ol>
          <KorperCta href={APPOINTMENT_URL} eventName="mid_page_cta_click" className={styles.processCta}>
            <WhatsAppIcon /> Quero agendar minha consulta
          </KorperCta>
        </div>
      </section>

      <section className={styles.partnershipSection}>
        <div className={styles.partnershipPhoto} aria-hidden="true"><Image src="/images/korper/korper-gym-strength.jpg" alt="" fill sizes="45vw" /></div>
        <div className={styles.partnershipInner}>
          <BrandLockup light />
          <h2>Uma parceria pensada para quem treina.</h2>
          <div className={styles.partnershipText}>
            <p>A Körper já faz parte da sua rotina de treino.</p>
            <p>A parceria com o Dr. Pedro aproxima o acompanhamento médico de quem busca emagrecimento, hipertrofia, melhor composição corporal e performance com estratégia individualizada.</p>
          </div>
          <div className={styles.exclusiveBlock}>
            <span className={styles.exclusiveBadge}>Exclusivo para alunos Körper</span>
            <p className={styles.partnershipCondition}>Condições especiais<br />para quem treina na Körper.</p>
            <p className={styles.exclusiveText}>A parceria entre a Körper e o Dr. Pedro Machado foi pensada para oferecer condições exclusivas aos alunos da academia.</p>
          </div>
          <KorperCta href={APPOINTMENT_URL} eventName="korper_section_cta_click" className={styles.primaryButton}><WhatsAppIcon /> Quero conhecer a condição</KorperCta>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <h2>Antes de<br />agendar.</h2>
          <div className={styles.faqList}>
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <Image src="/images/korper/korper-gym-detail.jpg" alt="Academia Körper" fill sizes="100vw" className={styles.finalImage} />
        <div className={styles.finalOverlay} />
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>Körper + Dr. Pedro Machado</p>
          <h2>Você já começou.<span>Agora entenda melhor<br />o seu corpo.</span></h2>
          <KorperCta href={APPOINTMENT_URL} eventName="final_cta_click" className={styles.finalButton}><WhatsAppIcon /> Agendar pelo WhatsApp</KorperCta>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <BrandLockup />
          <p>{doctor.professionalId} · Comunicação médica informativa, sem promessa de resultados.</p>
        </div>
        <nav className={styles.footerLinks} aria-label="Links do Dr. Pedro Machado">
          <a href="https://www.instagram.com/drpedromachado_/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon /> <span>Siga Meu Perfil</span>
          </a>
          <a href="https://www.doutorpedromachado.com.br" target="_blank" rel="noopener noreferrer">
            <WebsiteIcon /> <span>Conheça Mais Sobre Minha Atuação</span>
          </a>
          <a href="https://google.com/maps?ll=-22.506091,-43.195847&z=15&t=m&hl=pt-BR&gl=US&mapclient=embed&cid=11178659947781709425" target="_blank" rel="noopener noreferrer">
            <MapPinIcon /> <span>Visite a Clínica</span>
          </a>
        </nav>
      </footer>
    </div>
  );
}
