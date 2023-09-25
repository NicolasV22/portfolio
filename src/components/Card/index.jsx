import projectsjson from '../../projects.json';
import '../../styles/Card.scss';
import { NavLink } from 'react-router-dom'; 


function Card() {
    return(
        <div className='cards'>
            {projectsjson.map((item) => (
                <div key={item.id} className="card">
                    <NavLink to={`/Portfolio/${item.id}`}>
                    <img src={item.cover} alt={item.title} className='card__img'/>
                    <h2 className='card__title'>{item.title}</h2>
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default Card;