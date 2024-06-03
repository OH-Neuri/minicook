import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./style";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { tempSetUser } from "./store/reducers/userAccess";

function loadUser() {
  try {
    // 로컬스토리지에 유저 정보가 있으면
    const email = localStorage.getItem("email");
    if (!email) return;
    // user 다시 dispatch 하기
    store.dispatch(tempSetUser(JSON.parse(email)));
  } catch (e) {
    console.log("localStroage is not working");
  }
}

loadUser();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
