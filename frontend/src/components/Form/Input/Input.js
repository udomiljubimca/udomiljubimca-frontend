import React from 'react';
import './Input.css'
const Input = ({ type, label, placeholder, isRequired, isFullWidth, register, name, errors }) => {

    return (
        <div className={`input-wrapper d-flex flex-column ${isFullWidth ? 'full-width' : ''}`}>
            <label htmlFor={name}>
                {label}
                {isRequired && <span className='asterix'>*</span>}
            </label>
            <input type={type} placeholder={placeholder} id={name} {...register(name, { required: isRequired })}></input>
            {errors.name && (
                <p className="form-error">Proverite unos</p>
            )}
        </div>
    );
}

export default Input;
