import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid ${props => props.theme.BORDA};
    /* border-bottom-style: solid; */
    
`
export const Cabecalho = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    max-width: 1168px;
    margin: 0 auto; 
`

export const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    > strong {
        color: ${props => props.theme.BUTTOM};
    }
    > img {
        display: block;
        width: 40px;
        height: 45px;
    }
`

export const Nav = styled.nav<{ isActive?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 79px;
    > ul {
        display: flex;
        flex-direction: row;
        gap: 57px;
        
        li{
            list-style-type: none;
            
            a {
                color: ${props => props.theme.WHITE};
                &:hover{
                    color: ${props => props.theme.BUTTOM};
                }
            }
        }
    }
        
    @media screen and (max-width: 835px) {
            display: none;
    }

`

export const MenuBar = styled.button`
    display: none;
    @media screen and (max-width: 835px) {
        display: block;
  }
`