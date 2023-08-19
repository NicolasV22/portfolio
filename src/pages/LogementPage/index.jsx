import logementsjson from '../../logements.json';
import Header from '../../components/Header'
import { useParams } from 'react-router-dom';

function LogementPage(){
    const {id}= useParams();
    const logement = logementsjson.find(item => item.id === id);

    return(
        <Header/>
        
        
    ) 
        
    
}

export default LogementPage;