import React from "react";
import { AuthTemplate } from "../../components/auth/AuthTemplate";
import LoginFrom from "../../container/auth/LoginFrom";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginFrom type='login' />
    </AuthTemplate>
  );
};

export default LoginPage;
