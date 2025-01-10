import React, { useEffect, useCallback, useMemo } from "react";

const TranslateComponent = () => {
  const loadGoogleTranslate = useCallback(() => {
    try {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_language_change"
        );
      } else {
        console.error("Google Translate is not defined");
      }
    } catch (error) {
      console.error("Error initializing Google Translate:", error);
    }
  }, []);

  const scriptSrc = useMemo(
    () => "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate",
    []
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;

    window.loadGoogleTranslate = loadGoogleTranslate;

    script.onload = () => loadGoogleTranslate();
    script.onerror = () => console.error("Failed to load the Google Translate script.");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.loadGoogleTranslate;
    };
  }, [loadGoogleTranslate, scriptSrc]);

  return <div id="google_language_change"></div>;
};

export default TranslateComponent;