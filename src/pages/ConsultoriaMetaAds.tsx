import CommercialLanding from "@/components/CommercialLanding";

const ConsultoriaMetaAds = () => (
  <CommercialLanding
    seo={{
      title: "Consultoria Meta Ads e Facebook Ads para Escala | AD Scale",
      description:
        "Consultoria especializada em Meta Ads e Facebook Ads: arquitetura de ativos, Trust Score, contingência, CAPI e governança para operações que escalam.",
      keywords: [
        "consultoria meta ads",
        "consultoria facebook ads",
        "consultor meta ads",
        "consultor facebook ads",
        "consultoria tráfego pago facebook",
        "especialista em facebook ads",
        "especialista em meta ads",
        "estrutura de tráfego pago facebook",
        "consultoria para gestor de tráfego",
        "consultoria para agência facebook ads",
        "consultoria recuperação de conta facebook",
        "auditoria de bm facebook",
      ],
      canonical: "/consultoria-meta-ads",
    }}
    eyebrow="Consultoria"
    h1="Consultoria Meta Ads e Facebook Ads para operações que escalam"
    subheadline="Arquitetura de ativos, contingência, Trust Score, CAPI e governança — diagnóstico e plano de ação direto ao ponto, sem teoria desnecessária."
    bullets={[
      "Auditoria de BM, perfis e páginas",
      "Plano de contingência sob medida",
      "Implementação de CAPI e Pixel coerente",
      "Estratégia para Facebook Ads, Instagram e Meta como um todo",
      "Diagnóstico de Trust Score e fingerprint",
      "Acompanhamento técnico contínuo opcional",
    ]}
    benefits={[
      {
        title: "Foco em alto volume",
        description:
          "Atendemos operações que escalam de R$ 50 mil a 7 dígitos por mês, com gargalos típicos de bloqueio, limite e revisão.",
      },
      {
        title: "Recomendações executáveis",
        description:
          "Você sai da consultoria com checklist técnico, prioridades e responsáveis — não com slides genéricos.",
      },
      {
        title: "Visão integrada de ativos",
        description:
          "Combinamos infraestrutura (BM, perfil, página, IP, fingerprint) com estratégia de mídia para reduzir risco e ampliar previsibilidade.",
      },
    ]}
    faqs={[
      {
        question: "Para quem é a consultoria Meta Ads e Facebook Ads?",
        answer:
          "Gestores de tráfego, agências, in-house teams e e-commerces operando volume relevante mensal e enfrentando instabilidade, bloqueio ou teto de escala.",
      },
      {
        question: "Como funciona o diagnóstico inicial?",
        answer:
          "Mapeamos seus ativos atuais (BMs, perfis, páginas, pixels, CAPI), identificamos pontos de risco e entregamos um plano priorizado de correções e contingência.",
      },
      {
        question: "A consultoria inclui ativos de contingência?",
        answer:
          "Os ativos são contratados separadamente. A consultoria define o que faz sentido para sua operação; você adquire só o necessário.",
      },
      {
        question: "Vocês atendem só Meta Ads ou também Facebook Ads e Instagram?",
        answer:
          "Atendemos todo o ecossistema Meta — Facebook Ads, Instagram Ads, Messenger e Audience Network — já que compartilham a mesma infraestrutura de BM e ativos.",
      },
    ]}
    relatedPosts={[
      { slug: "calcular-roi-investimento-contingencia-meta-ads", label: "Como calcular ROI de contingência" },
      { slug: "pixel-vs-capi-conversions-api-meta-ads", label: "Pixel vs CAPI: o que escolher" },
      { slug: "fingerprint-ip-residencial-meta-ads", label: "Fingerprint e IP residencial no Meta Ads" },
    ]}
    internalLinks={[
      { href: "/bm-verificada", label: "Comprar BM Verificada" },
      { href: "/contingencia-meta-ads", label: "Estrutura de contingência" },
    ]}
    testimonials={[
      {
        name: "Felipe M.",
        role: "Sócio de Agência Performance",
        operation: "Múltiplos verticais",
        quote: "A consultoria reorganizou nossa arquitetura de BMs e perfis. Saímos de bloqueio recorrente para previsibilidade real em todas as contas.",
        metric: "12",
        metricLabel: "ativos rodando estáveis",
        volume: "R$ 400k/dia",
      },
      {
        name: "Bruno L.",
        role: "CMO",
        operation: "E-commerce omnichannel",
        quote: "Achei que era problema de criativo. Era infraestrutura. Em 3 sessões, mapearam tudo, ajustamos CAPI e pixel e o CAC caiu 18%.",
        metric: "-18%",
        metricLabel: "no CAC em 30 dias",
        volume: "R$ 180k/dia",
      },
      {
        name: "Patrícia N.",
        role: "Gestora de Tráfego Sênior",
        operation: "Infoproduto recorrente",
        quote: "O diagnóstico técnico é cirúrgico. Trouxeram clareza de Trust Score, fingerprint e CAPI que eu não conseguia em curso nenhum.",
        metric: "+62%",
        metricLabel: "tempo médio de ativo",
        volume: "R$ 95k/dia",
      },
    ]}
    useCases={[
      {
        segment: "Agência",
        title: "Agência padronizou operação de 18 clientes",
        scenario: "Agência com 18 contas ativas sofria com BM compartilhada, falta de governança e bloqueios cruzados afetando múltiplos clientes.",
        action: "Consultoria definiu padrão de 1 BM verificada por cliente, perfis aged dedicados e fluxo de contingência documentado.",
        result: "Tickets de bloqueio caíram 70% em 90 dias e a agência liberou 1 FTE antes alocado em recuperação.",
      },
      {
        segment: "E-commerce",
        title: "DTC corrigiu CAPI e estabilizou ROAS",
        scenario: "Loja escalando com ROAS oscilando 30% entre dias. CAPI mal configurado e deduplicação quebrada com Pixel.",
        action: "Auditoria técnica de Pixel + CAPI, correção de eventos, EMQ acima de 8 e ajuste de janelas de atribuição.",
        result: "ROAS estabilizou com variação <8% diária e ticket médio reportado subiu 12% por melhor matching de eventos.",
      },
    ]}
    ctaPrimary="Agendar consultoria"
  />
);

export default ConsultoriaMetaAds;
