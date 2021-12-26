import React from 'react';
import './Input.css'
const Input = ({ type, label, placeholder, isRequired, id, isFullWidth }) => {
    console.log(isRequired)
    return (
        <div className={`input-wrapper ${isFullWidth ? 'full-width' : ''}`}>
            <label htmlFor={id}>
                {label}
                {isRequired && <span className='required'>*</span>}
            </label>
            <input id={id} type={type} required={isRequired} placeholder={placeholder}></input>
        </div>
    );
}

export default Input;
