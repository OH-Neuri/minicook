import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { RootState } from "../../../store/store";
import { tempSetUser } from "../../../store/reducers/userAccess";
import { setResetRemoveIndex } from "../../../store/reducers/userLiked";
import Header from "../../../components/header";
import NavBar from "../../../components/navBar";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userAccess.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(tempSetUser(null));
    navigate("/");
    dispatch(setResetRemoveIndex());
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
