import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  padding-top: 1rem;
  gap: 2rem;
  .sidebar {
    width: 5%;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 10px;
    .heading {
      padding: 1rem;
    }
    .icons {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 2rem;
      align-items: center;
    }
  }

  .navbar {
    width: 95%;
    .sub {
      display: flex;
      flex-direction: row;
      gap: 7rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    display: flex;
    margin-left: -3rem;
    .sidebar {
      visibility: hidden;
    }
    .navbar {
      .sub {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;

export const IconStyled = styled.div``;
