import styled from "styled-components"

export const Content = styled.div`
    max-width: 1128px;
    margin: 0 auto;
    padding: 0 16px;
`

export const Header = styled.div`
    margin-top: 140px;
    text-align: center;
    margin-bottom: 81px;
    > h1 {
        font-size: 3.5rem;
        margin-bottom: 32px;
        line-height: 120%;
    }

    > p {
        color: ${props => props.theme.DARCK_20};
        font-size: 32px;
        font-weight: 300;
        line-height: 160%;
    }
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 0px auto;
    
    > div:nth-child(1) {
    grid-row: 1 / 3;
    }

    @media (max-width: 1000px) {
        grid-template-columns: 1fr; /* Exibição em coluna */
        grid-auto-rows: auto; /* Altura automática para cada linha */
    }
`
