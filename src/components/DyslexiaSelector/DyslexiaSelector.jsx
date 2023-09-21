import { useTheme } from '../../contexts/ThemeContext';
import './DyslexiaSelector.css';

export default function DyslexiaSelector({ tabindex }) {
    const { dyslexicMode, setDyslexicModePreference } = useTheme();

    const toggleDyslexicMode = () => {
        setDyslexicModePreference(dyslexicMode === 'on' ? 'off' : 'on');
    }
    const onKeyPress = e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDyslexicMode();
        }
    }
    return (
        <div className="dyslexia-selector">
            <label
                className='dyslexia-selector__label'
                htmlFor="dys-selector"
                tabIndex={tabindex || 0}
                onKeyDown={onKeyPress}
                aria-label={`${dyslexicMode === 'on' ? 'Disable' : 'Enable'} dyslexic mode`}
            >
                dyslexic mode
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