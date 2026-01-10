import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  canonical,
  ogImage = 'https://prestigegriffin.com/PG.png',
  noindex = false,
  type = 'website'
}) => {
  const siteTitle = 'Prestige Griffin';
  const siteUrl = 'https://prestigegriffin.com';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Advisory & Strategic Solutions`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEO;
