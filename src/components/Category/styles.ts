import styled from "styled-components";

export const Button = styled.button`
    padding: 4px 16px;
    text-transform: uppercase;
    font-size: 1.125rem !important;

    background: ${props => `linear-gradient(${props.theme.LINEAR})`};

    border-radius: 4px;
    border: 0;
    color: ${props => props.theme.WHITE};
`