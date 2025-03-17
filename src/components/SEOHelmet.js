import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "../utils/useTranslation";

const SEOHelmet = ({ 
  title, 
  description, 
  keywords,
  keywordsFr,
  canonicalUrl, 
  ogImage,
  structuredData
}) => {
  const { language } = useTranslation();
  const siteUrl = "https://exhert.com";
  const defaultTitle = "Exhert | Secure Crypto Trading Platform";
  const defaultDescription = "Exhert provides a secure, escrow-backed crypto trading platform for fast, stress-free transactions across Africa and beyond.";
  
  // Default keywords in English
  const defaultKeywordsEn = "crypto trading, secure crypto, escrow crypto, P2P trading, Africa crypto, mobile money crypto";
  
  // Default keywords in French
  const defaultKeywordsFr = "trading crypto, crypto sécurisé, crypto séquestre, trading P2P, crypto Afrique, crypto mobile money";
  
  // Select keywords based on current language
  const defaultKeywords = language === 'fr' ? defaultKeywordsFr : defaultKeywordsEn;
  const selectedKeywords = language === 'fr' ? (keywordsFr || keywords || defaultKeywords) : (keywords || defaultKeywords);
  
  // Use absolute URL for the OG image
  const defaultOgImage = `${siteUrl}/images/exhert-og-image.jpg`;
  const finalOgImage = ogImage || defaultOgImage;

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={selectedKeywords} />
      <link rel="canonical" href={canonicalUrl || siteUrl} />
      <meta name="language" content={language} />
      
      {/* Hreflang tags for language alternatives */}
      <link rel="alternate" hreflang="en" href={`${siteUrl}${canonicalUrl ? canonicalUrl.replace(siteUrl, '') : ''}`} />
      <link rel="alternate" hreflang="fr" href={`${siteUrl}${canonicalUrl ? canonicalUrl.replace(siteUrl, '') : ''}?lang=fr`} />
      <link rel="alternate" hreflang="x-default" href={`${siteUrl}${canonicalUrl ? canonicalUrl.replace(siteUrl, '') : ''}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'fr' ? 'en_US' : 'fr_FR'} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl || siteUrl} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={finalOgImage} />
      
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