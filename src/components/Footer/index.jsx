import logofooter from '../../images/logofooter.png';
import '../../styles/Footer.scss'




function Footer(){
    return(
        <footer className="footer">
            <img src={logofooter} className="footer__logo" alt='logo kasa du footer'/>
            <p className="footer__p">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;