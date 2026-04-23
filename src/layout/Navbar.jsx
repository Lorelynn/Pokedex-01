import PokeLogo from '../assets/poke-logo.png'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar () {
    return(
        <nav className='navbar'>
            <Link to='/'>
                <img src={PokeLogo} ></img>
            </Link>

            <h1>Poke App</h1>
        </nav>
    )
}

export default Navbar;