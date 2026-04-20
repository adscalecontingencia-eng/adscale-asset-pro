import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_DEFAULT_OG } from "@/lib/site";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogType?: "website" | "article";
  publishedAt?: string;
  image?: string;
  jsonLd?: object;
  noIndex?: boolean;
}

const SEO = ({ title, description, keywords, canonical, ogType = "website", publishedAt, image, jsonLd, noIndex }: SEOProps) => {
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const ogImage = image ? `${SITE_URL}${image}` : SITE_DEFAULT_OG;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="AD Scale" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {publishedAt && <meta property="article:published_time" content={publishedAt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default SEO;
