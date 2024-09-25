
import styled from "styled-components";

export const Main = styled.div`
  max-width: 1168px;
  margin: 0 auto;
  padding: 0 16px;

`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.BORDA};
  margin: 0 auto;
  border-radius: 4px;
  margin-bottom: 82px;
  .search {
    width: 100%;
    padding: 24px 16px;
    background-color: ${(props) => props.theme.DARCK_90};

    color: ${(props) => props.theme.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${(props) => props.theme.WHITE};
      font-size: 18px;
    }
  }

  > svg {
        margin-left:  16px;
        color: ${(props) => props.theme.BUTTOM};
    }
`;

export const Content = styled.div`
  article {
    margin: 170px 0 40px;

    width: 100%;
    max-height: 100%;
    height: 350px;
    border-radius: 4px;
    position: relative;

    > img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    .gradient {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(6, 9, 15, 0.4) 53.65%,
        #06090f 100%
      );
    }

    > div {
      position: absolute;
      bottom: 0px;
      left: 0px;
      padding: 25px;
      

      > h2 {
        color: ${(props) => props.theme.WHITE};
        padding-bottom:  24px ;
        font-family: 'Rubik', sans-serif;
        font-size: 3rem;
        font-weight: 400;
        line-height: 55px;
        text-align: left;

      }

      > p {
        color: ${(props) => props.theme.DARCK_20};
        padding-bottom: 4.625rem;
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
        max-width: 500px;

      }
    }
  }

  @media (max-width: 1000px) {
    > a {
      > article {
        height: 400px;
      }
    }
  }

  @media (max-width: 728px) {
    > a {
      > article {
        height: 500px;
        div {
          > h2 {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;


export const Render = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-bottom: 110px;

    @media (max-width: 1000px) {
         
            grid-template-columns: 1fr; 
            grid-auto-rows: auto; 
            width: 100%;
        
    }
`;