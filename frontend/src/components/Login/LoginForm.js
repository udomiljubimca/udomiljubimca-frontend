import React, { useState } from "react";

// Components
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LoginSocial from "./LoginSocial";

// Assets
import "./loginForm.css";
import eyeIcon from "../../assets/eye_icon.png";

const LoginForm = () => {
  const [loginPassword, setLoginPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const loginSubmitHandler = async (data) => {
    console.log(data);
  };

  const showLoginPasswordHandler = () => {
    setLoginPassword((prevState) => !prevState);
  };

  return (
    <Container className="login-wrap">
      <Row className="justify-content-center">
        <Col md={8} sm={12}>
          <div className="text-center mb-5 form-title">
            <h2 className="title-underline">PRIJAVI SE</h2>
          </div>
          <form onSubmit={handleSubmit(loginSubmitHandler)}>
            <Row>
              <Col sm={12} md={6}>
                <label>Email ili korisničko ime</label>
                <input
                  className="w-100"
                  type="email"
                  {...register("loginEmail", {
                    required: "Ovo polje je obavezno.",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Email adresa koju ste uneli nije validna.",
                    },
                  })}
                />
                {errors.loginEmail && (
                  <p className="form-error">{errors.loginEmail.message}</p>
                )}
              </Col>
              <Col sm={12} md={6} className="password-input">
                <label>Lozinka</label>
                <input
                  className="w-100"
                  type={loginPassword ? "password" : "text"}
                  {...register("loginPassword", {
                    required: "Lozinka mora imati najmanje 8 karaktera.",
                    minLength: {
                      value: 8,
                      message: "Lozinka mora imati najmanje 8 karaktera.",
                    },
                  })}
                />
                {errors.loginPassword && (
                  <p className="form-error">{errors.loginPassword.message}</p>
                )}
                <img
                  className="pass-visibility"
                  src={eyeIcon}
                  onClick={showLoginPasswordHandler}
                  alt="udomi ljubimca"
                />
                <Link to="/">Zaboravljena lozinka</Link>
              </Col>
              <Col md={12}>
                <input
                  className="custom-btn btn-primary w-100 mt-5 mb-4"
                  type="submit"
                  value="Prijavi se"
                />
              </Col>
              <Col className="mb-2" md={12}>
                <p className="divider-text">
                  <span>ili putem</span>
                </p>
              </Col>
              <Col>
                <LoginSocial />
              </Col>
              <Col md={12}>
                <p className="text-center mt-4 mb-4">
                  Nemate nalog? Registrujte se kao
                  <br />
                  <Link to="/registracija-korisnika">Korisnik</Link> ili{" "}
                  <Link to="/registracija-udruzenja">Udruženje</Link>
                </p>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
