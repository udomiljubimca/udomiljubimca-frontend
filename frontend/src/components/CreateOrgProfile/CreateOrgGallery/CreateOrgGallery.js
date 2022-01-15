import React, { useState } from 'react';
import { ReactComponent as AddIcon } from '../../../assets/add.svg'
import '../../ImageUpload/ImageUpload'
import { AiOutlineClose } from 'react-icons/ai'
import { v4 as uuid } from 'uuid';

const CreateOrgGallery = () => {
    const [images, setImages] = useState([])
    const uniqueID = uuid();

    const onGalleryUpload = (e) => {
        e.preventDefault();
        // const reader = new FileReader();
        const files = e.target.files;

        Array.from(files).forEach(file => {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImages((prev) => [...prev, {
                    file: file,
                    imagePreviewUrl: reader.result
                }]);

            }
            reader.readAsDataURL(file);

        })
    }

    return (
        <>
            <label htmlFor="">Dodaj fotografije u galeriju</label>
            <div style={{ maxWidth: '490px' }} className={`image-upload image-upload--rect wrapper ${images.length > 0 ? 'hidden' : ''}`}>
                <div className='image-upload-form'>
                    <input id={uniqueID} type="file" multiple onChange={(e) => onGalleryUpload(e)} />
                    <label htmlFor={uniqueID} className={`label label--l`}>
                        <AddIcon className='icon icon--l' />
                        <span>Dodaj fotografije</span>
                    </label>
                </div>
            </div>
            {images.length > 0 &&
                <div className="gallery">
                    {
                        images.map(img => (
                            <>
                                <picture className='gallery-img-wrapper'>
                                    <img className='gallery-img' src={img.imagePreviewUrl} alt="" />
                                    <button type='button' className='delete-btn delete-btn--s d-flex justify-content-center align-items-center'>
                                        <AiOutlineClose />
                                    </button>
                                </picture>
                            </>
                        ))
                    }
                </div>
            }
        </>
    );
}

export default CreateOrgGallery;
