import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import TechStack from './components/TechStack/TechStack';
import { useTheme } from './contexts/ThemeContext';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

export default function App() {
  const [filters, setFilters] = useState([]);
  const { theme } = useTheme();

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
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
