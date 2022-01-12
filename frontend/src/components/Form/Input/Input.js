import React from 'react';
import './Input.css'
const Input = ({ type, label, placeholder, isRequired, id, isFullWidth }) => {

    return (
        <div className={`input-wrapper d-flex flex-column ${isFullWidth ? 'full-width' : ''}`}>
            <label htmlFor={id}>
                {label}
                {isRequired && <span className='asterix'>*</span>}
            </label>
            <input id={id} type={type} required={isRequired} placeholder={placeholder}></input>
        </div>
    );
}

export default Input;
