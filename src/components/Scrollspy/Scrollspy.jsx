import { useEffect, useState } from 'react';
import './Scrollspy.css';

const sections = ["About", "Tech Stack", "Projects", "Contact"];

export default function Scrollspy() {
    const [currentSection, setCurrentSection] = useState('About');
    useEffect(() => {
        const handleScroll = e => {
            let minDistance = Infinity;
            let newCurrentSection = currentSection;

            for (const id of sections) {
                const element = document.getElementById(id.replace(" ", ""));
                const rect = element.getBoundingClientRect();
                const distance = Math.abs(rect.top);  // Distance from the top of the viewport

                if (distance < minDistance) {
                    minDistance = distance;
                    newCurrentSection = id;
                }
            }
            setCurrentSection(newCurrentSection);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentSection]);
    return (
        <div className="scrollspy-container">
            <div className="scrollspy">
                <div className={`scrollspy__line scrollspy__line--bg-${sections.findIndex(el => el === currentSection) * 25 + 10}`}></div>
                {sections.map((section, idx) => {
                    const atSection = currentSection === section;
                    const pastSection = sections.findIndex(el => el === currentSection) >= idx;
                    return (
                        <div
                            key={`stop_${section}`}
                            className={`scrollspy__stop ${pastSection ? 'scrollspy__stop--active' : ''}`}
                            style={{ left: `${(idx + 1) * 25 - 15}%` }}>
                            <div className={`scrollspy__stop__text ${atSection ? 'active' : ''}`}
                            >
                                <a aria-label={`go to ${section} section`} tabIndex={1} role='navigation' href={`#${section.replace(" ", "")}`}>{section}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}