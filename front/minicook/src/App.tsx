import React from "react";

import "./App.css";
import Routers from "./routes";
import Footer from "./components/footer";
import HeaderContainer from "./containers/common/headerContainer";

function App() {
  return (
    <>
      <HeaderContainer />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
