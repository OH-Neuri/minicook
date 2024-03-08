import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import RecipeDetailPage from "../pages/recipe/detail";
import RecipeSelect from "../pages/recipe/select";
import MyPage from "../pages/mypage";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/recipe/:id?' element={<RecipeDetailPage />} />
        <Route path='/recipe/select/:id?' element={<RecipeSelect />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default Routers;
