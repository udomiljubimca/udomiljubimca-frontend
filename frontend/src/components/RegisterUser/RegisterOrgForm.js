import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";

import eyeIcon from "../../assets/eye_icon.png";

const RegisterOrgForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const [showOrgPassword, setShowOrgPassword] = useState(false);
  const [showConfirmOrgPassword, setShowConfirmOrgPassword] = useState(false);

  const showOrgPasswordHandler = () => {
    setShowOrgPassword((prevState) => !prevState);
  };

  const showOrgPasswordConfirmHandler = () => {
    setShowConfirmOrgPassword((prevState) => !prevState);
  };

  const orgPassword = useRef({});
  orgPassword.current = watch("orgPassword", "");

  const registerOrgSubmitHandler = async (data) => {
    console.log(data);
  };

  return (
    <form
      className="regUser-form"
      onSubmit={handleSubmit(registerOrgSubmitHandler)}
    >
      <Row>
        <Col sm={12} md={6}>
          <label>
            Naziv udruženja<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="text"
            {...register("orgName", {
              required: "Ovo polje je obavezno.",
            })}
          />
          {errors.orgName && (
            <p className="form-error">{errors.orgName.message}</p>
          )}
        </Col>
        <Col sm={12} md={6}>
          <label>
            Mesto (grad)<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="text"
            {...register("city", {
              required: "Ovo polje je obavezno.",
            })}
          />
          {errors.city && <p className="form-error">{errors.city.message}</p>}
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <label>
            Matični broj udruženja<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="number"
            {...register("orgNumb", {
              required: "Ovo polje je obavezno.",
            })}
          />

          {errors.orgNumb && (
            <p className="form-error">{errors.orgNumb.message}</p>
          )}
        </Col>
        <Col sm={12} md={6}>
          <label>
            Korisničko ime<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="text"
            {...register("orgUserName", {
              required: "Ovo polje je obavezno.",
            })}
          />
          {errors.orgUserName && (
            <p className="form-error">{errors.orgUserName.message}</p>
          )}
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <label>
            Email<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="email"
            {...register("orgEmail", {
              required: "Ovo polje je obavezno.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email adresa koju ste uneli nije validna.",
              },
            })}
          />
          {errors.orgEmail && (
            <p className="form-error">{errors.orgEmail.message}</p>
          )}
        </Col>
        <Col sm={12} md={6}>
          <label>
            Kontakt telefon<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="tel"
            {...register("orgPhone", {
              required: "Ovo polje je obavezno.",
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                message: "Broj telefona koji ste uneli nije validan.",
              },
            })}
          />
          {errors.orgPhone && (
            <p className="form-error">{errors.orgPhone.message}</p>
          )}
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="password-input">
          <label>
            Lozinka<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type={showOrgPassword ? "text" : "password"}
            {...register("orgPassword", {
              required: "Lozinka mora imati najmanje 8 karaktera.",
              minLength: {
                value: 8,
                message: "Lozinka mora imati najmanje 8 karaktera.",
              },
            })}
          />
          {errors.orgPassword && (
            <p className="form-error">{errors.orgPassword.message}</p>
          )}
          <img
            className="pass-visibility"
            src={eyeIcon}
            onClick={showOrgPasswordHandler}
            alt="udomi ljubimca"
          />
        </Col>
        <Col sm={12} md={6} className="password-input">
          <label>
            Potvrdi lozinku<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type={showConfirmOrgPassword ? "text" : "password"}
            {...register("orgPasswordRepeat", {
              validate: (value) =>
                value === orgPassword.current ||
                "Lozinka nije ista kao prethodna.",
            })}
          />
          <img
            className="pass-visibility"
            src={eyeIcon}
            onClick={showOrgPasswordConfirmHandler}
            alt="udomi ljubimca"
          />
        </Col>
        {errors.orgPasswordRepeat && (
          <p className="form-error">{errors.orgPasswordRepeat.message}</p>
        )}
      </Row>

      <Row>
        <Col>
          <input
            className="custom-btn btn-primary w-100"
            type="submit"
            value="Registruj se"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center mt-4 mb-4">
            Već ste registrovani? <Link to="/prijavi-se">Prijavi se</Link>
          </p>
        </Col>
      </Row>
    </form>
  );
};

export default RegisterOrgForm;
