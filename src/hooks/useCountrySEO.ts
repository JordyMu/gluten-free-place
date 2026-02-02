import { useEffect } from "react";

interface SEOCity {
  name: string;
  url?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface CountrySEOProps {
  countryName: string;
  countrySlug: string;
  description: string;
  ogDescription: string;
  cities: SEOCity[];
  faqs: FAQItem[];
  schemaId: string;
}

export const useCountrySEO = ({
  countryName,
  countrySlug,
  description,
  ogDescription,
  cities,
  faqs,
  schemaId,
}: CountrySEOProps) => {
  useEffect(() => {
    // Set document title
    document.title = `Gluten-Free Restaurants in ${countryName} | Celiac-Safe Dining Guide 2026`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", `Gluten-Free Restaurants in ${countryName} | Celiac-Safe Dining Guide`);
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute("content", ogDescription);
    }

    // Add JSON-LD structured data for SEO
    const existingSchema = document.querySelector(`script[data-schema="${schemaId}-gf"]`);
    if (existingSchema) existingSchema.remove();

    const baseUrl = "https://glutenfreeglobetrotters.com";

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', `${schemaId}-gf`);
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `Gluten-Free Restaurants in ${countryName}`,
      "description": description,
      "url": `${baseUrl}/${countrySlug}`,
      "mainEntity": {
        "@type": "ItemList",
        "name": `Top Gluten-Free Cities in ${countryName}`,
        "numberOfItems": cities.length,
        "itemListElement": cities.map((city, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": city.name,
          "url": city.url || `${baseUrl}/${countrySlug}?city=${encodeURIComponent(city.name)}`
        }))
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "Countries", "item": `${baseUrl}/countries` },
          { "@type": "ListItem", "position": 3, "name": countryName, "item": `${baseUrl}/${countrySlug}` }
        ]
      }
    });
    document.head.appendChild(schema);

    // Add FAQ Schema if FAQs exist
    if (faqs.length > 0) {
      const existingFaqSchema = document.querySelector(`script[data-schema="${schemaId}-faq"]`);
      if (existingFaqSchema) existingFaqSchema.remove();

      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.setAttribute('data-schema', `${schemaId}-faq`);
      faqSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
      document.head.appendChild(faqSchema);
    }

    // Cleanup on unmount
    return () => {
      const schemaToRemove = document.querySelector(`script[data-schema="${schemaId}-gf"]`);
      if (schemaToRemove) schemaToRemove.remove();
      const faqSchemaToRemove = document.querySelector(`script[data-schema="${schemaId}-faq"]`);
      if (faqSchemaToRemove) faqSchemaToRemove.remove();
    };
  }, [countryName, countrySlug, description, ogDescription, cities, faqs, schemaId]);
};
