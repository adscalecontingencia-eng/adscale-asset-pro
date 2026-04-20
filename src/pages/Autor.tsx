import { Link, Navigate, useParams } from "react-router-dom";
import { MapPin, ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blogPosts";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import pedroPhoto from "@/assets/pedro-lucas-fundador.jpg";

const AUTHORS = {
  "pedro-lucas": {
    name: "Pedro Lucas",
    role: "Fundador da AD Scale",
    location: "Minas Gerais, Brasil",
    bio: "Especialista em Meta Ads e Facebook Ads para operações de alto volume. Trabalho com Business Managers Verificadas, contingência de ativos e consultoria técnica para gestores de tráfego e agências que precisam de previsibilidade na escala.",
    expertise: [
      "Meta Ads e Facebook Ads",
      "BM Verificada e Trust Score",
      "Contingência e recuperação de contas",
      "Consultoria estratégica de tráfego pago",
    ],
    photo: pedroPhoto,
  },
} as const;

const Autor = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = slug && slug in AUTHORS ? AUTHORS[slug as keyof typeof AUTHORS] : undefined;

  if (!author) return <Navigate to="/sobre" replace />;

  // Por ora, todos os posts são atribuídos ao Pedro Lucas
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    url: `https://adscalecontingencia.com/autor/${slug}`,
    image: "https://adscalecontingencia.com/autores/pedro-lucas.jpg",
    worksFor: { "@type": "Organization", name: "AD Scale", url: "https://adscalecontingencia.com" },
    knowsAbout: author.expertise,
    address: { "@type": "PostalAddress", addressRegion: "MG", addressCountry: "BR" },
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title={`${author.name} — ${author.role} | AD Scale`}
        description={`${author.name}, ${author.role}. ${author.bio}`}
        keywords={[author.name, "AD Scale", "Meta Ads", "Facebook Ads", "consultor meta ads"]}
        canonical={`/autor/${slug}`}
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumbs
            items={[{ label: "Início", href: "/" }, { label: "Autores" }, { label: author.name }]}
            className="mb-8"
          />

          <header className="grid md:grid-cols-[200px_1fr] gap-8 items-start mb-12">
            <img
              src={author.photo}
              alt={`${author.name}, ${author.role}`}
              width={200}
              height={200}
              className="w-full aspect-square object-cover rounded-2xl border border-border/50"
              loading="eager"
            />
            <div>
              <span className="text-xs uppercase tracking-wider text-primary font-semibold">{author.role}</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mt-1 mb-3">{author.name}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                {author.location}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{author.bio}</p>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((e) => (
                  <span key={e} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <section aria-labelledby="autor-posts-heading" className="mb-12">
            <h2 id="autor-posts-heading" className="font-display text-2xl font-bold mb-6">
              Artigos publicados ({posts.length})
            </h2>
            <div className="grid gap-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group block p-4 rounded-lg border border-border/50 bg-card/40 hover:border-primary/40 transition-all"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-1 text-xs">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{p.category}</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(p.publishedAt).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                </Link>
              ))}
            </div>
          </section>

          <section className="text-center p-8 rounded-2xl border border-primary/30 bg-primary/5">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-3">Precisa de ajuda direta?</h2>
            <p className="text-muted-foreground mb-6">Fale comigo no WhatsApp e contextualize sua operação.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105"
            >
              Falar com {author.name.split(" ")[0]}
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>
        </div>
      </main>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Autor;
