import React, { useState } from 'react';
import './ImageUpload.css'
import { ReactComponent as AddIcon } from '../../assets/add.svg'
import { v4 as uuid } from 'uuid';

const ImageUpload = ({ shape, maxWidth, iconSize, placeholder }) => {

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
    return (
        <div style={{ maxWidth: `${maxWidth}px` }} className={`image-upload ${shape === 'square' ? 'image-upload--square' : 'image-upload--rect'} wrapper`}>
            <img src={src.imagePreviewUrl} alt="" />
            <form style={src.imagePreviewUrl && { zIndex: '-1' }}>
                <input id={uniqueID} type="file" onChange={(e) => onImgUpload(e)} />
                <label htmlFor={uniqueID} className={`label label--${iconSize}`}>
                    <AddIcon className={`icon icon--${iconSize}`} />
                    {placeholder && <span>{placeholder}</span>}
                </label>
            </form>
        </div>
    );
}

export default ImageUpload;
