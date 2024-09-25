import styled from "styled-components";

export const Content = styled.div`
  > a {
    text-decoration: none !important;

    > article {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      position: relative;

      &:nth-child(1) {
        grid-row: 1 / 3;
      }
      > img {
        /* display: block; */
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
          font-size: 2rem;
          font-weight: 200;
          line-height: 140%;
          color: ${(props) => props.theme.WHITE};
          /* margin-top: 24px; */
        }

        > p {
          color: ${(props) => props.theme.DARCK_20};
          font-size: 24px;
        }
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
