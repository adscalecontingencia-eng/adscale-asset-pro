import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const featuredCategories = [
    {
      title: "Bloqueios e recuperação",
      description: "Guias para reduzir downtime, responder revisões e proteger a operação em picos de risco.",
      href: "/blog/bloqueio-conta-anuncio-meta-como-evitar",
    },
    {
      title: "BM verificada e Trust Score",
      description: "Conteúdo para entender reputação de ativos, verificação e estabilidade de escala.",
      href: "/blog/o-que-e-business-manager-verificada-meta",
    },
    {
      title: "Infraestrutura de contingência",
      description: "Arquitetura, warm-up, fingerprint e ativos aged para sustentar volume no Meta Ads.",
      href: "/blog/arquitetura-contingencia-meta-ads-operacao-alto-volume",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog AD Scale — Contingência e Meta Ads",
    description: "Conteúdo técnico sobre ativos de contingência, BMs Verificadas, Trust Score e operação profissional em Meta Ads.",
    url: "https://adscale.app/blog",
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.publishedAt,
      url: `https://adscale.app/blog/${p.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <SEO
        title="Blog Meta Ads: contingência, BM verificada e Trust Score | AD Scale"
        description="Aprenda sobre contingência no Meta Ads, bloqueio de conta, BM verificada, Trust Score, perfis aged, Pixel, CAPI e estrutura de escala."
        keywords={[
          "blog meta ads",
          "contingência meta ads",
          "bloqueio conta meta ads",
          "BM verificada",
          "trust score meta",
          "perfil aged facebook",
          "pixel vs capi",
          "warm up meta ads",
        ]}
        canonical="/blog"
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <header className="text-center mb-16">
            <div className="badge-pill mb-4 mx-auto">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Conteúdo técnico para gestores de tráfego
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Blog <span className="text-gradient">AD Scale</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conteúdo educacional e estratégico para reduzir bloqueios, elevar o Trust Score e operar com mais previsibilidade no Meta Ads.
            </p>
          </header>

          <section aria-labelledby="clusters-heading" className="mb-12">
            <h2 id="clusters-heading" className="font-display text-2xl md:text-3xl font-bold mb-6">
              Comece pelos temas mais buscados
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredCategories.map((item) => (
                <Link key={item.title} to={item.href} className="border border-border/50 bg-card/60 hover:border-primary/40 transition-colors p-5 rounded-lg">
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="artigos-heading" className="grid gap-6">
            <h2 id="artigos-heading" className="sr-only">Todos os artigos</h2>
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all overflow-hidden"
              >
                <div className="grid md:grid-cols-[280px_1fr] gap-0">
                  <div className="aspect-[1200/630] md:aspect-auto md:h-full overflow-hidden bg-background">
                    <img
                      src={post.ogImage}
                      alt={post.title}
                      loading="lazy"
                      width={1200}
                      height={630}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                      Ler artigo completo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;
