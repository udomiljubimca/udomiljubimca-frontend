import React from 'react';
import './Textarea.css'

const Textarea = ({ label, placeholder, isRequired, id, isFullWidth }) => {

    return (
        <div className={`input-wrapper d-flex flex-column ${isFullWidth ? 'full-width' : ''}`}>
            <label htmlFor={id}>
                {label}
                {isRequired && <span className='asterix'>*</span>}
            </label>
            <textarea id={id} required={isRequired} placeholder={placeholder}></textarea>
        </div>
    );
}
export default Textarea;
