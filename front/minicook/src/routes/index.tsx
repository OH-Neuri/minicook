import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import RecipeDetail from "../pages/recipe/detail";
import RecipeSelect from "../pages/recipe/select";
import MyPage from "../pages/mypage";
import Login from "../pages/login";
import Logout from "../pages/logout";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recipe/:id' element={<RecipeDetail />} />
        <Route path='/recipe/select' element={<RecipeSelect />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recipe/select' element={<Logout />} />
      </Routes>
    </>
  );
};

export default Routers;
