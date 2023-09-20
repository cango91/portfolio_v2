import './App.css';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import { useTheme } from './contexts/ThemeContext';

export default function App() {
  const {theme} = useTheme();
  return (
    <div className={`app ${theme === 'dark' ? "dark-theme" : ""}`}>
      <ThemeSelector />
    </div>
  );
}
