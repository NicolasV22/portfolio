import logementsjson from '../../logements.json';
import { useParams } from 'react-router-dom';
import '../../styles/LogementTags.scss';



function LogementTags() {
    const {id}= useParams();
    const logement = logementsjson.find(item => item.id === id);

return(
<div className='tags'>
{
    logement.tags.map((tag, index) => (
        <div className='tags__tag' key={index}>
            <p className='tags__tag__p'>{tag}</p>
        </div>
    )
    )
}
</div>
)};

export default LogementTags;