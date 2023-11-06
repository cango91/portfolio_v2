import { createContext, useContext, useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from '../translations/en.json';
import trTranslations from '../translations/tr.json';

i18n.use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations
            },
            tr: {
                translation: trTranslations
            }
        },
        fallbackLng: 'en',
        debug: true,
        react: {
            useSuspense: false
        }
    });

const LangContext = createContext();

export function useLang() {
    const context = useContext(LangContext);
    if (!context) throw new Error('useLang must be used within a LangProvider');
    return context;
}



export function LangProvider({ children }) {
    const [lang, setLang] = useState('en');


    const toggleLang = () => {
        if (lang === 'en') {
            i18n.changeLanguage('tr');
            setLang('tr');
            localStorage.setItem('lang', 'tr');
        } else {
            i18n.changeLanguage('en');
            setLang('en');
            localStorage.setItem('lang', 'en');
        }
    }

    useEffect(() => {
        let detectedLanguage = localStorage.getItem('lang');

        if (detectedLanguage) {
           setLang(detectedLanguage);
           i18n.changeLanguage(detectedLanguage);
        } else {
           if (navigator.languages[0].toLowerCase().startsWith('tr')) {
              localStorage.setItem('lang', 'tr');
              setLang('tr');
              i18n.changeLanguage('tr');
           } else {
              localStorage.setItem('lang', 'en');
              i18n.changeLanguage('en');
           }
        }
  
    }, []);

    const value = {
        i18n,
        toggleLang,
        lang
    }

    return (
        <LangContext.Provider value={value}>
            {children}
        </LangContext.Provider>
    );
}