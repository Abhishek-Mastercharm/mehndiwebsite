import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head = ({ 
  title = "TIK TOK Mehndi - Premium Export Quality Henna Cones", 
  description = "TIK TOK manufactures and exports premium, 100% natural mehndi cones. Rich colour, smooth flow, and long-lasting stain for professionals worldwide.",
  canonicalUrl = "https://tiktokmehndi.com",
  image = "https://tiktokmehndi.com/og-image.jpg"
}) => {
  // Schema.org Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TIK TOK Mehndi",
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-95013-11070",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "French"]
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "TIK TOK Premium Mehndi Cone",
    "image": image,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "TIK TOK"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </Helmet>
  );
};

export default Head;
