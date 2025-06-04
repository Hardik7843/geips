import React, { useEffect, useRef } from 'react'

const TranslatorTwo = () =>
{
    const googleTranslateRef = useRef(null);
    useEffect(() =>
    {
        let interValId;

        const checkGoogleTranslate = () =>
        {
            if (window.google && window.google.translate)
            {
                clearInterval(interValId);
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: "en,hi,mr", // Comma-separated language codes
                        layout:
                            window.google.translate.TranslateElement.InlineLayout.VERTICAL,
                    },
                    googleTranslateRef.current
                );
            }
        }

        interValId = setInterval(checkGoogleTranslate, 100);
    }, [])


    return (
        <div>
            <div ref={googleTranslateRef}>

            </div>
        </div>
    )
}

export default TranslatorTwo