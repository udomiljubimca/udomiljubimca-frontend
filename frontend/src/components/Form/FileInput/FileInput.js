import React, { useState } from 'react';
import './FileInput.css'
import { BsUpload } from 'react-icons/bs'
const FileInput = ({ label, isRequired, id, isFullWidth }) => {

    const [file, setFile] = useState({ file: null, fileName: null });


    const onFileUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setFile({
                file: file,
                fileName: file.name
            });
        }
        reader.readAsDataURL(file);
    }

    return (
        <div className={`file-input-group d-flex flex-column ${isFullWidth ? 'full-width' : ''}`}>
            <label htmlFor={id}>
                {label}
                {isRequired && <span className='asterix'>*</span>}
            </label>
            <div className='file-input-wrapper'>
                <BsUpload />
                <input onChange={(e) => onFileUpload(e)} id={id} type='file' required={isRequired} placeholder={label}></input>
                <span className='placeholder'>{label}</span>
            </div>
            {file.fileName && <span class='file-input'>{file.fileName}</span>}
        </div>
    );
}

export default FileInput;
