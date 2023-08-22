import logementsjson from '../../logements.json';
import Header from '../../components/Header'
import { useParams } from 'react-router-dom';
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

    return(
        <div className='logementpage'>
            <div className='headercontent'>
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
                    <Collapse className ='logement__collapses__collapse' title='Description'>
                        <p>{logement.description}</p>
                    </Collapse>
                    <Collapse className='logement__collapses__collapse' title='Équipements'>
                        <p>{logement.equipments}</p>
                    </Collapse>
                </div>
                
            </div>
            <Footer/>
        </div>
        
        
    ) 
        
    
}

export default LogementPage;