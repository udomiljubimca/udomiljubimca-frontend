import React from 'react';
import './FileInput.css'
import { BsUpload } from 'react-icons/bs'
const FileInput = ({ label, isRequired, id, isFullWidth }) => {
    console.log(isRequired)
    return (
        <div className={`file-input-group ${isFullWidth ? 'full-width' : ''}`}>
            <label htmlFor={id}>
                {label}
                {isRequired && <span className='required'>*</span>}
            </label>
            <div className='file-input-wrapper'>
                <BsUpload />
                <input id={id} type='file' required={isRequired} placeholder={label}></input>
                <span className='placeholder'>{label}</span>
            </div>
        </div>
    );
}

export default FileInput;
