import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { IconStyled, NavbarStyled } from "./NavbarStyled";

const Navbar = (props) => {
  const data = [
    {
      icon: "clarity:plus-circle-solid",
      color: "#ffffff",
    },
    {
      icon: "el:tag",
      color: "#ffffff",
    },
    {
      color: "#ffffff",
      icon: "fa:user",
    },
  ];
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  return (
    <NavbarStyled>
      <div className="toggle">
        {navbarState ? (
          <Icon
            icon="eva:close-fill"
            width={30}
            onClick={() => setNavbarState(false)}
          />
        ) : (
          <Icon
            icon="eva:menu-fill"
            color="white"
            width={30}
            onClick={(e) => {
              e.stopPropagation();
              setNavbarState(true);
            }}
          />
        )}

      </div>
      <div className="menus">
        {data.map((item) => {
          return <IconStyled icon={item.icon} color={item.color} />;
        })}
        <select className="select">
          <option>English</option>
        </select>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
