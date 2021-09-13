import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";

import eyeIcon from "../../assets/eye_icon.png";

const RegisterUserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  const showPasswordConfirmHandler = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form className="regUser-form" onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col sm={12} md={6}>
          <label>
            Ime<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="text"
            {...register("firstName", {
              required: "Ovo polje je obavezno.",
              maxLength: {
                value: 20,
                message: "Maksimalan broj mora biti manji od 20.",
              },
            })}
          />
          {errors.firstName && (
            <p className="form-error">{errors.firstName.message}</p>
          )}
        </Col>
        <Col sm={12} md={6}>
          <label>
            Prezime<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="text"
            {...register("lastName", {
              required: "Ovo polje je obavezno.",
              maxLength: {
                value: 20,
                message: "Maksimalan broj mora biti manji od 20.",
              },
            })}
          />
          {errors.lastName && (
            <p className="form-error">{errors.lastName.message}</p>
          )}
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <label>
            Korisničko ime<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="text"
            {...register("username", {
              required: "Minimalni broj karaktera 5, maksimalni 20.",
              maxLength: {
                value: 20,
                message: "Broj karaktera mora biti manji od 20.",
              },
              minLength: {
                value: 5,
                message: "Minimalni broj karaktera 5.",
              },
            })}
          />

          {errors.username && (
            <p className="form-error">{errors.username.message}</p>
          )}
        </Col>
        <Col sm={12} md={6}>
          <label>
            Email<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type="email"
            {...register("email", {
              required: "Ovo polje je obavezno.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email adresa koju ste uneli nije validna.",
              },
            })}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="password-input">
          <label>
            Lozinka<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Lozinka mora imati najmanje 8 karaktera.",
              minLength: {
                value: 8,
                message: "Lozinka mora imati najmanje 8 karaktera.",
              },
            })}
          />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
          <img
            className="pass-visibility"
            src={eyeIcon}
            onClick={showPasswordHandler}
            alt="udomi ljubimca"
          />
        </Col>
        <Col sm={12} md={6} className="password-input">
          <label>
            Potvrdi lozinku<span className="asterix">*</span>
          </label>
          <input
            className="w-100"
            type={showConfirmPassword ? "text" : "password"}
            {...register("password_repeat", {
              validate: (value) =>
                value === password.current ||
                "Lozinka nije ista kao prethodna.",
            })}
          />
          <img
            className="pass-visibility"
            src={eyeIcon}
            onClick={showPasswordConfirmHandler}
            alt="udomi ljubimca"
          />
        </Col>
        {errors.password_repeat && (
          <p className="form-error">{errors.password_repeat.message}</p>
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
          <p className="divider-text">
            <span>ili putem</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" className="custom-btn btn-square d-block">
            facebook
          </a>
        </Col>
        <Col>
          <a href="#" className="custom-btn btn-square d-block">
            Google
          </a>
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

export default RegisterUserForm;
