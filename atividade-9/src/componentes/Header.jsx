import { Link } from 'react-router-dom';
import {BiMoon,BiSun} from 'react-icons/bi';
import './Header.css';

export default function Header({ isDark, toggleTheme }){
    return(
    <header>
      <Link to={'/'}>
        <h3 className="title">Where in the world?</h3>
      </Link>
      <div className="toggle" onClick={toggleTheme}>
        {isDark ? <BiSun /> : <BiMoon />}
        <p>{isDark ? 'Light Mode' : 'Dark Mode'}</p>
      </div>
    </header>
    )
}