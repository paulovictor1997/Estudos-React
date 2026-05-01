import { Link } from 'react-router-dom';
import { BiMoon, BiSun } from 'react-icons/bi';
import './Header.css';

export default function Header({ isDark, toggleTheme }) {
  return (
    <header>
      <Link to="/" className="header-brand">
        <span className="brand-dot" />
        <h1>Where in the world?</h1>
      </Link>

      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {isDark ? <BiSun size={18} /> : <BiMoon size={18} />}
        <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </header>
  );
}