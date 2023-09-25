import '../../styles/ProjectTags.scss';



function ProjectTags({project}) {


return(
<div className='tags'>
{
    project.tags.map((tag, index) => (
        <div className='tags__tag' key={index}>
            <p className='tags__tag__p'>{tag}</p>
        </div>
    )
    )
}
</div>
)};

export default ProjectTags;