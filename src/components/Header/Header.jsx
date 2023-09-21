import DyslexiaSelector from '../DyslexiaSelector/DyslexiaSelector';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="header-top">
                <div className="header__name" tabIndex={0}  aria-label='John Goeleaulu'>Can Göloğlu</div>
                <div className="header__settings">
                    <div className="header__settings__theme-selector"><ThemeSelector /></div>
                    <div className="header__settings__dyslexia-selector"><DyslexiaSelector /></div>
                </div>
            </div>
            <div className="header-sticky">
                <nav>

                </nav>
            </div>
        </header>
    );
}