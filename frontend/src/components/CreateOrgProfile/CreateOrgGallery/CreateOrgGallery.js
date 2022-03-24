import React, { useState } from 'react';
import { ReactComponent as AddIcon } from '../../../assets/add.svg'
import { AiOutlineClose } from 'react-icons/ai'
import { v4 as uuid } from 'uuid';
import { Controller } from 'react-hook-form'

const CreateOrgGallery = ({ register, name, control }) => {
    const [images, setImages] = useState([])
    const uniqueID = uuid();

    const onGalleryUpload = (e) => {
        e.preventDefault();
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

    const onDeleteImg = (deleteImg) => {
        const removeIndex = images.findIndex(item => item.file === deleteImg.file);
        setImages(prevState => prevState.filter(img => images.indexOf(img) !== removeIndex));
    }

    return (
        <>
            <label htmlFor={uniqueID} className="gallery-label">{images.length > 0 ? 'Fotografije:' : 'Dodaj fotografije u galeriju'}</label>
            <div className={`image-upload image-upload--rect image-upload-bg media-wrapper ${images.length > 0 ? 'hidden' : ''}`}>
                <div className='image-upload-form'>
                    <Controller
                        name={name}
                        control={control}
                        defaultValue=""
                        render={({ field: { ref, onChange, ...field } }) => (
                            <input
                                {...field}
                                id={uniqueID} type="file" multiple
                                innerRef={ref}
                                onChange={(e) => onChange(onGalleryUpload(e))}
                            />
                        )}
                    />

                    <label htmlFor={uniqueID} className={`label label--l`}>
                        <AddIcon className='icon icon--l' />
                        <span>Dodaj fotografije</span>
                    </label>
                </div>
            </div>
            {images.length > 0 &&
                <div className="gallery">
                    {images.map((img, key) => (
                        <picture className='media-wrapper' key={key}>
                            <img className='gallery-img' src={img.imagePreviewUrl} alt="" />
                            <button onClick={() => onDeleteImg(img)} type='button' className='delete-btn delete-btn--s d-flex justify-content-center align-items-center'>
                                <AiOutlineClose />
                            </button>
                        </picture>
                    ))
                    }
                    <div className={`image-upload image-upload--rect image-upload--inline media-wrapper ${images.length > 0 ? '' : 'hidden'}`}>
                        <div className='image-upload-form'>
                            <input id={uniqueID} type="file" multiple onChange={(e) => onGalleryUpload(e)} />

                            {/* <Controller
                                name={name}
                                control={control}
                                defaultValue=""
                                render={({ field: { ref, onChange, ...field } }) => (
                                    <input
                                        {...field}
                                        id={uniqueID} type="file" multiple
                                        onChange={(e) => onChange(onGalleryUpload(e))}
                                    />
                                )}
                            /> */}
                            <label htmlFor={uniqueID} className="label label--s">
                                <AddIcon className='icon icon--s' />
                                <span>Dodaj fotografije</span>
                            </label>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default CreateOrgGallery;
