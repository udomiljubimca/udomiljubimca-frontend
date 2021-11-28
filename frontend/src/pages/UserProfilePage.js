import React from "react";

// Components
import UserProfile from '../components/UserProfile/UserProfile';
import FeaturedSlider from '../components/FeaturedSlider/FeaturedSlider';

// Fake data
import fakeUserData from "../fakeUserData";

const UserProfilePage = ({ isUser, isLike }) => {

    return <>
        <UserProfile userData={fakeUserData} isUserView={isUser} />
        <FeaturedSlider sliderData={fakeUserData.likedPets} isLike={isLike} isUserView={isUser} />
    </>
}

export default UserProfilePage;