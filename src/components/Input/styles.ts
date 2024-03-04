import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.BORDA}; 
    margin: 0 auto;
    border-radius: 4px;
    > input {
        width: 100%;
        padding: 24px  16px;
        background-color: ${props => props.theme.DARCK_90};

        color: ${props => props.theme.WHITE};
        background: transparent;
        border: 0;

        &:placeholder{
            color: ${props => props.theme.WHITE};
            font-size: 18px;
        }

    }

    > svg {
        margin-left:  16px;
        color: ${props => props.theme.BUTTOM};
    }
`