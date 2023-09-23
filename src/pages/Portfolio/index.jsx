import React, { useEffect } from 'react';
import logementsjson from '../../logements.json';
import Header from '../../components/Header'
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow'
import '../../styles/Portfolio.scss'
import LogementTitle from '../../components/LogementTitle';
import LogementTags from '../../components/LogementTags';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';


function Portfolio(){
    const {id}= useParams();
    const logement = logementsjson.find(item => item.id === id);
    const navigate = useNavigate();


    useEffect(() => {
        if (!logement) {
            navigate('/erreur'); 
        }
    }, [logement, navigate]);

    if (!logement) {
        return null; 
    }

    return(
        <div className='logementpage'>
            <div className='logementheadercontent'>
                <Header logement={logement}/>
                <Slideshow logement={logement}/>
                <div className='logement'>
                    <div className='logement__titleloctags'>
                        <LogementTitle logement={logement}/>
                        <LogementTags logement={logement}/>
                    </div>

                </div>
                <div className='logement__collapses'>
                    <div className='logement__collapses__desc'>
                        <Collapse title='Description du projet'>
                            <p>{logement.description}</p>
                        </Collapse>
                    </div>
                    <div className='logement__collapses__desc'>
                        <Collapse title='Compétences acquises'>
                        <ul className='listeequipements'>
                            {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                        </Collapse>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
        
        
    ) 
        
    
}

export default Portfolio;