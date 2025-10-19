// src/components/SEO.jsx
import { useEffect } from "react";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, obj) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(obj);
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-cover.jpg",
  noindex = false,
  jsonLd, // objet facultatif (Book/Product/Organization…)
}) {
  useEffect(() => {
    if (title) document.title = title;
    if (description)
      upsertMeta('meta[name="description"]', {
        name: "description",
        content: description,
      });
    if (keywords)
      upsertMeta('meta[name="keywords"]', {
        name: "keywords",
        content: keywords,
      });
    if (canonical) upsertLink("canonical", canonical);

    // Open Graph / Twitter
    if (title)
      upsertMeta('meta[property="og:title"]', {
        property: "og:title",
        content: title,
      });
    if (description)
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      });
    if (ogImage)
      upsertMeta('meta[property="og:image"]', {
        property: "og:image",
        content: ogImage,
      });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Encre de sel",
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: "fr_FR",
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    // Robots
    if (noindex) {
      upsertMeta('meta[name="robots"]', {
        name: "robots",
        content: "noindex, nofollow",
      });
    } else {
      const robots = document.head.querySelector('meta[name="robots"]');
      if (robots) robots.remove();
    }

    // JSON-LD
    if (jsonLd) upsertJsonLd("seo-jsonld", jsonLd);
    else {
      const el = document.getElementById("seo-jsonld");
      if (el) el.remove();
    }
  }, [title, description, keywords, canonical, ogImage, noindex, jsonLd]);

  return null;
}
