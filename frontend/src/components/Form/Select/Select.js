import React from 'react';
import './Select.css'
import { BsChevronDown } from "react-icons/bs";

const Select = ({ name, id, options, label, isRequired, defaultValue, onChange }) => {

    return (
        <div className='select-group d-flex flex-column'>
            <label htmlFor={id}>
                {label}
                {isRequired && <span className='asterix'>*</span>}
            </label>
            <div className='select-wrapper'>
                <select defaultValue={defaultValue} name={name} id={id}>
                    <option value={defaultValue} disabled>{defaultValue}</option>
                    {options.map((option, key) => {
                        return <option key={key}>{option}</option>
                    })}
                </select>
                <BsChevronDown />
            </div>
        </div>
    );
}

export default Select;
