import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import './Projects.css';

const projects = [
    {
        title: 'Convault',
        description: 'End-to-end encrypted, web-based chat-app, with a unique data-architecture for mitigating data leaks',
        technologies: ['React', 'MongoDB', 'Socket.io', 'Express', 'NodeJS', 'JavaScript', 'Heroku', 'CSS3'],
        imgSrc: "screenshots/convault.webp",
        githubLink: [{ title: "GitHub (frontend)", src: "https://github.com/cango91/convault-frontend" }, { title: "GitHub (backend)", src: "" }],
        deploymentLink: { title: "Live Site", src: "https://github.com/cango91/convault-backend" }
    },
    {
        title: 'eyeConnect',
        description: 'A tele-medicine web-app for connecting medical professionals with specialists. Features encryption-at-rest and AI-assisted medical image classification',
        technologies: ["MongoDB", "Express", "NodeJS", "JavaScript", "TensorFlow", "OpenCV", "HTML5", "CSS3", "Heroku", "Docker"],
        imgSrc: "screenshots/eyeConnect.webp",
        githubLink: [],
        deploymentLink: {}
    }
]

export default function Projects({ filters }) {
    return (
        <div className='section'>
            <h2><span role='heading' aria-level="2" tabIndex={1}>Projects</span></h2>
            <div className="projects">
                <ProjectCarousel projects={projects} />
            </div>
        </div>
    );
}