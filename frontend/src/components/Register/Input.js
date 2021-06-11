import { React } from 'react';
import './Register.css';

const Input = (props) => {
  return (
    <>
      <div>
        <input
          onChange={props.handleChange}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default Input;
