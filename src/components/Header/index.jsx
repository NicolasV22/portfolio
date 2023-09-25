import { Link , useLocation }  from 'react-router-dom';
import '../../styles/Header.scss';
import logo from '../../images/logo.png';

function Header(){
    const location = useLocation();
    return (
        <header className='header'>
            <img src={logo} alt="logo du site kasa" className='header__logo'/>
            <nav className='header__navbar'>
                <Link to="/" className={`header__navbar__link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
                <Link to="/Portfolio" className={`header__navbar__link ${location.pathname === '/Portfolio' ? 'active' : ''}`}>Portfolio</Link>
            </nav>
        </header>
    )
}

export default Header;