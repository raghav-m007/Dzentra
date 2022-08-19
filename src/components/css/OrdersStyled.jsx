import styled from "styled-components";
import { Icon } from "@iconify/react";

export const OrdersStyled = styled.div`
  .cards-con {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    margin-right: 1rem;
    gap: 2rem;
    font-family: "Montserrat", sans-serif;

    .card {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 2.5rem;
      padding: 0.5rem 2rem;
      background-color: #ffffff;
      border-radius: 10px;
      .details {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .title {
          font-weight: 500;
          color: #818386;
        }
        .quantity {
          font-weight: 700;
          color: #818386;
          font-size: 1.5rem;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .cards-con {
      flex-direction: column;
      .card {
        margin-left: -1rem;
        justify-content: space-between;
      }
    }
  }
`;
export const IconStyled = styled(Icon)`
  color: white;
`;
export const DivStyled = styled.div`
  display: flex;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
`;
