import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ErrorPage from "../pages/404error";
import RecipeSelectPage from "../pages/recipe/select";
import RecipeDetailPage from "../pages/recipe/detail";
import MyPage from "../pages/mypage";

const Routers = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/recipe/:id?' element={<RecipeDetailPage />} />
          <Route path='/recipe/select/:id?' element={<RecipeSelectPage />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </>
  );
};

export default Routers;
