import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import TechStack from './components/TechStack/TechStack';
import { useTheme } from './contexts/ThemeContext';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [filters, setFilters] = useState([]);
  const [usingMouse, setUsingMouse] = useState(false);
  const { theme } = useTheme();

  // When using mouse, don't show the focus outline
  useEffect(()=>{
    const handleMouseDown = () =>{
      if(usingMouse) return
      setUsingMouse(true);
      document.body.classList.add('using-mouse');
    }
    const handleKeyPress = (e)=>{
      if(!usingMouse) return;
      if(e.key==='Tab'){
        setUsingMouse(false);
        document.body.classList.remove('using-mouse');
      }
    }
    window.addEventListener('keydown',handleKeyPress);
    window.addEventListener('mousedown',handleMouseDown);
    return ()=>{
      window.removeEventListener('keydown',handleKeyPress);
      window.removeEventListener('mousedown',handleMouseDown);
    }
  },[usingMouse]);

  const onFilterChanged = filters => {
    setFilters(filters);
  }

  return (
    <div className={`app ${theme === 'dark' ? "dark-theme" : ""}`}>
      <Header />
      <main>
        <section id="About">
          <About />
        </section>
        <section id="TechStack">
          <TechStack onFilterChanged={onFilterChanged} selectedTechs={filters} />
        </section>
        <section id="Projects">
          <Projects filters={filters} />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
        <Footer />
    </div>
  );
}
