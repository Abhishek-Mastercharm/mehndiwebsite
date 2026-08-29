import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head = ({
  title = "TIK TOK Mehndi - Premium Export Quality Henna Cones",
  description = "TIK TOK Mehndi manufactures and exports premium, 100% natural henna mehndi cones. Rich colour, smooth flow, and long-lasting stain — trusted by bridal mehndi artists, wholesalers and retailers worldwide for weddings, Eid, Diwali and festivals.",
  canonicalUrl = "https://mehndiwebsite.vercel.app",
  image = "https://mehndiwebsite.vercel.app/images/og-image.jpg",
  keywords = "TIK TOK Mehndi, TikTok Mehndi official, TikTok Mehndi website, TikTok Mehndi cones, TikTok Mehndi products, TikTok Mehndi India, TikTok Mehndi henna, mehndi cones, henna cones, mehndi cone, henna cone, ready made mehndi cones, ready to use mehndi cones, professional mehndi cones, bridal mehndi cones, mehndi cones for artists, natural mehndi cones, high quality mehndi cones, fresh mehndi cones, best mehndi cones, buy mehndi cones, buy henna cones, mehndi cones online, henna cones online, mehndi cone price, mehndi products online, mehndi cone supplier, mehndi cone manufacturer, mehndi cone wholesale, henna cone wholesale, how to apply mehndi cone, how to use mehndi cone, how to get dark mehndi color, how to make mehndi darker, how to store mehndi cones, mehndi cone storage, mehndi application tips, mehndi tips for beginners, bridal mehndi tips, natural henna tips, mehndi designs, henna designs, bridal mehndi designs, simple mehndi designs, easy mehndi designs, Indian mehndi designs, Arabic mehndi designs, mehndi stencil, mehndi stencils, henna stencil designs, export quality mehndi",
  type = "website",
}) => {
  // Schema.org Structured Data - Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TIK TOK Mehndi",
    alternateName: "TIK TOK",
    url: canonicalUrl,
    logo: `https://mehndiwebsite.vercel.app/images/product1.webp`,
    image: image,
    description: description,
    keywords: keywords,
    founder: "TIK TOK Mehndi",
    owner: {
      "@type": "Organization",
      name: "TIK TOK Mehndi",
    },
    email: "me.overseas.llc@gmail.com",
    telephone: "+91-95013-11070",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-95013-11070",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
  };

  // Schema.org - Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "TIK TOK Premium Mehndi Cone",
    image: [image, "https://mehndiwebsite.vercel.app/images/product1.webp"],
    description: description,
    brand: {
      "@type": "Brand",
      name: "TIK TOK Mehndi",
    },
    manufacturer: {
      "@type": "Organization",
      name: "TIK TOK Mehndi",
    },
    category: "Mehndi / Henna Cones",
    keywords: "mehndi cones, henna cones, bridal mehndi cones, professional mehndi cones, natural mehndi cones, high quality mehndi cones, ready made mehndi cones, ready to use mehndi cones, best mehndi cones, buy mehndi cones online, mehndi cone manufacturer, mehndi cone wholesale, mehndi cone supplier, fresh mehndi cones, mehndi cones for artists, export quality mehndi, TikTok Mehndi cones, TikTok Mehndi products",
    areaServed: "Worldwide",
    countryOfOrigin: "India",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1000",
      bestRating: "5",
      worstRating: "1",
    },
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
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />

      {/* ============================================= */}
      {/* OPEN GRAPH / FACEBOOK / INSTAGRAM / LINKEDIN   */}
      {/* ============================================= */}
      <meta property="og:site_name" content="TIK TOK Mehndi" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* ============================================= */}
      {/* WHATSAPP PREVIEW META TAGS                     */}
      {/* WhatsApp strictly uses: og:image + summary_large_image */}
      {/* ============================================= */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tiktokmehndi" />
      <meta name="twitter:creator" content="@tiktokmehndi" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="630" />
      <meta name="twitter:image:alt" content={title} />

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
