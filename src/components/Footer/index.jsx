import logofooter from '../../images/logo.png';
import '../../styles/Footer.scss'




function Footer(){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth', 
        });
    };
    
    return (
        <footer className="footer">
            <img src={logofooter} className="footer__logo" alt='logo kasa du footer'/>
            <p id="scrollToTop" className="footer__p" onClick={scrollToTop}>
            Retournez au début en cliquant ici
            </p>
        </footer>
      );
    }
    
    export default Footer;