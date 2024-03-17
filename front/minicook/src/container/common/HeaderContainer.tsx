import React from "react";
import Header from "../../components/common/header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { tempSetUser } from "../../store/reducers/user";
import { useNavigate } from "react-router-dom";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(tempSetUser(null));
    navigate("/");
  };
  return <Header user={user} onLogout={handleLogout}></Header>;
};

export default HeaderContainer;
