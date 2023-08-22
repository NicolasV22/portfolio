import '../../styles/LogementOwner.scss';
import logementsjson from '../../logements.json';
import { useParams } from 'react-router-dom';



function LogementOwner() {
    const {id}= useParams();
    const logement = logementsjson.find(item => item.id === id);

    return(
        <div className='logement__owner'>
            <h3 className='logement__owner__name'>{logement.host.name}</h3>
            <div className='logement__owner__picturecontainer'>
                <img className='logement__owner__picturecontainer__picture' alt='propriétaire du logement' src={logement.host.picture}/>
            </div>
        </div>
    );
};

export default LogementOwner