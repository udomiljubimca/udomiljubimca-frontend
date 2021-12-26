import React from "react";

// Components
import WrapperWithTitle from '../components/WrapperWithTitle/WrapperWithTitle'
import CreateOrgForm from '../components/CreateOrgProfile/CreateOrgForm/CreateOrgForm'

const CreateOrgProfilePage = () => {

    return <>
        <WrapperWithTitle title={'NAPRAVI PROFIL UDRUŽENJA'}>
            <CreateOrgForm />
        </WrapperWithTitle>
    </>
}

export default CreateOrgProfilePage;