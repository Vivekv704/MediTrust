import React, { useEffect, useRef } from "react";

const TranslateComponent = () => {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    let intervalId = null;
    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement.InlineLayout) {
        clearInterval(intervalId);
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            // Added Bengali (bn), Tamil (ta), Marathi (mr), and Hindi (hi)
            includedLanguages: "hi,bn,te,mr ,en", 
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL
          },
          googleTranslateRef.current
        );
      }
    };
    intervalId = setInterval(checkGoogleTranslate, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-red-400">
      <div ref={googleTranslateRef}></div>
    </div>
  );
};

export default TranslateComponent;
