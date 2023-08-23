import React, { useEffect } from 'react';
import logementsjson from '../../logements.json';
import Header from '../../components/Header'
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow'
import '../../styles/LogementPage.scss'
import LogementTitle from '../../components/LogementTitle';
import LogementTags from '../../components/LogementTags';
import LogementRating from '../../components/LogementRating';
import LogementOwner from '../../components/LogementOwner';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';


function LogementPage(){
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
                <Header/>
                <Slideshow/>
                <div className='logement'>
                    <div className='logement__titleloctags'>
                        <LogementTitle/>
                        <LogementTags/>
                    </div>
                    <div className='logement__ownerrating'>
                        <LogementOwner/>
                        <LogementRating/>
                    </div>
                </div>
                <div className='logement__collapses'>
                    <div className='logement__collapses__desc'>
                        <Collapse title='Description'>
                            <p>{logement.description}</p>
                        </Collapse>
                    </div>
                    <div className='logement__collapses__desc'>
                        <Collapse title='Équipements'>
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

export default LogementPage;