import React from "react";
import FeaturedSlider from "../../components/FeaturedSlider/FeaturedSlider";
import fakeUserData from "../../fakeUserData";

const AvailableForAdopt = () => {
    return (
        <section className="available-for-adopt">
            <FeaturedSlider sliderData={fakeUserData.likedPets} isLike={true} isUserView={false} />
        </section>
    );
};

export { AvailableForAdopt };
