import styled from "styled-components";

export const Content = styled.footer`
    background-color: ${props => props.theme.DARCK_90};
    /* height: 100px; */
    padding: 50px 0;
    
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1128px;
        padding: 0 1rem;
        margin: 0 auto;
        
        > span {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
        }
    }
    
    @media screen and (max-width: 728px) {
        text-align: center;
        > div {
            flex-direction: column;
            justify-content: center;
            gap: 20px;
        }
    }
`