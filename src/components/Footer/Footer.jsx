import { useTranslation } from 'react-i18next';
import './Footer.css';
export default function Footer() {
    const {t} = useTranslation();
    return (
        <footer>
            <div className="footer">
                <div className="footer__copyright" tabIndex={3}>© 2023, Can Göloğlu, {t('made_with_love')}</div>
                <div className="attributions" tabIndex={3} aria-label='attributions: sun/moon icon by icons8' role='link'><a tabIndex={3} rel='noreferrer noopener' target="_blank" href="https://icons8.com/icon/DtRs5e4zMQW8/sun">Sun</a> icon by <a tabIndex={3} rel='noreferrer noopener' target="_blank" href="https://icons8.com">Icons8</a></div>
            </div>
        </footer>
    );
}