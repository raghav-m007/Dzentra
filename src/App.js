import React from "react";
import { AppStyled } from "./components/css/AppStyled";
import Main from "./components/layout/Main";

const App = () => {
  return (
    <AppStyled className="main">
      <Main />
    </AppStyled>
  );
};

export default App;
