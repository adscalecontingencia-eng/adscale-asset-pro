import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogType?: "website" | "article";
  publishedAt?: string;
  jsonLd?: object;
}

const SITE_URL = "https://adscale.app";

const SEO = ({ title, description, keywords, canonical, ogType = "website", publishedAt, jsonLd }: SEOProps) => {
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="AD Scale" />
      {publishedAt && <meta property="article:published_time" content={publishedAt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default SEO;
