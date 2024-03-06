import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
interface AuthFormProps {
  type: string;
}
const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const textMap: { [key: string]: string } = { login: "로그인", register: "회원가입" };
  const text = textMap[type];
  return (
    <AuthFormWrapper>
      <h3>{text}</h3>
      <form>
        <StyledInput autoComplete='username' name='username' placeholder='아이디' />
        <StyledInput
          autoComplete='new-password'
          name='password'
          placeholder='비밀번호'
          type='password'
        />
        {type === "register" && (
          <StyledInput
            autoComplete='new-password'
            name='passwordConfirm'
            placeholder='비밀번호 확인'
            type='password'
          />
        )}
        <button className='button'>{text}</button>
      </form>
      <div className='footer'>
        {type === "login" ? (
          <Link to='/register'>회원가입</Link>
        ) : (
          <Link to='/login'>로그인</Link>
        )}
      </div>
    </AuthFormWrapper>
  );
};

const AuthFormWrapper = styled.div`
h3{
    margin: 0;
    color: #4d4d4d;
    margin-bottom: 1rem;
    font-size: larger;
    font-weight: 600;
    
}

.button{
    width: 100%;
    margin-top: 2rem;
    background-color: #476801;
    border-radius: 5px;
    color:white;
    height: 3rem;
    &:hover{
        background-color: #365000;
    }
}

.footer{
    margin-top: 2rem;
    text-align:center;
    a{
        color:#9e9e9e;
        text-decoration: underline;
        &:hover{
            color:#525252;
        }
    }
}
`;

const StyledInput = styled.input`
font-size: 1rem;
border:none;
border-bottom: 1px solid #9e9e9e;
padding-bottom: 0.5rem;
outline:none;
width: 100%;
&:focus{
    color: $oc-teal-7;
    border-bottom: 1px solid #9e9e9e;
}
& + & {
    margin-top : 1rem;
}
`;

export default AuthForm;
