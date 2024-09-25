import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 140px;

  > div {
    max-width: 592px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-size: 1.5rem;
      font-weight: 300;
      margin-top: 24px;
      line-height: 140%;
      margin-bottom: 32px;
    }

    p {
      font-size: 18px;
      font-weight: 300;
      color: ${(props) => props.theme.DARCK_20};
      margin-bottom: 32px;
    }

    a {
      color: ${(props) => props.theme.BUTTOM};
      font-size: 18px;
      line-height: 140%;
      margin-top: 48px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    > div {
      max-width: 100%;
    }
  }
`;
