import styled from "styled-components";

export const OverviewStyled = styled.div`
  .overview-con {
    width: 120%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 12px;
    font-family: "Montserrat", sans-serif;

    .chart {
      width: 80%;
      height: 100%;
      margin-bottom: 2rem;
    }
    .header {
      margin-left: -12rem;
      font-size: 1.8rem;
      font-weight: 500;
      color: #818386;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .overview-con {
      margin-left: -1rem;
      width: 85vw;
      .header {
        margin-left: -10rem;
        font-size: 1.2rem;
      }
    }
  }
`;
