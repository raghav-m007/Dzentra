import React from "react";
import { AppStyled } from "./components/AppStyled";
import Main from "./components/Main";

const App = () => {
  return (
    <AppStyled className="main">
      <Main />
    </AppStyled>
  );
};

export default App;
