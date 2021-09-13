import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../../assets/error.svg";
import "./error.css";

const Error = () => {
  return (
    <div className="container flex flex--justify-center flex--align-center error-page">
      <img src={ErrorImage} alt="404" />
      <h2>Greška, stranica nije pronađena.</h2>
      <Link to="/" className="custom-btn btn-primary">
        NAZAD
      </Link>
    </div>
  );
};

export default Error;
