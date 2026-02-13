import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
}

export const usePageSEO = ({
  title,
  description,
  canonicalPath,
  ogTitle,
  ogDescription,
  ogImage,
  keywords,
}: PageSEOProps) => {
  useEffect(() => {
    const baseUrl = "https://glutensafe.com";
    const defaultOgImage = "https://lovable.dev/opengraph-image-p98pqg.png";

    // Set document title
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    // Keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute("content", keywords);
    }

    // Open Graph
    const tags: Record<string, string> = {
      'meta[property="og:title"]': ogTitle || title,
      'meta[property="og:description"]': ogDescription || description,
      'meta[property="og:image"]': ogImage || defaultOgImage,
      'meta[property="og:url"]': canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl,
      'meta[name="twitter:title"]': ogTitle || title,
      'meta[name="twitter:description"]': ogDescription || description,
      'meta[name="twitter:image"]': ogImage || defaultOgImage,
    };

    Object.entries(tags).forEach(([selector, content]) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    });

    // Canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && canonicalPath) {
      canonical.setAttribute("href", `${baseUrl}${canonicalPath}`);
    }

    return () => {
      // Reset to defaults on unmount
      document.title = "GlutenSafe | Find Celiac-Safe Restaurants Worldwide";
      const defaultDesc = "Discover the best gluten-free restaurants worldwide. Find verified celiac-safe dining in Italy, Spain, USA, UK, Japan & 150+ countries. Real reviews from GF travelers.";
      if (metaDesc) metaDesc.setAttribute("content", defaultDesc);
      if (canonical) canonical.setAttribute("href", baseUrl);
    };
  }, [title, description, canonicalPath, ogTitle, ogDescription, ogImage, keywords]);
};
