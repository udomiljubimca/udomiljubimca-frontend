import React from "react";
import "./style.scss"



export const Contact = () => {


    return (

        <>
            <div className="container">
            <div> <i className="fas fa-times"></i>
</div>
                <div className="naslov">
                    <h2>Naziv udruzenja</h2>
                    <span>Grad</span>
                </div>

                <div className="forma">
                    <span>Napisi poruku</span>
                    <form>
                        <textarea></textarea>
                <div className="info">
                  <div>
                  <p>Email adresa: gmail@gmail.com</p>
                    <p>Kontakt telefon: 061/11/41/552</p>
                  </div>

                    <button>POSALJI</button>
                </div>
                    </form>
                </div>


            </div>



        </>
    )
}