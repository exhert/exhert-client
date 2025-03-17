import React from "react";
import { Helmet } from "react-helmet";

const SEOHelmet = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage,
  structuredData
}) => {
  const siteUrl = "https://exhert.com";
  const defaultTitle = "Exhert | Secure Crypto Trading Platform";
  const defaultDescription = "Exhert provides a secure, escrow-backed crypto trading platform for fast, stress-free transactions across Cameroon, Africa and beyond.";
  const defaultKeywords = "crypto trading, secure crypto, escrow crypto, P2P trading, Africa crypto, mobile money crypto, Cameroon crypto, Cameroon mobile money crypto";
  const defaultOgImage = `${siteUrl}/images/exhert-og-image.jpg`;

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonicalUrl || siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl || siteUrl} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet; 