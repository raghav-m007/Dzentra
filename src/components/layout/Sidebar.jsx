import { Icon } from "@iconify/react";
import React from "react";
import { IconStyled } from "../css/MainStyled";

const Sidebar = () => {
  const data = [
    {
      icon: "fluent:home-16-regular",
      title: "Dashboard",
    },
    {
      icon: "el:tag",
      color: "#e94045",
      title: "Pos",
    },
    {
      icon: "subway:basket",
      color: "#51b15a",
      title: "Orders",
    },
    {
      icon: "ant-design:bars-outlined",
      color: "#e4c553",
      title: "Order Status Screen",
    },
    {
      icon: "ic:sharp-library-books",
      color: "#ee4d6a",
      title: "Expense",
    },
    {
      icon: "bxs:user",
      color: "#ba2c9b",
      title: "Customers",
    },
    {
      icon: "el:tag",
      color: "#246ABB",
      title: "Services",
    },
    {
      icon: "entypo:bar-graph",
      color: "#e4c553",
      title: "Reports",
    },
    {
      icon: "ep:tools",
      color: "#e9ae56",
      title: "Tools",
    },
    {
      icon: "uiw:poweroff",
      color: "gray",
      title: "Logout",
    },
  ];
  return (
    <div className="sidebar-con">
      <div className="heading">
        <Icon icon="entypo:image" hFlip={true} width="30" height="30" />
      </div>
      <IconStyled className="icons">
        {data.map((item) => {
          return (
            <Icon icon={item.icon} color={item.color} width="20" height="20" />
          );
        })}
      </IconStyled>
    </div>
  );
};

export default Sidebar;
