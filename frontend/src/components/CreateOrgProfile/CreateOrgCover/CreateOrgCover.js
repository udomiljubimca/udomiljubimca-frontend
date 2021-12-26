import React from 'react';
import ImageUpload from '../../ImageUpload/ImageUpload';
import './CreateOrgCover.css'

const CreateOrgCover = () => {
    return (
        <div className='create-org-cover'>
            <ImageUpload maxWidth={'700'} shape={'rect'} iconSize={'l'} placeholder={'Dodaj fotografiju'} />
            <ImageUpload maxWidth={'182'} shape={'square'} iconSize={'s'} placeholder={'Dodaj logo udruženja'} />
        </div>
    );
}

export default CreateOrgCover;
