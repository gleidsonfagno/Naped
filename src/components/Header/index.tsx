import logoImg from '/assets/Logo_naped.png';

import { ButtonText } from '../ButtonText';
import { Links } from '../Links';
import { Cabecalho, Container, Nav, Span, MenuBar} from './styles';



export function Header( ) {
    return (
        <Container>

            <Cabecalho>
                <Span>
                    <img src={logoImg} alt="logo naped" />
                    <strong>Naped</strong>
                </Span>

                <Nav>
                    <ul>
                        <li><Links isActive to="/">Inicio</Links></li>
                        <li><Links to="/series">Séries</Links></li>
                        <li><Links to="/filmes">Filmes</Links></li>
                        <li><Links to="/animes">Animes</Links></li>
                        <li><Links to="/jogos">Jogos</Links></li>
                    </ul>
                <ButtonText title="Minha conta" to="/register" />
                </Nav>


                <MenuBar>
                    abri
                </MenuBar>
            </Cabecalho>
        </Container>
    )
}