import '../../styles/LogementTitle.scss';
import logementsjson from '../../logements.json';
import { useParams } from 'react-router-dom';



function LogementTitle() {
    const {id}= useParams();
    const logement = logementsjson.find(item => item.id === id);

    return(

        <div className='logement__title'>
            <h2 className='logement__title__name'>{logement.title}</h2>
            <h3 className='logement__title__location'>{logement.location}</h3>
        </div>
    );
};

export default LogementTitle;