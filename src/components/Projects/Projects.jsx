import { useEffect, useRef, useState } from 'react';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import './Projects.css';
import { useTranslation } from 'react-i18next';
import { useLang } from '../../contexts/LangContext';



export default function Projects({ filters }) {
    const headerRef = useRef(null);
    const {t, i18n} = useTranslation();
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(()=>{
        setProjects(require(`../../projects/projects.${i18n.language}.js`).projects);
    },[i18n.language]);
    
    useEffect(() => {
        if (!filters || !filters.length) {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter((project) => filters.every((filter) => project.technologies.includes(filter))));
        }
    }, [filters, projects]);

    useEffect(() => {
        // accessibility hack
        const handleTab = (e) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault();
                let visibleElem = document.querySelector(".swiper-slide-visible.swiper-slide-active .project-card");
                if (visibleElem) {
                    visibleElem.focus();
                }else{
                    document.getElementById("no-projects-message").focus();
                }
            }
        }
        headerRef.current?.addEventListener("keydown", handleTab);
        return () => headerRef.current?.removeEventListener("keydown", handleTab);
    }, []);
    return (
        <div className='section'>
            <h2><span ref={headerRef} role='heading' aria-level="2" tabIndex={0}>{t('section_Projects')}</span></h2>
            <div className="projects">
                {!!filteredProjects.length && <ProjectCarousel projects={filteredProjects} />}
                {!filteredProjects.length && <div tabIndex={0} id="no-projects-message">{t('no_projects')}</div>}
            </div>
        </div>
    );
}