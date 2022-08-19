import React from "react";
import { Icon } from "@iconify/react";
import { DeliveryStyled, CardStyled, DivStyled } from "./DeliveryStyled";

const Delivery = () => {
  const data = [
    {
      name: "98659865",
      orderId: "ORD-0948",
      color: "#e2b265",
      bg: "#ebe7ef",
      icons: ["ri:shirt-line"],
    },
    {
      name: "ARIF",
      orderId: "ORD-0949",
      bg: "#ebe7ef",
      color: "#cb4b66",
      icons: ["ri:shirt-line", "ri:shirt-line"],
    },
    {
      name: "shiyas",
      orderId: "ORD-0950",
      bg: "#ebe7ef",
      color: "#84909d",
      icons: ["twemoji:billed-cap"],
    },
    {
      name: "Walk In Customer",
      orderId: "ORD-0951",
      bg: "#ebe7ef",
      color: "#8891a1",
      icons: ["noto:running-shoe", "twemoji:billed-cap"],
    },
  ];

  return (
    <DeliveryStyled>
      <div className="delivery-con">
        <div className="header">
          <div className="heading">
            <p>Today's Delivery</p>
          </div>
          <div className="search">
            <input placeholder="Search Here" />
            <select>
              <option>All Orders</option>
            </select>
          </div>
        </div>
        <div className="customer-con">
          {data.map((item) => {
            console.log(item.icons);
            return (
              <CardStyled className="card" color={item.color}>
                <div className="details">
                  <p>{item.name}</p>
                  <p>{item.orderId}</p>
                </div>
                <DivStyled className="icons">
                  {item.icons?.map((icon) => {
                    return (
                      <DivStyled bgcolor={item.bg}>
                        <Icon icon={icon} width={30} />
                      </DivStyled>
                    );
                  })}
                </DivStyled>
              </CardStyled>
            );
          })}
        </div>
      </div>
    </DeliveryStyled>
  );
};

export default Delivery;
