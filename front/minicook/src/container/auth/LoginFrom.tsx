import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AuthForm from "../../components/auth/AuthForm";
import { formType } from "./type";
import { useNavigate } from "react-router-dom";

interface LoginFromProps {
  type: string;
}

const LoginFrom: React.FC<LoginFromProps> = ({ type }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<boolean>(false);
  const [authError, setAuthError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState<formType>({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // 유효성 검사
    // 이메일 혹은 비밀번호를 입력하지 않았을 떄,
    if (form.email === "" || form.password === "") {
      alert(`이메일 혹은 비밀번호가 입력되지 않았습니다.`);
      return;
    }
    // 로그인 api
    // 로그인 성공 setAuth(true)
    // 로그인 실패 setError(true)
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    setForm({ email: "", password: "", passwordConfirm: "" });
  }, []);

  // 로그인 성공/실패 처리
  useEffect(() => {
    if (authError) {
      setError("로그인 실패");
      return;
    }
    if (auth) {
      alert("로그인 성공");
      // 로그인 체크하기 -> 성공하면 로컬스토리지 저장
    }
  }, [auth, authError]);

  //useEffect(() => {
  //  로컬스토리지에 user 있으면
  //    navigate("/");
  //    try {
  //      localStorage.setItem("user", JSON.stringify(user));
  //    } catch (e) {
  //      console.log("로컬스토리지가 작동을 안하고있어요.");
  //    }
  //  }
  //}, []);

  return (
    <AuthForm
      form={form}
      type={type}
      auth={auth}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginFrom;
