
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "Premier Dubai real estate advisory for luxury villas, penthouses, and off-plan investments. Trusted by global investors.", 
  keywords = "Dubai Real Estate, Luxury Villas, Off-plan, Golden Visa, Ridhira Realty",
  image = "https://ridhirarealty.com/assets/og-image.jpg",
  url = window.location.href
}) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Ridhira Realty`;

    // Helper to update standard meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update Open Graph / Facebook / LinkedIn tags
    const updateOg = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Meta Description
    if (description) {
      updateMeta('description', description);
      updateOg('og:description', description);
      updateMeta('twitter:description', description);
    }

    // Update Keywords
    if (keywords) {
      updateMeta('keywords', keywords);
    }

    // Update Image (for social sharing)
    if (image) {
      updateOg('og:image', image);
      updateMeta('twitter:image', image);
    }

    // Update URL
    if (url) {
      updateOg('og:url', url);
      updateMeta('twitter:url', url);
    }

    // Update Title in Metadata
    updateOg('og:title', `${title} | Ridhira Realty`);
    updateMeta('twitter:title', `${title} | Ridhira Realty`);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
