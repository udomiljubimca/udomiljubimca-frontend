import React from "react";

// Assets
import registerBg from "../assets/register-org.png";

// components
import FormPageWrap from "../components/FormPageWrap/FormPageWrap";
import RegisterOrgForm from "../components/RegisterUser/RegisterOrgForm";

const RegisterUserPage = () => {
  return (
    <FormPageWrap title="REGISTRUJ SE" img={registerBg}>
      <RegisterOrgForm />
    </FormPageWrap>
  );
};

export default RegisterUserPage;
