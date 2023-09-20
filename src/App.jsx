import './App.css';
import { useTheme } from './contexts/ThemeContext';

export default function App() {
  const {theme} = useTheme();
  return (
    <div className={`app ${theme === 'dark' ? "dark-theme" : ""}`}>

    </div>
  );
}
