import React from "react"
import style from "./style.css"


const Register = () => {
    return (
        <>
            <h1>Registruj se kao korisnik</h1>
            <form>
                <div className="email-details">
                    <input className="email" type="field" placeholder="Email" />
                </div>

                <div className="details">
                <div>
                <input type="field" placeholder="Ime" />
                <input type="field" placeholder="Lozinka"/>
                </div>
                
                <div>
                <input type="field" placeholder="Prezime"/>
                <input type="field"  placeholder="Potvrdi lozinku" />
                </div>
                

                </div>

                <div>
                <input type="checkbox" /> 
                <span>Prihvati uslove koriscenja</span>
                </div>
                <button>Potvrdi</button>

            </form>

        </>
    )

}

export default Register