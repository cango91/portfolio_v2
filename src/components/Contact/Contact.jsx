import './Contact.css';
export default function Contact() {
    return (
        <div className='section'>
            <h2><span role='heading' aria-level="2" tabIndex={1}>Contact</span></h2>
            <div className="contact">
                <p tabIndex={1}>Let's connect! I can be reached via my socials or e-mail, feel free to say hi!</p>
                <div className="contact__items">
                    <a tabIndex={1} target='_blank' rel='noreferrer noopener' href='mailto:can.gologlu@gmail.com'>
                        <div className="contact__item">
                            <div role='presentation' aria-hidden="true" className="contact__item__icon" style={{ fontSize: '3.5rem' }}>✉️</div>
                            <div className="contact__item__text">can.gologlu@gmail.com</div>
                        </div>
                    </a>
                    <a tabIndex={1} target='_blank' rel='noreferrer noopener' href='https://github.com/cango91'>
                        <div className="contact__item">
                            <div role='presentation' aria-hidden="true" className="contact__item__icon"><i className="devicon-github-plain"></i></div>
                            <div className="contact__item__text">github.com/cango91</div>
                        </div>
                    </a>
                    <a tabIndex={1} target='_blank' rel='noreferrer noopener' href='https://www.linkedin.com/in/can-gologlu/'>
                        <div className="contact__item">
                            <div role='presentation' aria-hidden="true" className="contact__item__icon"><i className="devicon-linkedin-plain"></i></div>
                            <div className="contact__item__text">linkedin.com/in/can-gologlu</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}