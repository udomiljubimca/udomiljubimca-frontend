import React from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from 'react-icons/io';

import Heart from '../Heart/Heart';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FeaturedSlider.css'

function FeaturedSlider({ sliderData, isUserView, isLike }) {
    var settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <section className='featured-slider'>
            <div className='container'>
                <h2 className="page-title mt-4">DOSTUPNI LJUBIMCI</h2>
                <h3 className="section-title">{isUserView ? 'Moji omiljeni ljubimci' : 'Ljubimci za udomljivanje'}</h3>
                <Slider {...settings}>
                    {sliderData.map((pet, index) => {
                        return (
                            <div key={index} className='slider-card'>
                                <div className='card-cover'>
                                    <img src={pet.image} alt="{pet.name}" />
                                    {isUserView && <Heart isLike={isLike} kojeSrce={pet} />
                                    }
                                </div>
                                <div className='card-details'>
                                    <a href='#'>
                                        <h3>{pet.name}</h3>
                                    </a>
                                    <div>
                                        <div className='card-detail'>
                                            <h4>Pol</h4>
                                            <p>{pet.sex}</p>
                                        </div>
                                        <div className='card-detail'>
                                            <h4>Starost</h4>
                                            <p>{pet.age}</p>
                                        </div>
                                        <div className='card-detail'>
                                            <h4>Mesto</h4>
                                            <p>{pet.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
                <a className='slider-link' href='#'>Svi ljubimci <IoIosArrowForward /></a>
            </div>
        </section>
    );
}

export default FeaturedSlider;