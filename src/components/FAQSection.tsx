import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vocês comercializam para quem está começando?",
    answer:
      "Não. Atendemos exclusivamente operações de alto volume com estrutura técnica madura — head de mídia, gestor de tráfego sênior ou agência. Iniciante queima ativo premium em horas e isso não interessa a nenhuma das partes.",
  },
  {
    question: "Qual a diferença entre BM Verificada e BM Antiga?",
    answer:
      "BM Verificada já passou pelo processo oficial de verificação Meta — entrega cap alto desde D0 e prioridade no leilão. BM Antiga tem 2+ anos de histórico real de gastos, ideal para nichos sensíveis onde resiliência a auditoria importa mais do que cap inicial. As duas se complementam dentro de uma stack de contingência.",
  },
  {
    question: "Como vocês comprovam a idade e o Trust Score do ativo?",
    answer:
      "Auditoria via timestamp interno do Meta, histórico de gastos exportável e validação de fingerprint. Antes da liberação fazemos walkthrough técnico mostrando a documentação real do ativo. Nada de captura de tela editada.",
  },
  {
    question: "O ativo é exclusivo ou compartilhado?",
    answer:
      "Exclusivo. Cada perfil, BM e página é entregue para uma única operação. Ativo compartilhado dispara fingerprint cruzado e queima as duas pontas. Não trabalhamos assim.",
  },
  {
    question: "Vocês trabalham com nichos cinza (nutra, infoproduto agressivo, apostas)?",
    answer:
      "Sim, mas com curadoria específica. Para essas verticais selecionamos ativos com Trust Score elevado, idade comprovada e sem strike prévio relacionado. Conversamos os detalhes no briefing.",
  },
  {
    question: "Por que não há preço na página?",
    answer:
      "Ativo de qualidade não tem tabela. O valor depende da combinação (BM + perfil + página), idade, nicho e janela de entrega. Atendimento é 1 a 1 — fale no WhatsApp para receber a cotação técnica.",
  },
  {
    question: "Existe garantia ou reposição?",
    answer:
      "Política de reposição é discutida caso a caso, baseada no uso técnico correto do ativo (warm-up, criativo dentro de policy, vinculação correta). Definimos os termos no briefing antes da entrega.",
  },
  {
    question: "Como acontece o handover?",
    answer:
      "Entrega via canal criptografado com walkthrough técnico ao vivo: vinculação de perfil, setup de BM, conexão de pixel, estratégia de warm-up dos primeiros gastos. Suporte técnico ativo nas primeiras 72h.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg hover:no-underline hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
