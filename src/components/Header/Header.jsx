import { useEffect, useRef, useState } from 'react';
import DyslexiaSelector from '../DyslexiaSelector/DyslexiaSelector';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import './Header.css';
import Scrollspy from '../Scrollspy/Scrollspy';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import LangSelector from '../LangSelector/LangSelector';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [lang, setLang] = useState('en');
    const topContentRef = useRef(null);
    const stickyContentRef = useRef(null);
    const {t} = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLang = () =>{
        setLang(lang==='en' ? 'tr' : 'en');
    }

    return (
        <header>
            <div ref={topContentRef} className="header-top">
                <div className="header__personal">
                    <span className='header__personal--name' tabIndex={0} aria-label={t('aria_name')}>Can Göloğlu</span>
                    <span tabIndex={0}>{t('job_title')}</span>
                </div>
                <div className="header__settings">
                    <div className="header__settings__theme-selector"><ThemeSelector /></div>
                    <div className="header__settings__dyslexia-selector"><DyslexiaSelector /></div>
                    <div className="header__settings__lang-selector"><LangSelector /></div>
                </div>
            </div>
            <div className={`${scrollY < topContentRef.current?.offsetHeight || !topContentRef.current ? 'd-none' : 'dummy-div'}`}></div>
            <div
                ref={stickyContentRef}
                className={`header-sticky ${scrollY >= topContentRef.current?.offsetHeight ? 'p-fixed' : ''}`}>
                <nav>
                    <Scrollspy />
                </nav>
            </div>
            <ScrollToTop show={topContentRef.current && scrollY >= topContentRef.current.offsetHeight} />
        </header>
    );
}