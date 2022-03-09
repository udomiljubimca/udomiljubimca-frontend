import React from "react";
import { Hero } from './Hero';
import { SearchWidget } from './SearchWidget';
import { AvailableForAdopt } from './AvailableForAdopt';
import {TestimonialSection} from "./TestimonialSection";
import {BlogSlider} from "./BlogSlider";
// import Cards from "../components/PetCard/Pets";
// import KakoUdomitiLjubimca from "../components/KakoUdomitiLjubimca/KakoUdomitiLjubimca";
// import BlogCard from "../components/Blog/BlogCard";

const HomePage = () => {
    return (
        <>
            <div className="home">
                <Hero />
                <SearchWidget />
                <AvailableForAdopt />
                <TestimonialSection />
                <BlogSlider />
            </div>
        </>
    );
};

export default HomePage;
