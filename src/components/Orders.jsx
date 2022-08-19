import React from "react";
import { DivStyled, IconStyled, OrdersStyled } from "./OrdersStyled";

const Orders = () => {
  const data = [
    {
      title: "PENDING ORDER",
      quantity: 202,
      icon: "fa6-solid:basket-shopping",
      bgcolor: "#8194a7",
    },
    {
      title: "PROCESSING ORDER",
      quantity: 99,
      icon: "akar-icons:react-fill",
      bgcolor: "#f9ac3e",
    },
    {
      title: "READY TO DELIVER",
      quantity: 236,
      icon: "bxs:like",
      bgcolor: "#2bcf8c",
    },
    {
      title: "DELIVERED ORDERS",
      quantity: 345,
      icon: "charm:tick",
      bgcolor: "#0782fd",
    },
  ];
  return (
    <OrdersStyled>
      <div className="cards-con">
        {data.map((item) => {
          return (
            <div className="card">
              <div className="details">
                <p className="title">{item.title}</p>
                <p className="quantity">{item.quantity}</p>
              </div>
              <DivStyled className="icon" bg={item.bgcolor}>
                <IconStyled icon={item.icon} width={30} />
              </DivStyled>
            </div>
          );
        })}
      </div>
    </OrdersStyled>
  );
};

export default Orders;
