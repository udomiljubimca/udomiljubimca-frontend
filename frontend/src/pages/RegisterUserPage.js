import React from "react";

// Assets
import registerBg from "../assets/register-user.png";

// components
import FormPageWrap from "../components/FormPageWrap/FormPageWrap";
import RegisterUserForm from "../components/RegisterUser/RegisterUserForm";

const RegisterUserPage = () => {
  return (
    <FormPageWrap title="REGISTRUJ SE" img={registerBg}>
      <RegisterUserForm />
    </FormPageWrap>
  );
};

export default RegisterUserPage;
