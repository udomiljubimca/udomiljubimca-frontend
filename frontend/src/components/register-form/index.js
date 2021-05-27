
import React from 'react';
import style from "./style.css";
import img2 from "./../../img/img2.jpg";
import fb from "./../../img/fb.png";
import InputField from "./input_field";


const Register_form = () => {
    return (
        <div className = "container">



            <div className = "register-description">

                <h4>Registruj se i udomi ljubimca!</h4>

                <p>lorem ipsum</p>

                <img src={img2}></img>
                
                            
            </div>

            



            <div className="vertical-container">


                <form action="">

                    <h2>Registruj se!</h2>
                    <InputField type="text" placeholder="Ime"  />
                    <InputField type="text" placeholder="Prezime" />
                    <InputField type="text" placeholder="Email" />
                    <InputField type="password" placeholder="Lozinka" />
                    <InputField type="password" placeholder="Potvrdi lozinku" />
                    <InputField type = "button" value = "Registruj se" id="submit-btn" />
                    {/* <button type="submit" className="registruj-btn">Registruj se</button>
                     */}
                   
                </form>


                <div className='fb-picture'>

                    {/* <img src={fb}></img> */}

                    <i class="fab fa-facebook"></i>
                    
                    <i class="fab fa-google"></i>

                    

                </div>

                <div>

                    <input type='checkbox'></input>

                    <a href="/">Prihvati uslove korišćenja</a>

                </div>

                <div>

                     <p>Već si se registrovao</p>

                     <a href="/">Prijavi se</a>


                </div>

            </div>




        </div>
    );
};

export default Register_form;

