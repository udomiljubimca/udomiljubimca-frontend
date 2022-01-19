import React from 'react';
import ImageUpload from '../../ImageUpload/ImageUpload';
import './CreateOrgCover.css'

const CreateOrgCover = ({ register, photoNames }) => {

    return (
        <div className='create-org-cover'>
            <ImageUpload maxWidth={'700'} shape={'rect'} iconSize={'l'} placeholder={'Dodaj fotografiju'} register={register} name={photoNames.orgPhoto} />
            <ImageUpload maxWidth={'182'} shape={'square'} iconSize={'s'} placeholder={'Dodaj logo udruženja'} register={register} name={photoNames.logo} />
        </div>
    );
}

export default CreateOrgCover;
