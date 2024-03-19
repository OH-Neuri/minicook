import React from "react";
import Header from "../../components/header";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { tempSetUser } from "../../store/reducers/user";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(tempSetUser(null));
    navigate("/");
  };
  return (
    <HeaderContainerWrapper>
      <Header user={user} onLogout={handleLogout} />
      <NavBar />
    </HeaderContainerWrapper>
  );
};
const HeaderContainerWrapper = styled.div`
width:100%;
`;

export default HeaderContainer;
