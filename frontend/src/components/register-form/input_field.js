import { React } from "react";
import style from "./style.css";


const InputField = (props) => {

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


    )

}

export default InputField;

