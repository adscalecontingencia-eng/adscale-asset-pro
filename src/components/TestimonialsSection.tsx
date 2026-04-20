import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcelo R.",
      role: "Head de Mídia",
      operation: "Operação de Educação",
      quote: "Mudamos nossa base de BM antiga para os ativos da Adscale. O tempo médio de vida subiu de 3 dias para mais de 15 dias. É outro nível.",
      metric: "+400%",
      metricLabel: "tempo médio de ativo",
      volume: "R$ 280k diários",
    },
    {
      name: "Gustavo T.",
      role: "Dropshipping Premium",
      operation: "Nicho de Luxo",
      quote: "Os perfis antigos com Trust Score alto que eles conseguem aprovar são insanos. A operação não trava mais quando pega pico no leilão.",
      metric: "Zero",
      metricLabel: "bloqueios em 45 dias",
      volume: "R$ 150k diários",
    },
    {
      name: "Felipe M.",
      role: "Agência Performance",
      operation: "Múltiplos verticais",
      quote: "Como agência, não posso depender de ativo genérico. O briefing técnico que eles fazem e a curadoria no BM verificado faz toda diferença.",
      metric: "12",
      metricLabel: "ativos rodando estáveis",
      volume: "R$ 400k diários",
    },
  ];

  return (
    <section id="resultados" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="badge-pill mb-4 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Resultados reais de operações no Meta
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Gestores de tráfego que entendem <span className="text-gradient">a diferença</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="card-premium p-8 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-6 min-h-[80px]">
                "{t.quote}"
              </p>

              {/* Metric highlight */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-gradient">{t.metric}</span>
                <span className="text-sm text-muted-foreground">{t.metricLabel}</span>
              </div>
              <div className="text-sm font-medium text-primary mb-6">{t.volume}</div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">
                    {t.role} · {t.operation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
