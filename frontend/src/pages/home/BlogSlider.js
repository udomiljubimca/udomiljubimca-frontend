import React from "react";
import SectionName from "../../components/SectionName";
import Slider from "react-slick";
import {IoIosArrowForward} from "react-icons/io";
import FakeBlogPostData from "../../fakeBlogPostData";

const BlogSlider = () => {
    let settings = {
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
    }
    return (
        <section className="blog-slider">
            <div className={'container'}>
                {/* Section Name - Orange letters with cross line on the left */}
                <SectionName text='Blog' />
                <h3 className="section-title">{'Pogledajte najnovije sa našeg bloga'}</h3>
                <Slider {...settings}>
                    {FakeBlogPostData.map((blog, index) => {
                        return (
                            <div key={index} className='slider-card'>
                                <div className='card-cover'>
                                    <img src={blog.thumbnail} alt={blog.title} />
                                </div>
                                <div className='card-details'>
                                    <a href='/'>
                                        <h3>{blog.title}</h3>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
                <a className='slider-link' href='/'>Pogledaj sve tekstove <IoIosArrowForward /></a>
            </div>
        </section>
    );
};

export { BlogSlider };
