import styled from "styled-components"

export const Content = styled.main`
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 16px;
`

export const Cabecalho = styled.section`
    margin-top: 140px;
    text-align: center;
    margin-bottom: 81px;
    > h1 {
        font-size: 3.5rem;
        margin-bottom: 32px;
        line-height: 120%;
        font-weight: 400;
    }

    > p {
        color: ${props => props.theme.DARCK_20};
        font-size: 2rem;
        font-weight: 300;
        line-height: 160%;
    }
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 0px auto 5rem;

    > div:nth-child(1) {
    grid-row: 1 / 3;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 1fr; /* Exibição em coluna */
        grid-auto-rows: auto; /* Altura automática para cada linha */
    }
`
export const SectionCard = styled.section`
    margin: 90px 0;

    > h2 {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 47px;
    }
    > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 32px;
    }

    @media (max-width: 1000px) {
        > div {
            grid-template-columns: 1fr; 
            grid-auto-rows: auto; 
            width: 100%;
        }
    }
`
export const Sectionlanc = styled.section`
  > h2 {
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 48px;
  }
`;

export const Container = styled.section`
  display: flex;
  gap: 24px;
  margin-bottom: 140px;

  > div {
    max-width: 592px;

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


export const Loadings = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
text-align: center;
`