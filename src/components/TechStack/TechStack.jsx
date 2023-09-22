import { useState } from 'react';
import TechItem from '../TechItem/TechItem';
import './TechStack.css';

export default function TechStack({ onFilterChanged, selectedTechs }) {
    const [filters, setFilters] = useState([]);

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
            <h2><span role='heading' aria-level="2" tabIndex={1}>Tech Stack</span></h2>
            <div className="tech-stack">
                <div tabIndex={1} className="tech-stack__note"><p>Hint: Select technologies to filter projects by used technologies</p></div>
                <div className="tech-stack__stack">
                    <div className="tech-stack__stack__substack">
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('js'))} icon="javascript-plain" name="JavaScript" id="js" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('html'))} icon="html5-plain" name="HTML5" id="html" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('css'))} icon="css3-plain" name="CSS3" id="css" onClick={toggleItem} />
                    </div>
                    <div className="tech-stack__stack__substack">
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('mongo'))} icon="mongodb-plain" name="MongoDB" id="mongo" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('express'))} icon="express-original" name="Express" id="express" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('nodejs'))} icon="nodejs-plain" name="NodeJS" id="nodejs" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('react'))} icon="react-original" name="React" id="react" onClick={toggleItem} />
                    </div>
                    <div className="tech-stack__stack__substack">
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('python'))} icon="python-plain" name="Python" id="python" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('django'))} icon="django-plain" name="Django" id="django" onClick={toggleItem} />
                    </div>
                    <div className="tech-stack__stack__substack">
                    <TechItem active={!!(selectedTechs && selectedTechs.includes('tensorflow'))} icon="tensorflow-original" name="TensorFlow" id="tensorflow" onClick={toggleItem} />
                    <TechItem active={!!(selectedTechs && selectedTechs.includes('opencv'))} icon="opencv-plain" name="OpenCV" id="opencv" onClick={toggleItem} />

                    </div>
                    <div className="tech-stack__stack__substack">
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('heroku'))} icon="heroku-original" name="Heroku" id="heroku" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('docker'))} icon="docker-plain" name="Docker" id="docker" onClick={toggleItem} />
                        <TechItem active={!!(selectedTechs && selectedTechs.includes('aws'))} icon="amazonwebservices-original" name="AWS" id="aws" onClick={toggleItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}