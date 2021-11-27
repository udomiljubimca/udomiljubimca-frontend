import React from "react";

// Components
import { Col, Row } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";

const LoginSocial = () => {
  const FB_APP_ID = 1088597931155576;
  const GOGLE_CLIENT_ID =
    "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com";

  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Row>
      <Col sm={12} md={6} className="mb-sm-3">
        <FacebookLogin
          appId={FB_APP_ID}
          callback={responseFacebook}
          render={(renderProps) => (
            <a
              href="#/"
              className="custom-btn btn-square d-block w-100"
              onClick={renderProps.onClick}
            >
              Facebook
            </a>
          )}
        />
      </Col>
      <Col sm={12} md={6}>
        <GoogleLogin
          clientId={GOGLE_CLIENT_ID}
          render={(renderProps) => (
            <a
              href="#/"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="custom-btn btn-square d-block w-100"
            >
              Google
            </a>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Col>
    </Row>
  );
};

export default LoginSocial;
