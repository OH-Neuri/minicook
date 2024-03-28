import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import styled from "styled-components";
import { formType } from "../type";
import AuthForm from "../../../components/auth/authForm/indetx";
import SuccessRegist from "../../../components/auth/registSuccess";

interface RegisterFormProps {
  type: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);
  const [auth, setAuth] = useState<boolean>(false);
  const [authError, setAuthError] = useState<AxiosError | null>(null);
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState<formType>({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });
  
  const handleButton = () => setRegisterSuccess(false);
  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // 유효성 검사
    // 이메일 혹은 비밀번호를 입력하지 않았을 떄,
    if (form.email === "" || form.password === "") {
      setError(`이메일 혹은 비밀번호가 입력되지 않았습니다.`);
    }
    // 이메일 형식이 올바르지 않을 때,
    const EAMAIL_PATTERN = /^[a-zA-Z0-9\.]+@[a-z0-9\.\-\_]+.co/;
    if (EAMAIL_PATTERN.test(form.email) === false) {
      setError(`이메일 형식이 올바르지 않습니다.`);
      return;
    }
    // 비밀번호 형식이 올바르지 않을 떄,
    const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\!\@\-\~]).+$/;
    if (PASSWORD_PATTERN.test(form.password) === false) {
      setError(`비밀번호는 영문, 숫자, 특수문자(!,@,-,~)를 모두 포함해야 합니다.`);
      return;
    }
    if (form.password !== form.passwordConfirm) {
      setError(`비밀번호가 일치하지 않습니다.`);
      return;
    }
    // 회원가입 api 요청
    if (
      form.email === "js@asd.co" &&
      form.password === "qq11!" &&
      form.passwordConfirm === "qq11!"
    ) {
      setAuth(true);
      setRegisterSuccess(true);
      //setAuthError(null);
    } else {
      //setAuthError(실패결과);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    setForm({ email: "", password: "", passwordConfirm: "", name: "" });
  }, []);

  // 로그인 성공/실패 처리
  useEffect(() => {
    if (authError) {
      if (authError.response?.status === 409) {
        setError("이미 존재하는 계정명입니다.");
        return;
      }
      // 기타 이유
      setError("회원가입 실패");
      return;
    }
    if (auth) {
      // 로그인 확인 -> 성공하면 로컬스토리지 저장
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <RegisterFormWrapper>
      {registerSuccess ? (
        <SuccessRegist onRegist={handleButton} />
      ) : (
        <AuthForm
          form={form}
          type={type}
          auth={auth}
          error={error}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </RegisterFormWrapper>
  );
};

const RegisterFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default RegisterForm;
