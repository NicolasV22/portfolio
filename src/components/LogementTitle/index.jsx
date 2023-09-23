import '../../styles/LogementTitle.scss';




function LogementTitle({logement}) {

    return(

        <div className='logement__title'>
            <h2 className='logement__title__name'>{logement.title}</h2>
            <a className='logement__title__location' href={logement.location} target='blank' >Repo Github / Lien du site</a>
        </div>
    );
};

export default LogementTitle;