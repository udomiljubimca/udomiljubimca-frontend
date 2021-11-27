import React from "react";
import "./Register/Register.css";

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        onChange={props.handleChange}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />
    </>
  );
};

export default Input;
