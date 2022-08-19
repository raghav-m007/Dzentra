import React from "react";
import { MainStyled } from "./MainStyled";
import Delivery from "./Delivery";
import Navbar from "./Navbar";
import Orders from "./Orders";
import Overview from "./Overview";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <MainStyled>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="navbar">
        <Navbar />
        <Orders />
        <div className="sub">
          <Delivery />
          <Overview />
        </div>
      </div>
    </MainStyled>
  );
};

export default Main;
