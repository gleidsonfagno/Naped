import styled from "styled-components";

export const Content = styled.div`
    max-width: 448px;
    margin: 145px auto ;
    text-align: center;
    padding: 0 16px;

    h2 {
        font-size: 24px;
        font-weight: 400;
        color: ${props => props.theme.BUTTOM};
        text-transform: uppercase;
        margin-bottom: 32px;
    }

    > h3 {
        font-size: 48px;
        font-weight: 400;
        margin-bottom: 70px;
    }

    > a {
        color: ${props => props.theme.BUTTOM};
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;

    > :last-child {
        margin-top: 18px;
    }
`
