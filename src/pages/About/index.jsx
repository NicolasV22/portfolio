import Header from '../../components/Header';
import '../../styles/Header.scss';
import landimg from '../../images/aboutimg.jpg';
import Collapse from '../../components/Collapse';

function About() {
    return (
        <div>
        <Header/>
        <div>
            <img src={landimg}/>
        </div>
        <div>
      <h1>À propos</h1>
      <Collapse title="Nous contacter">
      <p>Contenu de la section Nous contacter</p>
      </Collapse>

    </div>

        </div>
    )
}

export default About;