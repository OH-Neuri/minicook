import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import styled from "styled-components";
import { formType } from "../type";
import AuthForm from "../../../components/auth/authForm/indetx";
import SuccessRegist from "../../../components/auth/registSuccess";
//import register from "../../../api/auth/register";

interface RegisterFormProps {
  type: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<boolean>(false); // 회원가입 성공 여부
  const [authError, setAuthError] = useState<AxiosError | null>(null); // 회원가입 실패 여부
  const [error, setError] = useState<string>(""); // 회원가입 실패 메시지
  const [form, setForm] = useState<formType>({
    // 사용자 회원가입 정보
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });

  const handleButton = () => setAuth(false);

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 유효성 검사
  const handleSubmit = useCallback(async () => {
    // 이메일 혹은 비밀번호를 입력하지 않았을 떄,
    if (form.email === "") {
      alert(`이메일을 입력해 주세요.`);
      return;
    }
    if (form.password === "") {
      alert(`비밀번호를 입력해 주세요.`);
      return;
    }
    // 이메일 형식이 올바르지 않을 때,
    const EAMAIL_PATTERN = /^[a-zA-Z0-9\.]+@[a-z0-9\.\-\_]+.co/;
    if (EAMAIL_PATTERN.test(form.email) === false) {
      alert(`이메일 형식이 올바르지 않습니다.`);
      return;
    }
    // 비밀번호 형식이 올바르지 않을 떄,
    const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\!\@\-\~]).+$/;
    if (PASSWORD_PATTERN.test(form.password) === false) {
      alert(`비밀번호는 영문, 숫자, 특수문자(!,@,-,~)를 모두 포함해야 합니다.`);
      return;
    }
    if (form.password !== form.passwordConfirm) {
      alert(`비밀번호가 일치하지 않습니다.`);
      return;
    }

    // 회원가입
    try {
      //const data = await register({ email: form.email, password: form.password });
      setAuth(true);
      setAuthError(null);
    } catch (error: any) {
      setAuthError(error.message);
    }
  }, [form]);
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
  }, [authError]);

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    setForm({ email: "", password: "", passwordConfirm: "", nickname: "" });
  }, []);

  return (
    <RegisterFormWrapper>
      {auth ? (
        <SuccessRegist onRegist={handleButton} />
      ) : (
        <AuthForm
          form={form}
          type={type}
          error={error}
          onChangeInput={handleChange}
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
`;

export default RegisterForm;
