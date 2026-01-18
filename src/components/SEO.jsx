import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  canonical,
  ogImage = 'https://prestigegriffin.com/PG.png',
  noindex = false,
  type = 'website',
  breadcrumbs = null,
  jobPostings = null
}) => {
  const siteTitle = 'Prestige Griffin';
  const siteUrl = 'https://prestigegriffin.com';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Advisory & Strategic Solutions`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  // Generate BreadcrumbList schema
  const generateBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${siteUrl}${item.path}`
      }))
    };
  };

  // Generate JobPosting schema
  const generateJobPostingSchema = () => {
    if (!jobPostings || jobPostings.length === 0) return null;

    return jobPostings.map(job => ({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": job.title,
      "description": job.description,
      "datePosted": job.datePosted || "2025-01-01",
      "validThrough": job.validThrough || "2025-12-31",
      "employmentType": job.employmentType || "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Prestige Griffin",
        "sameAs": siteUrl,
        "logo": `${siteUrl}/PG.png`
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MY",
          "addressLocality": job.location || "Remote"
        }
      },
      "jobLocationType": job.locationType || "TELECOMMUTE",
      "applicantLocationRequirements": {
        "@type": "Country",
        "name": "Worldwide"
      },
      "skills": job.skills || [],
      "industry": job.department || "Professional Services"
    }));
  };

  const breadcrumbSchema = generateBreadcrumbSchema();
  const jobPostingSchemas = generateJobPostingSchema();

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
      <meta name="twitter:site" content="@prestigegriffin" />
      <meta name="twitter:creator" content="@prestigegriffin" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* BreadcrumbList Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* JobPosting Schema */}
      {jobPostingSchemas && jobPostingSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
