import styled from "styled-components";


interface menuProps {
    $menuOpen: boolean
}

export const Container = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.BORDA};
  /* border-bottom-style: solid; */
`;
export const Cabecalho = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  max-width: 1168px;
  margin: 0 auto;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  > strong {
    color: ${(props) => props.theme.BUTTOM};
  }
  > img {
    display: block;
    width: 40px;
    height: 45px;
  }
`;

export const Nav = styled.nav<menuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 79px;
  > ul {
    display: flex;
    flex-direction: row;
    gap: 57px;
    align-items: center;

    li {
      list-style-type: none;

      a {
        color: ${(props) => props.theme.WHITE};
        &:hover {
          color: ${(props) => props.theme.BUTTOM};
        }
      }
    }
  }

  @media screen and (max-width: 935px) {
    align-items: left;
    justify-content: left;
    flex-direction: column;
    overflow: hidden;
    ul {
        position: fixed;
    
      display: flex;
      flex-direction: column;
      top: 0;
      z-index: 3;
      left: ${(props) => (props.$menuOpen ? "0" : "-100%")}; /* Deslizar da esquerda */
  transition: left 0.3s ease; /* Para um efeito suave */
      bottom: 0;
      align-items: center;
      text-align: center;
      padding-top: 40px;
      width: 100%;
      height: 100%;

      background-color: ${(props) => props.theme.DARCK_80};
    }
  }
`;

export const MenuBar = styled.button`
  display: none;
  background: transparent;
  border: none;
  > svg {
    /* margin-left: 16px; */
    color: ${(props) => props.theme.WHITE};
  }
  @media screen and (max-width: 935px) {
    display: block;
  }
`;
