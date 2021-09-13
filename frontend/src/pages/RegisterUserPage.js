import React from "react";

// Assets
import registerBg from "../assets/register-user.png";

// components
import RegisterForm from "../components/Register/RegisterForm";
import RegisterUserForm from "../components/RegisterUser/RegisterUserForm";

const RegisterUserPage = () => {
  return (
    <RegisterForm title="REGISTRUJ SE" img={registerBg}>
      <RegisterUserForm />
    </RegisterForm>
  );
};

export default RegisterUserPage;
