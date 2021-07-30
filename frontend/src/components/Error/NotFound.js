import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/not-found.svg";
import "./error.css";

const NotFound = () => {
  return (
    <div className="container flex flex--justify-center flex--align-center error-page">
      <img src={NotFoundImage} alt="Nema rezultata" />
      <h2>Nema rezultata pretrage</h2>
      <Link to="/" className="btn btn-primary">
        NAZAD
      </Link>
    </div>
  );
};

export default NotFound;
