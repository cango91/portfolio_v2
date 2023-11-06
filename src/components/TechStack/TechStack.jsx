import { useState } from 'react';
import TechItem from '../TechItem/TechItem';
import './TechStack.css';
import { useTranslation } from 'react-i18next';

export default function TechStack({ onFilterChanged, selectedTechs }) {
    const [filters, setFilters] = useState([]);
    const {t} = useTranslation();

    const toggleItem = item => {
        const set = new Set(filters);
        if (set.has(item)) {
            set.delete(item);
        } else {
            set.add(item);
        }
        setFilters([...set]);
        onFilterChanged([...set]);
    }
    return (
        <div className='section'>
            <h2><span role='heading' aria-level="2" tabIndex={0}>{t('section_Tech Stack')}</span></h2>
            <div className="tech-stack">
                <div tabIndex={0} className="tech-stack__note"><p>{t('hint_techs')}</p></div>
                <div className="tech-stack__stack">
                    <div className="tech-stack__stack__substack">
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('JavaScript'))} icon="javascript-plain" name="JavaScript" id="JavaScript" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('HTML5'))} icon="html5-plain" name="HTML5" id="HTML5" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('CSS3'))} icon="css3-plain" name="CSS3" id="CSS3" onClick={toggleItem} />
                    </div>
                    <div className="tech-stack__stack__substack">
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('MongoDB'))} icon="mongodb-plain" name="MongoDB" id="MongoDB" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('Express'))} icon="express-original" name="Express" id="Express" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('NodeJS'))} icon="nodejs-plain" name="NodeJS" id="NodeJS" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('React'))} icon="react-original" name="React" id="React" onClick={toggleItem} />
                    </div>
                    <div className="tech-stack__stack__substack">
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('Python'))} icon="python-plain" name="Python" id="Python" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('Django'))} icon="django-plain" name="Django" id="Django" onClick={toggleItem} />
                    </div>
                    <div className="tech-stack__stack__substack">
                    <TechItem active={!!(selectedTechs && selectedTechs.includes('TensorFlow'))} icon="tensorflow-original" name="TensorFlow" id="TensorFlow" onClick={toggleItem} />
                    <TechItem active={!!(selectedTechs && selectedTechs.includes('OpenCV'))} icon="opencv-plain" name="OpenCV" id="OpenCV" onClick={toggleItem} />

                    </div>
                    <div className="tech-stack__stack__substack">
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('Heroku'))} icon="heroku-original" name="Heroku" id="Heroku" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('Docker'))} icon="docker-plain" name="Docker" id="Docker" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('AWS'))} icon="amazonwebservices-original" name="AWS" id="AWS" onClick={toggleItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}