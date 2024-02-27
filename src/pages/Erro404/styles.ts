import styled from "styled-components";

export const Section = styled.section`
    max-width: 1128px;
    margin: auto ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 16px;
    height: 100vh;
    max-height: 1000px;
    @media screen and (max-width: 835px) {
            justify-content: center;
            text-align: center;
            margin-top: 100px;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-bottom: 16px;
    > h2{
        font-size: 48px;
        font-weight: 400;
        margin-bottom: 24px;
    }

    > p {
        font-size: 24px;
        color: ${props => props.theme.DARCK_20};
        font-weight: 400;
        margin-bottom: 48px;
    }

    @media screen and (max-width: 835px) {
            width: 100%;
    }
`

export const Right = styled.div`

    > img {
        display: block;
        width: 100%;
    }
    > p {
        max-width: 345px;
        text-align: center;
        margin: 40px auto 0; 
    }
`