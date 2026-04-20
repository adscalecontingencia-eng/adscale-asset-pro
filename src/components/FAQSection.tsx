import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vocês atendem quem está começando?",
    answer:
      "Não. A gente trabalha com operações que já rodam volume — head de mídia, gestor sênior ou agência estruturada. Iniciante queima ativo premium em horas, e isso não é bom pra ninguém.",
  },
  {
    question: "Qual a diferença entre BM Verificada e BM Antiga?",
    answer:
      "A Verificada já passou pelo processo oficial do Meta: cap de gasto alto desde o D0 e prioridade no leilão. A Antiga tem anos de histórico real de gastos e brilha em nichos sensíveis, onde resistência a auditoria pesa mais que cap inicial. Em estruturas maduras, as duas se complementam.",
  },
  {
    question: "Como vocês comprovam a idade e o Trust Score?",
    answer:
      "Pelo próprio Meta: timestamp interno, histórico de gastos exportável e validação de fingerprint. Antes da liberação, fazemos um walkthrough mostrando a documentação real do ativo — nada de print editado.",
  },
  {
    question: "O ativo é exclusivo ou compartilhado?",
    answer:
      "Exclusivo, sempre. Cada perfil, BM e página é entregue pra uma única operação. Ativo compartilhado dispara fingerprint cruzado e queima as duas pontas — a gente simplesmente não trabalha assim.",
  },
  {
    question: "Vocês atendem nichos mais sensíveis (nutra, infoproduto agressivo, apostas)?",
    answer:
      "Sim, com curadoria específica pra cada caso. Pra essas verticais, separamos ativos com Trust Score alto, idade comprovada e sem strike prévio relacionado. Os detalhes a gente alinha no briefing.",
  },
  {
    question: "Por que não tem preço na página?",
    answer:
      "Porque ativo de qualidade não cabe em tabela. O valor depende da combinação (BM + perfil + página), idade, nicho e janela de entrega. O atendimento é 1 a 1 — chama no WhatsApp pra receber a cotação certa pro seu caso.",
  },
  {
    question: "Existe garantia ou reposição?",
    answer:
      "A política de reposição é definida caso a caso, sempre considerando o uso técnico correto (warm-up, criativo dentro de policy, vinculação certa). A gente alinha tudo no briefing, antes da entrega.",
  },
  {
    question: "Como funciona a entrega?",
    answer:
      "Handover por canal seguro com walkthrough ao vivo: vinculação de perfil, setup de BM, conexão de pixel e estratégia de warm-up nos primeiros gastos. Nas primeiras 72h, suporte técnico ativo do nosso lado.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Tirando suas <span className="text-gradient">dúvidas</span>
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
