import { useTranslation } from 'react-i18next';
import { useLang } from '../../contexts/LangContext';
import './LangSelector.css';

export default function LangSelector() {
    const {lang, toggleLang} = useLang();
    const {t} = useTranslation();
    return (
        <div className="language-selector" onClick={toggleLang}>
            <span tabIndex={0} className={lang === "tr" ? "flag active" : "flag"} role="img" aria-label={t("aria_turkish")}>🇹🇷</span>
            <span>&nbsp;/&nbsp;</span>
            <span tabIndex={0} className={lang === "en" ? "flag active" : "flag"} role="img" aria-label={t("aria_english")}>🇬🇧</span>
        </div>
    );
}