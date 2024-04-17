import React from "react";
import LoginFormContainer from "../../containers/auth/loginFormContainer";
import AuthTemplate from "../../components/auth/authTemplate";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginFormContainer type='login' />
    </AuthTemplate>
  );
};

export default LoginPage;
