import { Icon } from "@iconify/react";
import styled from "styled-components";

export const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  margin-right: 1rem;

  .menus {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    &:first-of-type {
      background-color: #0183ff;
    }
  }
  .select {
    padding: 0.5rem;
    border-radius: 10px;
    background-color: #ffffff;
    color: #0183ff;
    border: none;
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    justify-content: space-between;
    width: 85vw;
    margin-left: -1rem;
    .toggle {
      display: block;
      z-index: 12;
    }
  }
`;

export const IconStyled = styled(Icon)`
  color: ${(props) => props.color};
`;
