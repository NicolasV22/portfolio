import React, { useEffect } from 'react';
import projectsjson from '../../projects.json';
import Header from '../../components/Header'
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow'
import '../../styles/ProjectPage.scss'
import ProjectTitle from '../../components/ProjectTitle';
import ProjectTags from '../../components/ProjectTags';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';


function ProjectPage(){
    const {id}= useParams();
    const projects = projectsjson.find(item => item.id === id);
    const navigate = useNavigate();


    useEffect(() => {
        if (!projects) {
            navigate('/erreur'); 
        }
    }, [projects, navigate]);

    if (!projects) {
        return null; 
    }

    return(
        <div className='projectpage'>
            <div className='projectheadercontent'>
                <Header project={projects}/>
                <Slideshow project={projects}/>
                <div className='project'>
                    <div className='project__titleloctags'>
                        <ProjectTitle project={projects}/>
                        <ProjectTags project={projects}/>
                    </div>

                </div>
                <div className='project__collapses'>
                    <div className='project__collapses__desc'>
                        <Collapse title='Description du projet'>
                            <p>{projects.description}</p>
                        </Collapse>
                    </div>
                    <div className='project__collapses__desc'>
                        <Collapse title='Compétences acquises'>
                        <ul className='listeequipements'>
                            {projects.equipments.map((equipment, index) => (
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

export default ProjectPage;