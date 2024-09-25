import styled from "styled-components";

export const Content  = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 384px;
    width: 100%;
    border: 1px solid ${props => props.theme.BORDA};
    border-radius: 4px;
    > img {
        object-fit: cover;
        border-radius: 4px 4px 0 0;
        display: block;
        width: 100%;
        max-height: 220px;
    }
    > div {
        padding: 24px 17px;
        span {
            text-transform: uppercase;
            display: block;
            color: ${props => props.theme.BUTTOM};
            margin-bottom: 24px;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 8px;
            line-height: 140%;
        }

        p {
            font-size: 18px;
            font-weight: 300;
            color: ${props => props.theme.DARCK_20};
            margin-bottom: 16px;
        }

        a {
            color: ${props => props.theme.BUTTOM};
            font-size: 18px;
            line-height: 140%;
        }
    }

    @media (max-width: 1000px) {
        max-width: 100%;
        width: 100%;
    }
`