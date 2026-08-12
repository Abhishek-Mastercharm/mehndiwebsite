import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head = ({ 
  title = "TIK TOK Mehndi - Premium Export Quality Henna Cones", 
  description = "TIK TOK Mehndi manufactures and exports premium, 100% natural henna mehndi cones. Rich colour, smooth flow, and long-lasting stain — trusted by bridal mehndi artists, wholesalers and retailers worldwide for weddings, Eid, Diwali and festivals.",
  canonicalUrl,
  image,
  keywords = "TIK TOK Mehndi, mehndi cone, henna cone, bridal mehndi, export mehndi, natural henna, red cone mehndi",
  type = "website"
}) => {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : "https://mehndiwebsite.vercel.app";
  const activeCanonical = canonicalUrl || `${currentOrigin}${typeof window !== 'undefined' ? window.location.pathname : '/'}`;
  const activeImage = image || `${currentOrigin}/og-image.webp`;

  // Schema.org Structured Data - Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TIK TOK Mehndi",
    "alternateName": "TIK TOK",
    "url": activeCanonical,
    "logo": `${currentOrigin}/logo.webp`,
    "image": activeImage,
    "founder": "TIK TOK Mehndi",
    "owner": {
      "@type": "Organization",
      "name": "TIK TOK Mehndi"
    },
    "email": "me.overseas.llc@gmail.com",
    "telephone": "+91-95013-11070",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-95013-11070",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  // Schema.org - Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "TIK TOK Premium Mehndi Cone",
    "image": [
      activeImage,
      `${currentOrigin}/images/product1.webp`
    ],
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "TIK TOK Mehndi"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "TIK TOK Mehndi"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1000"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="TIK TOK Mehndi" />
      <meta name="owner" content="TIK TOK Mehndi" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={activeCanonical} />
      <link rel="alternate" href={activeCanonical} hrefLang="en" />
      <link rel="alternate" href={activeCanonical} hrefLang="x-default" />

      {/* ============================================= */}
      {/* OPEN GRAPH / FACEBOOK / INSTAGRAM / LINKEDIN   */}
      {/* ============================================= */}
      <meta property="og:site_name" content="TIK TOK Mehndi" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={activeCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={activeImage} />
      <meta property="og:image:secure_url" content={activeImage} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* ============================================= */}
      {/* WHATSAPP PREVIEW META TAGS                     */}
      {/* WhatsApp strictly uses: og:image + summary_large_image */}
      {/* ============================================= */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@tiktokmehndi" />
      <meta property="twitter:creator" content="@tiktokmehndi" />
      <meta property="twitter:url" content={activeCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={activeImage} />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="630" />
      <meta property="twitter:image:alt" content={title} />

      {/* WhatsApp specific: ensure image is declared clearly  */}
      {/* (WhatsApp crawlers prefer first declared og:image + dimensions) */}
      <meta property="og:updated_time" content={new Date().toISOString().split('T')[0]} />

      {/* ============================================= */}
      {/* STRUCTURED DATA / JSON-LD (SCHEMA.ORG)         */}
      {/* ============================================= */}
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
