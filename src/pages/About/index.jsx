import Header from '../../components/Header';
import '../../styles/Header.scss';
import landimg from '../../images/aboutimg.jpg';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer'
import '../../styles/About.scss'

function About() {
    return (
        <div className='about'>
            <div className='headercontentabout'>
                <Header/>
                <div className='divlandscape'>
                    <img className='divlandscape__img'src={landimg}/>
                </div>
                <div className='collapses'>
                    <Collapse title="Fiabilité">
                        <p className='collapse__p'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                        régulièrement vérifiées par nos équipes.</p>
                    </Collapse>

                    <Collapse title="Respect">
                        <p className='collapse__p'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </Collapse>

                    <Collapse title="Service">
                        <p className='collapse__p'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </Collapse>

                    <Collapse title="Sécurité">
                        <p className='collapse__p'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                        également des ateliers sur la sécurité domestique pour nos hôtes.
                        </p>
                    </Collapse>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;