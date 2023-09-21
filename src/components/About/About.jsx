import './About.css';

export default function About() {
    return (
        <div className='section'>
            <h2><span role='heading' aria-level="2" tabIndex={1}>About</span></h2>
            <div className="about">
                <div className="about__statement">
                    <img tabIndex={1} src="headshot.webp" alt="headshot of the developer" className='headshot' />
                    <p tabIndex={1} className='text-center'>
                        Hi! <span aria-label='animated waving hand' className="wave">🖐🏼</span>
                    </p>
                    <p aria-label="My name's John. I'm a physician and a software engineer from Türkiye. From a young age, I was captivated by the infinite possiblities software development offered. My 20-year hobby turned into a dream deferred when family needs called me to the medical field. My journey in healthcare was not a detour but a crucial chapter that imbued me with an unparalleled perspective on problem-solving and human-centric design. Now I am back to my first love -software engineering- commited more than ever to creating user-friendly, future-proof solutions that matter" tabIndex={1}>
                        My name’s <b>Can</b>. I'm a <b>physician</b> and a <b>software engineer</b> from Türkiye🇹🇷. From a young age, I was captivated by the infinite possibilities software development offered. My <b>20-year hobby</b> turned into a dream deferred when family needs called me to the <b>medical field</b>. My journey in healthcare was not a detour but a <b>crucial chapter</b> that imbued me with an unparalleled perspective on <b>problem-solving and human-centric design</b>. Now, I am back to my first love—<b>software engineering</b>—committed more than ever to creating <b>user-friendly, future-proof solutions that matter.</b>
                    </p>
                    <p tabIndex={1}>
                        In my work, I employ <b>cutting-edge</b> technologies and tools, primarily focusing on stacks like <b>MERN</b> and <b>Python/Django/Postgres</b>, enabling me to deliver robust solutions tailored to project requirements.
                    </p>
                    <p tabIndex={1}>
                        Outside of my professional pursuits, I find balance and inspiration through sailing, snowboarding and bouldering. These activities not only challenge me physically but mentally as well, reflecting my approach to problem-solving in software development. Just like setting a course on open water or finding the next grip on a climb, I approach each project with <b>precision, creativity, and a drive to reach new heights</b>.
                    </p>
                </div>
                <div className="about__links__container">
                    <div className="about__links">
                        <a tabIndex={1} target='_blank' href="can-gologlu-resume.pdf" className="link">Download Resumé</a>
                        <a tabIndex={1} target='_blank' rel='noreferrer noopener' href="https://github.com/cango91" className="link">GitHub</a>
                        <a tabIndex={1} target='_blank' rel='noreferrer noopener' href="https://www.linkedin.com/in/can-gologlu/" className="link">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}