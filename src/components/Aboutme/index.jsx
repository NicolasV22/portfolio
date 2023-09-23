
import '../../styles/Aboutme.scss';
import photonico from '../../images/photonico.JPG'



function Aboutme() {
    return(
        <div className='Aboutme'>
            <div className='photo__container'>
                <img className='photo__container'src={photonico} alt='photo de Nicolas Verez'></img>
            </div>
            <h2 className='Aboutme__name'>Nicolas Verez</h2>
            <p className='Aboutme__age'>23 ans</p>
            <p className='Aboutme__description'>
                Après avoir été diplômé d'un Master en Monnaie, Banque, Finance et Assurance en 2022, j'ai décidé de me reconvertir dans le domaine qui me passionait depuis toujours, le développement.
            </p>
            <p className='Aboutme__description'>
                J'ai donc décidé de m'engager dans le parcours de formation de développeur web d'OpenClassrooms, afin de pouvoir acquérir de nouvelles compétences, et approfondir ce que j'avais déjà appris en tant qu'auto-didacte depuis quelques années.
            </p>
            <p className='Aboutme__description'>
                Autonome, perfectionniste et désireux de me former continuellement, je suis désormais à la recherche d'un emploi afin de pouvoir me consacrer pleinement à ma passion, et mettre mes compétences en exécution.
            </p>

        </div>
    );
};

export default Aboutme;