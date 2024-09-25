import styled from "styled-components";

export const Button = styled.button`
    background: ${props => `linear-gradient(${props.theme.LINEAR})`};
    padding: 14px 32px;
    border-radius: 4px;
    border: 0;
    color: ${props => props.theme.WHITE};
    font-size: 18px;
`