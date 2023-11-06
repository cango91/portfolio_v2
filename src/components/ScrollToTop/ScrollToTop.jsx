import { useTranslation } from 'react-i18next';
import './ScrollToTop.css';

export default function ScrollToTop({ show }) {
    const {t} = useTranslation();
    const scrollToTop = () => {
        window.scroll({ top: true });
    }
    const onKeyPress = e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
        }
    }
    return (
        <div
            tabIndex={2}
            aria-label={t('aria_scroll_to_top')}
            role='button'
            className={`scroll-to-top-container ${show ? '' : 'invisible'}`}
            onClick={scrollToTop}
            onKeyDown={onKeyPress}>

        </div>
    );
}