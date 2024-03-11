import React from "react";
import Header from "../../components/common/header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { tempSetUser } from "../../store/reducers/user";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(tempSetUser(null));
  };
  return <Header user={user} onLogout={handleLogout}></Header>;
};

export default HeaderContainer;
