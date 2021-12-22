import React from "react";

// Components
import UserProfile from '../components/UserProfile/UserProfile';
import FeaturedSlider from '../components/FeaturedSlider/FeaturedSlider';
import WrapperWithTitle from '../components/WrapperWithTitle/WrapperWithTitle'
// Fake data
import fakeUserData from "../fakeUserData";

const UserProfilePage = ({ isUser, isLike }) => {

    return <>
        <WrapperWithTitle title={'PROFIL KORISNIKA'}>
            <UserProfile userData={fakeUserData} isUserView={isUser} />
        </WrapperWithTitle>
        <FeaturedSlider sliderData={fakeUserData.likedPets} isLike={isLike} isUserView={isUser} />
    </>
}

export default UserProfilePage;