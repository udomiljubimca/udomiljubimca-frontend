import React from "react";

// Components
import WrapperWithTitle from '../components/WrapperWithTitle/WrapperWithTitle'
import CoverPhotos from '../components/CreateOrgCover/OrgCoverPhotos/CreateOrgCover';
// Fake data

const CreateOrgProfilePage = () => {

    return <>
        <WrapperWithTitle title={'NAPRAVI PROFIL UDRUŽENJA'}>
            <CoverPhotos />
        </WrapperWithTitle>
    </>
}

export default CreateOrgProfilePage;