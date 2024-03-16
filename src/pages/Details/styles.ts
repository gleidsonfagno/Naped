import styled from "styled-components";

export const DetailsContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 16px;
    > span {
        margin-top: 140px;
        margin-bottom: 16px;
        font-size: 1.125rem;
        text-transform: uppercase;
        font-weight: 300;
        text-align: center;
        color: ${props => props.theme.BUTTOM};
        line-height: 140%;
    }
    
    > h2 {
        font-size: 2.5rem;
        line-height: 140%;
        font-weight: 400;
        text-align: center;
        margin-bottom: 24px;
    }

    > p {
        font-size: 1.5rem;
        line-height: 140%;
        font-weight: 100;
        text-align: center;
        color: ${props => props.theme.DARCK_20};
    }
    
    > div {
        margin: 56px 0;
        img {
            display: block;
            width: 100%;
            object-fit: cover;
            height: 400px;
        }
    }
`

export const Destaque = styled.section`
    max-width: 1168px;
    margin: 0 auto;
    padding: 16px;
    margin-top: 80px;
    margin-bottom: 47px;
`