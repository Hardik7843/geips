import React, { useEffect } from "react";

const TranslatorComponent = () =>
{
    useEffect(() =>
    {
        const script = document.createElement("script");
        script.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);

        window.googleTranslateElementInit = () =>
        {
            // eslint-disable-next-line no-undef
            new google.translate.TranslateElement(
                {
                    pageLanguage: "en", // Default language
                    includedLanguages: "en,hi,mr", // Comma-separated language codes
                    layout:
                        window.google.translate.TranslateElement.InlineLayout.VERTICAL,
                },
                "google_translate_element"
            );
        };

        const observer = new MutationObserver(() =>
        {
            document.querySelectorAll("iframe").forEach((el) =>
            {
                if (el.src?.includes("translate"))
                {
                    el.remove();
                    document.body.style.top = "0px"; // Reset body top shift
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div
                className="border-black border p-2 inline-block "
                id="google_translate_element"
            ></div>
        </>
    );
};

export default TranslatorComponent;
