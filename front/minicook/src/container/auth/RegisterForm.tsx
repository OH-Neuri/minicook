import React, { useEffect, useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { formType } from "./type";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AxiosError } from "axios";

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
  });
  const handleButton = () => setRegisterSuccess(false);
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
    // 이메일 형식이 올바르지 않을 때,
    const EAMAIL_PATTERN = /^[a-zA-Z0-9\.]+@[a-z0-9\.\-\_]+.co/;
    if (EAMAIL_PATTERN.test(form.email) === false) {
      alert(`이메일 형식이 올바르지 않습니다.`);
      return;
    }
    // 비밀번호 형식이 올바르지 않을 떄,
    const PASSWORD_PATTERN = /^[a-zA-Z\!\@\~]/;
    if (PASSWORD_PATTERN.test(form.email) === false) {
      alert(`비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.`);
      return;
    }
    if (form.password !== form.passwordConfirm) {
      alert(`비밀번호가 일치하지 않습니다.`);
    }
    // 회원가입 api 요청
    if (
      form.email === "js@asd.co" &&
      form.password === "1234" &&
      form.passwordConfirm === "1234"
    ) {
      setAuth(true);
      setRegisterSuccess(true);
      //setAuthError(null);
    } else {
      // 아이디가 중복일 때
      // setError('이미 사용 중인 이메일입니다.')
      //setAuthError(실패결과);
    }
    // 로그인 성공 setAuth(true)
    // 로그인 실패 setError(true)
    // 유효성 실패
    // alert()
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    setForm({ email: "", password: "", passwordConfirm: "" });
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
      alert("회원가입 성공");
      // 로그인 확인 -> 성공하면 로컬스토리지 저장
      console.log(auth);
    }
  }, [auth, authError]);

  //useEffect(() => {
  //  로컬스토리지에 값이 있으면,
  //    navigate("/");
  //    try {
  //      localStorage.setItem("user", JSON.stringify(user));
  //    } catch (e) {
  //      console.log("로컬스토리지가 작동을 안하고있어요.");
  //    }
  //  }
  //}, []);

  return (
    <RegisterFormWrapper>
      {registerSuccess ? (
        <div className='success-wrapper'>
          <div>🎉환영합니다!🎉</div>
          <div>회원가입이 완료되었습니다.</div>
          <div>로그인하여 서비스를 이용해보세요.</div>
          <StyledLink to={"/login"} onClick={handleButton}>
            로그인
          </StyledLink>
        </div>
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
.success-wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    font-size: medium;
    font-weight: 600;
  }
}`;
const StyledLink = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center
;
    width: 100%;
    margin-top: 2rem;
    background-color: #476801;
    border-radius: 5px;
    color:white;
    height: 3rem;
    &:hover{
        background-color: #365000;
    }
`;
export default RegisterForm;
