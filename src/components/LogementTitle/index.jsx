import '../../styles/LogementTitle.scss';




function LogementTitle({logement}) {

    return(

        <div className='logement__title'>
            <h2 className='logement__title__name'>{logement.title}</h2>
            <h3 className='logement__title__location'>{logement.location}</h3>
        </div>
    );
};

export default LogementTitle;