import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageManager = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t("seo.title");

    const updateMeta = (nameOrProperty: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property='${nameOrProperty}']` : `meta[name='${nameOrProperty}']`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) meta.setAttribute("property", nameOrProperty);
        else meta.setAttribute("name", nameOrProperty);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMeta("description", t("seo.description"));
    updateMeta("og:title", t("seo.title"), true);
    updateMeta("og:description", t("seo.description"), true);
    updateMeta("og:url", window.location.href, true);

    // Canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);

    // Optional: hreflang for multilingual SEO
    const languages = ["es", "en", "de"];
    languages.forEach((lng) => {
      let link = document.querySelector(`link[rel='alternate'][hreflang='${lng}']`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", lng);
        document.head.appendChild(link);
      }
      const path = window.location.pathname.replace(/^\/(es|en|de)/, "");
      const href = `${window.location.origin}/${lng}${path}`;
      link.setAttribute("href", href);
    });

  }, [i18n.language, t]);

  return null;
};

export default LanguageManager;
