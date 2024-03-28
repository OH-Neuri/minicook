import React from "react";
import LoginFromContainer from "../../containers/auth/loginFormContainer";
import AuthTemplate from "../../components/auth/authTemplate";


const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginFromContainer type='login' />
    </AuthTemplate>
  );
};

export default LoginPage;
