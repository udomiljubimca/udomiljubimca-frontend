import React from "react";
import Heart from "./Heart";
import placeholder from "../../assets/placeholder.svg";
import "./petCard.css";

function PetCard({ ljubimac, like, changeStyle }) {
  return (
    <div className="flex flex--space-between flex-wrap pet-cards-wrapper">
      {ljubimac.map((podaci) => {
        return (
          <div className="pet-card" key={podaci.id} blure={changeStyle}>
            <Heart kojeSrce={podaci} isLike={like} />
            <img src={placeholder} alt={podaci.naziv} />
            <div className="pet-card--desc">
              <h3>Naziv: {podaci.naziv}</h3>
              <p>Pol: {podaci.pol}</p>
              <p>Starost: {podaci.starost}</p>
              <p>Mesto: {podaci.mesto}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PetCard;
