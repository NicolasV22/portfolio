import '../../styles/LogementTags.scss';



function LogementTags({logement}) {


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