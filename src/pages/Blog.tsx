import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
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
        title="Blog AD Scale — Contingência, BM Verificada e Trust Score no Meta Ads"
        description="Conteúdo técnico sobre ativos de contingência, BMs Verificadas, perfis aged, Trust Score e arquitetura de operações de alto volume em Meta Ads."
        keywords={[
          "blog meta ads",
          "contingência facebook ads",
          "BM verificada blog",
          "trust score meta",
          "perfil aged facebook",
          "página antiga facebook",
          "arquitetura contingência meta",
          "operação alto volume meta ads",
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
              Arquitetura de contingência, Trust Score, BMs Verificadas e tudo
              que sustenta operações de alto volume no Meta Ads.
            </p>
          </header>

          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block p-6 md:p-8 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all"
              >
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
                <h2 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;
