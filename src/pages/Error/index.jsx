import Header from "../../components/Header";
import { Link }  from 'react-router-dom';
import Footer from "../../components/Footer";
import "../../styles/Error.scss"

function Error () {
    return(
        <div className='error'>
            <div className="headercontent">
                <Header/>
                <h2 className="headercontent__h2">404</h2>
                <h3 className="headercontent__h3">Oups! La page que vous demandez n'existe pas.</h3>
                <Link className="headercontent__link" to= '/'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer/>
        </div>

    )
}

export default Error;