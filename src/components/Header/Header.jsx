import { useEffect, useRef, useState } from 'react';
import DyslexiaSelector from '../DyslexiaSelector/DyslexiaSelector';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import './Header.css';

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const topContentRef = useRef(null);
    const stickyContentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <div ref={topContentRef} className="header-top">
                <div className="header__personal">
                    <span className='header__personal--name' tabIndex={0} aria-label='John Goeleaulu'>Can Göloğlu</span>
                    <span tabIndex={0}>Full-stack Engineer</span>
                    </div>
                <div className="header__settings">
                    <div className="header__settings__theme-selector"><ThemeSelector /></div>
                    <div className="header__settings__dyslexia-selector"><DyslexiaSelector /></div>
                </div>
            </div>
            <div className={`dummy-div ${scrollY < topContentRef.current?.offsetHeight ? 'd-none' : ''}`}></div>
            <div 
            ref={stickyContentRef} 
            className={`header-sticky ${scrollY >= topContentRef.current?.offsetHeight ? 'p-fixed' : ''}`}>
                <nav>
                    This is sticky part of header
                </nav>
            </div>
        </header>
    );
}