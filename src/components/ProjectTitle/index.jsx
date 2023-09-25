import '../../styles/ProjectTitle.scss';




function ProjectTitle({project}) {

    return(

        <div className='project__title'>
            <h2 className='project__title__name'>{project.title}</h2>
            <a className='project__title__location' href={project.location} target='blank' >Repo Github / Lien du site</a>
        </div>
    );
};

export default ProjectTitle;