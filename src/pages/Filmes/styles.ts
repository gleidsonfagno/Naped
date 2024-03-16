import styled from "styled-components";

import logoImg from '/assets/06.png';


export const Main = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    margin-top: 170px;
    padding: 0 16px;

`
export const Baner = styled.div`
    background-image: url(${logoImg});
    width: 100%;
    background-size: cover;
    padding: 83px 40px 74px;
    border-radius: 4px;
    margin-bottom: 40px;

    > div:nth-child(1) {
        max-width: 492px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        h2{
            font-size: 48px;
            font-weight: 400;
            line-height: 55px;
        }

        p {
            font-size: 20px;
            font-weight: 300;

        }
    }
`