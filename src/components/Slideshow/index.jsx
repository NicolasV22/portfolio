import logementsjson from '../../logements.json';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import '../../styles/Slideshow.scss';






    function Slideshow() {
        const {id}= useParams();
        const logement = logementsjson.find(item => item.id === id);


        const [currentSlide, setCurrentSlide] = useState(0);
    
        const nextSlide = () => {
            setCurrentSlide((currentSlide + 1) % logement.pictures.length);
        };
    
        const prevSlide = () => {
            setCurrentSlide((currentSlide - 1 + logement.pictures.length) % logement.pictures.length);
        };
    
        return(
            <div className='slideshow'>
                {logement.pictures.length > 1 && (
                    <div className='slideshow__nav'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" onClick={prevSlide} className='slideshow__nav__chevron slideshow__nav__chevron--prev'>
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                        <span className='slideshow__nav__count'>{currentSlide + 1}/{logement.pictures.length}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" onClick={nextSlide} className='slideshow__nav__chevron slideshow__nav__chevron--next'>
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </div>
                )}
                <div className='slideshow__img--container'>
                    <img className='slideshow__img' src ={logement.pictures[currentSlide]} alt={`Slide ${currentSlide}`} />
                </div>
            </div>
        );
    }

export default Slideshow;