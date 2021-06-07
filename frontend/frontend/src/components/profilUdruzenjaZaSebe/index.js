import React from "react"
import "./style.scss"


export const ProfilUdruzenjaZaSebe = () => {



    return (
        <>
            <div className="container">
                <div>

                    <div className="img-box">
                        <div className="slika1">
                        </div>

                        <div className="slika2">
                            <div className="slika">
                            </div>
                            <button className="btn-doniraj">DONIRAJ</button>
                        </div>
                    </div>

                <div className="naziv-udruzenja">
                <h2>Naziv udruzenja</h2>
                <span>Korisnik od: 01.01.2021</span>
                </div>
                <div className="line"></div>
                <div className="box-details">
                    <div className="box1">
                        <span>Mesto</span>
                        <span>Kontakt telefon: 061 111 111</span>
                        <span>Email adresa: gmail@gmail.com</span>
                    </div>
                    <div className="box2">
                        <button>PORUKA</button>
                        <a href="/">Uslovi za udomljavanje</a>
                    </div>
                </div>
                <div className="box-opis">
                    <span>O udruzenju</span>
                    <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsut dolor sit amet.</p>
                </div>




                </div>

            </div>

        </>
    )
}