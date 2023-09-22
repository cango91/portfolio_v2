import { useTheme } from '../../contexts/ThemeContext';
import './ProjectCard.css';

export default function ProjectCard({ technologies, title, description, deploymentLink, githubLink, imgSrc }) {
    const { theme } = useTheme();
    return (
        <div className={`project-card ${theme === 'dark' ? 'dark-theme' : ''}`}>
            <div className="project-card__title">{title}</div>
            <div className="project-card__img">
                <img src={imgSrc} alt={`screenshot of ${title}`} />
            </div>
            <div className="project-card__details">
                <div className="project-card__details__description"><b>Description: </b>{description}</div>
                <div className="project-card__details__techstack">
                    <b>Tech-stack: </b> {technologies.join(', ')}
                </div>
                <div className="project-card__footer">
                    <div className="project-card__footer__deployment-link">
                        {
                            deploymentLink ? <div className="link">
                                <a target='_blank' rel='noreferrer noopener' href={deploymentLink.src}>{deploymentLink.title}</a>
                            </div> : "Coming soon"
                        }
                    </div>
                    <div className="project-card__footer__github-link">
                        {githubLink.map((item, idx) => {
                            return (
                                <div key={`${item.title}_${idx}`} className="link"><a target='_blank' rel='noreferrer noopener' href={item.src}>{item.title}</a></div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
}