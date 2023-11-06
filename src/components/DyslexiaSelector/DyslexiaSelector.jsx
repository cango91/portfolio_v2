import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import './DyslexiaSelector.css';

export default function DyslexiaSelector({ tabindex }) {
    const { dyslexicMode, setDyslexicModePreference } = useTheme();
    const { t } = useTranslation();

    const toggleDyslexicMode = () => {
        setDyslexicModePreference(dyslexicMode === 'on' ? 'off' : 'on');
    }
    const onKeyPress = e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDyslexicMode();
        }
    }
    const ariaLabelKey = dyslexicMode === 'on' ? 'aria_disable_dyslexic_mode' : 'aria_enable_dyslexic_mode'
    return (
        <div className="dyslexia-selector">
            <label
                className='dyslexia-selector__label'
                htmlFor="dys-selector"
                tabIndex={tabindex || 0}
                onKeyDown={onKeyPress}
                aria-label={t(ariaLabelKey)}
            >
                {t("accessibility_mode")}
                <input
                    type="checkbox"
                    name="dyslexic-mode-toggler"
                    id="dys-selector"
                    checked={dyslexicMode === 'on'}
                    onChange={toggleDyslexicMode}
                    className='hidden-checkbox'
                    onKeyDown={onKeyPress}
                />
                <span
                    role='checkbox'
                    aria-checked={dyslexicMode === 'on'}
                    className='checkmark'
                    tabIndex={tabindex || 0}
                >
                </span>
            </label>
        </div>
    );
}