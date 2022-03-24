import React, { useState } from 'react';
import './ImageUpload.css'
import { ReactComponent as AddIcon } from '../../assets/add.svg'
import { AiOutlineClose } from 'react-icons/ai'
import { v4 as uuid } from 'uuid';

const ImageUpload = ({ shape, maxWidth, iconSize, placeholder, register, name }) => {

    const [src, setSrc] = useState({ file: null, imagePreviewUrl: null })
    const uniqueID = uuid();

    const onImgUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setSrc({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    const onDeleteImg = () => setSrc({ file: null, imagePreviewUrl: null });

    return (
        <div style={{ maxWidth: `${maxWidth}px` }} className={`image-upload ${shape === 'square' ? 'image-upload--square' : 'image-upload--rect'} media-wrapper`}>
            {src.imagePreviewUrl &&
                <>
                    <img src={src.imagePreviewUrl} alt="" />
                    <button type='button' onClick={onDeleteImg} className={`delete-btn delete-btn--${iconSize} d-flex justify-content-center align-items-center`}>
                        <AiOutlineClose />
                    </button>
                </>
            }
            <div className='image-upload-form' style={src.imagePreviewUrl && { zIndex: '-1' }}>
                {/* <input id={uniqueID} type="file" onChange={(e) => onImgUpload(e)} {...register(name, { required: false })} /> */}
                <input id={uniqueID} type="file" onChange={(e) => onImgUpload(e)} />

                <label htmlFor={uniqueID} className={`label label--${iconSize}`}>
                    <AddIcon className={`icon icon--${iconSize}`} />
                    {placeholder && <span>{placeholder}</span>}
                </label>
            </div>
        </div>
    );
}

export default ImageUpload;
