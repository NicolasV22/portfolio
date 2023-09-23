import '../../styles/Skills.scss';
import reactlogo from '../../images/react.png';
import nodelogo from '../../images/node.png';
import outil from '../../images/outil.png';




function Skills() {
    return(
        <div className='Skills'>
            <h2 className='Skills__title'>Mes compétences</h2>
            <div className='Skills__list'>
                <div className='Skills__list__category'>
                    <img className='Skills__list__category__logo' src={reactlogo}/>
                    <h3 className='Skills__list__category__title'>Front-end</h3>
                    <ul className='Skills__list__category__detail'>
                        <li className='Skills__list__category__detail__item'>Javascript</li>
                        <li className='Skills__list__category__detail__item'>React.JS</li>
                        <li className='Skills__list__category__detail__item'>HTML/CSS</li>
                    </ul>
                </div>
                <div className='Skills__list__category'>
                    <img className='Skills__list__category__logo' src={nodelogo}/>
                    <h3 className='Skills__list__category__title'>Back-end</h3>
                    <ul className='Skills__list__category__detail'>
                        <li className='Skills__list__category__detail__item'>Node.JS</li>
                        <li className='Skills__list__category__detail__item'>MongoDB</li>
                        <li className='Skills__list__category__detail__item'>Express</li>
                    </ul>
                </div>
                <div className='Skills__list__category'>
                    <img className='Skills__list__category__logo' src={outil}/>
                    <h3 className='Skills__list__category__title'>Outils</h3>
                    <ul className='Skills__list__category__detail'>
                        <li className='Skills__list__category__detail__item'>mongoDB Atlas</li>
                        <li className='Skills__list__category__detail__item'>Postman</li>
                        <li className='Skills__list__category__detail__item'>github / npm / yarn / Visual Studio Code</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Skills;