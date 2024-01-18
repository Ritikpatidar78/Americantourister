import React from 'react'
import carousel_one from '../assets/images/carousel_one.webp'
import carousel_two from '../assets/images/carousel_two.webp'
import carousel_four from '../assets/images/carousel_four.webp'
import carousel_three from '../assets/images/carousel_three.webp'
import carousel_seven from '../assets/images/carousel_seven.webp'


const Carousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-coreui-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide-to="5" aria-label="Slide 6"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel_one} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={carousel_two} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={carousel_four} className="d-block w-100" alt="..." />

                    </div>

                    <div className="carousel-item">
                        <img src={carousel_three} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={carousel_three} className="d-block w-100" alt="..." />

                    </div>

                    <div className="carousel-item">
                        <img src={carousel_seven} className="d-block w-100" alt="..." />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-coreui-target="#carouselExampleIndicators" data-coreui-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </>
    )
}

export default Carousel