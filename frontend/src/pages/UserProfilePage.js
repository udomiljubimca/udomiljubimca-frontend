import React from "react";

// Components
import UserProfile from '../components/UserProfile/UserProfile';
import FeaturedSlider from '../components/FeaturedSlider/FeaturedSlider';

// Fake data
import fakePetData from "../fakePetData";

const UserProfilePage = ({ isUser }) => {

    return <>
        <UserProfile isUserView={isUser} />
        <FeaturedSlider sliderData={fakePetData} isUserView={isUser} />
    </>
}

export default UserProfilePage;