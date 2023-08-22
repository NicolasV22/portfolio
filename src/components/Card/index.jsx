import logementsjson from '../../logements.json';
import '../../styles/Card.scss';
import { NavLink } from 'react-router-dom'; 


function Card() {
    return(
        <div className='cards'>
            {logementsjson.map((item) => (
                <div key={item.id} className="card">
                    <NavLink to={`/logement/${item.id}`}>
                    <img src={item.cover} alt={item.title} className='card__img'/>
                    <h2 className='card__title'>{item.title}</h2>
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default Card;