import React from "react";
import AuthTemplate from "../../components/auth/authTemplate";
import RegisterForm from "../../containers/auth/registerFormContainer";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm type='register' />
    </AuthTemplate>
  );
};

export default RegisterPage;
