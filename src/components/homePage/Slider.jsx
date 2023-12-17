import React from 'react'
import slidershow1 from '../../assets/slideshow1-1.jpg';
import slidershow2 from '../../assets/slideshow1-2.jpg';
import slidershow3 from '../../assets/slideshow1-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slidershow2} className="slider" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slidershow3} className="slider" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slidershow1} className="slider" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <FontAwesomeIcon icon={faAngleLeft} style={{color:'black'}} className="carousel-control-prev-icon" aria-hidden="true"></FontAwesomeIcon>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <FontAwesomeIcon icon={faAngleRight} style={{color:'black'}} className="carousel-control-next-icon" aria-hidden="true"></FontAwesomeIcon>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider