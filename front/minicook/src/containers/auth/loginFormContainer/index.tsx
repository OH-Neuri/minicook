import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { formType } from "../type";
import { RootState } from "../../../store/store";
import { setEmail, tempSetUser } from "../../../store/reducers/user";
import AuthForm from "../../../components/auth/authForm/indetx";
import { authClient } from "../../../api";

interface LoginFromProps {
  type: string;
}

const LoginFromContainer: React.FC<LoginFromProps> = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [auth, setAuth] = useState<boolean>(false);
  const [authError, setAuthError] = useState<boolean>(false);
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

  // 유효성 검사
  const handleSubmit = useCallback(() => {
    alert(`이메일: ${form.email}, 비밀번호: ${form.password}`);
    if (form.email === "") {
      alert(`이메일을 입력해 주세요.`);
      return;
    }
    if (form.password === "") {
      alert(`비밀번호를 입력해 주세요.`);
      return;
    }
    // 로그인 api

    //if (form.email === "js@asd.co" && form.password === "qq11!") {
    //  setAuth(true);
    //} else {
    //  // 로그인 성공 setAuth(true)
    //  alert("로그인 실패 ~~");
    //}
    // 로그인 실패 setAuthError(실패결과)
  }, [form]);

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    setForm({ email: "", password: "", passwordConfirm: "", nickname: "" });
  }, []);

  // 로그인 성공/실패 처리
  useEffect(() => {
    if (authError) {
      //if (authError.response?.status === 409) {
      //  setError("이미 존재하는 계정명입니다.");
      //  return;
      //}
      // 기타이유
      setError("로그인 실패");
      return;
    }
    if (auth) {
      alert("로그인 성공");
      dispatch(tempSetUser(true));
      dispatch(setEmail(form.email));
    }
  }, [auth, authError]);

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        navigate("/");
      } catch (e) {
        console.log("로컬스토리지가 작동을 안하고있어요.");
      }
    }
    // user 정보 dispatch 저장되면, 로컬스토리지에 저장
  }, [user]);

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

export default LoginFromContainer;
