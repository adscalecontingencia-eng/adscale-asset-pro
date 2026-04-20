import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, BookOpen, Shield, TrendingUp, AlertTriangle, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const TOC = [
  { id: "o-que-e-alto-volume", label: "O que é Facebook Ads de alto volume" },
  { id: "estrutura-de-conta", label: "Estrutura de conta para escalar com segurança" },
  { id: "trust-score-e-bm-verificada", label: "Trust Score e o papel da BM Verificada" },
  { id: "contingencia", label: "Arquitetura de contingência: por que ela existe" },
  { id: "warm-up", label: "Warm-up técnico de contas e perfis" },
  { id: "pixel-capi", label: "Pixel vs CAPI: rastreamento que sustenta escala" },
  { id: "bloqueios", label: "Como reduzir bloqueios e responder revisões" },
  { id: "auditoria", label: "Auditoria e governança da operação" },
  { id: "consultoria-vs-curso", label: "Consultoria, curso ou time interno?" },
  { id: "checklist-final", label: "Checklist final para operar acima de R$ 50k/dia" },
];

const PillarFacebookAds = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Guia completo de Facebook Ads para alto volume (2026)",
        description:
          "Estrutura de conta, BM Verificada, Trust Score, contingência, warm-up, Pixel/CAPI, auditoria e checklist para operar Facebook Ads e Meta Ads em escala.",
        datePublished: "2026-04-22",
        dateModified: "2026-04-22",
        inLanguage: "pt-BR",
        author: {
          "@type": "Person",
          name: "Pedro Lucas",
          url: "https://adscalecontingencia.com/autor/pedro-lucas",
        },
        publisher: {
          "@type": "Organization",
          name: "AD Scale",
          logo: { "@type": "ImageObject", url: "https://adscalecontingencia.com/og/og-default.jpg" },
        },
        image: "https://adscalecontingencia.com/og/og-default.jpg",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://adscalecontingencia.com/guia-facebook-ads-alto-volume",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title="Guia completo de Facebook Ads para alto volume em 2026 | AD Scale"
        description="Aprenda como estruturar Facebook Ads e Meta Ads para alto volume: BM Verificada, Trust Score, contingência, warm-up, Pixel/CAPI e auditoria. Pillar guide da AD Scale."
        keywords={[
          "facebook ads alto volume",
          "meta ads escala",
          "como escalar facebook ads",
          "estrutura conta facebook ads",
          "BM verificada",
          "trust score",
          "contingência meta ads",
          "consultor facebook ads",
        ]}
        canonical="/guia-facebook-ads-alto-volume"
        ogType="article"
        publishedAt="2026-04-22"
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <Breadcrumbs
            items={[{ label: "Início", href: "/" }, { label: "Guia Facebook Ads alto volume" }]}
            className="mb-6"
          />

          <header className="mb-10">
            <div className="badge-pill mb-4">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              Pillar guide · Atualizado em 22/04/2026
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              Guia completo de <span className="text-gradient">Facebook Ads para alto volume</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tudo o que você precisa para estruturar, escalar e proteger uma operação de Facebook Ads e Meta Ads que
              roda volume real — de R$ 5k/dia a R$ 500k/dia. Estrutura, contingência, Trust Score, governança e
              checklist final.
            </p>
          </header>

          <TableOfContents items={TOC} />

          <article className="prose-content">
            <h2 id="o-que-e-alto-volume" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              O que é Facebook Ads de alto volume
            </h2>
            <p className="text-muted-foreground leading-relaxed my-4">
              Alto volume não é só "gastar muito". É operar de forma que <strong className="text-foreground">um bloqueio
              não pare a operação</strong>. Em geral, contas que rodam acima de R$ 5k/dia já entram em uma faixa onde
              decisões algorítmicas do Meta começam a doer mais — e contas acima de R$ 50k/dia exigem uma arquitetura
              completa de contingência, warm-up e governança.
            </p>
            <p className="text-muted-foreground leading-relaxed my-4">
              Este guia consolida o que aprendemos atendendo gestores de tráfego e agências que rodam volume todos os
              dias. Cada seção aprofunda um pilar e aponta para o conteúdo técnico correspondente no nosso blog.
            </p>

            <h2 id="estrutura-de-conta" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              Estrutura de conta para escalar com segurança
            </h2>
            <p className="text-muted-foreground leading-relaxed my-4">
              A estrutura mínima saudável é: <strong className="text-foreground">1 BM principal verificada + 1 BM
              backup verificada + 2-3 perfis administradores aged + páginas com histórico orgânico</strong>. Cada camada
              existe para absorver risco específico.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">BM principal:</strong> roda a operação no dia a dia, com domínio
                verificado, Pixel + CAPI e limites elevados.
              </li>
              <li>
                <strong className="text-foreground">BM backup:</strong> espelha a configuração crítica e fica em
                standby. Sobe em minutos quando a principal entra em revisão.
              </li>
              <li>
                <strong className="text-foreground">Perfis aged:</strong> administradores com histórico real, fingerprint
                estável e baixo risco de bloqueio em cascata.
              </li>
              <li>
                <strong className="text-foreground">Páginas com histórico:</strong> evitam o flag de "página nova
                fazendo conversão alta", muito comum em ofertas agressivas.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed my-4">
              👉 Aprofunde em{" "}
              <Link to="/blog/perfil-aged-facebook-por-que-administrador-importa" className="text-primary hover:underline">
                Por que o perfil administrador importa
              </Link>{" "}
              e{" "}
              <Link to="/blog/pagina-antiga-facebook-impacto-na-performance" className="text-primary hover:underline">
                Páginas antigas e impacto na performance
              </Link>
              .
            </p>

            <h2 id="trust-score-e-bm-verificada" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              Trust Score e o papel da BM Verificada
            </h2>
            <p className="text-muted-foreground leading-relaxed my-4">
              O <strong className="text-foreground">Trust Score</strong> é o score interno que o Meta atribui a cada
              ativo (perfis, páginas, contas, BMs). Ele decide limites de gasto, rigor de revisão e velocidade de
              recuperação em bloqueio.
            </p>
            <p className="text-muted-foreground leading-relaxed my-4">
              Uma <strong className="text-foreground">BM Verificada</strong> eleva todo o score abaixo dela: contas mais
              estáveis, limites maiores e appeal mais rápido. Para operações sérias, ela deixou de ser luxo e virou
              infraestrutura básica.
            </p>
            <p className="text-muted-foreground leading-relaxed my-4">
              👉 Leia o cluster completo:{" "}
              <Link to="/blog/o-que-e-business-manager-verificada-meta" className="text-primary hover:underline">
                O que é uma BM Verificada
              </Link>
              ,{" "}
              <Link to="/blog/trust-score-meta-ads-como-funciona" className="text-primary hover:underline">
                Como funciona o Trust Score
              </Link>{" "}
              e{" "}
              <Link to="/blog/quanto-custa-bm-verificada-facebook-2026" className="text-primary hover:underline">
                Quanto custa uma BM Verificada em 2026
              </Link>
              .
            </p>

            <h2 id="contingencia" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              Arquitetura de contingência: por que ela existe
            </h2>
            <p className="text-muted-foreground leading-relaxed my-4">
              Bloqueios no Meta Ads são estatística, não exceção. A pergunta certa não é "como evitar 100%", é{" "}
              <strong className="text-foreground">"quando acontecer, em quanto tempo eu volto a vender?"</strong>. A
              resposta, para operações maduras, é em minutos — não em dias.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4 text-muted-foreground">
              <li>BMs e perfis de backup já configurados, com domínio e Pixel ativos.</li>
              <li>Fingerprint estável (IP, navegador, dispositivo, fuso) para todos os logins.</li>
              <li>Documentação de handover técnico pronta para qualquer membro do time subir.</li>
              <li>Plano de comunicação interno: quem aciona o backup, quando, e como medir o downtime.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed my-4">
              👉 Aprofunde em{" "}
              <Link to="/blog/arquitetura-contingencia-meta-ads-operacao-alto-volume" className="text-primary hover:underline">
                Arquitetura de contingência para alto volume
              </Link>{" "}
              e{" "}
              <Link to="/blog/calcular-roi-investimento-contingencia-meta-ads" className="text-primary hover:underline">
                Como calcular o ROI da contingência
              </Link>
              .
            </p>

            <h2 id="warm-up" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              Warm-up técnico de contas e perfis
            </h2>
            <p className="text-muted-foreground leading-relaxed my-4">
              <strong className="text-foreground">Não suba campanha de R$ 10k/dia em conta nova.</strong> O algoritmo
              interpreta picos abruptos de gasto como sinal de risco. Warm-up é a sequência gradual de eventos
              (impressões orgânicas, login estável, gasto crescente) que ensina o Meta que a conta é confiável.
            </p>
            <p className="text-muted-foreground leading-relaxed my-4">
              👉 Veja o passo a passo em{" "}
              <Link to="/blog/warm-up-conta-anuncio-meta-passo-a-passo" className="text-primary hover:underline">
                Warm-up de conta de anúncio Meta
              </Link>
              .
            </p>

            <h2 id="pixel-capi" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              Pixel vs CAPI: rastreamento que sustenta escala
            </h2>
            <p className="text-muted-foreground leading-relaxed my-4">
              Pós-iOS 14 e ATT, depender só do Pixel é entregar dados pela metade ao algoritmo. CAPI (Conversions API)
              envia eventos via servidor, recupera deduplicação e melhora a otimização — especialmente em escala.
            </p>
            <p className="text-muted-foreground leading-relaxed my-4">
              👉 Comparativo completo em{" "}
              <Link to="/blog/pixel-vs-capi-conversions-api-meta-ads" className="text-primary hover:underline">
                Pixel vs CAPI no Meta Ads
              </Link>
              .
            </p>

            <h2 id="bloqueios" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              Como reduzir bloqueios e responder revisões
            </h2>
            <p className="text-muted-foreground leading-relaxed my-4">
              Os principais gatilhos: criativos fora de política, picos de gasto, troca de pagamento, login em IPs de
              risco e páginas/perfis novos. A boa notícia é que <strong className="text-foreground">a maioria é
              evitável</strong> com governança.
            </p>
            <p className="text-muted-foreground leading-relaxed my-4">
              👉 Leituras essenciais:{" "}
              <Link to="/blog/bloqueio-conta-anuncio-meta-como-evitar" className="text-primary hover:underline">
                Como evitar bloqueio de conta
              </Link>
              ,{" "}
              <Link to="/blog/recuperar-conta-anuncio-bloqueada-facebook-ads" className="text-primary hover:underline">
                Como recuperar conta bloqueada
              </Link>{" "}
              e{" "}
              <Link to="/blog/bloqueio-conta-nova-facebook-ads-7-motivos" className="text-primary hover:underline">
                7 motivos pelos quais contas novas bloqueiam
              </Link>
              .
            </p>

            <h2 id="auditoria" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              Auditoria e governança da operação
            </h2>
            <p className="text-muted-foreground leading-relaxed my-4">
              Operação madura tem ritual mensal de auditoria: limites de gasto, status de domínio, integridade da BM,
              permissões, fingerprint dos logins, eventos do Pixel/CAPI. É o que separa quem escala 6 meses de quem
              quebra no terceiro.
            </p>
            <p className="text-muted-foreground leading-relaxed my-4">
              👉 Use o{" "}
              <Link to="/blog/checklist-auditoria-bm-facebook-18-itens" className="text-primary hover:underline">
                checklist de auditoria de BM (18 itens)
              </Link>{" "}
              como ponto de partida.
            </p>

            <h2 id="consultoria-vs-curso" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              Consultoria, curso ou time interno?
            </h2>
            <p className="text-muted-foreground leading-relaxed my-4">
              Curso ensina o que fazer; consultoria resolve <strong className="text-foreground">o seu caso específico
              agora</strong>; time interno escala conhecimento ao longo do tempo. As três opções coexistem — o que muda
              é o momento certo de cada uma.
            </p>
            <p className="text-muted-foreground leading-relaxed my-4">
              👉 Veja o comparativo em{" "}
              <Link to="/blog/consultoria-meta-ads-vs-curso-quando-contratar" className="text-primary hover:underline">
                Consultoria Meta Ads vs curso
              </Link>
              .
            </p>

            <h2 id="checklist-final" className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 scroll-mt-24">
              Checklist final para operar acima de R$ 50k/dia
            </h2>
            <ul className="list-none pl-0 space-y-3 my-6">
              {[
                "BM principal verificada com domínio e Pixel/CAPI configurados",
                "Pelo menos 1 BM Verificada de backup espelhada",
                "2-3 perfis administradores aged com fingerprint estável",
                "Páginas com histórico orgânico real (não recém-criadas)",
                "Warm-up documentado e respeitado em qualquer ativo novo",
                "Auditoria mensal usando o checklist de 18 itens",
                "Plano de resposta a bloqueio com SLA interno < 1h",
                "Limites de gasto monitorados semanalmente",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <section className="mt-16 grid md:grid-cols-3 gap-4">
            <Link
              to="/bm-verificada"
              className="group p-5 rounded-lg border border-border/50 bg-card/60 hover:border-primary/40 transition-all"
            >
              <Shield className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">BM Verificada</h3>
              <p className="text-sm text-muted-foreground">Ativos prontos para sustentar volume com segurança.</p>
            </Link>
            <Link
              to="/contingencia-meta-ads"
              className="group p-5 rounded-lg border border-border/50 bg-card/60 hover:border-primary/40 transition-all"
            >
              <AlertTriangle className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">Contingência</h3>
              <p className="text-sm text-muted-foreground">Backup pronto para subir quando o bloqueio acontece.</p>
            </Link>
            <Link
              to="/consultoria-meta-ads"
              className="group p-5 rounded-lg border border-border/50 bg-card/60 hover:border-primary/40 transition-all"
            >
              <Target className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold mb-1 group-hover:text-primary transition-colors">Consultoria</h3>
              <p className="text-sm text-muted-foreground">Diagnóstico e plano técnico para a sua operação.</p>
            </Link>
          </section>

          <div className="mt-12 p-8 rounded-2xl border border-primary/30 bg-primary/5 text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
            <h2 className="font-display text-xl md:text-2xl font-bold mb-3">
              Pronto para escalar com infraestrutura de verdade?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Em 10 minutos no WhatsApp eu entendo o seu cenário e mostro o que faz sentido para a sua operação.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105"
            >
              Falar com Pedro Lucas
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default PillarFacebookAds;
