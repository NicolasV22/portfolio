import logementsjson from '../../logements.json';
import '../../styles/Card.scss';

function Card() {
    return(
        <div className='cards'>
            {logementsjson.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.cover} alt={item.title} className='card__img'/>
                    <h2 className='card__title'>{item.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default Card;