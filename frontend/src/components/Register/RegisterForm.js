import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./registerForm.css";

const RegisterForm = ({ children, title, img }) => {
  return (
    <Container className="register-wrap">
      <Row>
        <Col className="p-0 form-image-wrap" md={4}>
          <img className="register__img" src={img} alt="Udomi ljubimca"></img>
        </Col>
        <Col
          md={8}
          className="form-content d-flex justify-content-center align-items-center"
        >
          <div>
            <div className="text-center mb-5 form-title">
              <h2 className="title-underline">{title}</h2>
            </div>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
