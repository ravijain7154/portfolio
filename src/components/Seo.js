import { useEffect } from "react";

const DEFAULT_IMAGE = "/logo192.png";

const ensureMeta = (selector, attributes = {}) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

const ensureLink = (selector, attributes = {}) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

const ensureJsonLd = (id, payload) => {
  let script = document.head.querySelector(`#${id}`);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(payload);
};

const absoluteUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${window.location.origin}${normalizedPath}`;
};

function Seo({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  image = DEFAULT_IMAGE,
  schema,
}) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(path);
    const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);
    const joinedKeywords = keywords.join(", ");

    document.title = title;

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    ensureMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    });

    if (joinedKeywords) {
      ensureMeta('meta[name="keywords"]', {
        name: "keywords",
        content: joinedKeywords,
      });
    }

    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });

    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });

    ensureLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    if (schema) {
      ensureJsonLd("page-schema", schema(canonicalUrl, imageUrl));
    }
  }, [description, image, keywords, path, schema, title, type]);

  return null;
}

export default Seo;
