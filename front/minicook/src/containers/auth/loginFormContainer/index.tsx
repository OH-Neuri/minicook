import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { formType } from "../type";
import { RootState } from "../../../store/store";
import { tempSetUser } from "../../../store/reducers/userAccess";
import AuthForm from "../../../components/auth/authForm/indetx";
import login from "../../../api/auth/login";
import { UserType } from "../../../type";
import axios, { AxiosError } from "axios";

interface LoginFromProps {
  type: string;
}

const LoginFormContainer: React.FC<LoginFromProps> = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userAccess = useSelector((state: RootState) => state.userAccess.user);
  const [auth, setAuth] = useState<boolean>(false);
  const [authError, setAuthError] = useState<AxiosError | null>(null);
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState<formType>({
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 유효성 검사 및 로그인
  const handleSubmit = useCallback(async () => {
    if (form.email === "") {
      alert(`이메일을 입력해 주세요.`);
      return;
    }
    if (form.password === "") {
      alert(`비밀번호를 입력해 주세요.`);
      return;
    }

    try {
      //await login({ email: form.email, password: form.password });
      if (form.email === "sky@naver.com" && form.password === "password1@") {
        setAuth(true);
        setAuthError(null);
      }
    } catch (error: any) {
      setAuthError(error);
    }
  }, [form]);

  // 로그인 성공/실패
  useEffect(() => {
    if (authError) {
      setError("로그인 실패");
      return;
    }
    if (auth) {
      dispatch(tempSetUser(true));
    }
  }, [auth, authError]);

  // 로그인 성공 처리
  useEffect(() => {
    if (userAccess) {
      try {
        localStorage.setItem("email", JSON.stringify(form.email));
        localStorage.setItem("nickname", JSON.stringify("테스트 계정"));
        //localStorage.setItem("nickname", JSON.stringify(form.nickname));

        navigate("/");
      } catch (e) {
        console.log("로컬스토리지가 작동을 안하고있어요.");
      }
    }
  }, [userAccess]);

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    setForm({ email: "", password: "", passwordConfirm: "", nickname: "" });
  }, []);

  return (
    <AuthForm
      form={form}
      type={type}
      error={error}
      onChangeInput={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginFormContainer;
