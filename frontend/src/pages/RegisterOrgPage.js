import React from "react";

// Assets
import registerBg from "../assets/register-org.png";

// components
import RegisterForm from "../components/Register/RegisterForm";
import RegisterOrgForm from "../components/RegisterUser/RegisterOrgForm";

const RegisterUserPage = () => {
  return (
    <RegisterForm title="REGISTRUJ SE" img={registerBg}>
      <RegisterOrgForm />
    </RegisterForm>
  );
};

export default RegisterUserPage;
