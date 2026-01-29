import Head from 'next/head';

const defaultTitle = "FelixaTouch - Best Clinic Management Software | Healthcare Solutions";
const defaultDescription = "FelixaTouch offers comprehensive clinic management software to streamline operations, boost growth, and maximize profitability. Free demo available with smart reports and analytics.";
const defaultImage = "/og-image.png";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = "Clinic Management Software Free | FelixaTouch",
  description = "Get free cloud-based all-in-one clinic management software. Patient management, booking, doctors, laboratory, pharmacy, ultrasound scanning, procedure management, billing, and analytics. The Patient App, Doctors App, and Nursing App are free. Web and Desktop versions.",
  image = "/og-image.png",
  url,
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Viewport and mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}

// SEO component for use in pages/_app.tsx or individual pages (uses next/head)
export function SEO(props: SEOProps) {
  return (
    <Head>
      <SEOElements {...props} />
    </Head>
  );
}
