import { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './ProjectCard.css';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ technologies, title, description, deploymentLinks, githubLink, imgSrc }) {
    const lastElRef = useRef(null);
    const firstElRef = useRef(null);
    const { theme } = useTheme();
    const {t} = useTranslation();
    useEffect(() => {
        const onKeyPress = e => {
            // by default, tabbing will set focus to next project card. Let's prevent that and give the user
            // the option to go to next prev or not at all
            if (e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault();
                const prevButton = document.querySelector('.swiper-button-prev:not(.swiper-button-lock)');
                if (prevButton) {
                    prevButton.focus();
                } else {
                    document.querySelector('#Contact span[role=heading]').focus();

                }
            }
        }
        const onFirstElKeyPress = e => {
            // reverse of the above function for first element
            if (e.target !== firstElRef.current) return;
            if (e.key === 'Tab' && e.shiftKey) {
                e.preventDefault();
                const projectsHeader = document.querySelector('#Projects span[role=heading]');
                if (projectsHeader) {
                    projectsHeader.focus();
                }
            }
        }
        lastElRef.current?.addEventListener('keydown', onKeyPress);
        firstElRef.current?.addEventListener('keydown', onFirstElKeyPress);
        return () => {
            lastElRef.current?.removeEventListener('keydown', onKeyPress);
            firstElRef.current?.removeEventListener('keydown', onFirstElKeyPress);
        }
    }, []);

    const setLastElRef = (element, index) => {
        if (index === deploymentLinks.length - 1) {
            lastElRef.current = element;
        }
    };

    return (
        <div ref={firstElRef} tabIndex={0} aria-label={`${title} Project Card`} className={`project-card ${theme === 'dark' ? 'dark-theme' : ''}`}>
            <div tabIndex={0} className="project-card__title">{title}</div>
            <div className="project-card__img">
                <img tabIndex={0} src={imgSrc} alt={`screenshot of ${title}`} />
            </div>
            <div className="project-card__details">
                <div tabIndex={0} className="project-card__details__description"><b>{t('description')}: </b>{description}</div>
                <div tabIndex={0} className="project-card__details__techstack">
                    <b>{t('tech-stack')}: </b> {technologies.join(', ')}
                </div>
                <div className="project-card__footer">
                    <div className="project-card__footer__github-link">
                        {githubLink.map((item, idx) => (
                            <div key={`${item.title}_${idx}`} className="link">
                                <a tabIndex={0} target='_blank' rel='noreferrer noopener' href={item.src}>{item.title}</a>
                            </div>
                        ))}
                    </div>
                    <div className="project-card__footer__deployment-link">
                        {deploymentLinks && deploymentLinks.length > 0 ? (
                            deploymentLinks.map((item, idx) => (
                                <div key={`${item.title}_${idx}`} className="link">
                                    <a ref={(el) => setLastElRef(el, idx)} tabIndex={0} target='_blank' rel='noreferrer noopener' href={item.src}>{item.title}</a>
                                </div>
                            ))
                        ) : (
                            <span tabIndex={0}>{t('no_deployment')}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}