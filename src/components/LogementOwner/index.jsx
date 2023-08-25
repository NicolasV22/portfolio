import '../../styles/LogementOwner.scss';


function LogementOwner({logement}) {

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