import { Link }  from 'react-router-dom';
import '../../styles/Header.scss';
import logo from '../../images/logo.png';

function Header(){
    return (
        <header className='header'>
            <img src={logo} alt="logo du site kasa" className='header__logo'/>
            <nav className='header__navbar'>
                <Link to="/" className='header__navbar__link'>Accueil</Link>
                <Link to="/about" className='header__navbar__link'>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header;