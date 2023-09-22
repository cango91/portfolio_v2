import { useTheme } from '../../contexts/ThemeContext';
import './TechItem.css';

export default function TechItem({ icon, name, id, onClick, active }) {
    const { theme } = useTheme();
    const onKeyPress = e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(id);
        }
    }
    return (
        <div
            aria-label={name}
            role='button'
            className="tech-icon-container"
            tabIndex={0}
            onKeyDown={onKeyPress}
            onClick={() => onClick(id)}>
            <i
                role='presentation'
                aria-hidden="true"
                className={`tech-icon__icon ${active ? 'tech-icon__icon--active' : ''} devicon-${icon} ${theme === 'dark' ? 'dark-theme' : ''}`}></i>
            <div
                role='presentation'
                aria-hidden="true"
                className={`tech-icon__name ${active ? 'tech-icon__name--active' : ''} 
                ${theme === 'dark' ? 'dark-theme' : ''}`}>{name}</div>
        </div>
    );
}