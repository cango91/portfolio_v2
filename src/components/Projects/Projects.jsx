import { useEffect, useRef, useState } from 'react';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import './Projects.css';

const projects = [
    {
        title: 'PresenTly',
        description: '1st place winner of "Automate Your Life" hackathon. Developed by a team of 6 developers and 4 UX designers, Presently is an AI-powered birthday gifting companion!',
        technologies: ["React", "React Native", "MongoDB", "Express", "NodeJS", "JavaScript", "TypeScript", "AWS", "Jest", "OpenAI API", "Bing Search API", "Heroku", "CSS3"],
        imgSrc: "screenshots/presently.webp",
        githubLink: [{title: "GitHub (web front-end)", src: "https://github.com/GA-Oct-hackathon-team-3/frontend"}, {title:"GitHub (native front-end)", src:"https://github.com/GA-Oct-hackathon-team-3/mobile"}, {title: "GitHub (backend)", src:"https://github.com/GA-Oct-hackathon-team-3/backend"}],
        deploymentLinks: [{title: "Live Site", src: "https://ga-oct-hackathon-team-3.github.io/"}, {title: "Demo Video", src:"https://youtu.be/R8AGdcMoaQY"}]
    },
    {
        title: 'eyeConnect',
        description: 'A tele-medicine web-app for connecting medical professionals with specialists. Features encryption-at-rest and AI-assisted medical image classification.',
        technologies: ["MongoDB", "Express", "NodeJS", "JavaScript", "TensorFlow", "OpenCV", "HTML5", "CSS3", "Heroku", "Docker"],
        imgSrc: "screenshots/eyeConnect.webp",
        githubLink: [{ title: 'GitHub', src: "https://github.com/cango91/eye-connect" }],
        deploymentLinks: [{ title: "Live Site", src: "https://eye-connect-6befc020749e.herokuapp.com/" }]
    },
    {
        title: 'Convault',
        description: 'End-to-end encrypted, web-based chat-app, with a unique data-architecture for mitigating data leaks. Features multiple security layers and real-time messaging.',
        technologies: ['React', 'MongoDB', 'Socket.io', 'Express', 'NodeJS', 'JavaScript', 'Heroku', 'CSS3'],
        imgSrc: "screenshots/convault.webp",
        githubLink: [{ title: "GitHub (front-end)", src: "https://github.com/cango91/convault-frontend" }, { title: "GitHub (back-end)", src: "https://github.com/cango91/convault-backend" }],
        deploymentLinks: [{ title: "Live Site", src: "https://convault-d603666b3d0b.herokuapp.com/" }]
    },
    {
        title: 'Café Normalé',
        description: 'A restaurant app for the visually-impaired, featuring speech-to-text and supporting keyboard-only navigation. Worked with a team of 3 UX Designers and 2 other devs as part of a mini-hackathon.',
        technologies: ['React', 'MongoDB', 'Express', 'NodeJS', 'JavaScript', 'CSS3'],
        imgSrc: "screenshots/cafeNormale.webp",
        githubLink: [{ title: "GitHub", src: "https://github.com/cango91/ga-mini-hackathon" }],
    },
    {
        title: 'email-verify',
        description: 'email-verify is a lightweight, open-source package that can be integrated into any django project for streamlining e-mail verification on user signup.',
        technologies: ['Python', 'Django'],
        imgSrc: "screenshots/emailVerify.webp",
        githubLink: [{ title: "GitHub", src: "https://github.com/cango91/email-verify" }],
        deploymentLinks: [{ title: "PyPI", src: "https://pypi.org/project/email-verify/" }]
    },
    {
        title: 'The Thomas Collective',
        description: 'A travel app focusing on train travel, done as a group project. Features full-CRUD capabilities, user authentication and e-mail verification',
        technologies: ['Python', 'Django', 'Heroku','HTML5','CSS3','JavaScript'],
        imgSrc: "screenshots/thomas.webp",
        githubLink: [{ title: "GitHub", src: "https://github.com/cango91/thomascollective" }],
        deploymentLinks: [{ title: "Live Site", src: "https://thomas-collective-mirror-b5c42af6481f.herokuapp.com/" }]
    },
    {
        title: 'Solitaire (Klondike)',
        description: 'The classic patience game Klondike as a browser game. Features multiple graphic and animation settings and game modes (not compatible with Firefox)',
        technologies: ["HTML5", "CSS3", "JavaScript"],
        imgSrc: "screenshots/solitaire.webp",
        githubLink: [{ title: "GitHub", src: "https://github.com/cango91/solitaire" }],
        deploymentLinks: [{ title: "Play now!", src: "https://cango91.github.io/solitaire/src/index.html" }]
    }
]

export default function Projects({ filters }) {
    const headerRef = useRef(null);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    useEffect(() => {
        if (!filters || !filters.length) {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter((project) => filters.every((filter) => project.technologies.includes(filter))));
        }
    }, [filters]);
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
            <h2><span ref={headerRef} role='heading' aria-level="2" tabIndex={0}>Projects</span></h2>
            <div className="projects">
                {!!filteredProjects.length && <ProjectCarousel projects={filteredProjects} />}
                {!filteredProjects.length && <div tabIndex={0} id="no-projects-message">No projects with the selected filters</div>}
            </div>
        </div>
    );
}