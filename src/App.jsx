import './App.css';
import Header from './components/Header/Header';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import { useTheme } from './contexts/ThemeContext';

export default function App() {
  const {theme} = useTheme();
  return (
    <div className={`app ${theme === 'dark' ? "dark-theme" : ""}`}>
      <Header />
    </div>
  );
}
