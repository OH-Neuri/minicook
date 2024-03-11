import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AuthForm from "../../components/auth/AuthForm";
import { formType } from "./type";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { tempSetUser } from "../../store/reducers/user";

interface LoginFromProps {
  type: string;
}

const LoginFrom: React.FC<LoginFromProps> = ({ type }) => {
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
    name: "",
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
    if (form.email === "js@asd.co" && form.password === "1234") {
      setAuth(true);
    } else {
      // 로그인 성공 setAuth(true)
    }
    // 로그인 실패 setAuthError(실패결과)
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    setForm({ email: "", password: "", passwordConfirm: "", name: "" });
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
      auth={auth}
      error={error}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginFrom;
