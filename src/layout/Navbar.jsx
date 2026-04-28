import PokeLogo from '../assets/poke-logo.png'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar () {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <nav className={`navbar ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}>
            <Link to='/'>
                <img src={PokeLogo} ></img>
            </Link>

            <h1>Poke App</h1>

            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
        </nav>
    )
}

export default Navbar;