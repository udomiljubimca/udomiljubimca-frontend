
import React from 'react';
import style from "./style.css";


const Register_form = () => {
    return (
        <div className = "container">



            <div className = "register-description">

                <h4>Registruj se i udomi ljubimca!</h4>

                <p>dheldhlewdhweideliwdewd eldjeidjedjeq eqldneideidjeip dcwdcwdcwec cwdcwecwe</p>

            </div>

            



            <div className="vertical-container">


                <form action="">

                    <h2>Registruj se!</h2>
                    <input type="text" placeholder="Ime" />
                    <input type="text" placeholder="Prezime" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Lozinka" />
                    <input type="password" placeholder="Potvrdi lozinku" />
                    <input type = "button" value = "Registruj se" id="submit-btn"/>
                    {/* <button type="submit" className="registruj-btn">Registruj se</button>
                     */}

                </form>



            </div>




        </div>
    );
};

export default Register_form;

