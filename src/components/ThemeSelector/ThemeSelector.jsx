import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import animationData from './icons8-sun.json';
import './ThemeSelector.css';
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

export default function ThemeSelector({ tabindex }) {
    const { theme, setThemePreference } = useTheme();
    const [initial, setInitial] = useState(true);
    const lottieRef = useRef(null);
    const { t } = useTranslation();
    useEffect(() => {
        if (theme === 'loading') return;
        const animInstance = lottieRef.current;
        if (animInstance) {
            // if first load, do not animate, go to frame and stop
            if (initial) {
                if (theme === 'dark') {
                    animInstance.goToAndStop(0, true);
                } else {
                    animInstance.goToAndStop(14, true);
                }
                setInitial(false);
            } else {
                if (theme === 'dark') {
                    animInstance.playSegments([14, 28], true);
                } else {
                    animInstance.playSegments([0, 14], true);
                }
            }
        }
    }, [theme]);

    const switchTheme = () => {
        if (theme === 'dark') {
            setThemePreference('light');
        } else {
            setThemePreference('dark');
        }
    }

    const onKeyPress = e => {
        // Listen for "Enter" or "Space" key press events
        if (e.key === 'Enter' || e.key === ' ') {
            // Prevent the default action to stop scrolling when space is pressed
            e.preventDefault();
            switchTheme();
        }
    }

    const ariaLabelKey = theme === 'dark' ? 'aria_switch_to_light' : 'aria_switch_to_dark';

    return (
        <div tabIndex={tabindex || 0}
            aria-label={t(ariaLabelKey)}
            className="theme-selector-button"
            onClick={switchTheme}
            onKeyDown={onKeyPress}
            role="button"
        >
            <Lottie
                animationData={animationData}
                autoplay={false}
                lottieRef={lottieRef}
                className="theme-selector-button--icon"
                loop={false}
                aria-hidden={true}
            />
        </div>
    );
}